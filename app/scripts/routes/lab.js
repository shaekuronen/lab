/*global lab, Backbone*/

lab.Routers = lab.Routers || {};

(function() {

  'use strict';

  lab.Routers.LabRouter = Backbone.Router.extend({

    routes: {
      'experiments': 'experiments_url_event',
      'experiment/:id': 'experiment_url_event'
    },

    experiment_url_event: function(id) {

      console.log('experiment url event with id ' + id + ' happened');

      lab.trigger('experiment_url_event', id);

    },

    experiments_url_event: function() {

      console.log('experiments url event happened');

    }

  });

  // create a router instance
  lab.router = new lab.Routers.LabRouter();


$(document).ready(function () {

  // start monitoring hashchange events
  Backbone.history.start();

});

})();




