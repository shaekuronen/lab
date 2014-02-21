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

        // when the collection ajax request finishes, render view
        // this.collection.on('sync', this.render, this);

        // when the experiments url event happens, render view
        // this.listenTo(lab.router, 'experiments_url_event', this.render);
        lab.on('experiments_url_event', this.is_data_available, this);

      },

      is_data_available: function() {

        console.log('experiments_view_this is ' + _.keys(this));

        console.log('the lab data is ' + lab.the_data);

        var experiments_view_this = this;

        if ( (typeof lab.the_data !== 'undefined') && (lab.the_data.length > 0) ) {

          experiments_view_this.render();

        } else {

          console.log('there is NO data');

          // https://developer.mozilla.org/es/docs/XMLHttpRequest/Usar_XMLHttpRequest
          lab.xmlhttp.addEventListener("load", experiments_view_this.render, false);

        }

      },

      render: function() {

          console.log('there is data');
          console.log(lab.the_data);

          lab.experiments_collection.reset(lab.the_data);

          this.$el.html(this.template(this.collection));

          return this;

      }

    });

    lab.experiments_view = new lab.Views.ExperimentsView();

})();
