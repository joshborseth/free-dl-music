import { sheetRouter } from "./sheet";
import { router } from "../trpc";
import { authRouter } from "./auth";

export const appRouter = router({
  auth: authRouter,
  sheet: sheetRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
