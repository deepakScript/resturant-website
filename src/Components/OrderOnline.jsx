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
        <section className='flex flex-col align-center justify-center font-bold text-orange-400 backgraoudn'>
            <div className='flexic'>
                <h1 className='text-4xl text-center'>
                    Order Online
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
