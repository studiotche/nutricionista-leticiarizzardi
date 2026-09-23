export const site = {
  name: "Letícia Rizzardi",
  role: "Nutricionista",
  fullRole: "Nutricionista",
  city: "Ivoti",
  state: "RS",
  region: "Ivoti/RS",
  crn: "18700D",
  credentials:
    "Nutricionista",
  phoneDisplay: "(51) 99999-9999",
  phoneLink: "5551999999999",
  telLink: "tel:+5551999999999",
  email: "",
  instagram: "https://www.instagram.com/nutrileticiarizzardi/",
  hours: [
    {
      days: "Atendimento particular",
      time: "Presencial e Online · Consultar horários no WhatsApp",
    },
  ],
  googleProfile:
    "https://www.google.com/maps/place/Nutricionista+Let%C3%ADcia+Rizzardi/@-29.5978632,-51.1546955,980m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9519450667614127:0x28e21815b37a7c46!8m2!3d-29.5978632!4d-51.1546955!16s%2Fg%2F11vdqgj328?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
  googleRating: {
    score: "5,0",
    reviews: 4,
  },
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=-29.5978632,-51.1546955&z=17&hl=pt-BR&output=embed",
  mapsUrl:
    "https://www.google.com/maps/place/Nutricionista+Let%C3%ADcia+Rizzardi/@-29.5978632,-51.1546955,980m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9519450667614127:0x28e21815b37a7c46!8m2!3d-29.5978632!4d-51.1546955!16s%2Fg%2F11vdqgj328?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
  seo: {
    title:
      "Nutricionista em Ivoti - Letícia Rizzardi",
    description:
      "Letícia Rizzardi, nutricionista em Ivoti/RS. Te ajudo a melhorar a sua relação com a alimentação de uma forma leve!",
    url: "https://nutrileticiarizzardi.my.canva.site/",
    ogImage: "/assets/images/nutricionista-leticiarizzardi-hero.webp",
  },
  hero: {
    eyebrow: "Nutrição Clínica e Esportiva",
    title:
      "Nutricionista em Ivoti",
    titleHighlight: "Letícia Rizzardi",
    tagline:
      "Te ajudo a melhorar a sua relação com a alimentação de uma forma leve!",
    description:
      "Te ajudo a melhorar a sua relação com a alimentação de uma forma leve! Consultas presenciais em Ivoti e Online.",
  },
  about: {
    eyebrow: "Muito prazer, sou a Letícia Rizzardi!",
    title:
      "Resultados de forma sustentável e alinhada à realidade de cada paciente",
    titleHighlight: "sustentável e alinhada",
    paragraphs: [
      "Sou Nutricionista especializada em Avaliação Metabólica e Nutricional pelo Centro de Ensino Dr. Eric Slywitch, com aprimoramento em Nutrição e Suplementação Esportiva e Saúde Intestinal.",
      "Trabalho com acompanhamento nutricional para adultos que buscam melhorar a saúde, a composição corporal, a performance física ou a estética, por meio de estratégias alimentares planejadas de acordo com suas necessidades, objetivos e rotina.",
      "O acompanhamento nutricional é conduzido com base em avaliação individual, análise de exames (quando necessário) e ajustes progressivos, com o objetivo de otimizar resultados de forma sustentável e alinhada à realidade de cada paciente.",
    ],
  },
  assets: {
    logo: "/assets/images/logo-nutricionista-leticia-rizzardi.webp",
    hero: "/assets/images/nutricionista-leticia-rizzardi-hero.webp",
    heroMobile: "/assets/images/nutricionista-leticiarizzardi-hero.webp",
    about: "/assets/images/sobre-nutricionista-leticiarizzardi.webp",
    processBg: "/assets/images/nutricionista-fundo-sessao-agende.webp",
    consultorio: "/assets/images/consultorio-leticiarizzardi.webp",
    consultorioFachada: "/assets/images/recepcao-leticiarizzardi.webp",
  },
} as const;

export const specialties = [
  {
    number: "01",
    icon: "/assets/images/emagrecimento.svg",
    title: "Emagrecimento",
    text: "Sem abordagens restritivas ou extremismos, te ajudo a emagrecer de forma leve, prazerosa e sustentável.",
    detail:
      "Emagrecimento sustentável com base nas suas preferências alimentares.",
  },
  {
    number: "02",
    icon: "/assets/images/corrida.svg",
    title: "Hipertrofia e Performance",
    text: "Vamos alinhar sua alimentação com sua rotina de exercícios, ajustando os macro e micronutrientes.",
    detail:
      "Para você performar melhor e ter mais resultados nos seus treinos e atividades.",
  },
  {
    number: "03",
    icon: "/assets/images/maca.svg",
    title: "Saúde e Controle de Doenças",
    text: "Você vive com a barriga estufada, intestino preso, desconfortos e sem energia?",
    detail:
      "Vamos cuidar da sua saúde intestinal e reverter exames de forma eficaz.",
  }
] as const;

export const pillars = [
  {
    title: "Avaliar",
    text: "Avaliação individual e definição de estratégias focadas nas suas necessidades.",
    icon: "/assets/images/pagina.svg",
  },
  {
    title: "Planejar",
    text: "Planejamento alimentar personalizado e entrega de materiais complementares (guia de compras, receitas e mais).",
    icon: "/assets/images/alvo.svg",
  },
  {
    title: "Acompanhar",
    text: "Suporte contínuo durante o período para resolução de dúvidas ou ajustes que forem necessários.",
    icon: "/assets/images/pessoas.svg",
  },
] as const;

export const testimonials: {
  name: string;
  city: string;
  dateTime?: string;
  text: string;
  profile?: string;
}[] = [
    {
      name: "Paciente 1",
      city: "Ivoti/RS",
      text: "[Avaliação 1 do Google Maps a ser inserida. Por favor, atualize com o texto real.]",
      profile: site.googleProfile,
    },
    {
      name: "Paciente 2",
      city: "Ivoti/RS",
      text: "[Avaliação 2 do Google Maps a ser inserida. Por favor, atualize com o texto real.]",
      profile: site.googleProfile,
    },
    {
      name: "Paciente 3",
      city: "Ivoti/RS",
      text: "[Avaliação 3 do Google Maps a ser inserida. Por favor, atualize com o texto real.]",
      profile: site.googleProfile,
    }
  ];

export const locations = [
  {
    city: "Ivoti",
    address: "[Endereço a ser inserido]",
    district:
      "Ivoti/RS",
    type: "Presencial · Online · Particular",
  },
] as const;

export const faqs = [
  [
    "Onde acontecem as consultas presenciais?",
    "Os atendimentos presenciais acontecem em Ivoti/RS. Entre em contato para mais detalhes sobre o endereço.",
  ],
  [
    "Você também realiza atendimentos online?",
    "Sim! Além das consultas presenciais, realizo atendimento nutricional online para pacientes de todo o Brasil.",
  ],
  [
    "A estratégia muda conforme o meu objetivo?",
    "Sim! O plano alimentar pode ser mais detalhado e calculado ou mais flexível, de acordo com o que você busca, seu momento de vida e o nível de controle necessário para alcançar resultados.",
  ],
  [
    "Como funcionam as orientações?",
    "Você recebe orientações com explicação, não regras soltas. Durante o acompanhamento, você entende o motivo de cada orientação alimentar para que saiba o que está fazendo, por que está fazendo e como isso impacta seus resultados.",
  ],
  [
    "Como funciona o contato e ajustes após a consulta?",
    "Após a consulta, entro em contato em 1 a 2 semanas para entender como as coisas estão funcionando na rotina, esclarecer dúvidas e ajustar o que for necessário para manter o processo em andamento.",
  ],
  [
    "Você avalia exames?",
    "Sim. Quando indicado, avalio exames e prescrevo suplementações de forma individualizada, sempre considerando objetivos, sinais clínicos e necessidades específicas."
  ]
] as const;

export const whatsappUrl = `https://wa.me/${site.phoneLink}?text=${encodeURIComponent("Olá, Letícia! Gostaria de agendar uma consulta.")}`;
