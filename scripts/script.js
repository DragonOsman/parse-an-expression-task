"use strict";

function parse(expr) {
  const regex = /(-?\d+(?:\.\d+)?)\s?([+\-*/])\s?(-?\d+(?:\.\d+)?)/;

  const results = expr.match(regex);

  const operand1 = results[1];
  const operator = results[2];
  const operand2 = results[3];

  const finalResults = [operand1, operator, operand2];
  return finalResults;
}

alert(parse("1.2 * 3.4"));
