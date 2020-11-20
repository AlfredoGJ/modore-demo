import img1 from './assets/img/Escudo70.png'
import img2 from  './assets/img/Escudo225.png'
import img3 from './assets/img/Escudo275.png'

const orders= [
    {
        id:"150342",
        product:{
            name:"Gel Antibacterial Escudo 225 ml",
            price:39.90,
            img: img2,
            quantity:3
        }
    }
]

const products =  [
    {
        id:1,
        name:"Gel Antibacterial Escudo 70 ml",
        price:19,
        img:img1
    },
    {
        id:2,
        name:"Gel Antibacterial Escudo 225 ml",
        price:39.90,
        img: img2
    },
    {
        id:3,
        name:"Gel Antibacterial Escudo 275 ml",
        price:41.90,
        img:img3
    },
]

export {
    orders,
    products
}