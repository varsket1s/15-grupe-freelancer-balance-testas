const account = [
  { month: 10, income: 150 },
  { month: 1, income: 200, expense: 50 },
  { month: 3, income: 450, expense: 200 },
  { month: 7, expense: 50 },
  { month: 2, income: 50 },
  { month: 5, income: 150, expense: 50 },
  { month: 9, income: 700, expense: 400 },
  { month: 4, income: 10, expense: 300 },
  { month: 6, expense: 50 },
  { month: 11, income: 150, expense: 30 },
  { month: 8, income: 450, expense: 120 },
  { month: 12, expense: 200 },
];

const monthNames = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" },
];

function renderTableRow(data, monthNames) {
  let HTML = "";
  for (let i = 0; i < monthNames.length; i++) {
    let income = 0;
    let expense = 0;
    let balance = 0;
    for (let f = 0; f < data.length; f++) {
      if (data[f].month === monthNames[i].id) {

  }
  document.querySelector(".table-content").innerHTML = HTML;
}
