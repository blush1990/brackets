module.exports = function check(str, bracketsConfig) {
  let arrStr = str.split("");
  for (let i=0; i<arrStr.length; i++){
    for (let j=0; j<bracketsConfig.length; j++){
      let bracets1 = arrStr[i] == bracketsConfig[j][0];
      let bracets2 = arrStr[i + 1] == bracketsConfig[j][1];
      if (bracets1 && bracets2) {
        arrStr.splice(i, 2);
        i = -1;
      }
    } 
  }
  let res = arrStr.length;
    if (res == 0){
      return true;
    }
    else {
      return false;
    }
};
