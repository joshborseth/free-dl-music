import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const sheetRouter = router({
  createSheet: publicProcedure
    .input(z.object({ fileUrl: z.string() }))
    .mutation(({ ctx, input }) => {
      const sheet = ctx.prisma.sheet.create({ data: input });
      return sheet;
    }),
});
