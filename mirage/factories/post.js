import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i){
    return `Product ${i + 1}`;
  },

  price(){
    return faker.commerce.price();
  },

  name(){
    return faker.commerce.productName();
  },

  color(){
    return faker.commerce.color();
  },

  material(){
    return faker.commerce.productMaterial();
  }

  // id() {
  //   return faker.helpers.slugify(this.name);
  // }

});
