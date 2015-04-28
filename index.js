module.exports = {
  name: 'ember-cli-spinjs',

  included: function(app) {
    this._super.included(app);
    if (app.import) { // we won't have import if used as a nested addon
      app.import(app.bowerDirectory + '/spin.js/spin.js');
    }
  }
};
