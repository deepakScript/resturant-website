import React,{useState} from 'react'
import SearchBar from './SearchBar';
import Product from './Product';

const OrderOnline = () => {
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
        <section className='flex flex-col align-center justify-center font-bold backgraoudn'>
            <div className='flexic  bg-gradient-to-r from-pink-500 to-yellow-500 p-4 shadow-md '>
                <h1 className='w-full text-4xl text-center  bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent'>
                    Search Foods
                </h1>
            </div>
            <div>
                <SearchBar search={search} setSearch={setSearch} fetchFood={fetchFood} />
                <Product allFood={allFood} loading={loading} />
            </div>

        </section>
    )
}

export default OrderOnline
