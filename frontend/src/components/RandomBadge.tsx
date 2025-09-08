"use client";
import React, { useEffect, useState } from "react";

export default function RandomBadge() {
  const [rand, setRand] = useState<number | null>(null);

  useEffect(() => {
    setRand(Math.random());
  }, []);

  if (rand === null) return <span className="inline-block w-6 h-6 bg-gray-200" aria-hidden />;
  return <span aria-label="random">{rand.toFixed(4)}</span>;
}
