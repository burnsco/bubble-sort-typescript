"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var nubmersCollection = new NumbersCollection_1.NumbersCollection([1, 4, 1, -10, 1, 123, -15]);
var sorter = new Sorter_1.Sorter(nubmersCollection);
sorter.sort();
console.log(nubmersCollection.data);
