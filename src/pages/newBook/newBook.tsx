import FormNewBook from "../../components/FormNewBook/FormNewBook";
import Title from "../../components/TitleComponent/Title";

function NewBook() {
  return (
    <div className="max-w-7xl mx-auto md:px-0 px-4">
      <section className="my-8">
        <Title children={"Adicionar Livros"} />
        <FormNewBook/>
      </section>
    </div>
  );
}

export default NewBook;
