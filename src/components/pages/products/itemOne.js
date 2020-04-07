import React, { Component } from 'react';

class ItemOne extends Component {
    constructor() {
        super()


        this.state = {
            shoppingCart: [
                {
                    _id: 0,
                    name: 'Winter Wonderland Sweater',
                    price: 30.00,
                    quantity: 100
                }
            ]
        }
    }

    handleSubmit(ItemOne) {
        console.log("but do it work doe?", product)
    }

    render() {
        return (
            <div className='product-one'>

            </div>
        )
    }
}

export default ItemOne; 