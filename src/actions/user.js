import {
    SET_USER_PURCHASES
} from "./types"

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES, 
        payload: [
            {
                _id: 0,
                title: 'dreaming of winter wonderland sweater',
                amount: 18.67,
                orderNumber: 'FC73283728',
                orderDate: new Date(),
                creditCard: '-5552',
                user: {
                    name: 'Karona Vyress',
                    shippingAddress: '123 Sesame Street'
                }
            },
            {
                _id: 1,
                title: 'dreaming of winter wonderland sweater',
                amount: 22.58,
                orderNumber: 'FC73783728',
                orderDate: new Date(),
                creditCard: '-5552',
                user: {
                    name: 'Thes Sucks',
                    shippingAddress: '1255 Sesil Street'
                }
            },
            {
                _id: 2,
                title: 'dreaming of winter wonderland sweater',
                amount: 158.57,
                orderNumber: 'FC73212728',
                orderDate: new Date(),
                creditCard: '-5552',
                user: {
                    name: 'Jen Feathers',
                    shippingAddress: '123 Abreime Street'
                }
            },
            {
                _id: 3,
                title: 'dreaming of winter wonderland sweater',
                amount: 23.67,
                orderNumber: 'FC73283728',
                orderDate: new Date(),
                creditCard: '-5552',
                user: {
                    name: 'Ashley Adams',
                    shippingAddress: '123 Sesameelmo Street'
                }
            },
            {
                _id: 4,
                title: 'dreaming of winter wonderland sweater',
                amount: 22.67,
                orderNumber: 'FC71083728',
                orderDate: new Date(),
                creditCard: '-5552',
                user: {
                    name: 'Candalabra Nightgown',
                    shippingAddress: '12344 Fromme Street'
                }
            },
            {
                _id: 5,
                title: 'dreaming of winter wonderland sweater',
                amount: 20.50,
                orderNumber: 'FC73263628',
                orderDate: new Date(),
                creditCard: '-5552',
                user: {
                    name: 'Tawonga Chilongo',
                    shippingAddress: '123 Salami Street'
                }
            },
            {
                _id: 6,
                title: 'dreaming of winter wonderland sweater',
                amount: 30.54,
                orderNumber: 'FC73556528',
                orderDate: new Date(),
                creditCard: '-5552',
                user: {
                    name: 'Joe Friend',
                    shippingAddress: '123 ABCDE Street'
                }
            },
            {
                _id: 7,
                title: 'dreaming of winter wonderland sweater',
                amount: 31.87,
                orderNumber: 'FC73546528',
                orderDate: new Date(),
                creditCard: '-5552',
                user: {
                    name: 'Trafficka Jaminez',
                    shippingAddress: '555 Upyohood Lane'
                }
            },
        ]
    })
}