var getElement = (function() {
  var cache = {};
  var counter = 0;
  var evt = document.getElementsByTagName('body');
  console.log('evt', evt);

  for(var i = 0; i < evt.length; i++) {
    evt[i].addEventListener('click', elementOnClick);
    }

  function elementOnClick(element) {
    console.log('clicked',element);
    var elementObject = element.target.id;

    if(cache[elementObject] > 0) {
      // console.log('testing');
      cache[elementObject] ++;
      console.log('cache',cache[elementObject]);
    } else {
      // console.log('testing2');
      cache[elementObject] = 1;
    }

  }
})();