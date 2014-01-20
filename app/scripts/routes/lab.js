/*global lab, Backbone*/

lab.Routers = lab.Routers || {};

(function() {

  'use strict';

  lab.Routers.LabRouter = Backbone.Router.extend({

    routes: {
      'experiments': 'request_experiments',
      'experiment/:id': 'request_experiment'
    },

    request_experiment: function(id) {

      console.log('experiment with id ' + id + ' was requested');

      this.trigger('experiment_requested', id);

    },

    request_experiments: function() {

      console.log('experiments collection should be rendered');

    }

  });

  // create a router instance
  lab.router = new lab.Routers.LabRouter();


$(document).ready(function () {

  // start monitoring hashchange events
  Backbone.history.start();

});

})();




