/*global lab, Backbone*/

lab.Collections = lab.Collections || {};

(function () {
    'use strict';

    lab.Collections.LabCollection = Backbone.Collection.extend({

        model: lab.Models.LabModel

    });

})();
