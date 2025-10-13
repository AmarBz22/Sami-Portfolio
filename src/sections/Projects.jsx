import { useState } from "react";
import travel from "../assets/travel-app.jpg";
import RevealOnScroll from "../Ui/RevealOnScroll";
import clinic from "../assets/Clinic.png";
import HealthLink from "../assets/Healthlink.jpeg";
import classification from "../assets/Classification.jpg";

function Projects() {
  const [projects] = useState([
    {
      image: clinic,
      name: "Laib Clinic",
      brief:
        "Un système moderne de gestion de clinique développé avec React et Node.js, permettant au personnel de gérer efficacement les rendez-vous, les patients, les commandes et les formations. A collaboré au développement et à la conception.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/amineallioua/laib-clinique-front",
    },
    {
      image: HealthLink,
      name: "HealthLink – Un Pont Numérique pour la Santé",
      brief:
        "Une plateforme numérique reliant les professionnels de la santé et les fournisseurs grâce à des recommandations basées sur l’IA. A contribué en tant que collaborateur au développement du projet.",
      tech: ["React", "Node.js", "MongoDB", "IA"],
      link: "https://github.com/AmarBz22/HealthLink",
    },
    {
      image: classification,
      name: "Classification des Espaces Verts",
      brief:
        "Un projet de machine learning visant à classer les espaces verts (parcs, forêts, champs) à partir de données environnementales ou satellitaires à l’aide de modèles d’apprentissage supervisé.",
      tech: ["Python", "Scikit-learn", "Pandas"],
      link: "https://github.com/YCsami/Classification-des-espaces-verts",
    },
    {
      image: travel,
      name: "Application de Voyage",
      brief:
        "Une application complète de réservation de voyages permettant aux utilisateurs de trouver des destinations, planifier leurs séjours et gérer leurs réservations facilement.",
      tech: ["React", "Supabase", "Vercel"],
      link: "https://github.com/YCsami",
    },
  ]);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
            Projets en Vedette
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900"
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief}</p>

                <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}

                  <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] cursor-pointer rounded-xl">
                    <p className="text-gray-200">Voir le projet</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                    >
                      <img
                        src={project.image}
                        alt={`Image du projet ${project.name}`}
                        className="rounded-lg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
