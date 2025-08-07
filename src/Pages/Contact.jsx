function Contact() {
  return (
    <section id="contact" className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <span className="bg-indigo-500/10 text-white-400 px-4 py-1 rounded-full text-lg font-medium">
          Get in Touch
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-2">
          Contact <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">Me</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mt-4 text-sm">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <form className="bg-black/15 p-8 rounded-xl shadow-md">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 bg-black/15 text-white border border-black-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-black/15 text-white border border-black-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-2 bg-black/15 text-white border border-black-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border-white-600 bg-black/10 hover:bg-black/50 text-white font-medium rounded-md transition duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="bg-black/15 p-8 rounded-xl shadow-md text-gray-300 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
            <p>rishishrivastav28@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
            <p>+91 6354839615</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
            <p>surat,gujrat   </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Social</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-800 hover:text-indigo-300">LinkedIn</a>
              <a href="#" className="text-blue-800 hover:text-indigo-300">GitHub</a>
              <a href="#" className="text-blue-800 hover:text-indigo-300">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
