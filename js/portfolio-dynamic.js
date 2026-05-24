import { CERTIFICATIONS, LEARNING_AREAS, SKILL_GROUPS } from "./certifications-data.js";

function t(key, lang) {
  return window.I18N.t(key, lang);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeLimitedHtml(str) {
  return escapeHtml(str)
    .replace(/&lt;strong&gt;/gi, "<strong>")
    .replace(/&lt;\/strong&gt;/gi, "</strong>");
}

function fillBulletList(listEl, bullets, allowLimitedHtml) {
  listEl.textContent = "";
  if (!Array.isArray(bullets)) return;
  bullets.forEach(function (b) {
    const li = document.createElement("li");
    if (allowLimitedHtml) {
      li.innerHTML = sanitizeLimitedHtml(b);
    } else {
      li.textContent = String(b);
    }
    listEl.appendChild(li);
  });
}

export function renderCertifications(lang) {
  const container = document.getElementById("certifications-content");
  if (!container) return;

  const badge = escapeHtml(t("certifications.inPrepBadge", lang));
  const certsHtml = CERTIFICATIONS.map(function (cert) {
    const chips = t(cert.chipsKey, lang);
    const chipsHtml = Array.isArray(chips)
      ? chips.map(function (c) {
          return '<span class="cert-chip">' + escapeHtml(c) + "</span>";
        }).join("")
      : "";
    return (
      '<article class="cert-card">' +
      '<div class="cert-card-header">' +
      '<span class="cert-exam-code">' + escapeHtml(cert.examCode) + "</span>" +
      '<span class="badge-training">' + badge + "</span>" +
      "</div>" +
      '<h3 class="cert-card-title">' + escapeHtml(t(cert.nameKey, lang)) + "</h3>" +
      '<p class="cert-card-desc">' + escapeHtml(t(cert.descKey, lang)) + "</p>" +
      '<div class="cert-card-chips">' + chipsHtml + "</div>" +
      "</article>"
    );
  }).join("");

  const learningHtml = LEARNING_AREAS.map(function (area) {
    const items = t(area.itemsKey, lang);
    const listHtml = Array.isArray(items)
      ? items.map(function (item) {
          return "<li>" + escapeHtml(item) + "</li>";
        }).join("")
      : "";
    return (
      '<div class="learning-area">' +
      '<h4 class="learning-area-title">' + escapeHtml(t(area.titleKey, lang)) + "</h4>" +
      '<ul class="learning-area-list">' + listHtml + "</ul>" +
      "</div>"
    );
  }).join("");

  container.innerHTML =
    '<div class="certifications-grid">' + certsHtml + "</div>" +
    '<h3 class="learning-section-title">' + escapeHtml(t("certifications.learningTitle", lang)) + "</h3>" +
    '<div class="learning-grid">' + learningHtml + "</div>";
}

export function renderSkills(lang) {
  const container = document.getElementById("skills-groups");
  if (!container) return;

  const trainingBadge = escapeHtml(t("skills.inTrainingBadge", lang));
  container.innerHTML = SKILL_GROUPS.map(function (group) {
    const items = t(group.itemsKey, lang);
    const chipsHtml = Array.isArray(items)
      ? items.map(function (item) {
          const cls = group.sap ? "skill-chip skill-chip--sap" : "skill-chip";
          return '<span class="' + cls + '">' + escapeHtml(item) + "</span>";
        }).join("")
      : "";
    const badgeHtml = group.training
      ? '<span class="badge-training skill-group-badge">' + trainingBadge + "</span>"
      : "";
    return (
      '<div class="skill-group">' +
      '<h3 class="skill-group-label">' +
      "<span>" + escapeHtml(t(group.labelKey, lang)) + "</span>" + badgeHtml +
      "</h3>" +
      '<div class="skill-chips">' + chipsHtml + "</div>" +
      "</div>"
    );
  }).join("");
}

export function renderExperienceLists(lang) {
  const syncList = document.getElementById("exp-syncronik-list");
  const founderList = document.getElementById("exp-founder-list");
  if (syncList) {
    fillBulletList(syncList, t("experience.syncronik.bullets", lang), false);
  }
  if (founderList) {
    fillBulletList(founderList, t("experience.founder.bullets", lang), true);
  }
}

export function renderAboutLists(lang) {
  const sapList = document.getElementById("about-sap-focus-list");
  const transList = document.getElementById("about-transferable-list");
  if (sapList) {
    const items = t("about.sapFocus", lang);
    sapList.innerHTML = Array.isArray(items)
      ? items.map(function (item) {
          return '<span class="text-accent">→</span> ' + escapeHtml(item) + "<br />";
        }).join("")
      : "";
  }
  if (transList) {
    const items = t("about.transferable", lang);
    transList.innerHTML = Array.isArray(items)
      ? items.map(function (item) {
          return '<span class="text-accent">→</span> ' + escapeHtml(item) + "<br />";
        }).join("")
      : "";
  }
}

export function renderProjectFeatures(lang) {
  const iconMap = {
    fkapi: ["globe", "code", "zap"],
    fc: ["layers", "link", "image"],
  };
  ["fkapi", "fc"].forEach(function (prefix) {
    const container = document.getElementById(prefix + "-features");
    if (!container) return;
    const key = prefix === "fkapi" ? "projects.fkapiFeatures" : "projects.fcFeatures";
    const features = t(key, lang);
    const accent = prefix === "fkapi" ? "primary" : "accent";
    const icons = iconMap[prefix] || ["layers"];
    if (!Array.isArray(features)) return;
    container.innerHTML = features.map(function (f, i) {
      const icon = icons[i] || "layers";
      return (
        '<div class="flex items-start gap-4">' +
        '<div class="p-2 bg-' + accent + '/10 rounded-lg mt-1">' +
        '<span data-lucide="' + icon + '" class="w-5 h-5 text-' + accent + '"></span>' +
        "</div>" +
        "<div>" +
        '<h4 class="font-medium text-foreground">' + escapeHtml(f.title) + "</h4>" +
        '<p class="text-sm text-muted-foreground">' + escapeHtml(f.desc) + "</p>" +
        "</div>" +
        "</div>"
      );
    }).join("");
    if (typeof lucide !== "undefined") lucide.createIcons();
  });
}

export function renderPortfolioDynamic(lang) {
  renderCertifications(lang);
  renderSkills(lang);
  renderExperienceLists(lang);
  renderAboutLists(lang);
  renderProjectFeatures(lang);
}

window.renderPortfolioDynamic = renderPortfolioDynamic;

document.addEventListener("DOMContentLoaded", function () {
  if (window.I18N) {
    const lang = window.I18N.getLang();
    window.I18N.apply(lang);
    window.I18N.initLangToggle();
    renderPortfolioDynamic(lang);
  }
});
