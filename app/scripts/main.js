/*global lab, $*/


window.lab = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
  }
};

// extend lab object with Backbone Events so that lab.trigger will work globally
_.extend(lab, Backbone.Events);

$(document).ready(function () {
  'use strict';
  lab.init();
});
