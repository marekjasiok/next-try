// LANDING (/)
// Careful: all the routes originate in a file named "page" - it's easy to edit the wrong file. Always put in the route name and URL at the top in a comment.

import { Metadata } from "next";
import Link from "next/link";

// change the title
export const metadata: Metadata = { title: "You have entered The System_" };

export default function Home() {
  return (
    <>
      <div>
        <p>Some instructions will come here?</p>
        <p>Starts to look good to me...</p>
      </div>
      <div>
        <h1>Welcome!</h1>
        <p>This is the Landing page</p>
        <p>
          From here you can enter <Link href="/thesystem">The System</Link>
        </p>
      </div>
    </>
  );
}
