import { FilterBooks } from "../../components/FilterBooks/FilterBooks";

export interface HomeProps {
  showFavorites: boolean;
}

export function Home({ showFavorites }: HomeProps) {
  return (
    <>
        <div className="max-w-7xl mx-auto px-4 ">
          {!showFavorites && (
            <FilterBooks />
          )}
        </div>
    </>
  );
}
