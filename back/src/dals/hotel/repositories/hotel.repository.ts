import { Hotel, Review } from "../hotel.model";

export interface HotelRepository {
    getHotelList: () => Promise<Hotel[]>;
    getHotel: (id: string) => Promise<Hotel>;
    saveHotel: (hotel: Hotel) => Promise<Hotel>;
    deleteHotel: (id: string) => Promise<boolean>;
    updateReview: (id: string, review: Review) => Promise<boolean>;
}