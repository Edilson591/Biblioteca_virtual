import FormLoginBook from "../../components/FormLoginBook/FormLoginBook";
import Title from "../../components/TitleComponent/Title";

function LoginBook() {
 

  return (
    <div className="max-w-7xl mx-auto md:px-0 px-4">
      <section className="my-8 flex flex-col justify-center items-center h-[50vh]">
        <div className="max-w-sm p-6 bg-gray-800 rounded-lg w-full">
          <Title children={"Login Book"} />
          <FormLoginBook/>
        </div>
      </section>
    </div>
  );
}

export default LoginBook;
