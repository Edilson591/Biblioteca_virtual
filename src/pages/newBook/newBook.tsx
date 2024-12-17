import FormNewBook from "../../components/FormNewBook/FormNewBook";
import Title from "../../components/TitleComponent/Title";

function NewBook() {
  return (
    <section className="my-8">
      <Title
        children={"Adicionar Livros"}
        className="sm:text-start text-center"
      />
      <FormNewBook />
    </section>
  );
}

export default NewBook;
