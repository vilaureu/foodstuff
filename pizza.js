"use strict";

const recipe = {
  flour: 150,
  water: 95,
  salt: 1.5,
  sugar: 4.5,
  yeast: 0.5, // 1 pack?
  oil: 6, // 1 pack?
};

function isInt(value) {
  return (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  );
}

function calc_recipe() {
  let portions = window.location.hash.substring(1);
  if (!isInt(portions)) {
    portions = 2;
  }
  document.querySelectorAll(".portions").forEach(function (elem, index) {
    elem.textContent = portions;
  });
  document.getElementById("c_flour").textContent = recipe["flour"] * portions;
  document.getElementById("c_water").textContent = recipe["water"] * portions;
  document.getElementById("c_salt").textContent = recipe["salt"] * portions;
  document.getElementById("c_sugar").textContent = recipe["sugar"] * portions;
  document.getElementById("c_yeast").textContent = recipe["yeast"] * portions;
  document.getElementById("c_oil").textContent = recipe["oil"] * portions; //TODO this doesnt have to scale as high, 30 is fine for 4p
}

window.addEventListener("DOMContentLoaded", (_) => calc_recipe());
