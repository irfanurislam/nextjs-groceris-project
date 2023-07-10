/* eslint-disable @next/next/no-img-element */

import Top from "./Top";


const HomePage = () => {
  return (
    <main>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/qDYvWVp/pexels-alexgtacar-1592384.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      
    </main>
  );
};

export default HomePage;
