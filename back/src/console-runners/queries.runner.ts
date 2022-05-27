import { disconnect } from 'mongoose';
import { envConstants } from 'core/constants';
import { connectToDBServer } from 'core/servers';
import { hotelContext } from 'dals/hotel/hotel.context';

const runQueries = async () => {
    const result = await hotelContext
        .findOne(
            {
                _id: { $eq: '10006546' },
            },
        )
        .lean();
};

export const run = async () => {
    await connectToDBServer(envConstants.MONGODB_URI);
    await runQueries();
    await disconnect();
};