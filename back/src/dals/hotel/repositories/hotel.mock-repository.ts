import { HotelRepository } from "./hotel.repository";
import { db } from "../../mock-data";
import { Hotel, Review } from "../hotel.model";


export const mockRepository: HotelRepository = {
    getHotelList: async () => db.hotels,
    getHotel: async (id: string) => db.hotels.find((b) => b._id === id),
    saveHotel: async (hotel: Hotel) => {
        if (hotel._id) {
            db.hotels = db.hotels.map((h) =>
                h._id === hotel._id ? { ...h, ...hotel } : h
            );
            return hotel;
        } else {
            hotel._id = (db.hotels.length + 1).toString();
            const newHotel: Hotel = {
                ...hotel,
            };
            db.hotels = [...db.hotels, newHotel];
            return newHotel;
        }
    },
    deleteHotel: async (id: string) => {
        db.hotels = db.hotels.filter((h) => h._id !== id);
        return true;
    },
    updateReview: async (id: string, review: Review) => {

        db.hotels = db.hotels.map((hotel) => {
            if (hotel._id === id) {
                if (hotel.reviews.find((x) => x._id === review._id)) {
                    review._id = (Number(review._id) + hotel.reviews.length).toString();
                }
                return { ...hotel, reviews: [...hotel.reviews, review] }
            }
            else return hotel
        })
        return true;
    },
};
