// src/pages/index.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl lg:text-6xl font-bold mb-6">Welcome to Eagles Ring</h1>
      <p className="text-lg lg:text-xl mb-4">
        Eagles Ring is an investment platform that matches aspiring entrepreneurs from around the world with investment opportunities.
      </p>
      <p className="text-lg lg:text-xl mb-4">
        Entrepreneurs are invited to pitch their business models in front of a carefully curated panel of highly esteemed local and international business moguls, known as the “Eagles.”
      </p>
      <p className="text-lg lg:text-xl mb-4">
        The Eagles are able and willing to invest their own money as well as time in bankrolling potentially lucrative business solutions. Inside the Ring, the Eagles get to spar for the best investment opportunity.
      </p>
      <p className="text-lg lg:text-xl mb-4">
        The trick is to share a compelling story that will convince these highly experienced Eagles that your solution is a worthwhile investment opportunity.
      </p>
      <Link href="/about">
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all">
          Learn More
        </button>
      </Link>
    </main>
  );
}
