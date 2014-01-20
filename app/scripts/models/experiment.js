/*global lab, Backbone*/

lab.Models = lab.Models || {};

(function() {
  'use strict';

  lab.Models.ExperimentModel = Backbone.Model.extend({

    defaults: {
      id: '',
      title: '',
      description: '',
      published: false
    },

    initialize: function() {
      console.log('This model has been initialized');
      this.on('change', function () {
        console.log('Values for this model have changed');

        // console log any validation errors
        this.on('invalid', function(model, error) {
          console.log(error);
        });
      })
    },

    validate: function(attributes) {

      // require a title for the experiement
      if(attributes.title === undefined) {
        return 'Please enter a title for the experiment';
      }

      // require a description for the experiment
      if(attributes.description === undefined) {
        return 'Please enter a description for the experiment';
      }

    }

  });

})();
