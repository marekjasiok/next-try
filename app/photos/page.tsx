// PHOTOS /photos
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "The Basics of a Modular Scale" };

export default function ShowPhoto({ id = "CD-18" }) {
  const url = `/photos/${id}.jpg`;
  return (
    <>
      <div className="verso">
        <h3>Let's preview a photo here</h3>
        <Image src={url} width={533} height={800} alt="stock photo" />
      </div>
      <div className="recto">
        <h3>It'd be great to get some more info here</h3>
        <table className="photo-data">
          <caption>e.g.,</caption>
          <thead></thead>
          <tbody>
            <tr>
              <th>Title</th>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
