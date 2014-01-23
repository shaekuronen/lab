/*global lab, Backbone, JST*/

lab.Views = lab.Views || {};

(function () {

  'use strict';

  lab.Views.ExperimentView = Backbone.View.extend({

    el: '#lb-experiment-container',

    template: JST['app/scripts/templates/experiment.ejs'],

    events: {
      'click #test-button': 'test_button_notifier'
    },

    model: lab.experiment_model,

    initialize: function() {

      console.log('experiment view initialized');

      // this worked once 'this' context (as 3rd parameter) was added
      this.model.on('change', this.render, this);

      // this worked once 'this' context (as 3rd parameter) was added
      lab.on('experiment_url_event', this.render, this);

    },

    render: function(id) {
      console.log('experiment view render called on id ' + id);
      this.$el.html(this.template, this.model.toJSON());
      return this;
    },

    test_button_notifier: function() {
      console.log('Test button clicked');
    }

  });

  lab.experiment_view = new lab.Views.ExperimentView();

})();
