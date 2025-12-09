export async function exportToPdf(onProgress?: (current: number, total: number) => void) {
  console.log("[PDF Export] Starting server-side export...")

  if (onProgress) {
    onProgress(0, 1)
  }

  const response = await fetch("/api/export-pdf", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ baseUrl: window.location.origin }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || "Export failed")
  }

  const blob = await response.blob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "dexcom-presentation.pdf"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)

  console.log("[PDF Export] Done!")
}
