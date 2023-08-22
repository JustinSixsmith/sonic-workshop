export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex bg-[#ebebeb] p-10">
      <div className="flex-1">{children}</div>
    </main>
  );
}
