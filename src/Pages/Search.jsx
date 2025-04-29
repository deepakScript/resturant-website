import React, { useState } from 'react'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar';
import Product from '../Components/Product';
import Footer from '../Components/Footer'

const Search = () => {
    const [allFood, setAllFood] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const APP_ID = "b3972793"
    const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0"


    const fetchFood = async () => {
        try {
            setLoading(true)
            const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
            const data = await res.json();
            setAllFood(data.hits);
            console.log(data.hits);

            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <div className='min-h-screen flex flex-col'>
            <div className='flex-grow'>
            <Header />
            <div>
                <SearchBar search={search} setSearch={setSearch} fetchFood={fetchFood} />
                <Product allFood={allFood} loading={loading} />
            </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Search
