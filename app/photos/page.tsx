// PHOTOS /photos
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "The Basics of a Modular Scale" };

export default function ShowPhoto({ id = "CD-18" }) {
  const url = `/photos/${id}.jpg`;
  return (
    <>
      <section className="textblock">
        <h3>It'd be great to get some more info here</h3>
      </section>
      {/* TODO: nth child even */}
      <section className="textblock R">
        <h3>Let's preview a photo here</h3>
        <Image src={url} width={533} height={800} alt="stock photo" />
      </section>
    </>
  );
}
