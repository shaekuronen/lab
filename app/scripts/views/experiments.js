/*global lab, Backbone, JST*/

lab.Views = lab.Views || {};

(function () {
    'use strict';

    lab.Views.ExperimentsView = Backbone.View.extend({

      el: '#lb-experiments-container',

      template: JST['app/scripts/templates/experiments.ejs'],

      initialize: function() {

        // associate the collection with the view
        this.collection = lab.experiments_collection;

        console.log(Object.keys(this.collection.models));

        console.log('experiments view initialized and its collection is ' + JSON.stringify(this.collection));

        // lab.on('collection_ajax_request_success_event', this.render, this);



        // when the collection ajax request finishes, render view
        // this.collection.on('sync', this.render, this);

        // when the experiments url event happens, render view
        this.collection.listenTo(lab.router, 'route:experiments', this.render);

      },

      render: function() {

        // if there is data
        if (_.keys(lab.data.attributes).length) {

          console.log('experiments view render called AND lab.data has data');

          this.$el.html(this.template(this.collection));

          return this;

        // if there is not data, listen for data complete event
        } else {

          // extended lab object with Backbone.Events in main.js
          lab.data.on('')

        }

      };

    });

    lab.experiments_view = new lab.Views.ExperimentsView();

})();
