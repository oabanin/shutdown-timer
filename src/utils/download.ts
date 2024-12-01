export function download(
  data: string | Blob,
  filename: string,
  type: string,
): void {
  const file = new Blob([data], { type });

  // Check for msSaveOrOpenBlob
  // @ts-expect-error msSaveOrOpenBlob
  if (window.navigator.msSaveOrOpenBlob) {
    // @ts-expect-error msSaveOrOpenBlob
    window.navigator.msSaveOrOpenBlob(file, filename);
  } else {
    // Other browsers
    const a = document.createElement("a");
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  }
}
