import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

// S3 Bucket Name
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

export const uploadFileController = async () => {

}