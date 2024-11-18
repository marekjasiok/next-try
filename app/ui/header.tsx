import Link from "next/link";
import Monogram from "@/app/ui/monogram";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/" className="soft">
          <Monogram />
        </Link>
      </div>
      <div>
        <p>
          <Link href="/thesystem" className="soft">
            The System
          </Link>
        </p>
      </div>
    </header>
  );
}
