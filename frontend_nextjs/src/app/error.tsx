"use client";

import * as React from "react";

/**
 * Global error UI for App Router routes.
 * Next.js will render this component when an error is thrown in a route segment.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <section className="w-full max-w-xl border border-black/10 rounded-lg p-6">
        <h1 className="text-black text-xl font-medium">Something went wrong</h1>
        <p className="text-black/70 mt-2 text-sm">
          An unexpected error occurred while rendering this page.
        </p>

        <details className="mt-4">
          <summary className="cursor-pointer text-sm text-black/80">
            Error details
          </summary>
          <pre className="mt-2 text-xs overflow-auto p-3 bg-black/5 rounded">
            {error?.message}
            {error?.digest ? `\n\ndigest: ${error.digest}` : ""}
          </pre>
        </details>

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 rounded bg-black text-white text-sm"
          >
            Try again
          </button>
        </div>
      </section>
    </main>
  );
}
