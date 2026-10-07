(function () {
  "use strict";

  // data-i18n-html: translations come only from static MESSAGES; sanitizeI18nHtml allows <strong> and <span class="sap-text">.

  const STORAGE_KEY = "portfolio-lang";

  const MESSAGES = {
    en: {
      meta: {
        title: "Samuel Criado — SAP Backend Developer · ABAP Cloud Certified",
        description: "SAP backend developer certified in ABAP Cloud, CAP, Integration Suite, and Generative AI. Python & API background. Granada, Spain.",
        ogTitle: "Samuel Criado — SAP Backend Developer · ABAP Cloud Certified",
        ogDescription: "SAP backend developer certified in ABAP Cloud, CAP, Integration Suite, and Generative AI.",
      },
      skipLink: "Skip to main content",
      noscript: "This site uses JavaScript for icons and interactive content. Please enable JavaScript for the full experience.",
      nav: {
        about: "about()",
        experience: "experience()",
        education: "education()",
        certifications: "certifications()",
        skills: "skills()",
        projects: "projects()",
        contact: "contact()",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        badge: "# ABAP Backend Developer",
        tagline: "ABAP Cloud · SAP BTP · Clean Core",
        subtagline: "Python & API background · Granada, Spain",
        cta: "View certifications",
      },
      about: {
        title: "About Me",
        location: "Granada, Spain",
        lead: 'SAP backend developer with certifications in <strong>ABAP Cloud</strong>, <strong>CAP</strong>, <strong>Integration Suite</strong>, and <strong>Generative AI</strong>, backed by experience in Python APIs and integration.',
        p1: "I completed SAP backend training with Experis Academy in July 2026 and earned four SAP certifications. My prior work on scalable APIs, data pipelines, and integrations complements my SAP backend and integration skills.",
        sapFocusLabel: "print(sap_focus)",
        sapFocus: [
          "SAP-certified ABAP Cloud backend development",
          "RESTful ABAP · RAP · CDS data modelling",
          "SAP BTP · CAP · OData · Fiori Elements",
          "Integration Suite · API Management · Cloud Integration",
          "XSUAA · security & trust management",
        ],
        transferableLabel: "print(transferable_skills)",
        transferable: [
          "REST APIs (Django REST Framework, FastAPI)",
          "Database design & SQL",
          "Docker · CI/CD · observability (Grafana, Prometheus)",
          "Automated integration & testing",
        ],
      },
      experience: {
        title: "Work Experience",
        syncronik: {
          title: "Django Backend Developer (APIs, testing, DevOps)",
          period: "Syncronik · Internship · Sep 2023 – Nov 2023",
          bullets: [
            "Designed and developed scalable APIs with Django REST Framework.",
            "Unit and integration tests; code and API documentation.",
            "Backend patterns applicable to SAP backend and integration projects.",
          ],
        },
        founder: {
          title: "Backend Developer & Founder",
          period: "Self-employed · B2B Footwear Wholesale · Remote · Nov 2020 – July 2024",
          intro: 'Sold footwear directly to companies (no web, no storefront). Designed and executed a software ecosystem for <strong>market arbitrage</strong> and wholesale operations, automating profit opportunity detection through real-time data analysis.',
          bullets: [
            "<strong>Market Arbitrage Systems:</strong> Developed Python-based monitoring tools to identify price inefficiencies and execute optimized inventory acquisitions.",
            "<strong>Backend Automation:</strong> Built end-to-end pipelines for automated invoicing, logistics, and labeling by integrating third-party carrier APIs.",
            "<strong>Inventory Intelligence:</strong> Implemented business logic for demand forecasting, achieving a 20% reduction in stock surplus via data-driven insights.",
            "<strong>Integration experience:</strong> End-to-end integration pipelines aligned with SAP Integration Suite and event-driven architectures.",
          ],
        },
      },
      education: {
        title: "Education",
        experis: {
          title: "Experis Academy",
          period: "Apr 2026 – Jul 2026",
          status: "Completed",
          summary: "Completed official SAP backend training in ABAP Cloud, SAP BTP, CAP applications, and Integration Suite in July 2026; earned four SAP certifications.",
          link: "→ certifications()",
        },
        nucamp: {
          title: "Nucamp Coding Bootcamp",
          period: "Apr 2023 – Jul 2023",
          modules: [
            { title: "Back-end Bootcamp (Python, SQL, DevOps)", desc: "API development with Django, Flask, FastAPI; Django REST Framework; backend web dev; DevOps fundamentals." },
            { title: "Modern Software Engineering (DevOps, CI/CD, Docker, K8s, cloud)", desc: "CI/CD, Docker, Kubernetes; AWS, Google Cloud, Azure; Jenkins, GitHub Actions; agile." },
            { title: "SQL and Data (modeling with Python)", desc: "SQL, data modeling; ORM; API and backend context." },
          ],
        },
        ies: {
          title: "Associate Degree — Web Apps Development",
          period: "IES Francisco Ayala, Spain · 2017–2019",
          note: "(unfinished)",
        },
      },
      certifications: {
        title: "Certifications",
        subtitle: "Experis Academy · Completed July 2026 · 4 SAP certifications",
        certifiedBadge: "Certified",
        viewCredential: "View credential",
        learningTitle: "SAP training completed",
      },
      certs: {
        abapd: {
          name: "SAP Certified - Back-End Developer - ABAP Cloud",
          desc: "Backend development on ABAP Cloud: RESTful ABAP, RAP business objects, CDS data modelling, and Clean Core extensions on BTP for S/4HANA Cloud.",
          chips: ["RESTful ABAP", "RAP", "CDS", "Clean Core"],
          validity: "Issued Jul 2026 · Expires Jul 2027 · Credential ID: C_ABAPD",
        },
        cpe: {
          name: "SAP Certified - Backend Developer - SAP Cloud Application Programming Model",
          desc: "Design and develop cloud-native applications with CAP, OData services, business logic, Fiori Elements, and SAP BTP.",
          chips: ["CAP", "OData", "Fiori Elements", "XSUAA"],
          validity: "Issued Sep 2026 · Expires Sep 2027 · Credential ID: C_CPE_2601",
        },
        aig: {
          name: "SAP Certified - SAP Generative AI Developer",
          desc: "Apply generative AI concepts and SAP tools to build AI-enabled applications and solutions.",
          chips: ["Generative AI", "Prompt Engineering", "SAP AI"],
          validity: "Issued Sep 2026 · Expires Aug 2027 · Credential ID: C_AIG_2604",
        },
        cpi: {
          name: "SAP Certified - Integration Developer",
          desc: "Design and implement integrations with SAP Integration Suite, including API Management and Cloud Integration.",
          chips: ["API Management", "Cloud Integration", "iFlows", "Event Mesh"],
          validity: "Issued Sep 2026 · Expires Aug 2027 · Credential ID: C_CPI_2601",
        },
      },
      learning: {
        abap: {
          title: "ABAP Cloud fundamentals",
          items: [
            "ABAP programming for cloud (syntax, OO ABAP, SQL, modularization)",
            "RESTful Application Programming (RAP) and service exposure",
            "ABAP Dictionary and Core Data Services (CDS)",
            "Clean Core and upgrade-safe backend design",
            "Error handling and modular ABAP development",
          ],
        },
        btp: {
          title: "SAP Business Technology Platform",
          items: [
            "BTP architecture, services, and commercial models",
            "SAP BTP Cockpit and Discovery Center",
            "Low-code vs pro-code development (SAP Build, CAP)",
            "Identity, roles, XSUAA, and App Router",
            "Data platforms overview (HANA Cloud, Datasphere)",
          ],
        },
        cap: {
          title: "Cloud Application Programming — CAP",
          items: [
            "End-to-end CAP project lifecycle",
            "OData protocol and service definition",
            "Custom event handlers and business logic",
            "External service integration and connectivity",
            "Deployment, observability, SAP Build Work Zone",
          ],
        },
        integration: {
          title: "Integration & APIs — Integration Suite",
          items: [
            "API lifecycle and SAP Business Accelerator Hub",
            "API Management: providers, proxies, policies",
            "Cloud Integration: iFlows, monitoring, logging",
            "Event Mesh and event-driven patterns",
            "Integration strategy and Clean Core alignment",
          ],
        },
      },
      skills: {
        title: "Skills & Technologies",
        statusBadge: "SAP certified",
        typeMe: "'SAPBackendDeveloper'  # Training completed · 4 SAP certifications",
        groups: {
          sapBackend: {
            label: "SAP ABAP Backend",
            items: ["ABAP Cloud", "RESTful ABAP", "RAP", "CDS Views", "ABAP Dictionary", "OO ABAP", "Clean Core"],
          },
          sapBtp: {
            label: "SAP BTP & Integration",
            items: ["SAP BTP", "CAP", "OData", "Fiori Elements", "Integration Suite", "API Management", "Cloud Integration", "XSUAA", "Event Mesh"],
          },
          foundations: {
            label: "Transferable foundations",
            items: ["Python", "SQL", "Git", "Unit testing", "REST APIs"],
          },
          previous: {
            label: "Previous backend stack",
            items: ["Django", "Flask", "FastAPI", "PostgreSQL", "MongoDB", "Scrapy", "Celery", "Redis"],
          },
          devops: {
            label: "DevOps & observability",
            items: ["Docker", "Kubernetes", "GitHub Actions", "Grafana", "Prometheus", "Loki"],
          },
        },
      },
      projects: {
        title: "Side Projects",
        subtitle: "Technical portfolio from my Python backend work — demonstrates API design, service integration, and data pipelines. Skills transferable to SAP backend and integration work.",
        preSapBadge: "Pre-SAP",
        ecosystemTitle: 'Two projects, <span class="sap-text">one ecosystem</span>',
        ecosystemDesc: "These projects were designed to work together: FootyCollect's manual collection tools remain usable, while its automatic FKApi search/import is unavailable after stricter Cloudflare protections at Football Kit Archive blocked collection and the hosted API was taken offline.",
        dataFlowTitle: "// Historical data flow (integration unavailable)",
        futureNote: "# SAP training completed · ABAP Cloud · CAP · Integration Suite · Generative AI",
        fkapiCard: "Proof-of-concept scraper and API for football kit metadata. Collection stopped after stricter Cloudflare anti-bot protections; the hosted API is no longer served.",
        fcCard: "Django app for cataloging football memorabilia, with manual item creation, photos, search, profiles, and a REST API. Automatic FKApi search/import is unavailable due to upstream Cloudflare restrictions.",
        project01: "Project 01",
        project02: "Project 02",
        fkapiDesc: "Proof-of-concept Django REST API for football kit metadata. Since May 2026, stricter Cloudflare anti-bot protections at Football Kit Archive have blocked collection. The hosted API is no longer served, and the project cannot be maintained while the upstream source remains inaccessible.",
        fcDesc: "Django platform for football memorabilia collectors to catalog, organize, and manage collections. Manual item creation and photo management remain available. Automatic FKApi search and import are unavailable because external Cloudflare restrictions blocked data collection and the hosted API is no longer served.",
        viewDemo: "View demo",
        technologies: "Technologies",
        fkapiFeatures: [
          { title: "Upstream access restrictions", desc: "Since May 2026, stricter Cloudflare anti-bot protections at Football Kit Archive have blocked automated collection; scraping was stopped rather than bypassing those controls." },
          { title: "Hosted API unavailable", desc: "The hosted FKApi service is no longer served, so API lookups and automatic kit imports are unavailable." },
          { title: "Project status", desc: "Further FKApi maintenance is not possible while the external source remains inaccessible; the code remains available as a technical reference." },
        ],
        fcFeatures: [
          { title: "Multi-Item Types & Search", desc: "Jerseys, shorts, outerwear, tracksuits (MTI); advanced search and filtering" },
          { title: "FKApi integration unavailable", desc: "Stricter Cloudflare restrictions on Football Kit Archive stopped automated collection; the hosted FKApi API is no longer served. Manual item creation still works." },
          { title: "Photos, Profiles & API", desc: "Photo upload and organization; user profiles with privacy controls; REST API (drf-spectacular, OpenAPI/Swagger)" },
        ],
      },
      contact: {
        title: "Get in Touch",
        heading: 'Let\'s build something <span class="sap-text">together</span>',
        subtitle: "Open to SAP backend opportunities, internships, and junior ABAP Cloud / BTP roles. Also happy to discuss integration and API projects.",
        thanks: "Thanks for visiting!",
      },
      footer: { copyright: "© 2026" },
    },
    es: {
      meta: {
        title: "Samuel Criado — Desarrollador Backend SAP · Certificado ABAP Cloud",
        description: "Desarrollador backend SAP certificado en ABAP Cloud, CAP, Integration Suite e IA generativa. Experiencia en Python y APIs. Granada, España.",
        ogTitle: "Samuel Criado — Desarrollador Backend SAP · Certificado ABAP Cloud",
        ogDescription: "Desarrollador backend SAP certificado en ABAP Cloud, CAP, Integration Suite e IA generativa.",
      },
      skipLink: "Saltar al contenido principal",
      noscript: "Este sitio usa JavaScript para iconos y contenido interactivo. Activa JavaScript para la experiencia completa.",
      nav: {
        about: "about()",
        experience: "experience()",
        education: "education()",
        certifications: "certifications()",
        skills: "skills()",
        projects: "projects()",
        contact: "contact()",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        badge: "# Desarrollador ABAP Backend",
        tagline: "ABAP Cloud · SAP BTP · Clean Core",
        subtagline: "Base Python y APIs · Granada, España",
        cta: "Ver certificaciones",
      },
      about: {
        title: "Sobre mí",
        location: "Granada, España",
        lead: 'Desarrollador backend SAP con certificaciones en <strong>ABAP Cloud</strong>, <strong>CAP</strong>, <strong>Integration Suite</strong> e <strong>IA generativa</strong>, y experiencia en APIs e integración con Python.',
        p1: "Completé la formación de backend SAP de Experis Academy en julio de 2026 y obtuve cuatro certificaciones SAP. Mi experiencia previa con APIs escalables, pipelines de datos e integraciones complementa mis competencias de backend SAP.",
        sapFocusLabel: "print(sap_focus)",
        sapFocus: [
          "Desarrollo backend ABAP Cloud certificado por SAP",
          "RESTful ABAP · RAP · modelado CDS",
          "SAP BTP · CAP · OData · Fiori Elements",
          "Integration Suite · API Management · Cloud Integration",
          "XSUAA · seguridad y gestión de confianza",
        ],
        transferableLabel: "print(transferable_skills)",
        transferable: [
          "APIs REST (Django REST Framework, FastAPI)",
          "Diseño de bases de datos y SQL",
          "Docker · CI/CD · observabilidad (Grafana, Prometheus)",
          "Integración automatizada y testing",
        ],
      },
      experience: {
        title: "Experiencia laboral",
        syncronik: {
          title: "Desarrollador Backend Django (APIs, testing, DevOps)",
          period: "Syncronik · Prácticas · Sep 2023 – Nov 2023",
          bullets: [
            "Diseño y desarrollo de APIs escalables con Django REST Framework.",
            "Tests unitarios y de integración; documentación de código y API.",
            "Patrones backend aplicables a proyectos SAP backend e integración.",
          ],
        },
        founder: {
          title: "Desarrollador Backend y Fundador",
          period: "Autónomo · Mayorista B2B calzado · Remoto · Nov 2020 – Jul 2024",
          intro: 'Venta directa de calzado a empresas (sin web ni tienda). Diseñé y ejecuté un ecosistema software de <strong>arbitraje de mercado</strong> y operaciones mayoristas, automatizando la detección de oportunidades con análisis de datos en tiempo real.',
          bullets: [
            "<strong>Sistemas de arbitraje:</strong> Herramientas Python para detectar ineficiencias de precio y optimizar compras de inventario.",
            "<strong>Automatización backend:</strong> Pipelines end-to-end de facturación, logística y etiquetado integrando APIs de transportistas.",
            "<strong>Inteligencia de inventario:</strong> Lógica de negocio para previsión de demanda, reduciendo excedentes un 20% con datos.",
            "<strong>Experiencia en integración:</strong> Pipelines alineados con SAP Integration Suite y arquitecturas event-driven.",
          ],
        },
      },
      education: {
        title: "Formación",
        experis: {
          title: "Experis Academy",
          period: "Abr 2026 – Jul 2026",
          status: "Completada",
          summary: "Formación oficial de backend SAP completada en julio de 2026: ABAP Cloud, SAP BTP, aplicaciones CAP e Integration Suite. Obtuve cuatro certificaciones SAP.",
          link: "→ certifications()",
        },
        nucamp: {
          title: "Nucamp Coding Bootcamp",
          period: "Abr 2023 – Jul 2023",
          modules: [
            { title: "Back-end Bootcamp (Python, SQL, DevOps)", desc: "APIs con Django, Flask, FastAPI; Django REST Framework; DevOps fundamentals." },
            { title: "Ingeniería de software moderna (DevOps, CI/CD, Docker, K8s, cloud)", desc: "CI/CD, Docker, Kubernetes; AWS, Google Cloud, Azure; Jenkins, GitHub Actions; agile." },
            { title: "SQL y datos (modelado con Python)", desc: "SQL, modelado de datos; ORM; contexto API y backend." },
          ],
        },
        ies: {
          title: "Grado Superior — Desarrollo de Aplicaciones Web",
          period: "IES Francisco Ayala, España · 2017–2019",
          note: "(sin terminar)",
        },
      },
      certifications: {
        title: "Certificaciones",
        subtitle: "Experis Academy · Completada en julio de 2026 · 4 certificaciones SAP",
        certifiedBadge: "Certificado",
        viewCredential: "Ver credencial",
        learningTitle: "Formación SAP completada",
      },
      certs: {
        abapd: {
          name: "SAP Certified - Back-End Developer - ABAP Cloud",
          desc: "Desarrollo backend en ABAP Cloud: RESTful ABAP, objetos de negocio RAP, modelado CDS y extensiones Clean Core en BTP para S/4HANA Cloud.",
          chips: ["RESTful ABAP", "RAP", "CDS", "Clean Core"],
          validity: "Expedida jul. 2026 · Vence jul. 2027 · ID de credencial: C_ABAPD",
        },
        cpe: {
          name: "SAP Certified - Backend Developer - SAP Cloud Application Programming Model",
          desc: "Diseño y desarrollo de aplicaciones cloud-native con CAP, servicios OData, lógica de negocio, Fiori Elements y SAP BTP.",
          chips: ["CAP", "OData", "Fiori Elements", "XSUAA"],
          validity: "Expedida sept. 2026 · Vence sept. 2027 · ID de credencial: C_CPE_2601",
        },
        aig: {
          name: "SAP Certified - SAP Generative AI Developer",
          desc: "Aplicación de conceptos de IA generativa y herramientas SAP para crear aplicaciones y soluciones con IA.",
          chips: ["IA generativa", "Prompt engineering", "SAP AI"],
          validity: "Expedida sept. 2026 · Vence ago. 2027 · ID de credencial: C_AIG_2604",
        },
        cpi: {
          name: "SAP Certified - Integration Developer",
          desc: "Diseño e implementación de integraciones con SAP Integration Suite, incluyendo API Management y Cloud Integration.",
          chips: ["API Management", "Cloud Integration", "iFlows", "Event Mesh"],
          validity: "Expedida sept. 2026 · Vence ago. 2027 · ID de credencial: C_CPI_2601",
        },
      },
      learning: {
        abap: {
          title: "Fundamentos ABAP Cloud",
          items: [
            "Programación ABAP para cloud (sintaxis, OO ABAP, SQL, modularización)",
            "RESTful Application Programming (RAP) y exposición de servicios",
            "ABAP Dictionary y Core Data Services (CDS)",
            "Clean Core y diseño backend upgrade-safe",
            "Gestión de errores y desarrollo ABAP modular",
          ],
        },
        btp: {
          title: "SAP Business Technology Platform",
          items: [
            "Arquitectura BTP, servicios y modelos comerciales",
            "SAP BTP Cockpit y Discovery Center",
            "Desarrollo low-code vs pro-code (SAP Build, CAP)",
            "Identidad, roles, XSUAA y App Router",
            "Panorama de datos (HANA Cloud, Datasphere)",
          ],
        },
        cap: {
          title: "Cloud Application Programming — CAP",
          items: [
            "Ciclo de vida end-to-end de proyectos CAP",
            "Protocolo OData y definición de servicios",
            "Event handlers y lógica de negocio personalizada",
            "Integración de servicios externos y conectividad",
            "Despliegue, observabilidad, SAP Build Work Zone",
          ],
        },
        integration: {
          title: "Integración y APIs — Integration Suite",
          items: [
            "Ciclo de vida de APIs y SAP Business Accelerator Hub",
            "API Management: providers, proxies, policies",
            "Cloud Integration: iFlows, monitoring, logging",
            "Event Mesh y patrones event-driven",
            "Estrategia de integración y alineación Clean Core",
          ],
        },
      },
      skills: {
        title: "Skills y tecnologías",
        statusBadge: "Certificado SAP",
        typeMe: "'SAPBackendDeveloper'  # Formación completada · 4 certificaciones SAP",
        groups: {
          sapBackend: {
            label: "Backend SAP ABAP",
            items: ["ABAP Cloud", "RESTful ABAP", "RAP", "CDS Views", "ABAP Dictionary", "OO ABAP", "Clean Core"],
          },
          sapBtp: {
            label: "SAP BTP e integración",
            items: ["SAP BTP", "CAP", "OData", "Fiori Elements", "Integration Suite", "API Management", "Cloud Integration", "XSUAA", "Event Mesh"],
          },
          foundations: {
            label: "Bases transferibles",
            items: ["Python", "SQL", "Git", "Unit testing", "REST APIs"],
          },
          previous: {
            label: "Stack backend previo",
            items: ["Django", "Flask", "FastAPI", "PostgreSQL", "MongoDB", "Scrapy", "Celery", "Redis"],
          },
          devops: {
            label: "DevOps y observabilidad",
            items: ["Docker", "Kubernetes", "GitHub Actions", "Grafana", "Prometheus", "Loki"],
          },
        },
      },
      projects: {
        title: "Proyectos complementarios",
        subtitle: "Portfolio técnico de mi trabajo backend en Python — demuestra diseño de APIs, integración de servicios y pipelines de datos. Competencias transferibles a trabajo backend SAP e integración.",
        preSapBadge: "Pre-SAP",
        ecosystemTitle: 'Dos proyectos, <span class="sap-text">un ecosistema</span>',
        ecosystemDesc: "Estos proyectos se diseñaron para trabajar juntos: las funciones manuales de FootyCollect siguen disponibles, pero la búsqueda e importación automáticas mediante FKApi no funcionan desde que las restricciones más estrictas de Cloudflare en Football Kit Archive bloquearon la recopilación y se dejó de servir la API.",
        dataFlowTitle: "// Flujo histórico de datos (integración no disponible)",
        futureNote: "# Formación SAP completada · ABAP Cloud · CAP · Integration Suite · IA generativa",
        fkapiCard: "Scraper y API de prueba de concepto para metadatos de equipaciones. La recopilación se detuvo por las restricciones anti-bots más estrictas de Cloudflare; la API alojada ya no se sirve.",
        fcCard: "App Django para catalogar memorabilia futbolística, con creación manual, fotos, búsqueda, perfiles y REST API. La búsqueda e importación automáticas de FKApi no están disponibles por las restricciones externas de Cloudflare.",
        project01: "Proyecto 01",
        project02: "Proyecto 02",
        fkapiDesc: "API REST Django de prueba de concepto para metadatos de equipaciones. Desde mayo de 2026, las restricciones anti-bots más estrictas de Cloudflare en Football Kit Archive bloquean la recopilación. La API alojada ya no se sirve y no es posible mantener el proyecto mientras la fuente externa siga inaccesible.",
        fcDesc: "Plataforma Django para catalogar y gestionar colecciones de memorabilia futbolística. La creación manual de artículos y la gestión de fotos siguen disponibles. La búsqueda e importación automáticas de FKApi no funcionan porque las restricciones externas de Cloudflare bloquearon la recopilación y la API alojada ya no se sirve.",
        viewDemo: "Ver demo",
        technologies: "Tecnologías",
        fkapiFeatures: [
          { title: "Restricciones de acceso externas", desc: "Desde mayo de 2026, las restricciones anti-bots más estrictas de Cloudflare en Football Kit Archive bloquean la recopilación automática; se detuvo el scraping en lugar de eludir esos controles." },
          { title: "API alojada no disponible", desc: "El servicio FKApi alojado ya no se sirve, por lo que las consultas a la API y las importaciones automáticas no están disponibles." },
          { title: "Estado del proyecto", desc: "No es posible continuar el mantenimiento de FKApi mientras la fuente externa siga inaccesible; el código queda disponible como referencia técnica." },
        ],
        fcFeatures: [
          { title: "Multi-tipo y búsqueda", desc: "Camisetas, pantalones, outerwear, tracksuits (MTI); búsqueda avanzada" },
          { title: "Integración FKApi no disponible", desc: "Las restricciones más estrictas de Cloudflare en Football Kit Archive detuvieron la recopilación automática; la API alojada de FKApi ya no se sirve. La creación manual de artículos sigue funcionando." },
          { title: "Fotos, perfiles y API", desc: "Subida de fotos; perfiles con privacidad; REST API (OpenAPI/Swagger)" },
        ],
      },
      contact: {
        title: "Contacto",
        heading: 'Construyamos algo <span class="sap-text">juntos</span>',
        subtitle: "Abierto a oportunidades SAP backend, prácticas y roles junior ABAP Cloud / BTP. También disponible para proyectos de integración y APIs.",
        thanks: "¡Gracias por visitar!",
      },
      footer: { copyright: "© 2026" },
    },
  };

  const DEFAULT_LANG = "en";

  function normalizeLang(lang) {
    if (typeof lang === "string" && lang.length > 0 && MESSAGES[lang] && MESSAGES[lang].meta) {
      return lang;
    }
    if (lang !== undefined && lang !== null && lang !== "") {
      console.error("I18N: unsupported or invalid language:", lang, "- falling back to", DEFAULT_LANG);
    }
    return DEFAULT_LANG;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function sanitizeI18nHtml(str) {
    return escapeHtml(str)
      .replace(/&lt;strong&gt;/gi, "<strong>")
      .replace(/&lt;\/strong&gt;/gi, "</strong>")
      .replace(/&lt;span class=&quot;sap-text&quot;&gt;/gi, '<span class="sap-text">')
      .replace(/&lt;\/span&gt;/gi, "</span>");
  }

  function resolve(obj, key) {
    return key.split(".").reduce(function (acc, part) {
      return acc && acc[part] !== undefined ? acc[part] : undefined;
    }, obj);
  }

  function getLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "es") return stored;
    } catch (e) { /* ignore */ }
    if (typeof navigator !== "undefined" && navigator.language && navigator.language.toLowerCase().startsWith("es")) {
      return "es";
    }
    return "en";
  }

  function t(key, lang) {
    const value = resolve(MESSAGES[lang || getLang()], key);
    return value !== undefined ? value : key;
  }

  function updateMeta(lang) {
    const m = MESSAGES[lang].meta;
    document.title = m.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", m.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", m.ogTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", m.ogDescription);
  }

  function applyStatic(lang) {
    lang = normalizeLang(lang);
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const val = t(key, lang);
      if (typeof val === "string") el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      const val = t(key, lang);
      if (typeof val === "string") el.innerHTML = sanitizeI18nHtml(val);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        const parts = pair.trim().split(":");
        if (parts.length === 2) {
          const attrVal = t(parts[1].trim(), lang);
          if (typeof attrVal === "string") el.setAttribute(parts[0].trim(), attrVal);
        }
      });
    });
    document.querySelectorAll(".i18n-en").forEach(function (el) {
      el.classList.toggle("hidden", lang !== "en");
    });
    document.querySelectorAll(".i18n-es").forEach(function (el) {
      el.classList.toggle("hidden", lang !== "es");
    });
    document.querySelectorAll(".lang-toggle-btn").forEach(function (btn) {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
    updateMeta(lang);
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "es") return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignore */ }
    applyStatic(lang);
    if (typeof window.renderPortfolioDynamic === "function") {
      window.renderPortfolioDynamic(lang);
    }
  }

  function initLangToggle() {
    document.querySelectorAll(".lang-toggle-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  window.I18N = {
    MESSAGES: MESSAGES,
    t: t,
    getLang: getLang,
    setLang: setLang,
    apply: applyStatic,
    initLangToggle: initLangToggle,
  };
})();
