// CRUD operations on products
// c-create,r-read,u-update,d-delete
import Product from '../models/product.js';
import doNetworkCall from './api-client.js';

const productOperations = {
   async loadProducts(){
    const pizzas =  await doNetworkCall();
    const pizzaArray = pizzas['Vegetarian'];
   const productsArray =  pizzaArray.map(pizza=>{  // loop or traverse each pizza
        const currentPizza = new Product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.assets.product_details_page[0].url);
        return currentPizza;
    })
    this.pizzas=productsArray;
    console.log('PPPPPPPPPP',this.pizzas);
    console.log('Product Array ',productsArray);
    return productsArray;
    },
    sortProducts(){

    },
    searchProducts(){

    }
}
export default productOperations;

