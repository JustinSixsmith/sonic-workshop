import CalendarPage from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        <CalendarPage />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
