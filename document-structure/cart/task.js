const cart = document.querySelector('.cart__products');
const quantityProd = document.querySelectorAll('.product');
const adds = document.querySelectorAll('.product__add');

quantityProd.forEach((product) => {
const countProd = product.querySelector('.product__quantity-value');

const inc = product.querySelector('.product__quantity-control_inc')
  inc.addEventListener('click', () => {
    countProd.textContent = +countProd.textContent + 1;
  });

const dec = product.querySelector('.product__quantity-control_dec');
  dec.addEventListener('click', () => {
    countProd.textContent = +countProd.textContent === 1
      ? 1
      : +countProd.textContent - 1;
  });

for (let item of adds) {
    item.addEventListener('click', addCart);
}

function addCart(event) {
    const prod = event.target.closest('.product');
    const id = prod.dataset.id;
    const countFromProduct = event.target.parentNode.querySelector('.product__quantity-value').innerText;

    for (let item of cart.children) {
        if (item.dataset.id === id) {
            let productCount = item.querySelector('.cart__product-count');
            let total = productCount.innerText;
            productCount.innerText = total + countFromProduct;

            return false;
        }
    }

    const prodImg = prod.querySelector('.product__image').src;
    const value = prod.querySelector('.product__quantity-value').innerText;
    const prodToCart = `<div class="cart__product" data-id="${id}">
                                <img class="cart__product-image" src="${prodImg}">
                                <div class="cart__product-count">${value}</div>
                            </div>`;

    cart.insertAdjacentHTML('beforeend', prodToCart);
}

});

