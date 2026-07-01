$images = @(
    '/images/mba_department.jpg',
    '/images/bput_regulation.jpg',
    '/images/biotech_overview.jpg',
    '/slide/Your Future Starts Here.png',
    '/indian_board_meeting.png'
)

$files = Get-ChildItem -Path "d:\OFFICE\Reasearh-trident\research-trident\src\pages" -Filter "*.jsx" -Recurse
$index = 0

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    if ($content -match 'https://images\.unsplash\.com/[^"''\s\?&]+(?:\?[^"''\s]*)?') {
        # we need to replace each match one by one to use different images, but for simplicity we can just replace all in a file with one image.
        $replacement = $images[$index % $images.Length]
        $newContent = [regex]::Replace($content, 'https://images\.unsplash\.com/[^"''\s]+', $replacement)
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Replaced Unsplash links in $($file.Name) with $replacement"
        $index++
    }
}
Write-Host "All Unsplash images replaced."
