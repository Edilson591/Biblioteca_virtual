import FormLoginBook from "../../components/FormLoginBook/FormLoginBook";
import Title from "../../components/TitleComponent/Title";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function LoginBook() {
  return (
      <section className="my-8 flex flex-col items-center h-full">
        <div className="max-w-md p-6 bg-gray-800 rounded-lg w-full shadow ">
          <div className="flex items-center justify-center gap-3">
            <Title children={"Login Books"} className="text-center my-6" />
            <MenuBookIcon sx={{ fontSize: 50, color: '#fff' }}/>
          </div>
          <FormLoginBook />
        </div>
      </section>
  );
}

export default LoginBook;
