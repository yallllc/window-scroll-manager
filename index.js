"use strict";

(function () {
  // ------------------------------------------------
  // Scroll manager
  // ------------------------------------------------
  function ScrollManager() {
    return null;
  }

  ScrollManager.prototype.removeListener = function () {
    return null;
  };

  ScrollManager.prototype.destroy = function () {
    return null;
  };

  ScrollManager.prototype.getScrollPosition = function () {
    return null;
  };

  ScrollManager.prototype.handleScroll = function () {
    return null;
  };

  if (typeof module !== "undefined" && module.exports) {
    ScrollManager.default = ScrollManager;
    module.exports = ScrollManager;
  } else if (
    typeof define === "function" &&
    typeof define.amd === "object" &&
    define.amd
  ) {
    // eslint-disable-line no-undef
    // register as 'window-scroll-manager', consistent with npm package name
    define("window-scroll-manager", [], function () {
      // eslint-disable-line no-undef
      return ScrollManager;
    });
  } else {
    window.ScrollManager = ScrollManager;
  }
}.call(this));
