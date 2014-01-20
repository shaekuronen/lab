/*global lab, Backbone*/

lab.Routers = lab.Routers || {};

(function () {

  'use strict';

  lab.Routers.LabRouter = Backbone.Router.extend({

    routes: {
      'experiment/:id': 'show_experiment'
    },

    show_experiment: function() {

    }


  });

  Backbone.history.start();

})();


