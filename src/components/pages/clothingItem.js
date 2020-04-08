import React from 'react';
import { Clothing } from "./clothing";

export const ClothingItem = () => {

    const database = [
        { name: "Fall is here Sweater", price: 30.00, id: 0},
        { name: "FLY tshirt", price: 14.99, id: 1},
        { name: "Printed Cardigan (Brown)", price: 25.99, id: 2},
        { name: "Winter Wonderland Sweater", price: 30.00, id: 3}
    ]

    return (
        <div> 
            {
                database.map(item => (
                    <Clothing name={item.name} price={item.price} key={item.id} />
                ))
            }
        </div>
    )
}