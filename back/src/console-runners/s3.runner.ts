import { S3Client, ListObjectsCommand, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const run = async () => {
    try {
        const client = new S3Client({ region: 'eu-west-3' });
        const bucket = 'backdev-demo-test';
        const fileName = 'test.png';
        const command = new GetObjectCommand({
            Bucket: bucket,
            Key: fileName,
        });
        const url = await getSignedUrl(client, command);
        console.log({ url });
    } catch (error) {
        console.error(error);
    }
}
