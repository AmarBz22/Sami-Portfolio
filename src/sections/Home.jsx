import profileImg from "../assets/sami-photo.jpg";
import { FiDownload } from "react-icons/fi";
import resume from "../assets/Sami_Younes_Chaouch_CV (1).pdf";
import presentation from "../assets/SAMI PORTFOLIO.pdf"; 

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-16 px-6"
    >
      {/* Image de profil */}
      <div className="text-center z-10">
        <img
          className="w-[200px] mt-20 lg:mt-0 rounded-full shadow-lg shadow-gray-500/70 lg:max-w-[250px] object-cover object-bottom hover:-translate-y-1 transition-transform duration-300"
          src={profileImg}
          alt="Photo de profil de Sami Younes Chaouch"
        />
      </div>

      {/* Texte principal */}
      <div className="text-center font-mono z-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-snug">
          Je suis{" "}
          <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
            Sami Younes Chaouch
          </span>
        </h1>

        {/* Phrase d’introduction créative */}
        <p className="text-gray-300 italic text-lg mb-6 leading-relaxed">
          J'aime relier la <span className="text-indigo-400 font-semibold">créativité</span> à la{" "}
          <span className="text-indigo-400 font-semibold">technique</span>. Pour moi, coder ou
          monter une vidéo, c'est raconter une histoire avec d'autres outils. La{" "}
          <span className="text-blue-400 font-semibold">technologie</span> n'est pas un obstacle à la
          communication, c'est un <span className="text-blue-400 font-semibold">amplificateur de sens</span>.
        </p>

      

        {/* Boutons d’action */}
        <div className="flex flex-wrap justify-center items-center space-x-4 space-y-2 sm:space-y-0">
          <a
            href="#contact"
            className="bg-gradient-to-r from-teal-500 to-indigo-600 py-3 px-6 rounded-lg font-medium text-white hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            Me contacter
          </a>

          <a
            href={resume}
            download
            className="bg-gradient-to-r from-teal-500 to-indigo-600 py-3 px-6 rounded-lg font-medium text-white flex items-center hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            <span>Mon CV</span>
            <FiDownload className="ml-3 text-xl" />
          </a>

          <a
            href={presentation}
            download
            className="bg-gradient-to-r from-teal-500 to-indigo-600 py-3 px-6 rounded-lg font-medium text-white flex items-center hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            <span>Mon Portfolio</span>
            <FiDownload className="ml-3 text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
