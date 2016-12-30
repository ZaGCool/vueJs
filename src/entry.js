/*var str = require("./scripts/common.js");
;
console.log(str);*/
require("./styles/usage/app.scss")
// import {fruit,food} from "./scripts/es6.js";
// import name from "./scripts/common.js";

// //console.log(name);

// name.getList();

//console.log(fruit,food);

var common = require ('./scripts/utils/util.common.js');

var html = require('./scripts/tpls/String1.string'); //需要加在 stringloader

common.render(html);
