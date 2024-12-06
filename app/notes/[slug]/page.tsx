import Note from "@/ui/note";
import Link from "next/link";

interface ShowNotePageProps {
  params: { slug: string };
}

export default async function ShowNotePage({ params }: any) {
  const { slug } = await params;
  return (
    <>
      <Link href="/notes">Back to list</Link>
      <Note url={slug} />
    </>
  );
}
