export type FilePickerOptions = {
  accept?: string;
  multiple?: boolean;
};

export function openFilePicker(options: FilePickerOptions = {}): Promise<File[]> {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    if (options.accept) input.accept = options.accept;
    input.multiple = options.multiple ?? true;
    input.style.display = "none";
    document.body.appendChild(input);
    input.addEventListener("change", () => {
      const files = Array.from(input.files || []);
      input.remove();
      resolve(files);
    });
    input.click();
  });
}