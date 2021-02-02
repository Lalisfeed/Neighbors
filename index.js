"use strict"
const checkFn = (fn) => { if (typeof fn === "function") { return true } else { return false } }
module.exports = { checkFn : checkFn }