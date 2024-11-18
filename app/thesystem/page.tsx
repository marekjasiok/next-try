// THE SYSTEM (/thesystem)

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "You have entered The System_" };

export default function Home() {
  return (
    <>
      <div>
        <p>
          Currently playing with the{" "}
          <Link href="/modularscale">Modular scale</Link>
        </p>
      </div>
      <div>
        <pre>{`. . . You have entered . . .
.        The System        .
             .







             .








.                          .`}</pre>
      </div>
    </>
  );
}
