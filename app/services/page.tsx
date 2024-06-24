// src/pages/services.tsx
export default function Services() {
    return (
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-lg lg:text-xl mb-4">
          We offer a range of services to help entrepreneurs and investors connect and collaborate on exciting new ventures.
        </p>
        <ul className="list-disc list-inside">
          <li className="text-lg lg:text-xl mb-2">Business Pitch Opportunities</li>
          <li className="text-lg lg:text-xl mb-2">Investment Matching</li>
          <li className="text-lg lg:text-xl mb-2">Mentorship Programs</li>
          <li className="text-lg lg:text-xl mb-2">Networking Events</li>
        </ul>
      </main>
    );
  }
  