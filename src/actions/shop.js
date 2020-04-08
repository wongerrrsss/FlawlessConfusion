import {
    SET_SHOP_CATEGORIES
} from "./types"


export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0, 
                title: 'clothing'
            },
            {
                _id: 1, 
                title: 'accessories'
            },
            {
                _id: 2, 
                title: 'sale'
            }
        ]
    })
}