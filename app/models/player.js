import DS from 'ember-data';

export default DS.Model.extend({
	TH: DS.attr('string'),
	time: DS.attr('date'),
	loot: DS.attr('string'),
	wt: DS.attr('string',{
		defaultValue: function(){
			return new Date();
		}
	})
});
