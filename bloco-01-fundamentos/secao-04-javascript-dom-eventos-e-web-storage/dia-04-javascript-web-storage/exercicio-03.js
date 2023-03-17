window.onload = () => {
  const backgroundColorButtons = document.querySelectorAll('#background-color>button');
  const fontColorButtons = document.querySelectorAll('#font-color>button');
  const fontSizeButtons = document.querySelectorAll('#font-size>button');
  const lineHeightButtons = document.querySelectorAll('#line-height>button');
  const fontFamilyButtons = document.querySelectorAll('#font-family>button');

  const setBackgroundColor = (color) => {
    const content = document.querySelector(".content");
    content.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
  };

  const setFontColor = (fontColor) => {
    const paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = fontColor;
    }
    localStorage.setItem("fontColor", fontColor);
  };

  const setFontSize = (fontSize) => {
    const paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = fontSize;
    }
    localStorage.setItem("fontSize", fontSize);
  };

  const setLineHeight = (lineHeight) => {
    const paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = lineHeight;
    }
    localStorage.setItem("lineHeight", lineHeight);
  };

  const setFontFamily = (fontFamily) => {
    const paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = fontFamily;
    }
    localStorage.setItem("fontFamily", fontFamily);
  };

  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener('click', (event) => {
      setBackgroundColor(event.target.innerHTML);
    });
  }

  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener('click', (event) => {
      setFontColor(event.target.innerHTML);
    });
  }

  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener('click', (event) => {
      setFontSize(event.target.innerHTML);
    });
  }

  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener('click', (event) => {
      setLineHeight(event.target.innerHTML);
    });
  }

  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener('click', (event) => {
      setLineHeight(event.target.innerHTML);
    });
  }

  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener('click', (event) => {
      setFontFamily(event.target.innerHTML);
    });
  }

  const initialize = () => {
    const backgroundColorItem = localStorage.getItem('backgroundColor');
    const fontColorItem = localStorage.getItem('fontColor');
    const fontSizeItem = localStorage.getItem('fontSize');
    const lineHeightItem = localStorage.getItem('lineHeight');
    const fontFamilyItem = localStorage.getItem('fontFamily');

    if (backgroundColorItem) setBackgroundColor(backgroundColorItem);
    if (fontColorItem) setFontColor(fontColorItem);
    if (fontSizeItem) setFontSize(fontSizeItem);
    if (lineHeightItem) setLineHeight(lineHeightItem);
    if (fontColorItem) setFontFamily(fontFamilyItem);
  }

  initialize();
}
