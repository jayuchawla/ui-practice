/*
  Exercise 01
  -----------
  Add a new row to the table with the details: 'Sean Reyes' (@sreyes)
*/


/*
  Exercise 02
  ------------
  Update Leona Dixon's handle to @dixonl
*/


/*
  Exercise 03
  -----------
  Move Rosa Reed to the top of the table and ensure all the number entries in the first column are updated accordingly.
*/


/*
  Exercise 04
  -----------
  Move the handle column including all of it's rows of contents to be the second column in the table (after the # column)
*/


/*
  Exercise 05
  -----------
  To make the table easier to read, make every other row on the table to have a darker, shaded colour e.g. #f2f2f2
*/

const headerPresent = document.querySelector(".table tr th") ? true : false;
const numRows = document.querySelectorAll(".table tr").length - (headerPresent ? 1 : 0);

// Task 1
const newRow = document.createElement('tr');
[numRows + 1, 'Sean', 'Reyes', '@sreyes'].forEach(colText => {
    const col = document.createElement('td')
    col.innerText = colText
    newRow.appendChild(col)
})
document.querySelector(".table").appendChild(newRow)

// Task 2
const getRowElement = (firstName, lastName) => {
    const rows = Array.from(document.querySelectorAll(".table tr"))
    let rowNode = '';
    rows.forEach((row) => {
        const rowData = Array.from(row.querySelectorAll("td"))
        if(rowData.length > 0) {
            if(rowData[1].innerText === firstName && rowData[2].innerText === lastName) {
                rowNode = row;
            }
        }
    })
    return rowNode;
}
const rowElement = getRowElement('Leona', 'Dixon')
Array.from(rowElement.querySelectorAll("tr td"))[3].innerText = '@dixonl';

// Task 3
const rosa = getRowElement('Rosa', 'Reed')
document.querySelector("table tr:nth-child(1)").insertAdjacentHTML('afterend', rosa.innerHTML)
rosa.remove()

let counter = 0;
Array.from(document.querySelectorAll(".table tr"))
    .forEach((row) => {
    const rowData = Array.from(row.querySelectorAll("td"))
    if(rowData.length > 0) {
        counter+=1
        rowData[0].innerText = counter
    }
})

// Task 4
Array.from(document.querySelectorAll(".table tr"))
    .forEach((row) => {
        const rowData = Array.from(row.querySelectorAll("th, td"));
        if(rowData.length > 0 ) {
            rowData[0].insertAdjacentElement('afterend', rowData[3]);
        }  
    })

// Task 5
Array.from(document.querySelectorAll(".table tr"))
    .forEach((row) => {
        const rowData = Array.from(row.querySelectorAll("th, td"));
        for(let cellIndex=0; cellIndex < rowData.length; cellIndex+=1) {
            rowData[cellIndex].style.textAlign='center';
            if(cellIndex%2 !== 0) {
                rowData[cellIndex].style.backgroundColor='#f2f2f2';
            }
        }
    })