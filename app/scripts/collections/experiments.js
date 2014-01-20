/*global lab, Backbone*/

lab.Collections = lab.Collections || {};

(function () {
    'use strict';

    lab.Collections.ExperimentsCollection = Backbone.Collection.extend({

        model: lab.Models.ExperimentsModel

    });

})();
