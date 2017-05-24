function arrayToSentenceCase(arr) {
	var convertedArr = [];
	for (var j = 0; j < arr.length; j++) {
      var str = String(arr[j]);
      convertedArr[j] = toSentenceCase(str);
  }
  return convertedArr;
}

function toSentenceCase(str) {
  if (str.map) {
   return str.map(toSentenceCase); 
  }
  str = str.toLowerCase();
  var splitText = str.split(/\s+/);
  var convertedString = '';
  var sentenceStart = true;
  for (var i = 0; i < splitText.length; i++) {
    var tmp = splitText[i];
    if (tmp == 'i') {
      tmp = tmp.toUpperCase();
    }

    if (sentenceStart) {
      tmp = capitalize(tmp);
      sentenceStart = false;
      if (i == 0) {
        convertedString = convertedString + tmp;
      } else {
        convertedString = convertedString + ' ' + tmp;
      }
    } else if (isLonePunctuation(tmp)) {
      convertedString = convertedString + tmp;
    } else {
      convertedString = convertedString + ' ' + tmp;
    }
    if (isEndPunctuation(tmp)) {
      sentenceStart = true;
    }
  }
  return convertedString;
}

function capitalize(str) {
  if (str == null || str.length == 0) {
    return str;
  }
  var first = str[0];
  var rest = str.slice(1);
  return first.toUpperCase() + rest;
}

function isEndPunctuation(str) {
  return /[\.\?!]/.test(str);
}

function isLonePunctuation(str) {
  return str.length == 1 && !/\w/.test(str);
}