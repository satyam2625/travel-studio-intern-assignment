/**
 * src/lib/api/requestsApi.ts
 * API helper to fetch requests from the backend.
 */

export type RequestItem = {
  id: string;
  guestPhone: string;
  requestText: string;
  createdAt?: string; // backend may provide createdAt or created_at
};

export async function fetchRequests(): Promise<RequestItem[]> {
  const base = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';
  const res = await fetch(`${base}/api/requests`);
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Failed to fetch requests: ${res.status} ${res.statusText} ${body}`);
  }

  const raw = await res.json();
  const arr = Array.isArray(raw) ? raw : [];

  // Normalize possible backend shapes (createdAt vs created_at, message vs requestText, etc.)
  return arr.map((r: any) => ({
    id: String(r.id ?? r._id ?? ''),
    guestPhone: r.guestPhone ?? r.from ?? r.phone ?? '',
    requestText: r.requestText ?? r.message ?? r.text ?? '',
    createdAt: r.createdAt ?? r.created_at ?? r.date ?? undefined,
  }));
}
