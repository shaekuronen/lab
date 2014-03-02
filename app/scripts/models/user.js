/*global lab, Backbone*/

lab.Models = lab.Models || {};

(function () {
    'use strict';

    lab.Models.UserModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
