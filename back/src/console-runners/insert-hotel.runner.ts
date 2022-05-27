import { disconnect } from 'mongoose';
import { connectToDBServer } from 'core/servers';
import { envConstants } from 'core/constants';
import { hotelContext } from 'dals/hotel/hotel.context';



export const run = async () => {
    await connectToDBServer(envConstants.MONGODB_URI);
    await hotelContext.insertMany({
        _id: "100066661234",
        name: "Horto Villa Jardin",
        summary:
            "One bedroom in the area.",
        bedrooms: 1,
        beds: 2,
        bathrooms: 1,
        images: {
            picture_url:
                "https://a0.muscache.com/im/pictures/5b408b9e-45da-4808-be65-4edc1f29c453.jpg?aki_policy=large",
        },
        address: {
            street: "Rio de Janeiro, Rio de Janeiro, Brazil",
            market: "Rio De Janeiro",
            country: "Brazil",
        },
        reviews: [],
    });
    await disconnect();
};
