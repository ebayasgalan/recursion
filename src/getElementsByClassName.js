var getElementsByClassName = function (className) {
  // create end result
  let endResult = [];
  var innerFunction = function(inputElement) {
    // base case
    if (inputElement.classList) {
      if (inputElement.classList.contains(className)) {
        endResult.push(inputElement);
      }
    }
    // if element has childNodes, then use forEach
    if (!!inputElement.childNodes.length) {
      const childrenNodes = inputElement.childNodes;
      childrenNodes.forEach(child => {
        innerFunction(child);
      });
    }
  };
  innerFunction(document.body);
  return endResult;
};