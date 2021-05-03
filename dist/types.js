"use strict";
// boolean( true / false )
var isOpen;
isOpen = true;
//string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
//number ( int, float, hexa, binary)
var total;
total = 0xff0;
//array (type[])
var items; // array of numbers
items = ["Emerson", "Maria", "Jose"];
var values; //generic
values = [1, 2, 4];
//tuple like python ( number and parameters pre defined)
var title;
title = [1, "foo"];
// enum amount of key : value
var Colors;
(function (Colors) {
    Colors["white"] = "#f44";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (something else)
var thing;
thing = "string";
// void ( empty / not return )
function logger() {
    console.log('full');
}
// null / undefined nao aconselhavel usar em tipos primitivos
var variable;
// never
function error() {
    throw new Error("erro");
}
// Object
var cart;
cart = {
// (somethins else)
};
