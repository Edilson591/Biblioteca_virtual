export function ListBooks() {
    return(
        <section>
        <h2 className="text-2xl font-semibold text-neutral-300 mb-4">
          Livros Disponíveis
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_925771-MLU50709867127_072022-O.webp"
              alt="Capa do Livro"
              className="w-full  object-cover object-top h-48 rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-neutral-300">
              O poder do hábito: Não Aplica 
            </h3>
            <p className="text-gray-400">Autor: Charles Duhigg</p>
            <p className="text-gray-300 mt-2">
              Resumo do livro. Uma visão geral para os leitores sobre o
              conteúdo.
            </p>
            <button className="bg-stone-500 text-gray-900 p-2 rounded-md mt-4 hover:bg-teal-400 w-full">
              Saiba Mais
            </button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700">
            <img
              src="https://via.placeholder.com/150x150"
              alt="Capa do Livro"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-neutral-300">
              Outro Livro
            </h3>
            <p className="text-gray-400">Autor: Maria Oliveira</p>
            <p className="text-gray-300 mt-2">
              Resumo do livro. Uma visão geral para os leitores sobre o
              conteúdo.
            </p>
            <button className="bg-stone-500 text-gray-900 p-2 rounded-md mt-4 hover:bg-teal-400 w-full">
              Saiba Mais
            </button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700">
            <img
              src="https://via.placeholder.com/150x150"
              alt="Capa do Livro"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-neutral-300">
              Outro Livro
            </h3>
            <p className="text-gray-400">Autor: Maria Oliveira</p>
            <p className="text-gray-300 mt-2">
              Resumo do livro. Uma visão geral para os leitores sobre o
              conteúdo.
            </p>
            <button className="bg-stone-500 text-gray-900 p-2 rounded-md mt-4 hover:bg-teal-400 w-full">
              Saiba Mais
            </button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700">
            <img
              src="https://via.placeholder.com/150x150"
              alt="Capa do Livro"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-neutral-400">
              Outro Livro
            </h3>
            <p className="text-gray-400">Autor: Maria Oliveira</p>
            <p className="text-gray-300 mt-2">
              Resumo do livro. Uma visão geral para os leitores sobre o
              conteúdo.
            </p>
            <button className="bg-stone-500 text-gray-900 p-2 rounded-md mt-4 hover:bg-teal-400 w-full">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>
    )
}