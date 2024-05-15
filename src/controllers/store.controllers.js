import { Product } from "../models/store.model.js";
import { ApiResponse } from "../utils/Apiresponse.js";
import expressAsyncHandler from "express-async-handler";
const getProduct = expressAsyncHandler(async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? (req.query.limit > 100 ? 100 : req.query.limit) : 100;
    const skip = (page - 1) * limit;

    const products = await Product.find().skip(skip).limit(limit);

    res.status(200).send(new ApiResponse(200, products, products.length));
})
const getmainCategories = expressAsyncHandler(async (req, res) => {
    const mainCategories = await Product.aggregate([
        { $group: { _id: "$main_category" } },
        { $project: { _id: 0, main_category: "$_id" } }
    ]);
    res.status(200).send(new ApiResponse(200, mainCategories, mainCategories.length));
})
const getSubCategories = expressAsyncHandler(async (req, res) => {
    const category = req.params.categories;
    const subCategories = await Product.distinct('sub_category', { main_category: category });
    if (subCategories.length === 0) {
        return res.status(404).send(new ApiResponse(404, [], "Sub Categories not found"));
    }
    res.status(200).send(new ApiResponse(200, subCategories, subCategories.length));
})
const getAllSubCategories = expressAsyncHandler(async (req, res) => {
    const subCategories = await Product.aggregate([
        { $group: { _id: "$sub_category" } },
        { $project: { _id: 0, sub_category: "$_id" } }
    ]);
    res.status(200).send(new ApiResponse(200, subCategories, subCategories.length));
})
const getProductsBymainCategory = expressAsyncHandler(async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? (req.query.limit > 100 ? 100 : req.query.limit) : 100;
    const skip = (page - 1) * limit;
    const category = req.params.categories;
    const products = await Product.find({ main_category: category }).skip(skip).limit(limit);
    if (products.length === 0) {
        return res.status(404).send(new ApiResponse(404, [], "Products not found"));
    }
    res.status(200).send(new ApiResponse(200, products, products.length));
})
const getProductsBysubCategory = expressAsyncHandler(async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? (req.query.limit > 100 ? 100 : req.query.limit) : 100;
    const skip = (page - 1) * limit;
    const category = req.params.categories;
    const products = await Product.find({ sub_category: category }).skip(skip).limit(limit);
    if (products.length === 0) {
        return res.status(404).send(new ApiResponse(404, [], "Products not found"));
    }
    res.status(200).send(new ApiResponse(200, products, products.length));
})

export {
    getProduct, getmainCategories
    , getSubCategories, getProductsBymainCategory, getProductsBysubCategory, getAllSubCategories
}