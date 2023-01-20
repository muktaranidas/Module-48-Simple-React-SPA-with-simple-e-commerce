import { getStoragedcart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  // get Products
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  // get cart
  const savedCart = getStoragedcart();
  //   console.log("saved cart:", savedCart);
  const initialCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      // console.log(id, quantity);
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
    // console.log(addedProduct, id);
  }

  return { products: products, initialCart: initialCart };
};
