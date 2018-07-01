import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('clan', params.clan_id);
  },
  
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('title', 'Edit clan');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('clans/form');
  },

  actions: {

    saveClan(clan) {
      clan.save().then(() => this.transitionTo('clans'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});