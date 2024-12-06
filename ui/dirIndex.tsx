import { readdirSync } from "fs";
import Link from "next/link";

export default function DirIndex({ url }: { url: string }) {
  return (
    <ul>
      {readdirSync(url).map((filename) => (
        <li key={filename}>
          <Link href={`/notes/${filename}`}>{filename}</Link>
        </li>
      ))}
    </ul>
  );
}
