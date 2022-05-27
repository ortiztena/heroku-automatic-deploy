import { ObjectId } from "mongodb"

export interface Review {
    _id: string
    date: Date
    reviewer_name: string
    comments: string
}