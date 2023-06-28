const repeatCharacters = (text = '', reparations = 1) => {
  let  newText = '';

  for (const char of text) {
    newText += char.repeat(reparations);
  }

  return newText;
};

export default repeatCharacters;
