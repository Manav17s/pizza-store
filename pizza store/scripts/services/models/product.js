// product model(blueprint)
// piiza object - id, name, prize, rating, image

class Product
{
    constructor(id,name,desc,price,url)
    {
        // this-keyword(contains current calling object reference)
      this.id = id;
      this.name = name;
      this.desc = desc;
      this.price = price;
      this.url = url;
    }
}
export default Product;