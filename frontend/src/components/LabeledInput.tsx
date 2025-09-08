"use client";
import { useId } from "react";

export default function LabeledInput() {
  const id = useId();
  return (
    <label htmlFor={id} className="block">
      Name
      <input id={id} className="border px-2 py-1" />
    </label>
  );
}
