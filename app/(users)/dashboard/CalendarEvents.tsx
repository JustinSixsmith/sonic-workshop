type EventProps = {
  date: string;
  description: string;
};

export default function CalendarEvents() {
  return (
    <section className="rounded-lg bg-212936 p-4 text-ebebeb shadow-lg">
      <h2 className="text-lg font-semibold text-cad2c5">Upcoming Events</h2>
      <div className="mt-2 space-y-2">
        <Event date="July 30, 2023" description="Project A meeting" />
        <Event date="August 1, 2023" description="Project B deadline" />
        <Event date="August 5, 2023" description="Review meeting" />
      </div>
    </section>
  );
}

const Event: React.FC<EventProps> = ({ date, description }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="font-medium">{date}</div>
      <div>{description}</div>
    </div>
  );
};
