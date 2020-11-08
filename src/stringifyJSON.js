// var stringifyJSON = JSON.stringify;
// console.log(stringifyJSON);

var stringifyJSON = function(obj) {

  var keyAndValues = [];
  var values = [];
  var objKeys = [];

  // CHECK FOR ARRAY
  if (Array.isArray(obj)) {
    //check for empty array
    if (obj[0] === undefined) { return '[]'; } else {
      obj.forEach(function(element) {
        values.push(stringifyJSON(element));
      });
      return '[' + values + ']';
    }
  }
  // CHECK FOR PRIMITIVE TYPES
  if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) { return '' + obj; } else if (typeof obj === 'string') { return '"' + obj + '"'; }

  // CHECK FOR OBJECTS
  if (obj instanceof Object) {
    objKeys = Object.keys(obj);
    //set keys as strings and assign values
    objKeys.forEach(function(key) {
      var keyProperty = '"' + key + '":';
      var objValue = obj[key];
      //skip functions and undefined values
      if (typeof objValue === undefined || objValue instanceof Function ) { keyAndValues.push(''); } else if (typeof objValue === 'string') { keyAndValues.push(keyProperty + '"' + objValue + '"'); } else if (typeof objValue === 'number' || typeof objValue === 'boolean' || objValue === null) { keyAndValues.push(keyProperty + objValue); } else if (objValue instanceof Object) {
        //check if there's nested objects, call recursively until no more
        keyAndValues.push(keyProperty + stringifyJSON(objValue));
      }
    });
    return '{' + keyAndValues + '}';
  }
};

