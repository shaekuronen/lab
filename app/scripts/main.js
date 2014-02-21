/*global lab, $*/

var lab_init = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');

    // http://stackoverflow.com/questions/10643474/binding-a-backbone-model-to-a-marionette-itemview-blocking-fetch

    // request experiments data from api.github
    // var fetch_options = {
    //   success: function(collection) {
    //     console.log('the collection is ' + Object.keys(collection));
    //     console.log('the first model id is ' + collection.models[0].id);
    //     // lab.trigger('collection_ajax_request_success_event');
    //   },
    //   error: function(error) {
    //     console.log('the error is ' + error);
    //   }
    // };

    // lab.experiments_collection.fetch(fetch_options);

    // console.log('in init window.lab is ' + _.keys(window.lab));

  }
};

_.extend(lab, lab_init);

// extend lab object with Backbone Events so that lab.trigger will work globally
_.extend(lab, Backbone.Events);

$(document).ready(function () {
  'use strict';
  lab.init();
});
