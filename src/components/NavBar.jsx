import { useEffect, useState } from "react";
import { Routes } from "../routes/Routes";
import { Link } from "react-router";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-500 ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <h1
          className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? "text-green-600" : "text-white"
            }`}
        >
          <Link to={Routes.Projects}>
            Portifólio
          </Link>
        </h1>

        <ul
          className={`flex gap-6 font-medium transition-colors duration-300 ${scrolled ? "text-green-600" : "text-white"
            }`}
        >
          <li>
            <Link to={Routes.Resume} className="hover:opacity-80 transition">
              Resumo
            </Link>
          </li>
          <li>
            <Link to={Routes.Projects} className="hover:opacity-80 transition">
              Projetos
            </Link>
          </li>
          <li>
            <Link to={Routes.Contact} className="hover:opacity-80 transition">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
