function REGEXEXTRACTALLRANGE(input) {
  //The following was the regex string that I needed for my application. Revise as necessary for yours.
  var regex = /(\d+)\s*(\w+)/g;
  var arr;
  var retVal = new Array();
  for (var i = 0; i < input.length; i++) {
    var ret = new Array();
    while ((arr = regex.exec(input[i])) !== null) {
      ret.push(arr[1]);
      ret.push(arr[2]);
    }
    retVal.push(ret);
  }
  return retVal;
}
