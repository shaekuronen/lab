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

      // TODO - need to determine state before firing render
      // this.listenTo(this.model, 'change', this.render);

      // this one worked
      // this.listenTo(lab.router, 'experiment_requested', this.render);

      // this also worked once 'this' context (as 3rd parameter) was added
      // lab.router.on('experiment_requested', this.render, this);

      this.listenTo(this.model, 'change', this.is_experiment_requested);

    },

    render: function(id) {
      console.log('experiment view render called on id ' + id);
      this.$el.html(this.template, this.model.toJSON());
      return this;
    },

    is_experiment_requested: function() {

      console.log('is_experiment_requested executed');

      if (this.model.get('requested') === true) {
        console.log('this model was requested');
        this.render();
      }

    },

    test_button_notifier: function() {
      console.log('Test button clicked');
    }

  });

  lab.experiment_view = new lab.Views.ExperimentView();

})();
