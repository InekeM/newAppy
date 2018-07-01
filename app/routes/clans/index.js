import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('clan');
  },
 
  
  actions: {
    
    deleteClan(clan) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        clan.destroyRecord();
      }
    },



  }

})