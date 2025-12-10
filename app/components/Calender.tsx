"use client";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface CalendarProps {
  showCalendar: boolean;
  onDateSelect: (date: Date | undefined) => void;
}

const CalendarPage = ({ showCalendar, onDateSelect }: CalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());



  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={(selectedDate) => {
        setDate(selectedDate); // ✅ local date state
        onDateSelect(selectedDate); // ✅ this updates the PARENT
      }}
      className={cn(
        "border shadow-sm text-white",
        showCalendar ? "" : "hidden"
      )}
      captionLayout="dropdown"
    />
  );
};

export default CalendarPage;
