function createProductCardWithQuantity(products) {
  return { ...products, cartQuantity: 1 }
}

export default createProductCardWithQuantity
