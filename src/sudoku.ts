import { invoke } from "@tauri-apps/api/tauri";

const numArrays:datatype[][] = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 0, 0, 0, 0, 0, 0],
    [0, 6, 0, 0, 0, 0, 0, 0, 0],
    [0, 7, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 0, 0, 0, 0, 0, 0, 0]];



function checkUnique(arr) {
    let n = arr.length;

    let s = new Set();
    for (let i = 0; i < n; i++) {
        s.add(arr[i]);
    }
    return (s.size == arr.length);
}

function selectColumns(num) {
    let arr:array = [];

    for (let i = 0; i < 9; i++) {
        arr.push(numArrays[i][num]);
    }
    return arr;
}

let sudokuFrame = document.getElementById("sudoku-frame");
for (let i = 0; i < 9; i++) {
    let row = document.createElement("tr");
    row.id = `row-${i}`;
    row.className = "row";
    sudokuFrame.appendChild(row);
    if (i >= 3 && i % 3 == 0) {
        row.classList.add("row3");
    }
    for (let j = 0; j < 9; j++) {
        let cell = document.createElement("td");
        let cellInput = document.createElement("input");
        cell.id = `cell-${j}`;
        cellInput.type = "number";
        cellInput.value = j;
        cellInput.max = 9;
        cellInput.id = `cell-input-${j}`;
        cell.className = "cell";
        if (j >= 3 && j % 3 == 0) {
            cell.classList.add("cell3");
        }
        cell.appendChild(cellInput);
        row.appendChild(cell);
    }
}
