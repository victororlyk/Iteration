'use strict';

const sum = (...args) => {
  let s = 0;
  for (let i = 0; i < args.length; i++) s += args[i];
  return s;
};
console.log(sum(2,2));
module.exports = { sum };
