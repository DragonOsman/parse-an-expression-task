"use strict";

function parse(expr) {
  const regex = /(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)/;

  const results = expr.match(regex);
  if (results) {
    const [, ...returnResults] = results;
    return returnResults;
  }
  throw new Error("Invalid expression or no expression found");
}

alert(parse("1.2 * 3.4"));
