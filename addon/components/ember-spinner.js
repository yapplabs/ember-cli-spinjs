/* global Spinner, require */

import Ember from 'ember';

export default Ember.Component.extend({

  classNames: 'spinner-display',
  spinner: null,
  top: '50%',
  left: '50%',
  color: "#333",
  radius: 17,
  length: 0,
  lines: 5,
  width: 22,
  speed: 1.7,
  rotate: 55,
  configArgs: {},

  lookupUpConfig: function() {
    var opts = {
      radius:   this.get('radius'),
      length:   this.get('length'),
      lines:    this.get('lines'),
      width:    this.get('width'),
      speed:    this.get('speed'),
      rotate:   this.get('rotate'),
      top:      this.get('top'),
      left:     this.get('left'),
      color:    this.get('color'),
      hwaccel:  true
    };

    var configArgs;

    if(this.config) {
      var configFile = this.emberSpinnerPrefixConfig.modulePrefix + '/config/ember-spinner/' + this.config;

      configArgs = require( configFile ).default;
    }

    this.spinnerArgs = Ember.$.extend(opts, configArgs);

  }.on('willInsertElement'),

  didInsertElement: function() {
    this.spinner = new Spinner(this.spinnerArgs).spin(this.$()[0]);
  },

  willRemoveElement: function() {
    this.spinner.stop();
  }

});
