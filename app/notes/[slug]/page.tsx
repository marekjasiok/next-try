import Note from "@/ui/note";

interface ShowNotePageProps {
  params: { slug: string };
}

export default async function ShowNotePage(props: ShowNotePageProps) {
  return (
    <>
      <Note url={props.params.slug} />
      <Note url={props.params.slug} />
    </>
  );
}
