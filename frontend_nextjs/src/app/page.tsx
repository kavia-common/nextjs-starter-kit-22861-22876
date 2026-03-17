/**
 * Home page for the Next.js App Router scaffold.
 */
export default function Home() {
  const apiBase =
    process.env.NEXT_PUBLIC_API_BASE ||
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    "";

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="space-y-3">
          <h1 className="text-4xl font-light">Next.js scaffold ready</h1>
          <p className="text-black/70">
            This container uses the App Router (<code>src/app</code>) with
            Tailwind CSS configured.
          </p>
        </header>

        <section className="mt-10 border border-black/10 rounded-lg p-6 space-y-3">
          <h2 className="text-lg font-medium">Environment</h2>
          <p className="text-sm text-black/70">
            API base (from <code>NEXT_PUBLIC_API_BASE</code> or{" "}
            <code>NEXT_PUBLIC_BACKEND_URL</code>):
          </p>
          <pre className="text-xs bg-black/5 rounded p-3 overflow-auto">
            {apiBase || "(not set)"}
          </pre>
          <p className="text-sm text-black/70">
            Update <code>src/app/page.tsx</code> to start building your app.
          </p>
        </section>
      </div>
    </main>
  );
}
