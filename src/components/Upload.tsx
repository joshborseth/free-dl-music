import { type FormEvent, useRef } from "react";
import { trpc } from "../utils/trpc";

export default function Upload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate } = trpc.sheet.createSheet.useMutation();
  const uploadPhoto = async (file: File, e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filename = encodeURIComponent(file.name);
    const fileType = encodeURIComponent(file.type);
    const res = await fetch(
      `/api/s3/upload?file=${filename}&fileType=${fileType}`
    );
    const { url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    const upload = await fetch(url, {
      method: "POST",
      body: formData,
    });
    mutate(
      {
        fileUrl: `https://free-drumline-music-sheets.s3.us-west-2.amazonaws.com/${filename}`,
      },
      {
        onSuccess: () => {
          if (upload.ok) {
            if (!inputRef.current) return;
            inputRef.current.value = "";
            console.log("Upload successful!");
          } else {
            console.error("Upload failed.");
          }
        },
      }
    );
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
