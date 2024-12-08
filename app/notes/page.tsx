import DirIndex from "@/ui/dirIndex";

export default function NotesList() {
  return (
    <>
      <div className="textblock">
        <p>There are a few notes here</p>
      </div>
      <div className="textblock">
        <p>Here's a list</p>
        <DirIndex url="mdx" />
      </div>
    </>
  );
}
