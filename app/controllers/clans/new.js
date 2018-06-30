import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addClan : function(){
			var tag = this.get('tag');
			var adderName = this.get('adderName');
			var date = this.get('date');

			//create new clan
			var newClan = this.store.createRecord('clan', {
				tag:tag,
				adderName:adderName,
				date: new Date(date)
			});

			//Save and clear form
			newClan.save();
			
			this.setProperties({
				tag:'',
				adderName:'',
				date:''
			});
		}
	}
});
