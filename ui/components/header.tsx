import Link from "next/link";
import Monogram from "@/ui/monogram";

interface HeaderProps {
  title?: string;
}

export default function Header({ title = "The System" }: HeaderProps) {
  return (
    <header className="header">
      <aside>
        <Link href="/" className="soft">
          <div className="monogram">
            <Monogram />
          </div>
        </Link>
      </aside>
      <main>
        <p>
          <Link href="/thesystem" className="soft">
            {title}
          </Link>
        </p>
      </main>
    </header>
  );
}
