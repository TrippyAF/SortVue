"use strict";

const selectionSort = async function () {
	document.getElementById("selection").classList.toggle("active-btn");
	tempDisable();
	const barsEl = document.getElementById("bars");
	const size = Number(barsEl.childElementCount);

	for (let i = 0; i < size; ++i) {
		let barDefaultColor;
		let barDefaultBorderColor = barsEl.children[0].style.borderColor;
		let maxInd = 0;

		barsEl.children[0].children[0].style.backgroundColor = "#FF2171";
		barsEl.children[0].style.borderColor = "#FF2171";

		for (let j = 1; j < size - i; ++j) {
			const barCurr = barsEl.children[j];
			const barMax = barsEl.children[maxInd];
			barDefaultColor = barCurr.style.backgroundColor;

			const barCurrHeight = Number(barCurr.style.height.slice(0, -1));
			const barMaxHeight = Number(barMax.style.height.slice(0, -1));

			await waitforme(Number(speedSlider.value));

			let change = false;
			let tempSave;
			if (barCurrHeight > barMaxHeight) {
				change = true;
				tempSave = maxInd;
				maxInd = j;
			}
			barCurr.style.backgroundColor = "red";
			barMax.style.backgroundColor = "red";

			await waitforme(Number(speedSlider.value));

			if (change) {
				barsEl.children[tempSave].children[0].style.removeProperty(
					"background-color"
				);
				barsEl.children[tempSave].style.borderColor =
					barDefaultBorderColor;

				barsEl.children[maxInd].children[0].style.backgroundColor =
					"#FF2171";
				barsEl.children[maxInd].style.borderColor = "#FF2171";
			}

			barCurr.style.backgroundColor = barDefaultColor;
			barMax.style.backgroundColor = barDefaultColor;
		}

		const temp = barsEl.children[size - i - 1].style.height;
		const t2 = barsEl.children[size - i - 1].children[0].innerText;
		barsEl.children[size - i - 1].style.height = barsEl.children[maxInd].style.height;
		barsEl.children[size - i - 1].children[0].innerText = barsEl.children[maxInd].children[0].innerText;
		barsEl.children[maxInd].style.height = temp;
		barsEl.children[maxInd].children[0].innerText = t2;
		barsEl.children[size - i - 1].style.backgroundColor = "green";
		barsEl.children[maxInd].children[0].style.removeProperty("background-color");
		barsEl.children[maxInd].style.borderColor = barDefaultBorderColor;
	}
	document.getElementById("unsorted-array").classList.remove("disabled");
	document.getElementById("reversed-array").classList.remove("disabled");
	document.getElementById("sorted-array").classList.remove("disabled");
	document.getElementById("size").classList.remove("disabled");
	document.getElementById("selection").classList.toggle("active-btn");
};

const btnSelectionSort = document.getElementById("selection");
btnSelectionSort.addEventListener("click", selectionSort);