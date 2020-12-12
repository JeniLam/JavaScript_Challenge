// first 21 lines copies from level 1
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
console.log("Selecting Button")
console.log(filterTableButton);

// select form (from office hours with Mo)
var form = d3.select("#datetimeform");
console.log("Selecting Form")
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

    // Select the input element and get the raw HTML node 6 variables
    var inputElementDate = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");
    var inputElementDuration = d3.select("#duration");

    // Get the value property of the input element 6 variables
    var inputValueDate = inputElementDate.property("value");
    var inputValueCity = inputElementCity.property("value");
    var inputValueState = inputElementState.property('value');
    var inputValueCountry = inputElementCountry.property('value');
    var inputValueShape = inputElementShape.property('value');
    var inputValueDuration = inputElementDuration.property('value');

    console.log(inputValue);

    // use input on form to filter data by datetime in data.js file per Dan, can chain the filters to get data needed. will need an or statement so no matter how many filters entered it will run.
    // from office hours 12.12 - use || ! so that if the filter does not have data it skips that filter and returns only the filters that have input
    // data from data.js for reference
    // datetime: "1/1/2010",
    // city: "bonita",
    // state: "ca",
    // country: "us",
    // shape: "light",
    // durationMinutes: "13 minutes",
    // https://forum.freecodecamp.org/t/filter-multiple-condition-javascript/341164/3 match the above variables
    var filteredData = tableData.filter((sighting) => sighting.datetime === inputValueDate || !inputValueDate)
        .filter(sighting => sighting.city === inputValue)
        .filter(sighting => sighting.state === inputValue)
        .filter(sighting => sighting.country === inputValue)
        .filter(sighting => sighting.shape === inputValue)
        .filter(sighting => sighting.durationMinutes === inputValue)


    console.log(filteredData);

    // Use filtered data to repopulate the table
    filteredData.forEach(function (filteredItem) {
        var row = tbody.append("tr");
        Object.entries(filteredItem).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};