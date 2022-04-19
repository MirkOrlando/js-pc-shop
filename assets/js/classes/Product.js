/**
 * @license
 * @author Mirko
 */
 export default class Product {
    is_available = false;
    /**
     * 
     * @param {string} name Product name
     * @param {string} description Product description
     * @param {float} price Product price
     * @param {string} category Product category
     * @param {string} image Product image path
     * @param {number} likes Product Likes count
     */
    constructor(name, description, price, category, image, likes) {
        this.name = name
        this.description = description
        this.price = price
        this.image = image
        this.category = category
        this.likes = likes
    }

    // Class methods

    /**
     * Increases the Likes count for the current product instance
     */
    increaseLikes() {
        return this.likes += 1
    }


}

// named exports (one or many)
// export {Product}

// oppure default export (only one)
//export {Product as default}


