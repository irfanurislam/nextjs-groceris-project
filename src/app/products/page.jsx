/* eslint-disable @next/next/no-img-element */
import React from "react";

const products = [
  {
    id: 1,
    name: "Fish Curry",
    image: "https://i.ibb.co/VtFWCZ3/aawo4fiwif195qtftk5g.jpg",
    price: 10.99,
  },
  {
    id: 2,
    name: "Honey",
    image: "https://i.ibb.co/gg5NmN8/eplrjqz3r5inll57ocxa.jpg",
    price: 19.99,
  },
  {
    id: 3,
    name: "CapciCum",
    image: "https://i.ibb.co/yP1kt82/feb9t5w9txz1975dfcud.jpg",
    price: 7.99,
  },
  {
    id: 4,
    name: "Orange",
    image: "https://i.ibb.co/0D4ZjrR/fukk2zrl3ypenu72jywf.jpg",
    price: 7.99,
  },
  {
    id: 5,
    name: "Blackberriesz",
    image: "https://i.ibb.co/6ycrWTQ/lgnk0b3zpzqpd51uenva.jpg",
    price: 7.99,
  },
  {
    id: 6,
    name: "Watermelon",
    image: "https://i.ibb.co/xXHCFxb/nqrggup6jvocznc2mho2.jpg",
    price: 7.99,
  },
  {
    id: 7,
    name: "Strawberry",
    image: "https://i.ibb.co/HzHrDPH/ri82zbowqodrv4ajasiy.jpg",
    price: 7.99,
  },
  {
    id: 8,
    name: "Fresh Meat",
    image: "https://i.ibb.co/1qjx26z/zswhtsxucfwd8iyplbkc.jpg",
    price: 7.99,
  },
];

const ProductList = () => {
  return (
    <div>
      <div className="text-center">
        <p className="mt-14 text-pink-600 text-lg">Products</p>
        <h2 className="text-2xl mt-5 mb-20">Hot Products</h2>
      </div>
      <div className="grid md:grid-cols-4 gap-2">
        {products.map((product) => (
          <div key={product.id}>
            <div className="card w-80 bg-base-100 hover:translate-y-1">
              <figure className="">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-xl "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p className="text-pink-500 text-md">$ {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
// https://i.ibb.co/VtFWCZ3/aawo4fiwif195qtftk5g.jpg
// https://i.ibb.co/gg5NmN8/eplrjqz3r5inll57ocxa.jpg
// https://i.ibb.co/yP1kt82/feb9t5w9txz1975dfcud.jpg
// https://i.ibb.co/0D4ZjrR/fukk2zrl3ypenu72jywf.jpg
// https://i.ibb.co/6ycrWTQ/lgnk0b3zpzqpd51uenva.jpg
// https://i.ibb.co/xXHCFxb/nqrggup6jvocznc2mho2.jpg
// https://i.ibb.co/HzHrDPH/ri82zbowqodrv4ajasiy.jpg
// https://i.ibb.co/1qjx26z/zswhtsxucfwd8iyplbkc.jpg
