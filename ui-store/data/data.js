import product1 from '~/assets/images/shop/black-print-t-shirt.jpg';
import product2 from '~/assets/images/shop/fashion-shoes-sneaker.jpg';
import product3 from '~/assets/images/shop/men-white-espadrilles-slip-shoes.jpg';
import product4 from '~/assets/images/shop/luxurious-bag.jpg';
import product5 from '~/assets/images/shop/ladies-1.jpg';
import product6 from '~/assets/images/shop/ladies-2.jpg';
import product7 from '~/assets/images/shop/mens-jecket.jpg';
import product8 from '~/assets/images/shop/sweater-t-shirt.jpg';
import product9 from '~/assets/images/shop/trendy-t-shirt2.jpg';
import product10 from '~/assets/images/shop/men-sun-glasses.jpg';
import product11 from '~/assets/images/shop/women-s-white-low-heel-shoes.jpg';
import product12 from '~/assets/images/shop/casual-men-shorts.jpg';
import product13 from '~/assets/images/shop/luxurious-bag2.jpg';
import product14 from '~/assets/images/shop/smart-watch.jpg';
import product15 from '~/assets/images/shop/white-sandals-summer-footwear.jpg';
import product16 from '~/assets/images/shop/ladies-skirt-pair.jpg';

import payment1 from '../assets/images/payments/american-express.jpg'
import payment2 from '../assets/images/payments/discover.jpg'
import payment3 from '../assets/images/payments/mastercard.jpg'
import payment4 from '../assets/images/payments/paypal.jpg'
import payment5 from '../assets/images/payments/visa.jpg'

export const productData = [
    {
        id:1,
        image: product1,
        cart: "Add to Cart",
        status: "-40% Off",
        name: "Black Print T-Shirt",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    // {
    //     id:2,
    //     image: product2,
    //     cart: "Add to Cart",
    //     status: "New",
    //     name: "Fashion Shoes Sneaker",
    //     price: "$16.00",
    //     price2: "$21.00",
    //     desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    // },
    {
        id:3,
        image: product3,
        cart: "Add to Cart",
        status: "",
        name: "Mens White Slip Shoes",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:4,
        image: product4,
        cart: "Add to Cart",
        status: "",
        name: "Ladies Luxurious Bag",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:5,
        image: product5,
        cart: "Add to Cart",
        status: "",
        name: "Ladies Green Top",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:6,
        image: product6,
        cart: "Add to Cart",
        status: "",
        name: "Ladies Onepiece Wear",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:7,
        image: product7,
        cart: "Add to Cart",
        status: "Featured",
        name: "Mens Brown Jecket",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:8,
        image: product8,
        cart: "Add to Cart",
        status: "",
        name: "Sweater T-Shirt",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:9,
        image: product9,
        cart: "Add to Cart",
        status: "",
        name: "Trendy T-shirt",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:10,
        image: product10,
        cart: "Add to Cart",
        status: "New",
        name: "Men Sun Glasses",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:11,
        image: product11,
        cart: "Add to Cart",
        status: "-25% Off",
        name: "Women White Low Heel Shoes",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:12,
        image: product12,
        cart: "Add to Cart",
        status: "Featured",
        name: "Black Print T-Shirt",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:13,
        image: product13,
        cart: "Add to Cart",
        status: "New",
        name: "Orange Luxurious Bag",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:14,
        image: product14,
        cart: "Add to Cart",
        status: "",
        name: "Smart Watch",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:15,
        image: product15,
        cart: "Add to Cart",
        status: "",
        name: "White Sandals",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    },
    {
        id:16,
        image: product16,
        cart: "Add to Cart",
        status: "",
        name: "Ladies Skirt",
        price: "$16.00",
        price2: "$21.00",
        desc: 'Viverra a consectetur Go sporty this vintage navy and white striped.'
    }
]

export const footerPayment = [
    payment1,payment2,payment3, payment4, payment5
]

export const footerFeature = [
    {
        icon: 'mdi-truck-check-outline',
        title: 'Free delivery'
    },
    {
        icon: 'mdi-archive',
        title: "Non-contact shipping"
    },
    {
        icon: 'mdi-cash-multiple',
        title: "Modey-back quarantee"
    },
    {
        icon: 'mdi-shield-check',
        title: "Secure payments"
    }
]

export const footerLink1 = [
    'Men', 'Jackets & Coats', 'Jeans', 'Loungewear', 'Polo Shirts', 'Shirts'
]

export const footerLink2 = [
    'Shorts','Suits Swimwear','T-shirts','Tracksuits','Trousers','Shirts'
]

export const footerLink3 = [
    'My account','Order History','Wish List','Newsletter','Affiliate','Returns'
]


export const navCart = [
    {
        image:product1,
        name:'T-shirt (M)',
        value:320,
        qtn:2
    },
    {
        image:product2,
        name:'Bag',
        value:50,
        qtn:5
    },
    {
        image:product3,
        name:'Watch (Men)',
        value:800,
        qtn:1
    },
    
]