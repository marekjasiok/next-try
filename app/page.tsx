// LANDING (/)
// Careful: all the routes originate in a file named "page" - it's easy to edit the wrong file. Always put in the route name and URL at the top in a comment.

import { Metadata } from "next";
import Link from "next/link";
import Note from "@/ui/note";

// change the title
export const metadata: Metadata = { title: "You have entered The System_" };

export default function Home() {
  return (
    <>
      <Note url="./NOTES" />
      <div>
        <Note url="welcome" />
        <p>
          There are more <Link href="/notes">notes here</Link>.
        </p>
      </div>
    </>
  );
}
