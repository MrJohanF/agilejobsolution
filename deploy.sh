#!/bin/bash
# Ensure we're starting with a clean state

echo "Starting build process..."
npm run build
echo "Build completed."


# Store the current branch name before any changes
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
echo "Current branch saved as $CURRENT_BRANCH."


# Create a new orphan branch for deployment
TMP_BRANCH="temporary-$(date +%s)"
echo "Creating a new temporary branch: $TMP_BRANCH."
git checkout --orphan "$TMP_BRANCH"

# Remove all files from the staging area to clean the working directory
echo "Cleaning working directory..."
git rm -rf .

# Copy the necessary files from the 'out' directory to the root directory
echo "Copying files from out directory to the project root..."
cp -r out/. .


echo "Updating .gitignore file..."
# Create .gitignore if it doesn't exist and add .next and node_modules to it
if [ ! -f .gitignore ]; then
    echo ".next" > .gitignore
    echo "node_modules" >> .gitignore
fi

# Add all files to staging area
echo "Staging changes..."
git add .

# Commit the changes
echo "Committing changes..."
git commit -m "Deploy contents of out"

# Push the temporary branch to the deploy-branch on origin with force
echo "Pushing changes to the deployment branch..."
git push origin "$TMP_BRANCH:deploy-branch" --force
echo "Changes pushed successfully."

# Clean up: Switch back to the main working branch and delete the temporary branch
echo "Switching back to the main branch $CURRENT_BRANCH and cleaning up..."
git checkout "$CURRENT_BRANCH"
git branch -D "$TMP_BRANCH"


# Optionally, clear the out directory after copying
echo "Removing the out directory..."
rm -rf .next
rm -rf _next
rm -rf out

echo "Cleanup complete."
