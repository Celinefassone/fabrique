document.addEventListener("DOMContentLoaded", function () {
  const navigationListItems = document.querySelectorAll(".navigation-list");

  const defaultFontSizeDesktop = 88;
  const defaultFontSizeTablet = 34;
  const defaultFontSizeMobile = 25;
  const hoverScaleUpFactor = 1.6;
  const adjacentScaleUpFactor = 1.1;
  const nonHoverScaleDownFactor = 0.7;

  navigationListItems.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      const windowWidth = window.innerWidth;

      let defaultFontSize = defaultFontSizeDesktop;

      if (windowWidth <= 767) {
        defaultFontSize = defaultFontSizeMobile;
      } else if (windowWidth <= 1024) {
        defaultFontSize = defaultFontSizeTablet;
      }

      const fontSizeHovered = defaultFontSize * hoverScaleUpFactor;
      const fontSizeAdjacent = defaultFontSize * adjacentScaleUpFactor;

      navigationListItems.forEach((textItem, i) => {
        if (i !== index) {
          textItem.style.fontSize =
            defaultFontSize * nonHoverScaleDownFactor + "px";
        }
      });

      item.style.fontSize = fontSizeHovered + "px";

      if (index > 0) {
        navigationListItems[index - 1].style.fontSize = fontSizeAdjacent + "px";
      }
      if (index < navigationListItems.length - 1) {
        navigationListItems[index + 1].style.fontSize = fontSizeAdjacent + "px";
      }
    });

    item.addEventListener("mouseout", () => {
      const windowWidth = window.innerWidth;

      let defaultFontSize = defaultFontSizeDesktop;

      if (windowWidth <= 767) {
        defaultFontSize = defaultFontSizeMobile;
      } else if (windowWidth <= 1024) {
        defaultFontSize = defaultFontSizeTablet;
      }

      navigationListItem.forEach((textItem) => {
        textItem.style.fontSize = defaultFontSize + "px";
      });
    });
  });
});
