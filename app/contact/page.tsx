// src/pages/contact.tsx
export default function Contact() {
    return (
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg lg:text-xl mb-4">
          If you have any questions or would like to learn more about Eagles Ring, please get in touch with us.
        </p>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={4}
              placeholder="Your message"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </main>
    );
  }
  