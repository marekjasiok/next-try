import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";

interface NoteProps {
  url: string;
}

export default async function ReadMDX({ url }: NoteProps) {
  const filepath = url.includes("/") ? url : `mdx/${url}`;

  // TODO: find file with the right extension md|mdx in the default folder
  const extension = ".md";

  const content = await fs.readFile(
    path.join(process.cwd(), filepath + extension)
  );

  interface Frontmatter {
    title: string;
  }

  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });
  return data.content;
}
