import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-emerald-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]  transition">
              <h3 className="text-xl font-bold mb-2"> TicketsQue</h3>
              <p className="text-gray-400 mb-4">
                TicketsQue is an all-in-one event management platform that
                facilitates booking event tickets, finding venues, and reserving
                tables. It offers services for both event attendees and hosts,
                providing a comprehensive solution for event management needs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Node.js",
                  "MongoDB",
                  "Express.js",
                  "Payment Gateway",
                  "QR Code Integeration",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-yellow-600 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-400/20 
                                    hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border border-emerald-500 hover:bg-clip-text text-white transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://ticketsque.com/"
                  className="text-emerald-400 hover:text-gray-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-700/30
              hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border border-emerald-500 hover:bg-clip-text text-white 
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">AI Analytics Dashboard</h3>
              <p className="text-gray-400 mb-4">
                ML-powered data visualization platform with predictive analytics
                and interactive reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-yellow-600 text-white-500 py-1 px-3 
                      rounded-full text-sm
                      transition-all
                      hover:bg-emerald-400/20 hover:-translate-y-0.5
                      hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border border-emerald-500 hover:bg-clip-text text-white
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-emerald-400 hover:text-gray-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border border-emerald-500 hover:bg-clip-text text-white 
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-gray-400 mb-4">
                Full-stack e-commerce with modern UI, secure payment
                integration, and customizable product inventory.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-yellow-600 text-white-500 py-1 px-3 
                      rounded-full text-sm
                      transition-all
                      hover:bg-emerald-400/20 hover:-translate-y-0.5
                      hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border border-emerald-500 hover:bg-clip-text text-white
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-emerald-400 hover:text-gray-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border border-emerald-500 hover:bg-clip-text text-white 
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
              <p className="text-gray-400 mb-4">
                Scalable chat platform supporting real-time messaging, presence,
                and group chat features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-yellow-600 text-white-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-emerald-400/20 hover:-translate-y-0.5
                      transition-all

                      hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border border-emerald-500 hover:bg-clip-text text-white
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-emerald-400 hover:text-gray-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
