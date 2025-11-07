import { Link } from "react-router";
import { Routes } from "../routes/Routes";

export default function ProjectCard({
  id,
  title,
  description,
  image,
  detailed = false,
  techs = [],
}) {
  return (
    <div
      className={`border border-gray-300 p-6 shadow-md transition-all ${
        detailed ? "max-w-3xl mx-auto" : "hover:shadow-lg"
      }`}
    >
      <img
        src={image}
        alt={title}
        className={`w-full object-cover mb-4 ${
          detailed ? "h-64" : "h-48"
        }`}
      />

      <h3
        className={`font-semibold mb-2 ${
          detailed ? "text-3xl text-green-600" : "text-lg text-green-600"
        }`}
      >
        {title}
      </h3> 

      <p className="text-gray-700 mb-4">{description}</p>

      {detailed && techs.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">
            Tecnologias utilizadas:
          </h4>
          <ul className="list-disc list-inside text-gray-600">
            {techs.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {!detailed && (
        <Link
          to={Routes.ProjectDetails.replace(":id", id)}
          className="text-green-600 font-medium hover:underline"
        >
          Ver detalhes →
        </Link>
      )}
    </div>
  );
}
