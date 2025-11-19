import { CalendarDays } from "lucide-react";
import React, { useRef } from "react";
import { Input } from "../ui/input";

const InputData = ({ name }) => {
  const inputRef = useRef(null);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  const openPicker = () => {
    const el = inputRef.current;
    if (!el) return;

    if (el.showPicker && !isIOS) {
      el.showPicker();
      return;
    }

    if (isIOS) {
      el.focus();
      return;
    }

    el.click();
  };

  return (
    <>
      <Input
        ref={inputRef}
        id={name}
        className="border-none outline-none shadow-none no-calendar-icon"
        placeholder="Rental date"
        type="datetime-local"
      />

      <button title="calendarButton" onClick={openPicker}>
        <CalendarDays className="cursor-pointer" />
      </button>
    </>
  );
};

export default InputData;
