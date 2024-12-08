import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="nav">
        <Link href="/notes">Back to list</Link>
      </div>
      <div className="nav">
        <Link href="/">Forward</Link>
      </div>
    </footer>
  );
}
