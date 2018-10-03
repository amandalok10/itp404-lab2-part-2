import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i){
    return `User ${i + 1}`;
  },

first(){
    return faker.name.firstName();
  },

  last(){
    return faker.name.lastName();
  },

jobTitle(){
    return faker.name.jobTitle();
  },

  phone(){
    return faker.phone.phoneNumber();
  }


});
