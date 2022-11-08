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
class Product {
  title = 'DEFAULT';
  imageUrl;
  price;
  description;

  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}
class ProductList {
  products = [
    new Product(
      'A pillow',
      'https://www.maxpixel.net/Pillow-Decoration-Green-Soft-Deco-Snuggle-1241878',
      19.99,
      'A soft pillow'
    ),
    new Product(
      'A carpet',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maxpixel.net%2FPillow-Decoration-Green-Soft-Deco-Snuggle-1241878&psig=AOvVaw2vUThtBQ7GFXZRYlrJ5vM2&ust=1667991377348000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCaspa2nvsCFQAAAAAdAAAAABAE',
      149.99,
      'A Turkish Carpet'
    ),
  ];
  constructor() {}

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class ShoppingCart {
  items = [];

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
        
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
    cartEl.className = 'cart';
    return cartEl;
  }
}

class ProductItem {
  //   product = new Product();
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('Adding product to cart...');
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt ="${this.product.title}">
        <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
        </div>
      </div>
      `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}
// const productList = {
//   //   products: [
//   //     new Product(
//   //       'A pillow',
//   //       'https://www.maxpixel.net/Pillow-Decoration-Green-Soft-Deco-Snuggle-1241878',
//   //       19.99,
//   //       'A soft pillow'
//   //     ),
//   //     // {
//   //     //   title: 'A pillow',
//   //     //   imageUrl:
//   //     //     'https://www.maxpixel.net/Pillow-Decoration-Green-Soft-Deco-Snuggle-1241878',
//   //     //   price: 19.99,
//   //     //   description: 'A soft pillow',
//   //     // },
//   //     new Product(
//   //       'A carpet',
//   //       'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maxpixel.net%2FPillow-Decoration-Green-Soft-Deco-Snuggle-1241878&psig=AOvVaw2vUThtBQ7GFXZRYlrJ5vM2&ust=1667991377348000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCaspa2nvsCFQAAAAAdAAAAABAE',
//   //       149.99,
//   //       'A Turkish Carpet'
//   //     ),
//   //     // {
//   //     //   title: 'A Carpet',
//   //     //   imageUrl:
//   //     //     'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maxpixel.net%2FPillow-Decoration-Green-Soft-Deco-Snuggle-1241878&psig=AOvVaw2vUThtBQ7GFXZRYlrJ5vM2&ust=1667991377348000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCaspa2nvsCFQAAAAAdAAAAABAE',
//   //     //   price: 149.99,
//   //     //   description: 'A Turkish Carpet',
//   //     // },
//   //   ],
//   //   render() {
//   //     const renderHook = document.getElementById('app');
//   //     const prodList = document.createElement('ul');
//   //     prodList.className = 'product-list';
//   //     for (const prod of this.products) {
//   //       const prodEl = document.createElement('li');
//   //       prodEl.className = 'product-item';
//   //       prodEl.innerHTML = `
//   //       <div>
//   //         <img src="${prod.imageUrl}" alt ="${prod.title}">
//   //         <div class="product-item__content">
//   //             <h2>${prod.title}</h2>
//   //             <h3>\$${prod.price}</h3>
//   //             <p>${prod.description}</p>
//   //             <button>Add to Cart</button>
//   //         </div>
//   //       </div>
//   //       `;
//   //       prodList.append(prodEl);
//   //     }
//   //     renderHook.append(prodList);
//   //   },
// };
class Shop {
  render() {
    const cart = new ShoppingCart();
    const renderHook = document.getElementById('app');
    const cartEl = cart.render();
    const productList = new ProductList();
    const productListEL = productList.render();

    renderHook.append(cartEl);
    renderHook.append(productListEL);
  }
}

const shop = new Shop();
shop.render();
