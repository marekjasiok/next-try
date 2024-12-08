export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="content">{children}</div>;
}
