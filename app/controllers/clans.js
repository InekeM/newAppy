import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		deleteClan: function(id){
			this.store.findRecord('clan', id).then(function(clan){
				clan.deleteRecord();

				clan.save();
			});
		}
	}
});
