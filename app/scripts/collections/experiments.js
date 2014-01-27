/*global lab, Backbone*/

lab.Collections = lab.Collections || {};

(function () {
    'use strict';

    var experiments = [
      {
        "id": "instagram-api-query",
        "title": "Instagram API Query",
        "description": "Unauthenticated query to the Instagram API.  Returned JSON is dynamically added to the page. Some change",
        "html": "\n<ul id=\"instagram-container\"></ul>\n\n<script>\n  (function($) {\n\n    var get_json_callback,\n        instagram_json,\n        url;\n\n    url = 'https://api.instagram.com/v1/tags/staffordshire/media/recent?client_id=218a8f30a6924492b7ffdbbcb08f72c5&callback=?';\n\n    // callback to execute when json request completes\n    get_json_callback = function(returned_json) {\n\n      var count = returned_json.data.length,\n          instagram_slideshow_items = '';\n\n      $.each(returned_json.data, function(key, current_item) {\n\n        // build the html for instagram item\n        var instagram_item = '<li>';\n\n        instagram_item += '<a target=\"_blank\" href=\"' + current_item.link + '\">';\n\n        instagram_item += '<img src=\"'+ current_item.images.low_resolution.url + '\" width=\"150\" heigh=\"150\">';\n\n        instagram_item += '</a>';\n\n        instagram_item += '</li>';\n        // end build the html for instagram item\n\n        // add item to instagram slideshow fragment\n        instagram_slideshow_items += instagram_item;\n\n        // if this is the last item -- basically a callback\n        if (key === (count - 1) ) {\n\n          // add instagram items to page\n          $('#instagram-container').append(instagram_slideshow_items);\n\n        }\n\n      });\n\n    };\n    // callback to execute when json request completes\n\n    // query instagram api and get json\n    instagram_json = $.getJSON(url, get_json_callback);\n\n  }(jQuery));\n</script>\n"
      }
    ];

    // lab.Collections.ExperimentsCollection = Backbone.Collection.extend({

    //     model: lab.Models.ExperimentsModel

    // });

    lab.experiments_collection = new Backbone.Collection(experiments);

})();
