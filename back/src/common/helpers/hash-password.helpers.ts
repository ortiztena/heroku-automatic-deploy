import crypto from 'crypto';
import { promisify } from 'util';
const randomBytes = promisify(crypto.randomBytes);

const saltLength = 16;
export const generateSalt = async (): Promise<string> => {
    const salt = await randomBytes(saltLength);
    return salt.toString('hex');
};

const passwordLength = 64; // 64 bytes = 512 bits
const iterations = 16384; // Must be a power of two greater than one (2^x)

// Memory required = 128 * N * r * p (128 * cost * blockSize * parallelization)
// E.g. 128 * 16384 * 8 * 1 = 16 MB

export const hashPassword = async (
    password: string,
    salt: string
): Promise<string> => {
    const promise = new Promise<string>((resolve, reject) => {
        crypto.scrypt(
            password,
            salt,
            passwordLength,
            {
                cost: iterations,
                blockSize: 8,
                parallelization: 1,
                maxmem: 32 * 1024 * 1024,
            },
            (error, hashedPassword) => {
                if (error) {
                    reject(error);
                }

                resolve(hashedPassword.toString('hex'));
            }
        );
    });

    return promise;
};
