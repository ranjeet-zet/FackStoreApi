import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    main_category: {
        type: String,
        required: true
    },
    sub_category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ratings: {
        type: String,
    },
    actual_price: {
        type: String,
    }
});

export const Product = mongoose.model('Product', productSchema);
