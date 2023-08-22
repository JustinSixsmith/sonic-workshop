import ProfilePage from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        <ProfilePage />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
