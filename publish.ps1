param(
    [string]$Message = "Update JEXORA SOLUTIONS website"
)

Set-Location "J:\JEXORA SOLUTIONS"

# Keep root, dist, and public synced
Copy-Item -Path "index.html" -Destination "dist\index.html" -Force
Copy-Item -Path "index.html" -Destination "public\index.html" -Force
Copy-Item -Path "dist\app.bundle.js" -Destination "public\app.bundle.js" -Force
Copy-Item -Path "dist\brand.css" -Destination "public\brand.css" -Force
Copy-Item -Path "dist\seo-admin.js" -Destination "public\seo-admin.js" -Force
Copy-Item -Path "dist\seo-config.json" -Destination "public\seo-config.json" -Force
Copy-Item -Path "dist\sitemap.xml" -Destination "public\sitemap.xml" -Force
Copy-Item -Path "dist\robots.txt" -Destination "public\robots.txt" -Force

git add -A
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Output "No new changes to push."
    exit 0
}

git commit -m $Message
git push origin main
Write-Output "Pushed to GitHub! Netlify will auto-deploy jexorasolutions.com in ~15 seconds."
