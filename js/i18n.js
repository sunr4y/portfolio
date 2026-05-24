(function () {
  "use strict";

  // data-i18n-html: translations come only from static MESSAGES; sanitizeI18nHtml allows <strong> and <span class="sap-text">.

  const STORAGE_KEY = "portfolio-lang";

  const MESSAGES = {
    en: {
      meta: {
        title: "Samuel Criado — ABAP Backend Developer · In Training",
        description: "ABAP backend developer in training (ABAP Cloud, SAP BTP). Python & API background. Granada, Spain.",
        ogTitle: "Samuel Criado — ABAP Backend Developer · In Training",
        ogDescription: "ABAP backend developer in training (ABAP Cloud, SAP BTP). Python & API background.",
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
        displayName: "Samuel Criado",
        location: "Granada, Spain",
        lead: 'ABAP backend developer in training — <strong>ABAP Cloud</strong>, <strong>RAP</strong>, and <strong>SAP BTP</strong>, with a strong foundation in Python APIs and integration.',
        p1: "I'm training as an ABAP backend developer: RESTful ABAP, RAP, CDS views, and SAP BTP fundamentals. My prior work on scalable APIs, data pipelines, and integrations transfers well to enterprise backend roles.",
        sapFocusLabel: "print(sap_focus)",
        sapFocus: [
          "ABAP Cloud backend development (in training)",
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
          status: "In progress",
          summary: "Official SAP backend training: ABAP Cloud development, SAP BTP, CAP applications, and Integration Suite. Preparing for C_ABAPD, C_CPE, and C_CPI certifications.",
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
        subtitle: "Experis Academy · In preparation · Apr–Jul 2026",
        inPrepBadge: "In preparation",
        learningTitle: "What I'm learning",
      },
      certs: {
        abapd: {
          name: "SAP Certified Associate — Back-End Developer — ABAP Cloud",
          desc: "Backend development on ABAP Cloud: RESTful ABAP, RAP business objects, CDS data modelling, and Clean Core extensions on BTP for S/4HANA Cloud.",
          chips: ["RESTful ABAP", "RAP", "CDS", "Clean Core"],
        },
        cpe: {
          name: "SAP Certified Development Associate — SAP Extension Suite",
          desc: "Cloud-native extensions with CAP: OData services, custom business logic, Fiori Elements UI, external service consumption, XSUAA security, deployment on SAP BTP.",
          chips: ["CAP", "OData", "Fiori Elements", "XSUAA"],
        },
        cpi: {
          name: "SAP Certified Development Associate — SAP Integration Suite",
          desc: "Enterprise integration: API design and proxies, policies, Cloud Integration flows (iFlows), messaging, Event Mesh, and event-driven architectures.",
          chips: ["API Management", "Cloud Integration", "iFlows", "Event Mesh"],
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
        inTrainingBadge: "In training",
        typeMe: "'SAPBackendDeveloper'  # ABAP Cloud · BTP — in training",
        groups: {
          sapBackend: {
            label: "SAP ABAP Backend (in training)",
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
        ecosystemDesc: "A demonstration of how backend systems can work together seamlessly. FootyCollect uses FKApi to automatically import football kit data, creating a unified experience for collectors.",
        futureNote: "# Future: SAP backend projects · Integration Suite · ABAP Cloud apps",
        fkapiCard: "Web scraper and API for footballkitarchive.com. Extracts kit images, club logos, seasons, and detailed metadata.",
        fcCard: "Django app for cataloging football memorabilia: jerseys, shorts, outerwear, tracksuits. FKApi integration, photo management, search, user profiles, REST API (OpenAPI).",
        project01: "Project 01",
        project02: "Project 02",
        fkapiDesc: "Django-based REST API that provides access to a comprehensive database of football kit information. Scrapes and aggregates data from public sources with ethical scraping (rate limiting, robots.txt). Built for developers and collectors.",
        fcDesc: "Django-based platform for football memorabilia collectors to catalog, organize, and manage collections. Supports jerseys, shorts, outerwear, and tracksuits. Integrates with FKApi for automatic kit addition when fkapi is running.",
        viewDemo: "View demo",
        technologies: "Technologies",
        fkapiFeatures: [
          { title: "Ethical Web Scraping", desc: "Beautiful Soup + requests; rate limiting; respects robots.txt" },
          { title: "RESTful API (Django Ninja)", desc: "Kits, clubs, seasons, brands, types; advanced search and filtering; Swagger UI at /api/docs" },
          { title: "Performance", desc: "Redis caching; optional Celery for background tasks" },
        ],
        fcFeatures: [
          { title: "Multi-Item Types & Search", desc: "Jerseys, shorts, outerwear, tracksuits (MTI); advanced search and filtering" },
          { title: "FKApi Integration", desc: "Fetch kit data from Football Kit Archive API; automatic kit addition" },
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
        title: "Samuel Criado — Desarrollador ABAP Backend · En formación",
        description: "Desarrollador ABAP backend en formación (ABAP Cloud, SAP BTP). Base en Python y APIs. Granada, España.",
        ogTitle: "Samuel Criado — Desarrollador ABAP Backend · En formación",
        ogDescription: "Desarrollador ABAP backend en formación (ABAP Cloud, SAP BTP). Base en Python y APIs.",
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
        displayName: "Samuel Criado",
        location: "Granada, España",
        lead: 'Desarrollador ABAP backend en formación — <strong>ABAP Cloud</strong>, <strong>RAP</strong> y <strong>SAP BTP</strong>, con una base sólida en APIs Python e integración.',
        p1: "Me estoy formando como desarrollador ABAP backend: RESTful ABAP, RAP, vistas CDS y fundamentos de SAP BTP. Mi experiencia previa con APIs escalables, pipelines de datos e integraciones encaja bien con roles backend en entorno enterprise.",
        sapFocusLabel: "print(sap_focus)",
        sapFocus: [
          "Desarrollo backend ABAP Cloud (en formación)",
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
          status: "En curso",
          summary: "Formación oficial SAP backend: desarrollo ABAP Cloud, SAP BTP, aplicaciones CAP e Integration Suite. Preparación para certificaciones C_ABAPD, C_CPE y C_CPI.",
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
        subtitle: "Experis Academy · En preparación · Abr–Jul 2026",
        inPrepBadge: "En preparación",
        learningTitle: "Qué estoy aprendiendo",
      },
      certs: {
        abapd: {
          name: "SAP Certified Associate — Desarrollador Backend — ABAP Cloud",
          desc: "Desarrollo backend en ABAP Cloud: RESTful ABAP, objetos de negocio RAP, modelado CDS y extensiones Clean Core en BTP para S/4HANA Cloud.",
          chips: ["RESTful ABAP", "RAP", "CDS", "Clean Core"],
        },
        cpe: {
          name: "SAP Certified Development Associate — SAP Extension Suite",
          desc: "Extensiones cloud-native con CAP: servicios OData, lógica de negocio, UI Fiori Elements, consumo de servicios externos, seguridad XSUAA, despliegue en SAP BTP.",
          chips: ["CAP", "OData", "Fiori Elements", "XSUAA"],
        },
        cpi: {
          name: "SAP Certified Development Associate — SAP Integration Suite",
          desc: "Integración empresarial: diseño de APIs y proxies, políticas, flujos Cloud Integration (iFlows), mensajería, Event Mesh y arquitecturas event-driven.",
          chips: ["API Management", "Cloud Integration", "iFlows", "Event Mesh"],
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
        inTrainingBadge: "En formación",
        typeMe: "'SAPBackendDeveloper'  # ABAP Cloud · BTP — en formación",
        groups: {
          sapBackend: {
            label: "SAP ABAP Backend (en formación)",
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
        ecosystemDesc: "Demostración de cómo sistemas backend pueden trabajar juntos. FootyCollect usa FKApi para importar datos de equipaciones automáticamente.",
        futureNote: "# Futuro: proyectos backend SAP · Integration Suite · apps ABAP Cloud",
        fkapiCard: "Scraper y API para footballkitarchive.com. Extrae imágenes de equipaciones, escudos, temporadas y metadatos.",
        fcCard: "App Django para catalogar memorabilia futbolística: camisetas, pantalones, outerwear, tracksuits. Integración FKApi, fotos, búsqueda, perfiles, REST API (OpenAPI).",
        project01: "Proyecto 01",
        project02: "Proyecto 02",
        fkapiDesc: "API REST Django con base de datos de equipaciones de fútbol. Scraping ético (rate limiting, robots.txt). Para desarrolladores y coleccionistas.",
        fcDesc: "Plataforma Django para coleccionistas de memorabilia. Camisetas, pantalones, outerwear y tracksuits. Integración FKApi para añadir equipaciones automáticamente.",
        viewDemo: "Ver demo",
        technologies: "Tecnologías",
        fkapiFeatures: [
          { title: "Web scraping ético", desc: "Beautiful Soup + requests; rate limiting; respeta robots.txt" },
          { title: "API REST (Django Ninja)", desc: "Kits, clubs, temporadas, marcas; búsqueda avanzada; Swagger UI en /api/docs" },
          { title: "Rendimiento", desc: "Cache Redis; Celery opcional para tareas en background" },
        ],
        fcFeatures: [
          { title: "Multi-tipo y búsqueda", desc: "Camisetas, pantalones, outerwear, tracksuits (MTI); búsqueda avanzada" },
          { title: "Integración FKApi", desc: "Datos de Football Kit Archive API; añadir kits automáticamente" },
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
