'use strict';

let request = require('request');
let $ = require('cheerio');

// request(uri, cb(err, res, body))
module.exports = function () {
  function savePage(err, resp, html) {
    if (err) { return console.error(err) };
    let loadedHTML = $.load(html)
    console.log(loadedHTML.html());
  }

  request('http://www.foxnews.com/', savePage)
};
