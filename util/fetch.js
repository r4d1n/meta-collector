'use strict'

let request = require('request');
let $ = require('cheerio');

// request(uri, cb(err, res, body))
module.exports = {
 
 savePage : function (err, resp, html) {
    if (err) { return console.error(err) };
    let loadedHTML = $.load(html)
    console.log(loadedHTML.html());
  }

} 
