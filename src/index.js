import * as cartService from './services/cart.js'
import createItem from "./services/item.js";

const myCart = []
const myWishList = []

console.log('Bem-Vindo ao seu carrinho de compras\n');

//criando itens
const item1 = await createItem('mouse', 19.99, 5)
const item2 = await createItem('mousepad', 9.99, 3)
const item3 = await createItem('teclado', 119.99, 3)

//adicionando
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myWishList, item3);

//deletando
await cartService.deleteItem(myCart, item2.name);

// removendo um item por vez
await cartService.removeItem(myCart, item1);

//mostrando carrinho
await cartService.displayCart(myCart);

//calculando
await cartService.calculateTotal(myCart)