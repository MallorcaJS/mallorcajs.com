var express = require('express');
var async = require('async');
var router = express.Router();
var meetup = require('../modules/meetup');

/* GET home page. */
router.get('/', function(request, response, next)
{
    'use strict';

    var _locals = {
        title: 'MallorcaJS - Mallorca\'s javascript meetup group',
        keywords: 'mallorcajs, javascript, mallorca, meetup, events, beers, nodejs, js, jquery, meteor'
    };

    async.parallel([
        /**
         * Getting members from meetup.
         * @param callback
         */
        function(callback)
        {
            meetup.getMembers(function(members)
            {
                _locals.members = members;
                callback();
            });
        },
        /**
         * Getting events from meetup.
         * @param callback
         */
        function(callback)
        {
            meetup.getEvents(function(events)
            {
                _locals.events = events;
                callback();
            });
        }
    /**
     * Render template with _locals.
     */
    ], function(error)
    {
        if (error) return next(error);

        response.render('index', _locals);
    });

});

module.exports = router;
