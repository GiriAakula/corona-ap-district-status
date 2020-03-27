const express = require('express');
const app = express();
var scraper = require('table-scraper');

app.get('/covid19-ap-dist', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const url = 'http://hmfw.ap.gov.in/covid_dashboard.aspx';
    scraper.get(url)
    .then(function(tableData) {
    res.send(tableData[1])
    console.log(req)
  });
  
})

app.listen(9000);
console.log('server started')