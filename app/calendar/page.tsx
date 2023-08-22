"use client";

import { useState } from "react";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="bg-[#212936] p-8 text-[#ebebeb]">
      <div className="mx-auto w-full rounded-lg bg-[#337180] p-6 shadow-lg md:w-4/5">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button className="text-[#ebebeb]">Previous</button>
          <h2 className="text-xl font-bold">July 2023</h2>
          <button className="text-[#ebebeb]">Next</button>
        </div>

        {/* Month Overview */}
        <div className="mt-6 grid grid-cols-7 gap-4">
          {/* This is a placeholder for the days of the week and will need a loop for the days of the month. */}
          <div className="rounded bg-white p-2 text-[#212936]">1</div>
          {/* ... Repeat for each day */}
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-between">
          <button className="rounded bg-[#d64933] px-4 py-2 text-white">
            Add Event
          </button>
          <select className="rounded bg-white p-2 text-[#212936]">
            <option>All Events</option>
            <option>Meetings</option>
            <option>Tasks</option>
            {/* ... Any other event types */}
          </select>
        </div>

        {/* Event Details (this is a placeholder and can be a modal or side panel) */}
        {selectedDate && (
          <div className="mt-6 rounded bg-white p-4 text-[#212936]">
            <h3 className="font-bold">Events for {selectedDate}</h3>
            {/* List events here */}
          </div>
        )}

        <div className="mt-4 text-center">
          <button className="text-[#ebebeb] underline">Jump to Today</button>
        </div>
      </div>
    </div>
  );
}
