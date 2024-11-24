import Title from "../../components/TitleComponent/Title";
import { HomeProps } from "../Home/Home";

function NewBook({ showFavorites }: HomeProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 ">
      {showFavorites && (
      <section className="my-8">
        <Title children={"Adicionar Livros"} />
      </section>
      )}
    </div>
  );
}

export default NewBook;
