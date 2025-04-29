import React from 'react';
import heromenu from '../images/menu.webp'

const MenuHero = () => {
    return (
        <div className="relative h-[450px] bg-cover bg-[top_90%_center] flex items-start justify-center pt-20" style={{ backgroundImage: `url(${heromenu})` }}>
            <div className="bg-green-900/60 p-6 rounded-lg text-center mx-4 -mt-15">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Our Delicious Menu</h1>
                <p className="mt-2 text-lg bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Explore a variety of dishes curated just for you</p>
            </div>
        </div>
    );
};

export default MenuHero;
