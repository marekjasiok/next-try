import ReadMDX from "@/utils/readMDX";

interface NoteProps {
  url: string;
}

export default function Note(props: NoteProps) {
  return (
    <div className="note">
      <ReadMDX url={props.url} />
    </div>
  );
}
