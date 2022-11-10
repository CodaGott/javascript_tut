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

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClass, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClass) {
      rootElement.className = cssClass;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}
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
class ProductList extends Component {
  //#products = []; this is how you make a field private JS.
  // you'll hava to add the '#' to call the field anywhere.
  products = [];

  constructor(renderHookId) {
    super(renderHookId);
    this.fetchProducts();
  }

  fetchProducts() {
    this.products = [
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
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, 'prod-list');
    }
  }

  render() {
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list'),
    ]);
    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }
    // const prodList = document.createElement('ul');
    // prodList.id = 'prod-list';
    // prodList.className = 'product-list';
    // for (const prod of this.products) {
    //   ProductItem(prod, 'prod-list');
    //   const productItem = new ProductItem(prod, 'prod-list');
    //   productItem.render();
    //   const prodEl = productItem.render();
    //   prodList.append(prodEl);
    // }
    // return prodList;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class ShoppingCart extends Component {
  items = [];

  constructor(renderHookId) {
    super(renderHookId);
  }

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }
  get totalAmount() {
    const sum = this.items.reduce((previousVal, currentItem) => {
      return previousVal + currentItem.price;
    }, 0);
    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  orderProduct() {
    console.log('Ordering...');
    console.log(this.items);
  }
  render() {
    // const cartEl = document.createElement('section');
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
        
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
    // cartEl.className = 'cart';
    const orderButton = cartEl.querySelector('button');
    orderButton.addEventListener('click', () => this.orderProduct());
    this.totalOutput = cartEl.querySelector('h2');
    // return cartEl;
  }
}

class ProductItem extends Component {
  //   product = new Product();
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    // const prodEl = document.createElement('li');
    const prodEl = this.createRootElement('li', 'product-item');
    // prodEl.className = 'product-item';
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
    // return prodEl;
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
  constructor() {
    // Instead of extending the component class,
    // we can use the constructor there like show below
    this.render();
  }
  render() {
    // const renderHook = document.getElementById('app');
    this.cart = new ShoppingCart('app');
    // this.cart.render();
    new ProductList('app');

    // const productList = new ProductList('app');
    // productList.render();
    // const productListEL = productList.render();

    // renderHook.append(cartEl);
    // renderHook.append(productListEL);
  }
}

class App {
  static init() {
    const shop = new Shop();
    // shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
