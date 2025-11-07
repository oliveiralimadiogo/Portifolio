import { useState } from "react";
import { Link } from "react-router";
import { FaStar, FaDownload } from "react-icons/fa";
import SearchBar from "../components/SearchBar";
import { projects } from "../data/projects";
import { Routes } from "../routes/Routes";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
    const [search, setSearch] = useState("");

    const filtered = projects.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="px-10 md:px-24 py-8 bg-white" id="projects">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
                Projetos
            </h2>

            <div className="flex justify-center mb-10">
                <SearchBar search={search} setSearch={setSearch} />
            </div>

            {filtered.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">
                    Nenhum projeto localizado
                </p>
            )}
        </section>
    );
}