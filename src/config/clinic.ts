export const clinic = {
  name: "EDENIA Beauty Concept.",
  logo: "/images/logo.png",
  tagline: "Tu espacio de belleza y bienestar en Villarrobledo",
  description: "EDENIA Beauty Concept es tu centro de estética de referencia en Villarrobledo, Albacete. Liderado por Laura, ofrecemos tratamientos faciales personalizados, masajes relajantes, depilación láser y cuidados corporales con tecnología avanzada. Con 5 estrellas en Google y 32 reseñas, nos distinguimos por un trato cercano, instalaciones impecables y resultados visibles que transforman tu bienestar.",
  colors: {
    primary: "#b7a597",
    secondary: "#37322d",
    accent: "#c5b6ad",
    neutral: "#f9f8f7"
  },
  phone: "644 60 95 65",
  whatsapp: "+34644609565",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de estética.",
  email: "",
  address: {
    street: "Av. de los Reyes Católicos, 56, local bajo, 02600 Villarrobledo, Albacete, España",
    city: "Villarrobledo",
    province: "Albacete",
    postalCode: "02600",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=9964272655753130972&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=EDENIA%20Beauty%20Concept.%20%4039.2644%2C-2.59744&z=16&output=embed",
  coordinates: {
    lat: 39.2644,
    lng: -2.59744
  },
  schedule: [
    {
      days: "lunes",
      hours: "16:00–20:00"
    },
    {
      days: "martes - viernes",
      hours: "10:00–14:00, 16:00–20:00"
    },
    {
      days: "sábado",
      hours: "9:00–13:00"
    },
    {
      days: "domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 32,
    url: "https://maps.google.com/?cid=9964272655753130972&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "Almudena Santos Jareño",
        rating: 5,
        text: "Tuve una experiencia de 10 gracias a Laura. Me hice un masaje relajante y desde el primer momento noté su profesionalidad y dedicación. Es una persona cercana, atenta a cada detalle, y transmite mucha tranquilidad, lo que hizo que pudiera desconectar completamente. El ambiente del centro también acompaña, muy limpio y acogedor. Sin duda, repetiré. Recomendadísimo.",
        date: "Hace 9 meses"
      },
      {
        author: "José Ramón Losa Ramírez",
        rating: 5,
        text: "Mi experiencia en La Edenia ha sido excelente. Desde el primer momento recibí un trato cercano, amable y muy profesional. Laura, transmite confianza y demuestra una gran preparación en cada servicio, explicando todo con claridad y cuidando cada detalle. Me sentí muy cómodo y atendido en todo momento. Sin duda, lo recomiendo y repetiré.”",
        date: "Hace 5 meses"
      },
      {
        author: "Cari Roldán Morcillo",
        rating: 5,
        text: "Me hice una limpieza facial en Edenia y salí encantada. El trato fue excelente desde el primer minuto, Laura me explicó todo el proceso desde el principio. El lugar es impecable, muy relajante y se nota el cuidado por cada mínimo detalle. Sin duda, lo recomiendo 100%",
        date: "Hace 3 meses"
      },
      {
        author: "Mel Romano",
        rating: 5,
        text: "Visitar Edenia Beauty Concept ha sido una experiencia increíble. El ambiente es relajante, el trato de Laura exquisito y los tratamientos de alta calidad y súper efectivos. Un espacio donde la belleza y el bienestar van de la mano. ¡100% recomendable!",
        date: "Hace 10 meses"
      },
      {
        author: "ELISABETH PELLEJERO DE LA OSA",
        rating: 5,
        text: "Trato e Instalaciones inmejorables. Ofrecen varios tratamientos y te aconsejan el mejor asi como el cuidado para casa. Súper recomendable y Laura un encanto. Repito todos los meses jeje",
        date: "Hace 2 semanas"
      }
    ]
  },
  services: [
    {
      id: "limpieza-facial",
      name: "Limpieza Facial Profunda",
      description: "Tratamiento facial completo que elimina impurezas, purifica los poros y devuelve la luminosidad natural a tu piel. Te explicamos cada paso del proceso y adaptamos los productos a tu tipo de piel. Saldrás con el rostro fresco, renovado y radiante.",
      benefits: [
        "Piel profundamente limpia y oxigenada",
        "Reducción visible de puntos negros e imperfecciones",
        "Luminosidad y suavidad inmediata"
      ],
      icon: "Sparkles"
    },
    {
      id: "masajes-relajantes",
      name: "Masajes Relajantes",
      description: "Desconecta completamente con nuestros masajes terapéuticos personalizados. Laura cuida cada detalle para que liberes tensiones, reduzcas el estrés y recuperes tu equilibrio. Un momento solo para ti en un ambiente de máxima tranquilidad.",
      benefits: [
        "Alivio profundo de tensiones musculares",
        "Desconexión total y renovación mental",
        "Mejora de la circulación y bienestar general"
      ],
      icon: "Heart"
    },
    {
      id: "tratamientos-faciales",
      name: "Tratamientos Faciales Antiedad",
      description: "Cuidados faciales avanzados diseñados para combatir los signos del envejecimiento. Hidratación profunda, reafirmación y luminosidad con productos premium y técnicas de última generación. Resultados visibles desde la primera sesión.",
      benefits: [
        "Reducción de arrugas y líneas de expresión",
        "Piel firme, hidratada y rejuvenecida",
        "Efecto lifting natural y duradero"
      ],
      icon: "Flower2"
    },
    {
      id: "depilacion-laser",
      name: "Depilación Láser Definitiva",
      description: "Olvídate del vello para siempre con nuestra tecnología láser de última generación. Tratamiento seguro, efectivo y adaptado a cada tipo de piel y vello. Te asesoramos en cada sesión para garantizar los mejores resultados.",
      benefits: [
        "Eliminación definitiva del vello no deseado",
        "Piel suave y sin irritaciones",
        "Resultados progresivos y duraderos"
      ],
      icon: "Zap"
    },
    {
      id: "tratamientos-corporales",
      name: "Tratamientos Corporales Reductores",
      description: "Tratamientos corporales avanzados para moldear tu silueta, reducir celulitis y reafirmar la piel. Combinamos técnicas manuales con tecnología de vanguardia para resultados efectivos y visibles. Te acompañamos con consejos de cuidado en casa.",
      benefits: [
        "Reducción de volumen y celulitis visible",
        "Piel más firme y tonificada",
        "Mejora de la textura y elasticidad cutánea"
      ],
      icon: "Sparkles"
    },
    {
      id: "manicura-pedicura",
      name: "Manicura y Pedicura",
      description: "Cuidado completo de manos y pies con esmaltado de alta calidad y larga duración. Tratamos cada detalle para que luzcas unas manos y pies impecables. Ambiente relajante y productos que cuidan tu piel.",
      benefits: [
        "Manos y pies perfectamente cuidados",
        "Esmaltado duradero y acabado profesional",
        "Hidratación profunda de cutículas y piel"
      ],
      icon: "Hand"
    },
    {
      id: "micropigmentacion",
      name: "Micropigmentación",
      description: "Maquillaje semipermanente para cejas, labios y ojos con resultados naturales y duraderos. Diseñamos el look perfecto para ti, realzando tu belleza natural. Técnica precisa y pigmentos de máxima calidad.",
      benefits: [
        "Aspecto natural y definido las 24 horas",
        "Ahorro de tiempo en tu rutina diaria",
        "Resultados duraderos hasta 2 años"
      ],
      icon: "Eye"
    },
    {
      id: "extensiones-pestanas",
      name: "Extensiones de Pestañas",
      description: "Consigue una mirada impactante con nuestras extensiones de pestañas pelo a pelo. Aplicación cuidadosa que respeta tus pestañas naturales y crea el efecto que deseas: natural, volumen o glamour. Luce pestañas perfectas sin máscara.",
      benefits: [
        "Mirada intensa y expresiva sin maquillaje",
        "Aplicación personalizada según tu estilo",
        "Duración de 3-4 semanas con cuidado adecuado"
      ],
      icon: "Eye"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llámanos al 644 60 95 65 o escríbenos por WhatsApp para reservar tu cita. Te atenderemos personalmente y resolveremos todas tus dudas sobre nuestros tratamientos."
    },
    {
      step: 2,
      title: "Consulta Personalizada",
      description: "Laura analizará tus necesidades específicas, tipo de piel y objetivos. Te explicaremos cada tratamiento con claridad y diseñaremos juntos el plan perfecto para ti, adaptado a tu ritmo de vida."
    },
    {
      step: 3,
      title: "Tu Tratamiento",
      description: "Disfruta de tu sesión en nuestras instalaciones impecables y relajantes. Aplicamos técnicas avanzadas con productos premium, cuidando cada mínimo detalle para que te sientas cómoda y atendida en todo momento."
    },
    {
      step: 4,
      title: "Resultados y Seguimiento",
      description: "Verás resultados visibles desde la primera sesión. Te proporcionamos consejos de cuidado en casa y seguimiento personalizado para mantener y potenciar los efectos de tu tratamiento a largo plazo."
    }
  ],
  whyUs: [
    {
      title: "Excelencia Avalada: 5 Estrellas en Google",
      description: "Nuestras 32 reseñas con valoración perfecta de 5 estrellas reflejan el compromiso de EDENIA Beauty Concept con la calidad y la satisfacción de cada cliente. La confianza de quienes ya nos han visitado es nuestra mejor carta de presentación.",
      icon: "Sparkles"
    },
    {
      title: "Profesionalidad y Trato Cercano",
      description: "Laura combina una gran preparación técnica con un trato cálido y personal que transmite confianza desde el primer momento. Te explicamos cada proceso con claridad y cuidamos cada detalle para que te sientas cómoda y atendida en todo momento.",
      icon: "Heart"
    },
    {
      title: "Instalaciones Impecables y Relajantes",
      description: "Nuestro centro está diseñado para que desconectes completamente. Un espacio limpio, acogedor y con un ambiente que invita a la relajación. Cada rincón está pensado para ofrecerte una experiencia de bienestar integral desde que cruzas la puerta.",
      icon: "Flower2"
    },
    {
      title: "Resultados Visibles y Efectivos",
      description: "Utilizamos técnicas avanzadas y productos premium que garantizan resultados reales desde la primera sesión. Además, te asesoramos sobre el mejor cuidado en casa para prolongar y potenciar los efectos de cada tratamiento a largo plazo.",
      icon: "Zap"
    }
  ],
  team: [
    {
      name: "Laura",
      role: "Directora y Especialista en Estética",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionadas por la belleza y el cuidado personal. En EDENIA Beauty Concept. nos dedicamos a realzar la belleza natural de cada clienta con tratamientos de calidad."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "EDENIA Beauty Concept. - Imagen 1"
    },
    {
      src: "/images/hero.webp",
      alt: "EDENIA Beauty Concept. - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "EDENIA Beauty Concept. - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "EDENIA Beauty Concept. - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "EDENIA Beauty Concept. - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "EDENIA Beauty Concept. - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "EDENIA Beauty Concept. - Imagen 7"
    },
    {
      src: "/images/gallery/8.webp",
      alt: "EDENIA Beauty Concept. - Imagen 8"
    }
  ],
  faq: [
    {
      question: "¿Qué tratamientos son los más demandados en EDENIA Beauty Concept?",
      answer: "Nuestros servicios estrella son las limpiezas faciales profundas y los masajes relajantes, ambos muy valorados por nuestros clientes. También destacan nuestros tratamientos faciales antiedad, depilación láser y tratamientos corporales reductores. Laura te asesorará personalmente para recomendarte el tratamiento más adecuado según tus necesidades y objetivos específicos."
    },
    {
      question: "¿Cómo puedo reservar mi cita en el centro?",
      answer: "Reservar tu cita es muy sencillo. Puedes llamarnos directamente al 644 60 95 65 o contactarnos por WhatsApp en el mismo número. Te atenderemos personalmente, resolveremos tus dudas y encontraremos el mejor horario para ti. Nuestro trato cercano y profesional comienza desde el primer contacto."
    },
    {
      question: "¿Qué hace especial a EDENIA Beauty Concept?",
      answer: "Contamos con una valoración de 5 estrellas en Google con 32 reseñas que destacan nuestra profesionalidad, trato cercano y resultados efectivos. Nuestras instalaciones son impecables y muy relajantes, y Laura cuida cada mínimo detalle en todos los tratamientos. Además, te explicamos todo el proceso y te asesoramos sobre el mejor cuidado en casa para prolongar los resultados."
    },
    {
      question: "¿Los tratamientos faciales son aptos para todo tipo de piel?",
      answer: "Sí, totalmente. En EDENIA Beauty Concept personalizamos cada tratamiento facial según tu tipo de piel y necesidades específicas. Durante la consulta inicial analizamos tu piel y seleccionamos los productos y técnicas más adecuados para ti. Ya sea piel seca, grasa, mixta o sensible, diseñamos un protocolo que garantice los mejores resultados sin irritaciones."
    },
    {
      question: "¿Cuántas sesiones necesito para ver resultados?",
      answer: "Depende del tratamiento elegido. En tratamientos como limpiezas faciales o masajes, notarás resultados inmediatos desde la primera sesión. Para tratamientos de depilación láser o reductores corporales, recomendamos un plan de varias sesiones espaciadas según protocolo. Durante tu consulta personalizada, Laura te explicará el número de sesiones estimado y la frecuencia ideal para tu caso."
    },
    {
      question: "¿Dónde está ubicado EDENIA Beauty Concept?",
      answer: "Estamos en Villarrobledo, Albacete, en un espacio diseñado para tu comodidad y relajación. Nuestras instalaciones son amplias, impecables y cuentan con un ambiente acogedor que te permitirá desconectar desde que entras. Si necesitas indicaciones específicas para llegar, no dudes en contactarnos y te guiaremos encantados."
    },
    {
      question: "¿Qué productos utilizáis en los tratamientos?",
      answer: "Trabajamos exclusivamente con productos premium de alta calidad, seleccionados específicamente para cada tipo de tratamiento y tipo de piel. Utilizamos marcas profesionales reconocidas que garantizan resultados efectivos y seguros. Además, Laura te recomendará productos de cuidado en casa para mantener y potenciar los resultados de tu tratamiento entre sesiones."
    },
    {
      question: "¿Ofrecéis planes de tratamiento personalizados?",
      answer: "Absolutamente. En EDENIA Beauty Concept cada cliente recibe un plan totalmente personalizado. Analizamos tus necesidades, objetivos y presupuesto para diseñar juntos el tratamiento o combinación de tratamientos más efectivo. Te explicamos cada paso con claridad y ajustamos el plan según tu evolución y preferencias para garantizar tu satisfacción total."
    }
  ],
  seo: {
    titleTemplate: "%s | EDENIA Beauty Concept",
    defaultTitle: "EDENIA Beauty Concept | Centro de Estética en Villarrobledo",
    defaultDescription: "Centro de estética en Villarrobledo, Albacete. Tratamientos faciales, masajes relajantes, depilación láser y cuidados corporales. 5★ en Google. ¡Pide tu cita! 644 60 95 65",
    keywords: [
      "EDENIA Beauty Concept",
      "centro de estética Villarrobledo",
      "tratamientos faciales Villarrobledo",
      "limpieza facial Villarrobledo",
      "masajes relajantes Villarrobledo",
      "depilación láser Villarrobledo",
      "estética Albacete",
      "tratamientos corporales Villarrobledo",
      "micropigmentación Villarrobledo",
      "extensiones pestañas Villarrobledo",
      "centro belleza Villarrobledo",
      "manicura pedicura Villarrobledo"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "EDENIA Beauty Concept.",
    cif: "",
    registeredAddress: "Av. de los Reyes Católicos, 56, local bajo, 02600 Villarrobledo, Albacete, España, Villarrobledo, Albacete"
  },
  heroHeadline: [
    "Tu Centro de",
    "Belleza",
    "en Villarrobledo"
  ],
  heroDescription: "En EDENIA Beauty Concept combinamos profesionalidad y cercanía para ofrecerte los tratamientos de estética más efectivos en Villarrobledo. Desde limpiezas faciales profundas hasta masajes relajantes, cada servicio está diseñado para que desconectes, te cuides y veas resultados reales en un ambiente acogedor y relajante.",
  specialty: "Tratamientos Faciales Personalizados",
  ctaLabel: "Realza tu Belleza",
  ctaHeadline: "¿Lista para sentirte radiante y renovada?",
  ctaDescription: "Reserva tu cita en EDENIA Beauty Concept y descubre por qué somos el centro de estética mejor valorado de Villarrobledo. Te asesoramos personalmente para diseñar el tratamiento perfecto para ti.",
  statsLabel: "Clientas",
  schemaType: "BeautySalon",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Técnicas avanzadas de estética y belleza para realzar tu imagen y cuidar de ti.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la belleza en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu belleza, nuestra pasión",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para realzar tu belleza natural.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestras clientas",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestro centro",
    galleryDescription: "Un espacio diseñado para tu bienestar y relajación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestras clientas.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializadas",
    teamDescription: "Experiencia y pasión al servicio de tu belleza"
  }
}

export type Clinic = typeof clinic
