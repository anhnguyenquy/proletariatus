const countryList = require('./country_state.json')
const fs = require('fs')
const phoneNumberList = []
let copiedList = [...countryList]
const newList = []
countryList.forEach(country => {
  newList.push(country.countryCodeAlpha3+' (+'+country.phone+')')
})
const dataJSON = JSON.stringify(newList)
fs.writeFile(`phoneCodes.json`, dataJSON, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});