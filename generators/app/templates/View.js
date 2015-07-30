/* global define, Backbone, _ */
define([
    'app/config',

    'components/<%= componentName%>/controller/<%= componentName%>Controller',

    'dojo/text!../templates/<%= componentName%>Template.html'
  ],

  function(
    config,

    <%= componentName%>Controller,

    viewTemplate

  ) {
    var <%= componentName%> = Backbone.View.extend({

      events: {},

      initialize: function() {
        this.render();
      },

      render: function() {

        var template = _.template(viewTemplate);
        var options = {
          
        };

        this.$el.html(template(options));
        this.startup();
      },

      startup: function() {
        this.initComponents();
      },

      initComponents: function() {

      }

    });
    return <%= componentName%>;
  });