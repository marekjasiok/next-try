// THE SYSTEM (/thesystem)

import { Metadata } from "next";
import Link from "next/link";
import Note from "@/ui/note";

import Colophon from "./colophon";
// import ToDos from "./TODO.mdx";

export const metadata: Metadata = { title: "You have entered The System_" };

export default function TheSystem() {
  return (
    <>
      <Note url="./app/thesystem/TODO" />
      <Note url="./app/thesystem/colophon" />
    </>
  );
}
