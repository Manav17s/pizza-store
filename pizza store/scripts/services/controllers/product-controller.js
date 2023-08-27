// glue btw view(UI) and model
import productOperations from '../services/product-operations.js';

async function loadPizzas(){ 
const pizzas =  await productOperations.loadProducts();
console.log('Pizzas are',pizzas);
}
loadPizzas();