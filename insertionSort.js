"use strict";

const insertionSort = async function () {
	document.getElementById("insertion").classList.toggle("active-btn");
	tempDisable();
	const barsEl = document.getElementById("bars");
	const size = Number(barsEl.childElementCount);

	barsEl.children[0].style.backgroundColor = "green";
	for (let i = 1; i < size; ++i) {
		let barDefaultColor;
		barsEl.children[i].style.borderColor = "#FF2171";
		let j;
		for (j = i - 1; j >= 0; --j) {
			const barCurr = barsEl.children[j];
			const barNext = barsEl.children[j + 1];
			barDefaultColor = barCurr.style.backgroundColor;

			const barCurrHeight = Number(barCurr.style.height.slice(0, -1));
			const barNextHeight = Number(barNext.style.height.slice(0, -1));

			await waitforme(Number(speedSlider.value));

			if (barCurrHeight <= barNextHeight) break;

			barCurr.style.backgroundColor = "red";
			barNext.style.backgroundColor = "red";
			swap(barCurr, barNext);

			await waitforme(Number(speedSlider.value));

			barCurr.style.backgroundColor = barDefaultColor;
			barNext.style.backgroundColor = barDefaultColor;
		}
		barsEl.children[j + 1].style.backgroundColor = "green";
		barsEl.children[i].style.removeProperty("border-color");
	}
	document.getElementById("unsorted-array").classList.remove("disabled");
	document.getElementById("reversed-array").classList.remove("disabled");
	document.getElementById("sorted-array").classList.remove("disabled");
	document.getElementById("size").classList.remove("disabled");
	document.getElementById("insertion").classList.toggle("active-btn");
};

const btnInsertionSort = document.getElementById("insertion");
btnInsertionSort.addEventListener("click", insertionSort);