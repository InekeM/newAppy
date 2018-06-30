import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		editClan: function(id){
			var self = this;

			var tag = this.get('model.tag');
			var adderName = this.get('model.adderName');
			var date = this.get('model.date');
			
			//Update Clan
			this.store.findRecord('clan', id).then(function(clan){
				clan.set('tag', tag);
				clan.set('adderName', adderName);
				clan.set('date', new Date(date));

				// Save to Database
				clan.save();

				self.transitionToRoute('clans');

			});
		}
	}
});
