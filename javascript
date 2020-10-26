function randomColor() {
	randomHue =  Math.random() * (360 - 0) + 0;
  randomPct =  Math.random() * (100 - 1) + 1;
  return "hsl(" + randomHue + ", " + randomPct + "%, " + randomPct + "%)";
}

var div = document.getElementById('canvas');
for (let step = 0; step < 500; step++) {
	newBlock = "<span style=\"background: " + randomColor() + "\"> </span>";
  div.innerHTML += newBlock;
  }
