/**
 * Global loading UI for App Router routes.
 * This is shown automatically by Next.js while route segments load.
 */
export default function Loading() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <p className="text-black/70 text-base">Loading…</p>
    </main>
  );
}
