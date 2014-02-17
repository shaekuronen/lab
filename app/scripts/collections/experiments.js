/*global lab, Backbone*/

lab.Collections = lab.Collections || {};

(function () {
    'use strict';

    lab.Collections.ExperimentsCollection = Backbone.Collection.extend({

      // model: lab.Models.ExperimentsModel,
      url: 'https://api.github.com/users/shaekuronen/gists',



    });

    lab.experiments_collection = new lab.Collections.ExperimentsCollection();



})();
