var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

var start = Date.now();
for (var i = 100000; i >= 0; i--) {
	head.glasses;
}
console.log(Date.now() - start)
var start = Date.now();
for (var i = 100000; i >= 0; i--) {
	pockets.glasses;
}
console.log(Date.now() - start)

// export {pockets, bed, table, head}
