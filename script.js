const extendHex = (shortHex) => {
  // write your code here
  shortHex = shortHex.replace('#', '').toLowerCase();

  // Separate the shortHex into individual color components
  const red = shortHex[0];
  const green = shortHex[1];
  const blue = shortHex[2];

  // Extend each color component to form the full hex code
  const fullHex = `#${red}${red}${green}${green}${blue}${blue}`;

  return fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
