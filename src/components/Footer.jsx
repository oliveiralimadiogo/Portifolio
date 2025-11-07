import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white text-center py-6 mt-10">
      <div className="flex justify-center gap-6 mb-3">
        <a href="https://github.com/oliveiralimadiogo" target="_blank" rel="noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/oliveiralimadiogo/" target="_blank" rel="noreferrer">
          <FaLinkedin size={28} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Desenvolvido por Diogo Lima</p>
    </footer>
  );
}
