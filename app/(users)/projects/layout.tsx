import ProjectList from "./ProjectList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        <ProjectList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
