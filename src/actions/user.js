import {
    SET_USER_PURCHASES
} from "./types"

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES, 
        payload: [
            {
                _id: 0,
                title: 'choker scarf (multi)',
                amount: 10.75
            },
            {
                _id: 1,
                title: 'dreaming of winter wonderland sweater',
                amount: 26.87
            }
        ]
    })
}