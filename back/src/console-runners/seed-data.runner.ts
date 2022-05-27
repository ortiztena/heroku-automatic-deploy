import { disconnect } from 'mongoose';
import { connectToDBServer } from 'core/servers';
import { envConstants } from 'core/constants';
// import { hotelContext } from 'dals/hotel/hotel.context';
import { userContext } from 'dals/user/user.context';
import { db } from 'dals/mock-data';
import { generateSalt, hashPassword } from 'common/helpers';

export const run = async () => {
    await connectToDBServer(envConstants.MONGODB_URI);

    for (const user of db.users) {
        const salt = await generateSalt();
        const hashedPassword = await hashPassword(user.password, salt);

        await userContext.insertMany({
            ...user,
            password: hashedPassword,
            salt,
        });
    }

    // try { await hotelContext.insertMany(db.hotels); } catch (error) { console.log(error) }
    await disconnect();
};
