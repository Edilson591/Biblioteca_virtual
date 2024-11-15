import { FilterBooks } from "../../components/FilterBooks/FilterBooks";

interface FavoriteProps {
  showFavorites: boolean;
}

export function Favorites({ showFavorites }: FavoriteProps) {
  return <>
  {showFavorites && (
    <main className="py-8">
    <div className="max-w-7xl mx-auto px-4">
      <FilterBooks />
      {showFavorites && (
            <><h1>ola</h1></>
        )}
    </div>
  </main>
  )}</>;
}
