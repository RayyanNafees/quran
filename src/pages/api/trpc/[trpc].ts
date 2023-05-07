import { initTRPC, TRPCError } from "@trpc/server";
import {
  FetchCreateContextFnOptions,
  fetchRequestHandler,
} from "@trpc/server/adapters/fetch";
import { APIRoute } from "astro";
import cookies from "js-cookie";
type Context = { session?: string };

const t = initTRPC.context<Context>().create();

const publicProcedure = t.procedure;

const router = t.router({
  // Add your procedures

  user: publicProcedure
    .input((nm: string) => nm.toUpperCase())
    .query(({ input }) => ({ name: input })),
});

export function caller(request: Request, context: Context) {
  const { session } = cookies.parse(request.headers.get("cookie") || "");
  return router.createCaller(session);
}

// The Astro API route, handling all incoming HTTP requests.
export const all: APIRoute = ({ request }) => {
  return fetchRequestHandler({
    req: request,
    endpoint: "/api/trpc",
    router,
    // Delete the line below & disable ts
    createContext: async ({ req }) => {
      return { session: req.headers.get("X-Session") ?? undefined };
    },
  });
};

export type AppRouter = typeof router;
