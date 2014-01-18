/*global lab, Backbone, JST*/

lab.Views = lab.Views || {};

(function () {
    'use strict';

    lab.Views.LabView = Backbone.View.extend({

        template: JST['app/scripts/templates/lab.ejs']

    });

})();
