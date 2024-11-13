import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Image
          src="/minim_mj.svg"
          alt="Minim MJ monogram"
          width={60}
          height={60}
          priority
        />
        <ol>
          <li>
            I just got started by editing <code>app/page.tsx</code>.
          </li>
          <li>I've saved it and can now see my changes instantly.</li>
        </ol>
        <p>Let's see how this plays out</p>
        <h1>This is a first level heading in Roboto</h1>
        <h2>This is an H2</h2>
        <h3>This is an H3</h3>
        <p>And here are two paragraphs. (This one and the following.)</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime
          necessitatibus officiis, quas nisi architecto obcaecati quam eius
          error aliquid molestias distinctio ipsa consequuntur, accusantium
          sapiente aspernatur assumenda officia dignissimos.
        </p>
        <p>Coming from this instruction</p>
        <pre>
          -&gt; @import
          url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Fira+Code:wght@300..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
        </pre>
        <p>Back to paragraph.</p>
      </main>
    </div>
  );
}
