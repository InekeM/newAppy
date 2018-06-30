import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
import { and } from '@ember/object/computed';


export default Controller.extend({

  emailAddress: '',
  message: '',

  isMessageLongEnough: gte("yourProperty.length", 5),
  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isValid: and('isMessageLongEnough', 'isValidEmail'),
  inNotValid: not('isValid'),

  actions: {

    sendMessage() {
      var responseMessage = 'Thank you! Your message has been sent. From: ' + this.emailAddress + ', Message: ' + this.message;
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message');
    }
  }

});
