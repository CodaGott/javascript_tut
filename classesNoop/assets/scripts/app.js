// const products = [
//   {
//     title: 'A pillow',
//     imageUrl:
//       'https://www.maxpixel.net/Pillow-Decoration-Green-Soft-Deco-Snuggle-1241878',
//     price: 19.99,
//     description: 'A soft pillow',
//   },
//   {
//     title: 'A Carpet',
//     imageUrl:
//       'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maxpixel.net%2FPillow-Decoration-Green-Soft-Deco-Snuggle-1241878&psig=AOvVaw2vUThtBQ7GFXZRYlrJ5vM2&ust=1667991377348000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCaspa2nvsCFQAAAAAdAAAAABAE',
//     price: 149.99,
//     description: 'A Turkish Carpet',
//   },
// ];

const productList = {
  products: [
    {
      title: 'A pillow',
      imageUrl:
        'https://www.maxpixel.net/Pillow-Decoration-Green-Soft-Deco-Snuggle-1241878',
      price: 19.99,
      description: 'A soft pillow',
    },
    {
      title: 'A Carpet',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maxpixel.net%2FPillow-Decoration-Green-Soft-Deco-Snuggle-1241878&psig=AOvVaw2vUThtBQ7GFXZRYlrJ5vM2&ust=1667991377348000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCaspa2nvsCFQAAAAAdAAAAABAE',
      price: 149.99,
      description: 'A Turkish Carpet',
    },
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt ="${prod.title}">
        <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
