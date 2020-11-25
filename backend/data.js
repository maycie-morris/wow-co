import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
          name: 'Maycie',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products: [
        {
            name: `Pumpkin Sweater`,
            category: `Tops`,
            image: `/images/product-1.jpg`,
            price: 20,
            countInStock: 5,
            brand: `WOW_co`,
            rating: `4.5`,
            numReviews: 10,
            description: `Comfy, cozy sweater`
        },
        {
            name: `Gangsta Wrapper Shirt`,
            category: `Tops`,
            image: `/images/product-2.jpg`,
            price: 15,
            countInStock: 10,
            brand: `WOW_co`,
            rating: `4.5`,
            numReviews: 3,
            description: `Perfect shirt for a serious gift wrapper who knows what they're doing`
        },
        {
            name: `Custom Sign`,
            category: `Decorations`,
            image: `/images/product-3.jpg`,
            price: 15,
            countInStock: 10,
            brand: `WOW_co`,
            rating: `4.8`,
            numReviews: 10,
            description: `A custom sign for any occasion`
        },
        {
            name: `Hocus Pocus Mug`,
            category: `Homeware`,
            image: `/images/product-4.jpg`,
            price: 10,
            countInStock: 0,
            brand: `WOW_co`,
            rating: `5`,
            numReviews: 19,
            description: `Perfect for the spooky season!`
        },
        {
            name: `WOW_co Hat`,
            category: `Hats`,
            image: `/images/product-5.jpg`,
            price: 18,
            countInStock: 1,
            brand: `WOW_co`,
            rating: `4.3`,
            numReviews: 8,
            description: `Rep WOW_co with the perfect, comfy hat!`
        },
        {
            name: `Tye-Dye Sweatpants`,
            category: `Bottoms`,
            image: `/images/product-6.jpg`,
            price: 20,
            countInStock: 15,
            brand: `WOW_co`,
            rating: `4.5`,
            numReviews: 10,
            description: `Super warm, super stylish, made to order tye-dye sweatpants!`
        },
    ]
}


export default data;