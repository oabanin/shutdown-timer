export function download(
  data: string | Blob,
  filename: string,
  type: string,
): void {
  const file = new Blob([data], { type });

  // Check for msSaveOrOpenBlob
  // @ts-ignore
  if (window.navigator.msSaveOrOpenBlob) {
    // @ts-ignore
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

//download("Hello, World!", "example.txt", "text/plain");
//download('shutdown 121','test.bat',"text/plain;charset=utf-8")
