import { useNavigate, Form, useActionData, redirect} from "react-router-dom"
import { Formulario } from "../components/Formulario";
import { postClientes } from "../data/clientes";
import { Error } from "../components/Error";

export async function action({request}){

  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const email = formData.get('email');
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  
  //Validación
  const errores = [];
  if(Object.values(data).includes('')){
    errores.push('Todos los campos son obligatorios')
  }
  if(!regex.test(email)){
    errores.push('Email no es valido')
  }

  if(errores.length > 0){
    return errores;
  }

  await postClientes(data);

  return redirect('/')



}



export const NuevoCliente = () => {

  const navigate = useNavigate(); 
  const errores = useActionData();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Llena todos los campos para agregar un nuevo cliente</p>  

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white font-black px-3 py-1 uppercase rounded-sm"
          onClick={() => navigate('/')}
        >
          Volver
        </button>

      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">

        {errores?.length && errores.map((error, i) => (
          <Error key={i}>
            {error}
          </Error>

        ))}

        <Form method="POST" noValidate>
        <Formulario/>
            <input type="submit" value='Agregar Cliente'
              className="mt-5 bg-blue-700  px-3 py-1 hover:bg-blue-800 transition-colors cursor-pointer rounded-md uppercase font-bold text-white text-lg"
        />

        </Form>
        

      </div>
    </>
  )
}
