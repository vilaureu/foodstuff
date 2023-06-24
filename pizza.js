"use strict";

const recipe = {
  flour: 150,
  water: 95,
  salt: 1.5,
  sugar: 4.5,
  yeast: 0.5, // 1 pack?
  oil: 6, // 1 pack?
};

function round(n) {
  return parseFloat(n.toFixed(2));
}

function calc_recipe() {
  const params = new URLSearchParams(document.location.search);;

  let portions = parseFloat(params.get("portions"));
  if (Number.isNaN(portions)) {
    portions = 2;
  }
  document.querySelectorAll(".portions").forEach(function (elem, index) {
    elem.textContent = round(portions);
  });
  document.getElementById("c_water").textContent = round(recipe["water"] * portions);
  document.getElementById("c_flour").textContent = round(recipe["flour"] * portions);
  document.getElementById("c_salt").textContent = round(recipe["salt"] * portions);
  document.getElementById("c_sugar").textContent = round(recipe["sugar"] * portions);
  document.getElementById("c_yeast").textContent = round(recipe["yeast"] * portions);
  document.getElementById("c_oil").textContent = round(recipe["oil"] * portions); //TODO this doesnt have to scale as high, 30 is fine for 4p
}

window.addEventListener("DOMContentLoaded", (_) => calc_recipe());
