/**
 * FeedController
 *
 * @description :: Server-side logic for managing feeds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var FeedParser = require('feedparser');
var request = require('request');
var Promise = require('bluebird');


var feedPromise = function(url) {
    return new Promise(function(resolve, reject) {
        var feed_request = request(url);
        var feedparser = new FeedParser();
        var feed = [];
        feed_request.on('error', function(error) {
            reject('request error');
        });

        feed_request.on('response', function(feed) {
            this.pipe(feedparser);
        });

        feedparser.on('error', function() {
            reject('feed parse error');
        });
        feedparser.on('readable', function() {

            var item;
            while (item = this.read()) {
                feed.push(item);
            }
        });

        feedparser.on('end', function() {
            resolve(feed);
        })
    });
};

module.exports = {
    main: function(req, res) {
        feedPromise('http://www.rbya.org/feed/').then(function(feed) {
            res.send(feed);
        }).catch(function(error) {
            res.send(error);
        })
    }
};