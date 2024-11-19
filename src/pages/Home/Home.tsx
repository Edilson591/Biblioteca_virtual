import { FilterBooks } from "../../components/FilterBooks/FilterBooks";

interface HomeProps {
  showFavorites: boolean;
}

export function Home({ showFavorites }: HomeProps) {
  return (
    <>
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 ">
          {!showFavorites && (
            <FilterBooks />
          )}
        </div>
      </main>
    </>
  );
}
