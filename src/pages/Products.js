import React from 'react';
import { Link } from 'react-router-dom';

function Products({ addToCart }) {
  const productList = [
    {
      id: 1,
      name: 'Little hearts',
      price: 'Rs.200',
      description: 'Little heart-shaped biscuits with a crumbly texture and sugar crystals sprinkled all over.',
      img: '/littlehearts.webp'
    },
    {
      id: 2,
      name: 'Good day',
      price: 'Rs.300',
      description: 'A 100-gram serving has 64 grams of sugar and refined flour and a potential cause of obesity.',
      img: '/good.webp'
    },
    {
      id: 3,
      name: 'Milk bikis',
      price: 'Rs.162',
      description: 'The goodness of milk and contains the goodness of Calcium, Vitamin D & B Vitamins to power your child\'s growth.',
      img: '/milk.webp'
    },
    {
      id: 4,
      name: 'Marie gold',
      price: 'Rs.144',
      description: 'Snacks like Marie Gold biscuits are high in carbohydrates. This leads to a spike in blood glucose levels.',
      img: '/ear.webp'
    },
    {
      id: 5,
      name: '50-50',
      price: 'Rs.150',
      description: 'Some studies suggest that its not FAT but sugar that is the cause for higher intake calorie and excess weight gain.',
      img: '/fifty.webp'
    },
    {
      id: 6,
      name: 'Jim jam',
      price: 'Rs.160',
      description: 'Jim Jam biscuits make for an excellent picnic snack or lunchtime snack for kids.',
      img: '/jimjam.webp'
    },
    {
      id: 7,
      name: 'Bourbon',
      price: 'Rs.200',
      description: 'Bourbon biscuits are simply chocolate sandwich biscuits with a chocolate cream filling.',
      img: '/bourbon.webp'
    },
    {
      id: 8,
      name: 'Treat',
      price: 'Rs.135',
      description: 'Smooth creme sandwiched between crispy biscuits, this delicious treat comes in a variety of lip-smacking flavours.',
      img: '/treat.webp'
    },
    {
      id: 9,
      name: 'Nutri choice',
      price: 'Rs.140',
      description: 'NutriChoice Sugar-free Cracker is your perfectly healthy biscuit, made with absolutely zero sugar.',
      img: '/nutrichoice.webp'
    },
    {
      id: 10,
      name: 'Pure magic',
      price: 'Rs.170',
      description: 'Ingredients Dark Choco Filling (38%) sugar, Refined Palmolein Oil, Cocoa Solids, Iodised Salt And Artificial.',
      img: '/tia.webp'
    }
  ];

  return (
    <div>
      <header>
        <h1>Products</h1>
        <Link to="/cart">Go to Cart</Link>
      </header>

      <div className="container">
        <div className="product">
          {productList.map(product => (
            <div key={product.id} className="product-item">
              <img className="product-img" src={process.env.PUBLIC_URL + product.img} alt={product.name} />
              <div className="product-title">{product.name}</div>
              <div className="product-price">{product.price}</div>
              <div className="product-description">{product.description}</div>
              <div className="btn-group">
                <button className="btn btn-add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
