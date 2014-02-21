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

      lab.trigger('experiments_url_event');

      // var fetch_options = {
      //   success: function(collection) {
      //     console.log('the collection is ' + Object.keys(collection));
      //     console.log('the first model id is ' + collection.models[0].id);
      //     lab.trigger('collection_ajax_request_success_event');
      //   },
      //   error: function(error) {
      //     console.log('the error is ' + error);
      //   }
      // };

      // lab.experiments_collection.fetch(fetch_options);

    }

  });

  // create a router instance
  lab.router = new lab.Routers.LabRouter();


  $(document).ready(function () {

    // start monitoring hashchange events
    Backbone.history.start();

  });

})();




