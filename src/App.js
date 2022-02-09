import './App.css';
import Cards from './component/Cards';
import Narvbar from './component/Narvbar';
import Right_card from './component/Right_card';


import React from 'react';

const App = () => {

return (
  <div className="container">
    <div className='narvbar'>
      <Narvbar />
    </div>

    <div className='card'>
      <div className='card_flex'>
        <div className="card_grid">
          <Cards
            title="PU Leather Handbag"
            price="#8,600"
            description="All outfit Quality Matching PU Leather female Hanbdag "
          />
          <Cards
            title="Classic Radio"
            price="#8,000"
            description="Radio with Adjustable shoulder strap and Handle"
          />
          <Cards
            title="Hawaii beach T-shirt"
            price="#4,000"
            description="Summer men loose short sleeve"
          />
          <Cards
            title="GATWIGA Laptop Packbag"
            price="#12,000"
            description="GATWIGA Black Casual bBag Bussines and Laptop Backpack"
          />
          <Cards
            title="GATWIGA 3 in One Bag Set"
            price="#16,000"
            description="Pencil/Crossbody/Laptop Backpack"
          />
          <Cards
            title="Satchel shoulder Bag Tote"
            price="#5,000"
            description="Women Leather Handbag Messager"
          />
        </div>

        <div className='right'>
          <Right_card/>
        </div>
      </div>
    </div>
  </div>
);
}

export default App

