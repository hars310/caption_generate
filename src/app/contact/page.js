import PageHeaders from "@/components/PageHeaders"; // Adjust path as per your project structure

export default function ContactPage() {
  return (
    <div className="text-white min-h-fit ">
      <PageHeaders
        h1Text="Contact Us"
        h2Text="Get in touch with us for any inquiries"
      />

      <div className="md:w-[60%] mx-auto p-4 ">
        <form className="bg-zinc-800 flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
          <div className="mb-4 w-full">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-zinc-700 rounded-lg border-none text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-zinc-700 rounded-lg border-none text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 bg-zinc-700 rounded-lg border-none text-white focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
          </div>
          <button type="submit" className="bg-green-500 w-full  text-white py-2 px-6 rounded-lg inline-block hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Send </button>
        </form>
      </div>

    </div>
  );
}
