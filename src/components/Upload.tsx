/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FormEvent, useRef } from "react";
import { trpc } from "../utils/trpc";

export default function Upload() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const composerRef = useRef<HTMLInputElement>(null);
  const { mutateAsync: createPresignedUrl } =
    trpc.sheet.createSheet.useMutation();
  const uploadPhoto = async (
    file: File,
    e: FormEvent<HTMLFormElement>,
    title: string,
    composer: string,
    form: HTMLFormElement | null
  ) => {
    e.preventDefault();
    if (!file || !title || !composer) return;
    const { url, fields }: { url: string; fields: any } =
      (await createPresignedUrl({
        fileName: `${title} - ${composer}${
          file.type === "image/jpeg" ? ".jpg" : ".png"
        }`,
        fileType: file.type,
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
    }).then(() => {
      form?.reset();
    });
  };
  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        const file = inputRef.current?.files?.[0];
        const title = titleRef.current?.value;
        const composer = composerRef.current?.value;
        const form = formRef.current;
        if (!file || !title || !composer) return;
        uploadPhoto(file, e, title, composer, form);
      }}
      className="m-3 grid h-1/2 w-2/3 place-items-center justify-self-center rounded-md border-2 border-gray-300 p-3 shadow-xl"
    >
      <p className="p-1">Upload a .png or .jpg image (max 1MB).</p>
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg"
        className="file-input-bordered file-input w-full max-w-xs"
      />
      <input
        ref={titleRef}
        type="text"
        placeholder="Song Title"
        className="input-bordered input w-full max-w-xs"
        required
      />
      <input
        ref={composerRef}
        type="text"
        placeholder="Composer"
        className="input-bordered input w-full max-w-xs"
        required
      />
      <button type="submit" className="btn">
        Upload
      </button>
    </form>
  );
}
