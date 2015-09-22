var getElement = (function() {
  var cache = {};
  var counter = 0;
  var evt = document.getElementsByTagName('body');
  // console.log(evt);

  for(var i = 0; i < evt.length; i++) {
    evt[i].addEventListener('click', elementOnClick);
    }

  function elementOnClick(element) {
    var elementObject = element.target;
    console.log('hello',elementObject);

    console.log('testing 3',elementObject.id);
    if(cache[elementObject.id] > 0) {
      console.log('testing');
      cache[elementObject.id] ++;
      console.log(cache[elementObject]);
    return cache[elementObject.id];
    } else {
      console.log('testing2');
      cache[elementObject.id] = 1;
    }

  }
  // console.log(cache);

//   function clickHandler(e) {
//     var element;
//     evt = e ? e:event;
//     if(evt in cache) {
//       counter ++;
//       return cache[evt];
//     } else if(evt.srcElement) {
//       element = evt.srcElement;
//       cache[evt] = document.
//   };
// }
  // document.addEventListener('click', function(element) {
  //   element = element || window.event;
  //   var target = element.target || element.srcElement,
  // });
})();