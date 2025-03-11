import { Outlet, createRootRoute, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useFetchCharacters } from '../hooks/useCharacters';

export const Route = createRootRoute({
  component: () => {
    useFetchCharacters();

    return (
      <>
        <div className="p-4 md:p-8 min-h-screen flex flex-col bg-[#282c34] text-white gap-4 md:gap-8">
          <header className="flex gap-4">
            <Link className="md:hidden" to="/">
              GoT
            </Link>
            <Link className="hidden md:block" to="/">
              Game of Thrones
            </Link>
            <input type="text" placeholder="search" />
          </header>
          <main className="flex fle-col flex-grow gap-4 md:max-w-3xl m-auto">
            <Outlet />
          </main>
        </div>
        <ReactQueryDevtools buttonPosition="top-right" />
        <TanStackRouterDevtools />
      </>
    );
  },
});
