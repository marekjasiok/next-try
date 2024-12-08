export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="content">{children}</main>;
}
