export async function getClientes(){
    try {
        const url = import.meta.env.VITE_API_URL;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        return resultado;
        
    } catch (error) {
        console.log(error);
    }
}

export async function postClientes( datos ) {
    try {
        const url = import.meta.env.VITE_API_URL;
        const respuesta = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        await respuesta.json();
        
    } catch (error) {
        console.log(error)
    }

}

export async function getCliente(id){
    try {
        const url = import.meta.env.VITE_API_URL + `/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        return resultado;
        
    } catch (error) {
        console.log(error)
    }
}

export async function putCliente(id, datos){
    try {
        const url = import.meta.env.VITE_API_URL + `/${id}`;
        const respuesta = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        await respuesta.json();
        
    } catch (error) {
        console.log(error);
    }
}

export async function deleteCliente(id){
    try {
        const url = import.meta.env.VITE_API_URL + `/${id}`;
        const respuesta = await fetch(url, {
            method: 'DELETE'
        })

        await respuesta.json();
        
    } catch (error) {
        console.log(error);
    }

}