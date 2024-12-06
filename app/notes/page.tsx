import DirIndex from "@/ui/dirIndex";

export default function NotesList() {
  return (
    <>
      <div>
        <p>There are a few notes here</p>
      </div>
      <div>
        <p>Here's a list</p>
        <DirIndex url="mdx" />
      </div>
    </>
  );
}
