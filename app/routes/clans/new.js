import Route from '@ember/routing/route';

export default Route.extend({

	model() {
		return this.store.createRecord('clan');
	},

	setupController(controller, model) {
		this._super(controller, model);
		controller.set('title', 'Add a new clan');
		controller.set('buttonLabel', 'Add');
	},

	renderTemplate() {
		this.render('clans/form');
	},


	actions: {

	saveClan(newClan) {
		newClan.save().then(() => this.transitionTo('clans'));
	},

		willTransition() {
			// rollbackAttributes() removes the record from the store
			// if the model 'isNew'
			this.controller.get('model').rollbackAttributes();
		}
	}
});