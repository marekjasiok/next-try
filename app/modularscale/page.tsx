// MODULAR SCALE (/modularscale)

import { Metadata } from "next";

export const metadata: Metadata = { title: "The Basics of a Modular Scale" };

export default function Home() {
  return (
    <>
      <div>
        <h3>Explanation</h3>
        <small>
          The modular scale allows for locking in design elements to a fixed set
          of sizes.
        </small>
      </div>
      <div>
        <h1>Modular scale</h1>
        <p>
          Concretely, we can use it to design the type hierarchy as follows.
        </p>
        <p className="scale-8">This text has scale 8</p>
        <p className="scale-7">This text has scale 7</p>
        <p className="scale-6">This text has scale 6</p>
        <p className="scale-5">This text has scale 5</p>
        <p className="scale-4">This text has scale 4</p>
        <p className="scale-3">This text has scale 3</p>
        <p className="scale-2">This text has scale 2</p>
        <p className="scale-1">This text has scale 1</p>
        <p className="scale-0">This text has scale 0</p>
      </div>
    </>
  );
}
