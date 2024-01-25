import { useLoaderData } from "react-router-dom";
import { ListadoClientes } from "../components/ListadoClientes";
import { getClientes } from "../data/clientes";

export function loader () {
  return  getClientes();
  
}

export const Index = () => {

  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>  

      {clientes.length ? (
        <table className="w-full bg-white shadow-md  mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr className="text-left">
              <th className="p-2 px-5">Clientes</th>
              <th className="p-2 px-5">Contacto</th>
              <th className="p-2 px-5">Acciones</th>
            </tr>
          </thead>

          <tbody>
              {clientes.map(cliente => (
                <ListadoClientes
                  key={cliente.id}
                  cliente={cliente}
                />
              ))}
          </tbody>


        </table>


      ) : (
        <p className="text-center mt-10">No hay cliente aun.</p>


      )}
    </>
  )
}
