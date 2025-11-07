import { useState } from "react";

export default function ResumePage(){
    const [selected, setSelected] = useState("carreira");

  const carreira = [
    {
      cargo: "Analista Junior Android",
      empresa: "JBS",
      periodo: " jan 2025 - o momento",
      descricao:
        "Criação de novos aplicativos para a JBS, idealização e criação de novas features para os apps utilizados por mais de 4000 vendedores da JBS",
    },
    {
      cargo: "Auxiliar de Ti Android",
      empresa: "JBS",
      periodo: " jun de 2023 - dez de 2024",
      descricao:
        "Continuação do trabalho de web e Resolução de bugs e criação de features simples para o App que os vendedores da empresa utilizam",
    },
    {
      cargo: "Estágiario Fulstack Web",
      empresa: "JBS",
      periodo: " ago de 2022 - mai de 2023",
      descricao:
        "Criação de sites internos e externos para jbs. Utilizava Vue para front end e ASP.NET para backend para o deploy da aplicação utilizava a ferramenta da empresa que era o Azure DevOps",
    },
  ];

  const academico = [
    {
      curso: "Engenharia de Software",
      instituicao: "Fiap",
      periodo: "jan de 2025 - dez de 2028",
    },
    {
      curso: "Desenvolvimento de Sistemas",
      instituicao: "Instituo J&F",
      periodo: "jan de 2022 - dez de 2024",
    },
  ];

  return (
    <section className="px-10 md:px-24 py-8 bg-gray-50 text-center">
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4 text-green-700">Resumo Profissional</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Sou <span className="font-semibold text-green-600">Diogo Lima</span>, 
          Desenvolvedor Android Júnior apaixonado por criar experiências mobile fluidas e modernas. 
          Tenho <span className="font-medium">2 anos de experiência</span> no ecossistema Android, 
          trabalhando com tecnologias como <span className="text-green-600 font-medium">Kotlin</span>, 
          <span className="text-green-600 font-medium"> Jetpack Compose</span>, 
          <span className="text-green-600 font-medium"> Retrofit</span>, 
          <span className="text-green-600 font-medium"> Firebase</span>, 
          <span className="text-green-600 font-medium"> MVVM</span> E 
          <span className="text-green-600 font-medium"> SQLite</span>. 
          Busco constantemente aprimorar minhas habilidades para entregar aplicativos cada vez melhores.
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-10">
        <button
          className={`px-6 py-2 rounded-full font-semibold transition ${
            selected === "carreira"
              ? "bg-green-600 text-white"
              : "bg-white border border-green-600 text-green-600 hover:bg-green-50"
          }`}
          onClick={() => setSelected("carreira")}
        >
          Carreira
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition ${
            selected === "academico"
              ? "bg-green-600 text-white"
              : "bg-white border border-green-600 text-green-600 hover:bg-green-50"
          }`}
          onClick={() => setSelected("academico")}
        >
          Acadêmico
        </button>
      </div>

      <div className="max-w-3xl mx-auto text-left">
        {selected === "carreira" ? (
          <ul className="space-y-6">
            {carreira.map((item, i) => (
              <li
                key={i}
                className="bg-white shadow-md p-6 border-l-4 border-green-600"
              >
                <h3 className="text-xl font-semibold text-gray-900">{item.cargo}</h3>
                <p className="text-sm text-green-700 font-medium">{item.empresa}</p>
                <p className="text-sm text-gray-500 mb-2">{item.periodo}</p>
                <p className="text-gray-700">{item.descricao}</p>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="space-y-6">
            {academico.map((item, i) => (
              <li
                key={i}
                className="bg-white shadow-md p-6 border-l-4 border-green-600"
              >
                <h3 className="text-xl font-semibold text-gray-900">{item.curso}</h3>
                <p className="text-sm text-green-700 font-medium">{item.instituicao}</p>
                <p className="text-sm text-gray-500">{item.periodo}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}