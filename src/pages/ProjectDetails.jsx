import { useParams, Link } from "react-router";
import { projects } from "../data/projects";
import { Routes } from "../routes/Routes";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="p-10 text-center text-gray-600">
        Projeto não encontrado.
      </div>
    );
  }

  return (
    <section className="px-10 md:px-24 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {project.title}
          </h2>
          <p className="text-gray-700 mb-6">{project.details.about}</p>

          <h3 className="text-xl font-semibold text-green-600 mb-2">
            Tecnologias Utilizadas
          </h3>
          <ul className="flex flex-wrap gap-3 mb-6">
            {project.details.tech.map((t, i) => (
              <li
                key={i}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {t}
              </li>
            ))}
          </ul>

          <Link
            to={Routes.Projects}
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            ← Voltar para Projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
