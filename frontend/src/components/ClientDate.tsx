"use client";
import { useEffect, useState } from "react";

export default function ClientDate({ iso }: { iso?: string }) {
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    if (!iso) return setLabel("");
    setLabel(new Date(iso).toLocaleString());
  }, [iso]);

  return <span>{label}</span>;
}
