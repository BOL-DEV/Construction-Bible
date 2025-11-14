import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">Construction Bible</h1>

      <p className="text-lg text-gray-700 mb-8">
        Your complete knowledge base for construction, smart homes, building
        materials, site processes, and architectural guidance.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <Link
          href="/articles"
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold mb-2">Articles</h2>
          <p className="text-gray-600">
            Read simplified construction knowledge explained clearly.
          </p>
        </Link>

        <Link
          href="/topics"
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold mb-2">Topics</h2>
          <p className="text-gray-600">
            Explore categories like Smart Homes, Materials, Structures & more.
          </p>
        </Link>
      </div>
    </main>
  );
}
