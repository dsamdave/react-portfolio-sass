import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
import myworks from '../Components/Allmyworks';
import { useState } from 'react';

const allCategories = ['All', ...new Set(myworks.map(item => item.category))];

function Myworkspage() {
    const [categories ] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(myworks);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(myworks)
            return;
        }
        const filteredData  = myworks.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'My Works'} span={'My Works'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default Myworkspage;
