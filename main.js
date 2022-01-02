
const app = Vue.createApp({
    data() {
        return {
            product: "Socks",
            selectedVariant: 0,
            url: "https://lavozdegalicia.es",
            // inStock: false,
            inventory: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 }, 
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            cart:0, // Numero inicial en el carrito
            brand: 'Vue Mastery'
        }
    },
    methods:{
        addToCart(){
            this.cart += 1 //Aumento del producto en el carrito a mas uno por cada click
        },
        updateVariant(index){
            this.selectedVariant = index
            // console.log(index)
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity //Usando el valor de quantity podemos saber si esta en stock o no.
        }
    }
})