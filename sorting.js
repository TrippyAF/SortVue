"use strict";

const barsEl = document.getElementById("bars");
const sizeSlider = document.getElementById("size");
// const barsRect = barsEl.getBoundingClientRect();
const btnUnsortedArray = document.getElementById("unsorted-array");
const btnReversedArray = document.getElementById("reversed-array");
const btnSortedArray = document.getElementById("sorted-array");
const btnRestart = document.getElementById("restart");
// const barsWidth = barsRect.width;
// const barsHeight = barsRect.height;
const barsWidth = barsEl.offsetWidth;
const barsHeight = barsEl.offsetHeight;

barsEl.innerHTML = "";
let bars = [];

const sortedArray = function () {
	bars = [];
	for (let i = 1; i <= sizeSlider.value; ++i) {
		bars.push(i * 1.2);
	}
	showArray()
}

const reversedArray = function () {
	bars = [];
	for (let i = sizeSlider.value; i > 0; --i) {
		bars.push(i * 1.2);
	}
	showArray()
}

const unsortedArray = function () {
	bars = [];
	for (let i = 0; i < Number(sizeSlider.value); ++i) {
		bars.push(Math.floor(Math.random() * 99) + 1);
	}
	showArray()
}

const showArray = function () {
	tempEnable();
	barsEl.innerHTML = "";
	const newWidth = (Number(barsWidth) * 0.91) / Number(sizeSlider.value);

	for (let i = 0; i < Number(sizeSlider.value); ++i) {
		const divEl = document.createElement("div");
		divEl.classList.add("bar-prop");
		divEl.style.display = "inline-block";
		divEl.style.width = `${newWidth * 0.94}px`;
		divEl.style.height = `${Number(bars[i]) * (0.94)}%`;
		divEl.style.margin = `0 ${0.05 * newWidth}px 0`;
		divEl.style.marginBottom = `${Number(barsHeight * 0.05)}px`;
		divEl.style.position = "relative";
		divEl.setAttribute("id", `bar-${i}`);

		const textEl = document.createElement("div");
		textEl.classList.add("bottom");
		// textEl.style.height = `${Number(newWidth * 0.5)}px`;
		textEl.innerText = ".";

		divEl.appendChild(textEl);

		barsEl.appendChild(divEl);
	}
};

function waitforme(millisec) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("");
		}, Number(500 - millisec));
	});
}

const swap = function (bar1, bar2) {
	const bar1Height = Number(bar1.style.height.slice(0, -1));
	const bar2Height = Number(bar2.style.height.slice(0, -1));
	const temp = bar1Height;
	const t2 = bar1.children[0].innerText;
	bar1.style.height = `${bar2Height}%`;
	bar1.children[0].innerText = bar2.children[0].innerText;
	bar2.style.height = `${temp}%`;
	bar2.children[0].innerText = t2;
};

const tempDisable = function () {
	document.getElementById("unsorted-array").classList.add("disabled");
	document.getElementById("reversed-array").classList.add("disabled");
	document.getElementById("sorted-array").classList.add("disabled");
	document.getElementById("size").classList.add("disabled");
	document.getElementById("bubble").classList.add("disabled");
	document.getElementById("merge").classList.add("disabled");
	document.getElementById("quick").classList.add("disabled");
	document.getElementById("insertion").classList.add("disabled");
	document.getElementById("selection").classList.add("disabled");
};

const tempEnable = function () {
	document.getElementById("unsorted-array").classList.remove("disabled");
	document.getElementById("reversed-array").classList.remove("disabled");
	document.getElementById("sorted-array").classList.remove("disabled");
	document.getElementById("size").classList.remove("disabled");
	document.getElementById("bubble").classList.remove("disabled");
	document.getElementById("merge").classList.remove("disabled");
	document.getElementById("quick").classList.remove("disabled");
	document.getElementById("insertion").classList.remove("disabled");
	document.getElementById("selection").classList.remove("disabled");
};

btnUnsortedArray.addEventListener("click", unsortedArray);
btnReversedArray.addEventListener("click", reversedArray);
btnSortedArray.addEventListener("click", sortedArray);
btnRestart.addEventListener("click", () => location.reload());