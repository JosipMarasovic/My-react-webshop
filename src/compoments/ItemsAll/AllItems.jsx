import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AllItems() {
    const { category } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Items for category:", category, data);
                const products = data.products || []; 
                setItems(products);
            });
    }, [category]);

    return (
        <>
            <h3>All Items in {category}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </>
    );
}

export default AllItems;
