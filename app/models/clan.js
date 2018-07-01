import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';
import { empty } from '@ember/object/computed';

export default DS.Model.extend({
	tag: DS.attr(),
	date: DS.attr(),
	adderName: DS.attr(),
	created: DS.attr('string',{
		defaultValue: function(){
			return new Date();
		}
	}),

	players: DS.hasMany('player'),
	
	isValid: notEmpty('tag'),
	isNotValid: empty('date')

});
