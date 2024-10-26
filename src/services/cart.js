//adicionar item ao carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

//calculando o valor total do carrinho
async function calculateTotal(userCart) {
  console.log("\nCalculando total...");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total: R$ ${result.toFixed(2)}`);
}

//solução para deletar 1 item de cada vez
async function removeItem(userCart, item) {
  //procurar se tem o mesmo indice no cart para remover o item
  const indexFound = userCart.findIndex(
    (product) => product.name === item.name
  );
  //validações
  if (indexFound == -1) {
    console.log("item não encotrado");
    return;
  }
  //removendo item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
  } else {
    userCart.splice(indexFound, 1);
  }
  console.log(`\n1 qtd do produto ${item.name} removido`);
}

//forma simples para deletar um item da lista
// async function excluirItem(userCart, index) {
//   //tranforma o indice visual para o indice do backend
//   const deleteIndex = index - 1;
//   //validações
//   if (index >= 0 && index < userCart.length) {
//     userCart.splice(deleteIndex, 1);
//   } else {
//     console.log("indice invalido");
//   }
// }

//função para deletar um item da lista
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
    console.log(`item encontrado e removido com sucesso: ${name}`);
    console.log(
      `${userCart.length === 0 ? "não resta mais nada" : "ainda tem"} ${
        userCart.length
      } item(s) no carrinho`
    );
  } else {
    console.log("item não encontrado");
  }
}

// função para mostrar os itens de um carrinho
async function displayCart(userCart) {
  console.log("\nAmazon Cart List: ");
  userCart.forEach((item, index) => {
    console.log(
      `item ${index + 1}. ${item.name} - R$ ${item.price} por unit | ${
        item.quantity
      } qtd da compra | subtotal R$ ${item.subtotal().toFixed(2)}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
