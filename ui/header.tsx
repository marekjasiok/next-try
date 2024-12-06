import Link from "next/link";
import Monogram from "@/ui/monogram";

interface HeaderProps {
  title?: string;
}

export default function Header({ title = "The System" }: HeaderProps) {
  return (
    <header className="header">
      <div>
        <Link href="/" className="soft">
          <Monogram />
        </Link>
      </div>
      <div>
        <p>
          <Link href="/thesystem" className="soft">
            {title}
          </Link>
        </p>
      </div>
    </header>
  );
}
