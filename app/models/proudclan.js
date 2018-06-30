import DS from 'ember-data';

export default DS.Model.extend({
	clanName: DS.attr('string'),
	clanTag: DS.attr('string'),
	dateJoined: DS.attr('date')
});
