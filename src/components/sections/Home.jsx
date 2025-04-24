import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-8xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-emerald-400 bg-clip-text text-transparent leading-right p-5">
            SAGAR CHAVHAN
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
            <br />
            Having knowledge of High performance computing , Aertificial
            intelligence and Machine learning.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-yellow-500 to-emerald-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border border-emerald-500 hover:bg-clip-text text-transparent"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-emerald-500/50 text-emerald-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:bg-gradient-to-r from-yellow-500 to-emerald-400 text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
