"use client";

import React from "react";
import RequestsTable from "../../components/RequestsTable";
import { useUiStore } from "../../lib/store/useUiStore";

export default function DashboardPage() {
  const { search, setSearch } = useUiStore((s) => ({ search: s.search, setSearch: s.setSearch }));

  return (
    <main className="p-6">
      <header className="mb-4">
        <h1 className="text-2xl font-semibold mb-2">Requests Dashboard</h1>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search phone or text..."
            className="border px-3 py-2 rounded w-full max-w-md"
          />
        </div>
      </header>

      <section>
        <RequestsTable />
      </section>
    </main>
  );
}
