import ReadMDX from "@/utils/readMDX";

interface NoteProps {
  url: string;
}

export default function Note({ url }: NoteProps) {
  return (
    <div className="note">
      <ReadMDX url={url} />
    </div>
  );
}
