import { FilterBooks } from "../../components/FilterBooks/FilterBooks";
import { ListBooks } from "../../components/ListBooks/ListBooks";

interface HomeProps {
  showFavorites: boolean;
}

export function Home({ showFavorites }: HomeProps) {
  return (
    <>
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:p-0  ">
          <FilterBooks />
          {!showFavorites && (
            <ListBooks/>
          )}
        </div>
      </main>
    </>
  );
}
