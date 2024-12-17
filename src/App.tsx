import Header from "./components/Header/Header";
import RoutesBooks from "./routes/Routes";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <main className="py-8 sm:m-0 mx-6">
          <div className="max-w-7xl mx-auto sm:py-0 py-4 my-8">
            <RoutesBooks />
          </div>
        </main>
        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 py-4 text-center z-50">
          <p className="text-gray-400">
            © 2024 Biblioteca Virtual | Todos os direitos reservados
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
