app.component('product-display', {
    props: {
        premium:{
    type: Boolean,
    required: true
}
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
        <a :href="url">LaVozdeGalicia</a>
        <!-- image goes here -->
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{shipping}}</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li> <!--detail es cada elemento de "details"-->
        </ul>
        <div v-for="(variant, index) in variants" 
        :key="variant.id" 
        @mouseover="updateVariant(index)"
        class="color-circle active"

        :style="{ backgroundColor: variant.color}">
        
      
      </div> <!--:key da al elemento DOM una llave unica, como un id-->
        <button class="button"
        :class="{disabledButton: !inStock}"
        :disabled="!inStock"
        @click="addToCart">
        Add to Cart
      </button> <!--v-on:click para escuchar eventos /+= 1 expresion que estamos desencadenando-->
        <!--Tambien se puede usar @:click en vez de v-on:click para simlificar-->

      </div>
    </div>
  </div>`,
    data() {
    return {
        product: "Socks",
        selectedVariant: 0,
        url: "https://lavozdegalicia.es",
        // inStock: false,
        inventory: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
        ],

        brand: 'Vue Mastery'
    }
},
    methods: {
    addToCart() {
        this.$emit('add-to-cart',this.variants[this.selectedVariant].id) //Aumento del producto en el carrito a mas uno por cada click
    },
    updateVariant(index) {
        this.selectedVariant = index
        // console.log(index)
    }
},
    computed: {
    title() {
        return this.brand + ' ' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].image
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity //Usando el valor de quantity podemos saber si esta en stock o no.
    },
    shipping() {
        if (this.premium) {
            return 'Free'
        }
        return 2.99
    }
}
})