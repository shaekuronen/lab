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

    initialize: function() {

      // associate the model with the view
      this.model = new lab.Models.ExperimentModel();

      console.log('experiment view initialized and its model is ' + JSON.stringify(this.model));

      // this worked once 'this' context (as 3rd parameter) was added
      this.model.on('change', this.render, this);

      // this worked once 'this' context (as 3rd parameter) was added
      // TODO verify that experiment exists
      lab.on('experiment_url_event', this.render, this);

    },

    render: function(id) {

      console.log('experiment view render called on id ' + id);

      this.model = lab.experiments_collection.get(id);

      this.$el.html(this.template(this.model.attributes));

      return this;

    },

    test_button_notifier: function() {
      console.log('Test button clicked');
    }

  });

  lab.experiment_view = new lab.Views.ExperimentView();

})();
