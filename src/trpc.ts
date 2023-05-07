import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from './pages/api/trpc/[trpc]';
import cookies from 'js-cookie';

export default createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000/api/trpc',
            headers() {
                return {
                  'X-Session': cookies.get('session'),
                };
              },
        }),
    ],
    transformer: undefined
});