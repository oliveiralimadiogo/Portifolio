import { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";

export default function ContactPage() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        mensagem: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`📨 Contato enviado:
                Nome: ${form.nome}
                Email: ${form.email}
                Mensagem: ${form.mensagem}`
            );

        setForm({ nome: "", email: "", mensagem: "" });
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-white text-gray-900">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Entre em Contato</h1>
            <p className="text-gray-600 mb-8 text-center max-w-xl">
                Quer conversar sobre oportunidades, colaborações ou projetos?
                Fique à vontade para enviar uma mensagem pelo formulário abaixo
                ou entrar em contato diretamente pelos canais disponíveis.
            </p>

            <div className="flex flex-col md:flex-row items-start justify-center gap-12 w-full max-w-5xl">
                <div className="flex flex-col gap-6 text-gray-700 w-full max-w-xs">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-3 rounded-full">
                            <FiPhone className="text-green-600" size={24} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-green-600">Telefone</h2>
                            <p className="text-gray-800">(11) 99759-2135</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-3 rounded-full">
                            <FiMail className="text-green-600" size={24} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-green-600">E-mail</h2>
                            <p className="text-gray-800">limaa.diogi@gmail.com</p>
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 w-full max-w-md bg-gray-50 p-6 rounded-2xl shadow-md"
                >
                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700">Nome</span>
                        <input
                            type="text"
                            name="nome"
                            value={form.nome}
                            onChange={handleChange}
                            required
                            className="border border-green-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-green-600 outline-none"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700">E-mail</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="border border-green-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-green-600 outline-none"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700">Mensagem</span>
                        <textarea
                            name="mensagem"
                            rows="5"
                            value={form.mensagem}
                            onChange={handleChange}
                            required
                            className="border border-green-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-green-600 outline-none resize-none"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}
