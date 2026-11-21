# Verification gate + local preview for the pre-rendered site.
# Usage:  powershell -ExecutionPolicy Bypass -File scripts\check.ps1
#         powershell -ExecutionPolicy Bypass -File scripts\check.ps1 -NoServe   (checks only)
param([switch]$NoServe, [switch]$SkipBuild)

$ErrorActionPreference = "Stop"
Set-Location (Split-Path -Parent $PSScriptRoot)

function Step($name, $body) {
    Write-Host "`n=== $name ===" -ForegroundColor Cyan
    & $body
    if ($LASTEXITCODE -ne 0) { throw "$name failed (exit $LASTEXITCODE)" }
}

if (-not $SkipBuild) {
    if (Test-Path dist) { Remove-Item -Recurse -Force dist }
    if (Test-Path dist-ssr) { Remove-Item -Recurse -Force dist-ssr }
    Step "typecheck" { npm run typecheck }
    Step "eslint" { npm run lint }
    Step "build (vite + SSR prerender)" { npm run build }
}

Step "dist checks (titles, JSON-LD, canonicals, assets, sitemap)" { npm run check:dist }
Step "content ledger placeholders" { npm run check:placeholders }

$linter = Join-Path $HOME ".qoder\skills\redesign-marketing-site\scripts\lint_site.py"
if (Test-Path $linter) {
    Step "lint_site (finance profile)" { python $linter dist --profile finance --strict }
} else {
    Write-Warning "lint_site.py not found at $linter - skipped"
}

Write-Host "`nAll checks passed." -ForegroundColor Green

if ($NoServe) { return }

Write-Host "Serving dist/ at http://localhost:4173  (Ctrl+C to stop)" -ForegroundColor Yellow
Write-Host "Per-route docs: /  /wealth-planning/  /nri-investing/  /retirement/  /resources/  /about/  /contact/  /404.html"
npm run preview
