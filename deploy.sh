#!/bin/bash

set -euo pipefail

# Ensure we're starting with a clean state
printf "Starting build process... \n"
npm run build
printf "Build completed. \n"


# Store the current branch name before any changes
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
printf "Current branch saved as $CURRENT_BRANCH. \n"


# Create a new orphan branch for deployment
TMP_BRANCH="temporary-$(date +%s)"
printf "Creating a new temporary branch: $TMP_BRANCH. \n"
git checkout --orphan "$TMP_BRANCH"

# Remove all files from the staging area to clean the working directory
printf "Cleaning working directory... \n"
git rm -rf .


# Check if the 'out' directory exists
if [ ! -d "out" ]; then
    printf "Error: 'out' directory not found. Exiting...\n"
    exit 1
fi


# Copy the necessary files from the 'out' directory to the root directory
printf "Copying files from out directory to the project root... \n"
cp -r out/. .


# Additionally, move the .htaccess file to the root of the temporary branch
if [ -f .htaccess ]; then
    printf "Moving .htaccess file... \n"
    git mv .htaccess .
else
    printf "Error: .htaccess file not found. Exiting...\n"
    exit 1
fi


printf "Updating .gitignore file... \n"

# Create .gitignore if it doesn't exist
touch .gitignore

# Array of entries to be added to .gitignore
gitignore_entries=(".next" "node_modules" "out")
for entry in "${gitignore_entries[@]}"; do
    if ! grep -q "^$entry$" .gitignore; then
        echo "$entry" >> .gitignore
    fi
done

# Add all files to staging area
printf "Staging changes...\n"
git add .

# Commit the changes
printf "Committing changes... \n"
git commit -m "Deploy contents of out"

# Push the temporary branch to the deploy-branch on origin with force
printf "Pushing changes to the deployment branch... \n"
git push origin "$TMP_BRANCH:deploy-branch" --force
printf "Changes pushed successfully."

# Clean up: Switch back to the main working branch and delete the temporary branch
printf "Switching back to the main branch $CURRENT_BRANCH and cleaning up... \n"
git checkout "$CURRENT_BRANCH"
git branch -D "$TMP_BRANCH"


# Optionally, clear the out directory after copying
printf "Removing the out directory... \n"
rm -rf .next _next out

printf "Cleanup complete. \n"
