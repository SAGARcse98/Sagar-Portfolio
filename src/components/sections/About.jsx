import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS"
  ];

  const backendSkills = ["Python", "AWS", "MongoDB", "C/C++"];

  const otherSkills = [
    "Git",
    "Debugger",
    "Profiler",
    "Agile",
    "Power BI",
    "Linux Administration",
  ];
  const hpcAiml = [
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "CUDA",
    "OpenMP",
    "MPI"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-emerald-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]  bg-emerald-600/20">
                <h3 className="text-xl font-bold mb-4 "> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-600 text-white-500 py-1 px-3 rounded-full text-sm  
                                    transition hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border border-emerald-500 hover:bg-clip-text text-white
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-emerald-600/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] ">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-600 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border border-emerald-500 hover:bg-clip-text text-white
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-emerald-600/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] ">
                <h3 className="text-xl font-bold mb-4"> Other Skills</h3>
                <div className="flex flex-wrap gap-2 ">
                  {otherSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-600 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 
                                    hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border border-emerald-500 hover:bg-clip-text text-white
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-emerald-600/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] ">
                <h3 className="text-xl font-bold mb-4"> HPC and AI/ML</h3>
                <div className="flex flex-wrap gap-2">
                  {hpcAiml.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-600 text-white-950 py-1 px-3 rounded-full text-sm hover:bg-blue-600/20 
                                   hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border border-emerald-500 hover:bg-clip-text text-white
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>



            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] ">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                  <strong> B.Tech in Computer Science and Engineering </strong> - Reva University
                  (2016-2020)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, High Performance Computing,Artificial Intelligence, Machine Learning...
                
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] ">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-400">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at TicketsQue (2023 - 2024){" "}
                  </h4>
                  <p>
                    Developed the user Registration, Login, Profile page and Implemented Payment Gateway.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Frontend Engineer at Adihptham (2022 - 2023){" "}
                  </h4>
                  <p>
                    Developed the front-end components and integration
                    REST APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
