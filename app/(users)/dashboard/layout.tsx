import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex p-10">
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </main>
  );
}
