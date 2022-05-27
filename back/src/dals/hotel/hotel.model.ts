
export interface Hotel {
    _id: string;
    name: string
    summary: string
    bedrooms: number
    beds: number
    bathrooms: Number // NumericType
    images: Images
    address: Address
    reviews: Review[]
}


export interface Images {
    picture_url: string
}

export interface Address {
    street: string
    market: string
    country: string
}

export interface Review {
    _id: string
    date: Date
    reviewer_name: string
    comments: string
}