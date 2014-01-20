/*global lab, Backbone, JST*/

lab.Views = lab.Views || {};

(function () {

  'use strict';

  lab.Views.ExperimentView = Backbone.View.extend({

    el: '#lb-experiment-container',

    template: JST['app/scripts/templates/experiment.ejs'],

    render: function() {
      this.$el.html(template, this.model.toJSON());
      return this;
    },

    events: {
      'click #test-button': 'test_button_notifier'
    },

    test_button_notifier: function() {
      console.log('Test button clicked');
    }

  });

})();
