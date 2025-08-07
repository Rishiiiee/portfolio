import homeimage from "../asset/homepageimage.png";

function HomePage() {
  return (
    <div>
      <div className="w-[80%] mx-auto py-[100px] flex flex-col md:flex-row items-center justify-between">
        <div className="left-info side">
          <section className="text-white">
            <div className="max-w-4xl">
              <p className="text-yellow-400 text-xl font-semibold">HELLO WORLD!</p>
              <h1 className="text-5xl md:text-6xl font-extrabold mt-4 mb-6">
                I'm <span className="text-yellow-400">Rishi <br /> Shrivastav</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-6">
                MERN Stack Developer
              </h2>
              <p className="text-lg mb-8">
                Passionate about building clean, responsive UIs and scalable
                backend systems. Looking for Fullstack or Frontend opportunities
                to grow and contribute!
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition"
                >
                  HIRE ME
                </a>
                <a
                  href="#projects"
                  className="border border-white py-3 px-6 rounded-full hover:bg-white hover:text-black transition"
                >
                  MY WORKS
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="right-img-side mt-10 md:mt-0">
          <img src={homeimage} alt="Robot Avatar" className="w-full max-w-xs md:max-w-md" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
