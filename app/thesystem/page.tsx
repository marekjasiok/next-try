// THE SYSTEM (/thesystem)

import { Metadata } from "next";
import Note from "@/ui/note";

export const metadata: Metadata = { title: "You have entered The System_" };

export default function TheSystem() {
  return (
    <>
      <Note url="./app/thesystem/TODO" />

      <Note url="./app/thesystem/colophon" />
    </>
  );
}
