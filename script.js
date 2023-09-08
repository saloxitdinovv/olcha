let products = document.createElement('div');
let container = document.createElement('div');
let product = document.createElement('div');
let product_photo_box = document.createElement('div');
let product_photo = document.createElement('img');
let product_info = document.createElement('div');
let product_name = document.createElement('p');
let product_past_price = document.createElement('p');
let product_price = document.createElement('p');
let credit = document.createElement('div');
let discount = document.createElement('div');
let heart = document.createElement('img');
let compare = document.createElement('img');
let buy_product = document.createElement('div');
let buy_button = document.createElement('button');
let buy = document.createElement('img');
let buy_credit = document.createElement('button');
let products_box = document.createElement('div');

products.classList.add('products')
container.classList.add('container')
product.classList.add('product')
product_photo_box.classList.add('product_photo_box')
product_photo.classList.add('product_photo')
product_info.classList.add('product_info')
product_name.classList.add('product_name')
product_past_price.classList.add('priced')
product_price.classList.add('now_price')
credit.classList.add('credit')
buy_product.classList.add('buy_product')
discount.classList.add('discount')
heart.classList.add('heart')
compare.classList.add('compare')
buy_button.classList.add('buy_button')
buy.classList.add('buy')
buy_credit.classList.add('buy_credit')
products_box.classList.add('products_box')



product_photo.src = 'img/noutbook.jpg'
product_photo.alt = 'product'
product_name.innerHTML = 'Ноутбук Lenovo V15-IGL N4020 4/256 GB SSD 15.6" HD'
product_past_price.innerHTML = '3 468 000 сум'
product_price.innerHTML = '2 566 320 сум'
discount.innerHTML = '-26%'
credit.innerHTML = '332 000 сум x 12 мес'
heart.src = 'img/heart.png'
compare.src = 'img/compare.png'
buy.src = 'img/buy.png'
buy_credit.innerHTML = 'В рассрочку'


document.body.append(products)

products.append(container)

container.append(products_box)
products_box.append(product)

product.append(product_photo_box)
product_photo_box.append(product_photo)
product_photo_box.append(discount)
product_photo_box.append(heart)
product_photo_box.append(compare)

product.append(product_info)

product_info.append(product_name)
product_info.append(product_past_price)
product_info.append(product_price)
product.append(credit)

product.append(buy_product)

buy_product.append(buy_button)
buy_button.append(buy)
buy_product.append(buy_credit)

