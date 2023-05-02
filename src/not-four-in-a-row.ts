import { invoke } from "@tauri-apps/api/tauri";

const numArrays:datatype[][] = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]];



function checkUnique(arr) {
    const n = arr.length;

    let s = new Set();
    for (let i = 0; i < n; i++) {
        s.add(arr[i]);
    }
    return (s.size == arr.length);
}

function selectColumns(num) {
    const arr:array = [];

    for (let i = 0; i < 9; i++) {
        arr.push(numArrays[i][num]);
    }
    return arr;
}

let gameFrame = document.getElementById("game-frame");
for (let i = 0; i < 8; i++) {
    let row = document.createElement("tr");
    row.id = `row-${i}`;
    row.className = "row";
    gameFrame.appendChild(row);
    for (let j = 0; j < 8; j++) {
        let cell = document.createElement("td");
        let cellInput = document.createElement("input");
        cell.id = `cell-${j}`;
        cellInput.type = "number";
        cellInput.value = j+1;
        cellInput.max = 1;
        cellInput.max = 9;
        cellInput.id = `cell-input-${j}`;
        cell.className = "cell";
        cell.appendChild(cellInput);
        row.appendChild(cell);
    }
}

function checkQuads(arr) {
    for (let i = 0; i < 5; i++) {
        let zeroCount = 0;
        let oneCount = 0;
        let newArr:array = arr.slice(i, i+4);
        for (let j = 0; j < 4; j++) {
            if (newArr[j] == 0) {
                zeroCount++;
            } else {
                oneCount++;
            }
        }
        if (zeroCount > 3 || oneCount > 3) {
            return false;
        }
    }
}
