'use strict';

var json = require('../modules/get-json');

var apiKey = '7664637d327eb3c1d7351168645137',
    defaults = {
    host: 'api.meetup.com',
    port: 443,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

exports.getMembers = function(callback)
{
    var options = defaults;

    options.path = '/2/members?&sign=true&photo-host=public&group_urlname=mallorcajs&key=' + apiKey;

    json.getJSON(options, function(statusCode, result)
    {
        callback(result['results']);
    });
};

exports.getEvents = function(callback)
{
    var options = defaults;

    options.path = '/2/events?&sign=true&photo-host=public&group_urlname=mallorcajs&key=' + apiKey;

    json.getJSON(options, function(statusCode, result)
    {
        callback(result['results']);
    });
};

