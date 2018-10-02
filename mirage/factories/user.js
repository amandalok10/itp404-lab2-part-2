import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i){
    return "First name:";  //note the backticks!!!!
  },
    body(){
      return faker.name.firstName();
    }
});
