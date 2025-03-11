import { Outlet, createRootRoute, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useFetchCharacters } from '../hooks/useCharacters';
import backgroundImage from '../assets/background.png';
import SearchInput from '../components/SearchInput';

export const Route = createRootRoute({
  component: () => {
    useFetchCharacters();

    const reset = () => {
      console.log('reset');
    };

    const filter = (value: string) => {
      console.log(value);
    };

    return (
      <>
        <div
          className="min-h-screen flex flex-col bg-[rgb(40,44,52)] text-white"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(40, 44, 52, 0.5) 0%, rgba(40, 44, 52, 0.75) 30vh, rgba(40, 44, 52, 1) 100vh), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <header className="gap-4 p-4 bg-[rgb(40,44,52)]">
            <nav className="relative flex justify-between md:max-w-4xl w-full m-auto gap-4">
              <Link className="md:hidden" to="/">
                GoT
              </Link>
              <Link className="hidden md:block" to="/">
                Game of Thrones
              </Link>
              <div className="flex-1 md:flex-0">
                <SearchInput onReset={reset} onChange={filter} />
              </div>
            </nav>
          </header>
          <main className="p-4 md:p-8 flex fle-col flex-grow gap-4 md:max-w-4xl w-full m-auto justify-center">
            <Outlet />
          </main>
        </div>
        <ReactQueryDevtools buttonPosition="top-right" />
        <TanStackRouterDevtools />
      </>
    );
  },
});
