/*global lab, Backbone, JST*/

lab.Views = lab.Views || {};

(function () {
    'use strict';

    lab.Views.ExperimentsView = Backbone.View.extend({

        template: JST['app/scripts/templates/experiments.ejs']

    });

})();
