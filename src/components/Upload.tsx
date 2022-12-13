import { type FormEvent, useRef } from "react";
import { trpc } from "../utils/trpc";

export default function Upload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutateAsync: createPresignedUrl } =
    trpc.sheet.createSheet.useMutation();
  const uploadPhoto = async (file: File, e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    const { url, fields }: { url: string; fields: any } =
      (await createPresignedUrl({
        fileName: file.name,
        fileType: file.type,
        fileUrl: `https://free-drumline-music-sheets.s3.us-west-2.amazonaws.com/${file.name}`,
      })) as any;
    const data = {
      ...fields,
      "Content-Type": file.type,
      file,
    };
    const formData = new FormData();
    for (const name in data) {
      formData.append(name, data[name]);
    }
    await fetch(url, {
      method: "POST",
      body: formData,
    });
  };
  return (
    <form
      onSubmit={(e) => {
        const file = inputRef.current?.files?.[0];
        if (!file) return;
        uploadPhoto(file, e);
      }}
    >
      <p>Upload a .png or .jpg image (max 1MB).</p>
      <input ref={inputRef} type="file" accept="image/png, image/jpeg" />
      <button type="submit">Upload</button>
    </form>
  );
}
