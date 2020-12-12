// from data.js
var tableData = data;
console.log(tableData)

// create reference to table body
var tbody = d3.select("tbody");


// Loop through data array
tableData.forEach(sighting => {

    // append one table row for each ufo object
    var row = tbody.append("tr");

    // use object.entries and forEach to iterate through keys and values (day 2 activity 7 & 8 and Day 3 act 3) entries gets you both the Key & the value
    Object.entries(sighting).forEach(([key, value]) => {
        // append one cell per  value within data set (table headers in html)
        var cell = row.append("td");
        cell.text(value);
    });
});

//*** Use a date form in your HTML document and write JavaScript code that will listen
// Most of the below copied from Day 3 Activity 9
// select the button
var filterTableButton = d3.select("#filter-btn");
console.log(filterTableButton);

// select form (from office hours with Mo)
var form = d3.select("#datetimeform");
console.log(form);

// Create event handlers
filterTableButton.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear the table
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    
    // use input on form to filter data by datetime in data.js file
    var filteredData = tableData.filter((sighting) => sighting.datetime === inputValue);

    console.log(filteredData);

// Use filtered data to repopulate the table
   filteredData.forEach(function(filteredItem) {
       var row = tbody.append("tr");
       Object.entries(filteredItem).forEach(([key,value]) => {
           var cell = row.append("td");
           cell.text(value);
       });
   });
};


//for events and search through the date/time column to find rows that match user input