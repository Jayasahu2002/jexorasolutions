param(
    [string]$Message = "Update JEXORA SOLUTIONS website"
)

Set-Location "J:\JEXORA SOLUTIONS"

# Sync latest dist/ to repo root (for GitHub Pages jexorasolutions.com) & public/
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force
Copy-Item -Path "dist\index.html" -Destination "404.html" -Force
Copy-Item -Path "dist\*" -Destination "public" -Recurse -Force

git add -A
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Output "No new changes to publish."
    exit 0
}

# Committing automatically triggers .git/hooks/post-commit to push fast-forward to origin/main
git commit -m $Message
Write-Output "Committed and auto-pushed to GitHub! jexorasolutions.com will update in ~30-60 seconds."
