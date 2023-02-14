module.exports = function check(str, bracketsConfig) {
  // your solution

  const stack = [];
  const bracketConf = {};
  let cntSameBrackets = 0;
  let cntSameBrackets1 = 0;
  let cntSameBrackets2 = 0;

  //make 2D array an object
  bracketsConfig.forEach((br) => {

    // Extract the key and the value
    let key = br[0];
    let value = br[1];

    // Add the key and value to
    // the object
    bracketConf[key] = value;
  });

  //console.log(bracketConf);

  for (const bracket of str) {
    if (Object.keys(bracketConf).includes(bracket) &&
      bracket !== '|' &&
      bracket !== '7' &&
      bracket !== '8') { // matches open brackets
      stack.push(bracket);
    } else if (Object.values(bracketConf).includes(bracket) &&
      bracket !== '|' &&
      bracket !== '7' &&
      bracket !== '8') { //matches closed brackets
      const lastBracket = stack.pop();
      if (bracketConf[lastBracket] !== bracket) {
        return false;
      }
    } else if (Object.keys(bracketConf).includes(bracket) &&
      bracket == '|' &&
      cntSameBrackets == 0) {
      stack.push(bracket);
      cntSameBrackets++;
    } else if (Object.values(bracketConf).includes(bracket) &&
      bracket == '|' &&
      cntSameBrackets > 0) {
      const lastBracket = stack.pop();
      if (bracketConf[lastBracket] !== bracket) {
        return false;
      }
      cntSameBrackets = 0;
    } else if (Object.keys(bracketConf).includes(bracket) &&
      bracket == '7' &&
      cntSameBrackets1 == 0) {
      stack.push(bracket);
      cntSameBrackets1++;
    } else if (Object.values(bracketConf).includes(bracket) &&
      bracket == '7' &&
      cntSameBrackets1 > 0) {
      const lastBracket = stack.pop();
      if (bracketConf[lastBracket] !== bracket) {
        console.log("yes");
        return false;
      }
      cntSameBrackets1 = 0;
    } else if (Object.keys(bracketConf).includes(bracket) &&
      bracket == '8' &&
      cntSameBrackets2 == 0) {
      stack.push(bracket);
      cntSameBrackets2++;
    } else if (Object.values(bracketConf).includes(bracket) && bracket == '8' && cntSameBrackets2 > 0) {
      const lastBracket = stack.pop();
      if (bracketConf[lastBracket] !== bracket) {
        return false;
      }
      cntSameBrackets2 = 0;
    }
  }

  //console.log(stack.length);
  return stack.length === 0;
};
