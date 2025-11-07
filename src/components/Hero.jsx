import heroImg from "../assets/avatar.jpg";
import heroBg from "../assets/heroBg.jpg";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between px-10 md:px-24 py-20 min-h-[80vh]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/25 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-2xl">
        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full mb-3 text-sm font-medium">
          Android Developer
        </span>
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
          Transformando Ideias em{" "}
          <span className="text-green-500">Apps Incríveis</span>
        </h1>
        <p className="text-white mb-6 text-lg">
          Olá, me chamo Diogo — sou Desenvolvedor Android especializado em
          criar aplicativos modernos, performáticos e com experiências
          excepcionais para milhares de usuários.
        </p>
      </div>

      <div className="relative z-10 mt-10 md:mt-0">
        <img
          src={heroImg}
          alt="Desenvolvedor"
          className="w-64 md:w-80 rounded-full shadow-lg border-4 border-green-500"
        />
      </div>
    </section>
  );
}
