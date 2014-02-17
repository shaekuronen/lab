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

        lab.on('collection_ajax_request_success_event', this.render, this);

      },

      render: function() {

        console.log('EXPERIMENTS VIEW RENDER CALLED');



        this.$el.html(this.template(this.collection));

        return this;

      }

    });

    lab.experiments_view = new lab.Views.ExperimentsView();

})();
