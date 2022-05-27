import mongoose, { Schema, SchemaDefinition } from "mongoose";
import { Hotel, Review, Images, Address } from "./hotel.model";

const imagesSchema = new Schema({
    picture_url: { type: Schema.Types.String, required: true },
} as SchemaDefinition<Images>)

const addressSchema = new Schema({
    street: { type: Schema.Types.String, required: true },
    market: { type: Schema.Types.String, required: true },
    country: { type: Schema.Types.String, required: true },
} as SchemaDefinition<Address>)

const reviewSchema = new Schema({
    _id: { type: Schema.Types.String, required: true },
    date: { type: Schema.Types.Date, required: true },
    reviewer_name: { type: Schema.Types.String, required: true },
    comments: { type: Schema.Types.String, required: true },
} as SchemaDefinition<Review>)

const hotelSchema = new Schema({
    _id: { type: Schema.Types.String, required: true },
    name: { type: Schema.Types.String, required: true },
    summary: { type: Schema.Types.String, required: true },
    images: { type: imagesSchema },
    address: { type: addressSchema },
    bedrooms: { type: Schema.Types.Number, required: true },
    beds: { type: Schema.Types.Number, required: true },
    bathrooms: { type: Schema.Types.Decimal128, required: true },
    reviews: [{ type: reviewSchema }],
} as SchemaDefinition<Hotel>);


export const hotelContext = mongoose.model<Hotel>("Hotel", hotelSchema, 'listingsAndReviews');
