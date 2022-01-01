
const app = Vue.createApp({
    data() {
        return {
            product: "Socks",
            image: "./assets/images/socks_blue.jpg",
            url: "https://lavozdegalicia.es",
            inStock: false,
            inventory: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],
            cart:0 // Numero inicial en el carrito
        }
    },
    methods:{
        addToCart(){
            this.cart += 1 //Aumento del producto en el carrito a mas uno por cada click
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})