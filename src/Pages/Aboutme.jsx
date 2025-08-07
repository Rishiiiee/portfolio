import Aboutmeimage from "../asset/Aboutme.png"

function Aboutme() {
  return (
    <section className="w-full text-white py-16 px-4 md:px-12 lg:px-24">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        <div className="w-full md:w-1/2 h-[300px] md:h-[320px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative w-full h-full">
            <img src={Aboutmeimage} className="object-cover w-full h-full" />
            <div className="">
              <h1 className=""></h1>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6 text-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400">About Me</h2>
          <p>
            I’m a <span className="text-yellow-400">Full-Stack Developer</span> based in <span className="text-yellow-400">Surat, Gujarat</span>. I completed my
            <span className="text-yellow-400"> BCA</span> from <span className="text-yellow-400">SDJ International College, Vesu, Surat</span>.
          </p>
          <p>
            I work with a range of technologies like <span className="text-yellow-400">HTML, CSS, C, JavaScript, Node.js</span> and have experience with frameworks like
            <span className="text-yellow-400"> React.js</span>.
          </p>
          <p>
            Currently, I’m a <span className="text-yellow-400">fresher</span> looking to grow and explore more technical skills. I’m actively learning and working on
            real-world projects to sharpen my development capabilities.
          </p>
          <p className="text-yellow-400 font-semibold">Let’s build something awesome together!</p>

          <div className="pt-4">
            <a
              href="/Your_Resume.pdf"
              className="inline-block bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition duration-300"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
