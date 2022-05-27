import { HotelRepository } from "./hotel.repository";

import { hotelContext } from "../hotel.context";
import { Hotel, Review } from "../hotel.model";

export const dbRepository: HotelRepository = {
    getHotelList: async () => await hotelContext.find().lean(),
    getHotel: async (id: string) =>
        await hotelContext.findOne({ _id: id }).lean(),
    saveHotel: async (hotel: Hotel) => {
        return await hotelContext
            .findOneAndUpdate(
                {
                    _id: hotel._id,
                },
                {
                    $set: hotel,
                },
                {
                    upsert: true,
                    new: true,
                }
            )
            .lean();
    },
    deleteHotel: async (id: string) => {
        const { deletedCount } = await hotelContext.deleteOne({ _id: id });
        return deletedCount === 1;
    },
    updateReview: async (id: string, review: Review) => {
        const hotel = await hotelContext.findOne({ _id: id });
        if (hotel.reviews.find((r) => r._id === review._id)) {
            review._id = (Number(review._id) + hotel.reviews.length).toString();
        }
        return await hotelContext.findOneAndUpdate({
            _id: id,
        },
            { $push: { reviews: review } }).lean();
    },

};
