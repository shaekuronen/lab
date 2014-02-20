/*global lab, $*/
console.log('main.js happened')

window.lab = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');

    // http://stackoverflow.com/questions/10643474/binding-a-backbone-model-to-a-marionette-itemview-blocking-fetch

    // request experiments data from api.github
    var fetch_options = {
      success: function(collection) {
        console.log('the collection is ' + Object.keys(collection));
        console.log('the first model id is ' + collection.models[0].id);
        // lab.trigger('collection_ajax_request_success_event');
      },
      error: function(error) {
        console.log('the error is ' + error);
      }
    };

    lab.experiments_collection.fetch(fetch_options);

  }
};

// extend lab object with Backbone Events so that lab.trigger will work globally
_.extend(lab, Backbone.Events);

$(document).ready(function () {
  'use strict';
  lab.init();
});
