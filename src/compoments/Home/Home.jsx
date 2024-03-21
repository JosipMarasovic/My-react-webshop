import Categories from "../Categories/Categories.jsx";
import Hero from "../Hero/Hero.jsx";
import NewsletterForm from "../NewsLetter/NewsLetter.jsx";
import { useEffect, useState } from "react";


function Home(){

    const [categoriesList, setCategoriesList] = useState([])
    useEffect (()=>{
        fetch('https://dummyjson.com/products/categories')
               .then(res => res.json())
               .then(json =>{
                const limitedCategories = json.slice(0, 6);
                setCategoriesList(limitedCategories);
                console.log(limitedCategories);
            });
    },[])

    return (
        <>
            <Hero/>
            <Categories categories={categoriesList}/>
            <NewsletterForm/>
        </>
    );
}

export default Home;
