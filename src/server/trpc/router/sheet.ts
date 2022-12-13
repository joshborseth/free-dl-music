import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { AWS } from "../../../libs/aws";
const s3 = new AWS.S3();

export const sheetRouter = router({
  createSheet: publicProcedure
    .input(
      z.object({
        fileUrl: z.string(),
        fileName: z.string(),
        fileType: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return new Promise((resolve, reject) => {
        s3.createPresignedPost(
          {
            Fields: {
              key: input.fileName,
              "Content-Type": input.fileType,
            },
            Conditions: [
              ["content-length-range", 0, 1048576], // up to 1 MB
            ],
            Expires: 60,
            Bucket: process.env.BUCKET_NAME,
          },
          (err, signed) => {
            if (err) return reject(err);
            resolve(signed);
          }
        );
      });
    }),
});
