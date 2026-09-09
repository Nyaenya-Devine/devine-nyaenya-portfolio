"use client";

/**
 * DownloadDemoButton — forces a real file download of the Chokepoint demo
 * video on every browser (iOS Safari ignores the HTML `download` attribute,
 * and CDN responses arrive with `Content-Disposition: inline`). Fetching the
 * file and saving it as a Blob sidesteps both issues.
 */
export function DownloadDemoButton() {
  async function download() {
    try {
      const res = await fetch("/media/chokepoint-demo.mp4");
      if (!res.ok) throw new Error(String(res.status));
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "chokepoint-demo.mp4";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch {
      // Last resort: navigate to the file (plays inline rather than saving,
      // but never silently fails).
      window.location.href = "/media/chokepoint-demo.mp4";
    }
  }

  return (
    <button type="button" onClick={() => void download()} className="btn-primary">
      Download MP4
      <span aria-hidden="true">↓</span>
    </button>
  );
}
