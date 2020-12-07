// from data.js
var tableData = data;
console.log(tableData)

// create reference to table body
var tbody = d3.select("tbody");


// Loop through data array
tableData.forEach(sighting => {
    // append one table row for each ufo object
    var row = tbody.append("tr");

    // use object.entries and forEach to iterate through keys and values (day 2 activity 7 & 8)
    Object.entries(sighting).forEach(([key,value]) => {
        // append one cell per  value within data set (table headers in html)
        var cell = row.append("td");
        cell.text(value);
    });
});