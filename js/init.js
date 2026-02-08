(function () {
  "use strict";
  if (typeof lucide === "undefined") {
    console.warn("Lucide icons failed to load; icons may not render.");
  } else {
    lucide.createIcons();
  }
})();
