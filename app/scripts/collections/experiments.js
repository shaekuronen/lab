/*global lab, Backbone*/

lab.Collections = lab.Collections || {};

(function () {
  'use strict';

  lab.Collections.ExperimentsCollection = Backbone.Collection.extend({

    // model: lab.Models.ExperimentsModel,
    url: 'https://api.github.com/users/shaekuronen/gists',

  });

  lab.experiments_collection = new lab.Collections.ExperimentsCollection();

  // var InitModel = Backbone.Model.extend({

  // });

  // (function () {
  //   var instance;
  //   InitModel.getInstance = function () {
  //     if (!instance) {
  //       instance = new InitModel();
  //     }
  //     return instance;
  //   };
  // })();

  // function doThingWithData() {

  // }


  // var initModel = InitModel.getInstance();

  // if (!_.keys(initModel.attributes).length) {
  //   initModel.fetch().done(doThingWithData);
  // } else {
  //   doThingWithData();
  // }

})();
