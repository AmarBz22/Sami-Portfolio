import RevealOnScroll from "../Ui/RevealOnScroll";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "TailwindCSS",
    "Node.js",
    "Python",
    "Apprentissage Automatique (Machine Learning)",
    "Cybersécurité",
    "Réseaux Informatiques",
  ];

  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          {/* Titre */}
          <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
            À propos de moi
          </h2>

          {/* Introduction */}
          <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-5 text-xl text-justify">
              Je m'appelle{" "}
              <span className="text-teal-400 font-semibold">
                Sami Younes Chaouch
              </span>
              , un <span className="text-blue-400">développeur web</span>{" "}
              passionné par les{" "}
              <span className="text-indigo-400">nouvelles technologies</span>,
              notamment l’
              <span className="text-indigo-400">
                Intelligence Artificielle
              </span>
              , l’
              <span className="text-indigo-400">Apprentissage Automatique</span>
              , la <span className="text-indigo-400">Cybersécurité</span> et les{" "}
              <span className="text-indigo-400">Réseaux Informatiques</span>.
              J’aime concevoir des solutions web modernes, performantes et
              esthétiques, tout en explorant continuellement les innovations du
              monde numérique.
            </p>
          </div>

          {/* Compétences et Formation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Compétences */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                💼 Compétences
              </h3>
              <div className="flex justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Formation */}
            <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">🎓 Formation</h3>
              <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                <li>
                  <strong><em>Baccalauréat</em></strong> — Math Technique, Génie Électrique (2020)
                </li>
                <li>
                  <strong><em>Licence</em></strong> — Technologies de l’Information (2023)
                </li>
                <li>
                  <strong><em>Master</em></strong> — Sciences et Technologies de l’Information et de la Communication (2025)
                </li>
              </ul>
            </div>
          </div>

          {/* Expérience Professionnelle */}
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              💻 Expérience Professionnelle
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong className="text-blue-400">
                  <em>Développeur Frontend (Freelance)</em>
                </strong>{" "}
                📍 À distance | Janvier 2024 – Présent <br />
                - Développement de sites web modernes avec React.js, Tailwind CSS et Node.js. <br />
                - Création d’interfaces utilisateurs interactives et intégration d’APIs RESTful. <br />
                - Optimisation des performances et amélioration de l’expérience utilisateur.
              </li>
              <li>
                <strong className="text-blue-400">
                  <em>Autoformation & Recherche</em>
                </strong>{" "}
                <br />- Études et expérimentations en Intelligence Artificielle,
                Apprentissage Automatique et Cybersécurité.
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
