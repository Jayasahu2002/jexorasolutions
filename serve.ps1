$port = 5173
$root = "J:\JEXORA SOLUTIONS\dist"
if (-not (Test-Path $root)) {
    $root = "J:\JEXORA SOLUTIONS\public"
}

$listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Any, $port)
$listener.Start()
Write-Output "JEXORA SOLUTIONS server listening on http://localhost:$port"

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".xml"  = "application/xml; charset=utf-8"
    ".txt"  = "text/plain; charset=utf-8"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".png"  = "image/png"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
}

while ($true) {
    try {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = New-Object System.IO.StreamReader($stream)
        $requestLine = $reader.ReadLine()

        if (-not [string]::IsNullOrEmpty($requestLine)) {
            while ($true) {
                $headerLine = $reader.ReadLine()
                if ([string]::IsNullOrEmpty($headerLine)) { break }
            }

            $parts = $requestLine.Split(" ")
            $rawUrl = if ($parts.Length -ge 2) { $parts[1] } else { "/" }
            $urlPath = ($rawUrl -split "\?")[0]
            $urlPath = [System.Uri]::UnescapeDataString($urlPath)
            $relPath = $urlPath.TrimStart("/").Replace("/", "\")

            $targetFile = $null
            if ($relPath -ne "") {
                $cand = Join-Path $root $relPath
                if (Test-Path $cand -PathType Leaf) {
                    $targetFile = $cand
                }
            }

            if ($null -eq $targetFile) {
                $targetFile = Join-Path $root "index.html"
            }

            $ext = [System.IO.Path]::GetExtension($targetFile).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $bytes = [System.IO.File]::ReadAllBytes($targetFile)

            $headerStr = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`nCache-Control: no-cache`r`n`r`n"
            $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headerStr)
            $stream.Write($headerBytes, 0, $headerBytes.Length)
            $stream.Write($bytes, 0, $bytes.Length)
        }
        $stream.Close()
        $client.Close()
    } catch {
    }
}
