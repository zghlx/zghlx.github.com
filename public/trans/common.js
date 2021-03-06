'use strict';

function timeout(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then(function (value) {
  console.log(value);
});