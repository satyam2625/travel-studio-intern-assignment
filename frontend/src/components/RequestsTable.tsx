"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRequests, RequestItem } from "../lib/api/requestsApi";
import { useUiStore } from "../lib/store/useUiStore";

export default function RequestsTable() {
  const { data, isLoading, error } = useQuery<RequestItem[]>({
    queryKey: ["requests"],
    queryFn: fetchRequests,
    refetchInterval: 3000, // poll every 3s
  });

  const search = useUiStore((s) => s.search);

  const filtered = (data || []).filter((r) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (r.guestPhone || "").includes(s) || (r.requestText || "").toLowerCase().includes(s);
  });

  if (isLoading) return <div className="p-4">Loading requests...</div>;
  if (error) return <div className="p-4">Error loading requests</div>;
  if (!data || data.length === 0) return <div className="p-4">No requests yet.</div>;

  return (
    <div className="p-4">
      <table className="min-w-full table-auto border-collapse">
        <thead className="text-left border-b">
          <tr>
            <th className="px-2 py-2">Phone</th>
            <th className="px-2 py-2">Request</th>
            <th className="px-2 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((r) => {
            const created = r.createdAt || (r as any).created_at || new Date().toISOString();
            return (
              <tr key={r.id} className="border-b">
                <td className="px-2 py-2 align-top">{r.guestPhone}</td>
                <td className="px-2 py-2 align-top whitespace-pre-wrap max-w-[48ch]">{r.requestText}</td>
                <td className="px-2 py-2 align-top">{new Date(created).toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
