param(
    [string]$Message = "Update JEXORA SOLUTIONS website"
)

Set-Location "J:\JEXORA SOLUTIONS"

# Sync latest dist/ to repo root (for GitHub Pages jexorasolutions.com) & public/
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force
Copy-Item -Path "dist\index.html" -Destination "404.html" -Force
Copy-Item -Path "dist\*" -Destination "public" -Recurse -Force

# Ensure real HTTP 200 route entry files for GitHub Pages (zero 404 errors on direct links/refresh)
$ghRoutes = @(
    "services", "industries", "blog", "faq", "about", "contact", "seo-admin",
    "blog\aeo-geo-ai-search-guide-2026",
    "blog\google-meta-click-to-whatsapp-funnel",
    "blog\conversion-engineered-landing-page-patterns",
    "blog\short-form-reels-three-second-hook-playbook",
    "blog\restaurants-hotels-local-seo-direct-bookings",
    "blog\global-consultation-funnels-high-trust-brands"
)
foreach ($r in $ghRoutes) {
    $dir = Join-Path "J:\JEXORA SOLUTIONS" $r
    if (-not (Test-Path $dir)) { New-Item -Path $dir -ItemType Directory -Force | Out-Null }
    Copy-Item -Path "dist\index.html" -Destination (Join-Path $dir "index.html") -Force
}

git add -A
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Output "No new changes to publish."
    exit 0
}

# Committing automatically triggers .git/hooks/post-commit to push fast-forward to origin/main
git commit -m $Message
Write-Output "Committed and auto-pushed to GitHub! jexorasolutions.com will update in ~30-60 seconds."
