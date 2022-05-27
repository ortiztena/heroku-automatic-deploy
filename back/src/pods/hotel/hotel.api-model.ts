import { Review } from "pods/review/review.api-model"


export interface Hotel {
    _id: string
    name: string
    summary: string
    bedrooms: number
    beds: number
    bathrooms: number
    images: Images
    address: Address
    reviews: Review[]
}

interface Images {
    picture_url: string
}

interface Address {
    street: string
    market: string
    country: string
}