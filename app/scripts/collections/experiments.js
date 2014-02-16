/*global lab, Backbone*/

lab.Collections = lab.Collections || {};

(function () {
    'use strict';

    lab.Collections.ExperimentsCollection = Backbone.Collection.extend({

      // model: lab.Models.ExperimentsModel,
      url: 'https://api.github.com/users/shaekuronen/gists'

    });

    lab.experiments_collection = new lab.Collections.ExperimentsCollection();

    var fetch_options = {
      success: function(collection) {
        console.log('the collection is ' + Object.keys(collection));
        console.log('the first model id is ' + collection.models[0].id);
      },
      error: function(error) {
        console.log('the error is ' + error);
      }
    };

    lab.experiments_collection.fetch(fetch_options);

})();
