(function () {
  "use strict";
  if (globalThis.location.protocol === "file:") {
    const notice = document.getElementById("file-protocol-notice");
    if (notice) notice.classList.remove("hidden");
  }
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
})();
