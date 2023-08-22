import TrackList from "./TrackList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        <TrackList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
