import * as model from "dals";
import * as apiModel from "./review.api-model";



export const mapReviewFromModelToApi = (review: model.Review): apiModel.Review => ({
    _id: review._id,
    date: new Date(review.date),
    reviewer_name: review.reviewer_name,
    comments: review.comments
})

export const mapReviewListFromModelToApi = (reviewList: model.Review[]): apiModel.Review[] =>
    Array.isArray(reviewList) ? reviewList.map(mapReviewFromModelToApi) : [];

export const mapReviewFromApiModelToModel = (review: apiModel.Review): model.Review => ({
    _id: Date.now().toString(),
    date: new Date(),
    reviewer_name: review.reviewer_name,
    comments: review.comments,
})

export const mapReviewListFromApiModelToModel = (reviewList: apiModel.Review[]): model.Review[] =>
    Array.isArray(reviewList) ? reviewList.map(mapReviewFromApiModelToModel) : []