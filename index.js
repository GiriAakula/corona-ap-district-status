const express = require('express');
const app = express();
var scraper = require('table-scraper');
const port = process.env.PORT || 3000;
app.get('/covid19-ap-dist', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const url = 'http://hmfw.ap.gov.in/covid_dashboard.aspx';
    scraper.get(url)
    .then(function(tableData) {
    res.send(tableData[1])
    console.log(req)
  });
  
})

app.listen(port);
console.log('server started')