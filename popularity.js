"use strict";

// require('dotenv').config();

let popularity = 0

var nodes = [
  { name: 'super awesome but old', comments: 50, views: 2000, created:"2015-07-15" },
  { name: 'new, active, small audience', comments: 14, views: 20, created:"2017-07-15" },
  { name: 'new, quiet, larger audience', comments: 1, views: 200, created:"2017-07-15" },
  { name: 'new and inactive', comments: 1, views: 2, created:"2017-07-15" },
  { name: 'older and inactive', comments: 1, views: 2, created:"2016-07-15" },
  { name: 'old and unpopular', comments: 0, views: 1, created:"2015-07-15" },
]

var rankings = nodes.map((n) => {
  var participation = n.comments / n.views
  var date = new Date(n.created + ' 00:00:00'.split(' ').join('T'))
  var unixseconds = date.getTime() / 10000
  var currentDateSeconds = new Date().getTime() / 10000
  popularity = participation * unixseconds - currentDateSeconds/100
  return {
    'name': n.name,
    'participation': participation,
    'score': Math.floor(popularity),
  }
})

// var comments=14
// var views=100
// var time="2017-07-15"
// var participation = comments / views
// var date = new Date(time + ' 00:00:00'.split(' ').join('T'))
// var unixseconds = date.getTime() / 10000
// var currentDate = new Date()

// popularity = ((comments * views) + (unixseconds))

// console.log(process.env.COMMENTS)
// console.log('nodes', nodes)
// console.log('popularity', popularity)
console.log('popularity', rankings)
