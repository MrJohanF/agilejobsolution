#!/bin/bash
# Ensure we're starting with a clean state
npm run build

# Store the current branch name before any changes
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

# Create a new orphan branch for deployment
TMP_BRANCH="temporary-$(date +%s)"
git checkout --orphan "$TMP_BRANCH"

# Remove all files from the staging area to clean the working directory
git rm -rf .

# Copy the necessary files from the 'out' directory to the root directory
cp -r out/* .

# Create .gitignore if it doesn't exist and add .next and node_modules to it
if [ ! -f .gitignore ]; then
    echo ".next" > .gitignore
    echo "node_modules" >> .gitignore
fi

# Add all files to staging area
git add .

# Commit the changes
git commit -m "Deploy contents of out"

# Push the temporary branch to the deploy-branch on origin with force
git push origin "$TMP_BRANCH:deploy-branch" --force

# Clean up: Switch back to the main working branch and delete the temporary branch
git checkout "$CURRENT_BRANCH"
git branch -D "$TMP_BRANCH"
