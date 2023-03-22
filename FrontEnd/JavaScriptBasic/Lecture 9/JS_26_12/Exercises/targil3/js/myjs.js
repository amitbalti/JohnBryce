const changeColor = (color) => {
  const colorPicker = document.getElementById("userColor");
  console.log(colorPicker.value);
  document.body.style.background = colorPicker.value;
};
