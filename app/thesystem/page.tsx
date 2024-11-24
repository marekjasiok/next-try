// THE SYSTEM (/thesystem)

import { Metadata } from "next";
import Link from "next/link";

import Colophon from "./colophon.mdx";
import ToDos from "./TODO.mdx";

export const metadata: Metadata = { title: "You have entered The System_" };

export default function TheSystem() {
  return (
    <main>
      <div>
        <ToDos />
      </div>
      <div>
        <Colophon />
      </div>
    </main>
  );
}
