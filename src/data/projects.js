const importImage = (name) => new URL(`../assets/${name}`, import.meta.url).href;

export const projects = [
  {
    id: 1,
    title: "Receitas Saudáveis",
    description: "App Android para encontrar, salvar e compartilhar receitas fitness.",
    category: "Android",
    tag: "Kotlin",
    rating: 4.8,
    downloads: "12k",
    image: importImage("receitas.png"),
    details: {
      tech: ["Kotlin", "Jetpack Compose", "Room", "Firebase"],
      about:
        "Aplicativo completo para busca, favoritos e compartilhamento de receitas. Desenvolvido com Jetpack Compose e arquitetura MVVM.",
    },
  },
  {
    id: 2,
    title: "Finance Manager",
    description: "Controle financeiro com dashboard e sincronização via Firebase.",
    category: "Android",
    tag: "Compose",
    rating: 4.6,
    downloads: "8k",
    image: importImage("finance.jpg"),
    details: {
      tech: ["Kotlin", "Compose", "Hilt", "Firebase Auth"],
      about:
        "Controle de gastos e metas financeiras com integração ao Firebase e notificações locais.",
    },
  },
  {
    id: 3,
    title: "FocusTime",
    description: "App de produtividade com temporizador Pomodoro e estatísticas de foco.",
    category: "Produtividade",
    tag: "Kotlin",
    rating: 4.9,
    downloads: "25k",
    image: importImage("focus.jpg"),
    details: {
      tech: ["Kotlin", "Coroutines", "DataStore", "WorkManager"],
      about:
        "Permite controlar sessões de foco com relatórios diários e integração com o sistema de notificações do Android.",
    },
  },
  {
    id: 4,
    title: "EducaMais",
    description: "EducaMaisEducaMais.",
    category: "Educação",
    tag: "MVVM",
    rating: 4.7,
    downloads: "18k",
    image: importImage("educa.png"),
    details: {
      tech: ["Kotlin", "Jetpack Compose", "Retrofit", "Firebase"],
      about:
        "Sistema completo de aprendizado móvel com autenticação, upload de vídeos e gamificação.",
    },
  },
  {
    id: 5,
    title: "Weatherly",
    description: "Aplicativo de clima com previsão estendida e alertas de chuva.",
    category: "Utilitários",
    tag: "Compose",
    rating: 4.5,
    downloads: "22k",
    image: importImage("weather.jpg"),
    details: {
      tech: ["Kotlin", "Compose", "Retrofit", "OpenWeather API"],
      about:
        "Mostra previsão do tempo, umidade e sensação térmica com interface moderna e intuitiva.",
    },
  },
  {
    id: 6,
    title: "FitTrack",
    description: "Monitore treinos, calorias e evolução física.",
    category: "Saúde",
    tag: "Kotlin",
    rating: 4.9,
    downloads: "30k",
    image: importImage("fittrack.png"),
    details: {
      tech: ["Kotlin", "Room", "Compose", "Charts"],
      about:
        "Aplicativo fitness para registrar treinos e progresso corporal, com gráficos interativos e rotinas personalizadas.",
    },
  },
  {
    id: 7,
    title: "SafeAlert",
    description: "App de segurança pessoal com compartilhamento de localização em tempo real.",
    category: "Segurança",
    tag: "Kotlin",
    rating: 4.4,
    downloads: "15k",
    image: importImage("safealert.png"),
    details: {
      tech: ["Kotlin", "Google Maps API", "Location Services", "Firebase"],
      about:
        "Permite enviar alertas de emergência com um toque, enviando localização e status de segurança para contatos confiáveis.",
    },
  },
  {
    id: 8,
    title: "PetCare",
    description: "Gerencie vacinas, consultas e cuidados do seu pet.",
    category: "Cuidados",
    tag: "Compose",
    rating: 4.8,
    downloads: "10k",
    image: importImage("petcare.png"),
    details: {
      tech: ["Kotlin", "Compose", "Room", "Notifications"],
      about:
        "App para donos de pets controlarem vacinas, histórico médico e lembretes de cuidados com os animais.",
    },
  },
  {
    id: 9,
    title: "EcoTrack",
    description: "Ajude o meio ambiente acompanhando sua pegada de carbono.",
    category: "Sustentabilidade",
    tag: "Kotlin",
    rating: 4.6,
    downloads: "7k",
    image: importImage("eco.png"),
    details: {
      tech: ["Kotlin", "Compose", "Room", "Charts"],
      about:
        "Calcula e monitora o impacto ambiental com base em transporte, energia e consumo pessoal.",
    },
  },
  {
    id: 10,
    title: "Bookify",
    description: "Organize e descubra livros com recomendações automáticas.",
    category: "Entretenimento",
    tag: "Compose",
    rating: 4.7,
    downloads: "19k",
    image: importImage("bookify.png"),
    details: {
      tech: ["Kotlin", "Compose", "Room", "OpenLibrary API"],
      about:
        "Catálogo inteligente de livros com sistema de recomendações baseado nas leituras do usuário.",
    },
  },
];
