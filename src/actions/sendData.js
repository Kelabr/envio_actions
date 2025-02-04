'use server'

export async function handless(formdata){

    const name = formdata.get('name')
    const email = formdata.get('email')

    const API_URL = 'http://localhost:3333/api/create'

    const response = await fetch(API_URL, {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email})
    })

    console.log(name, email)

    if(response.ok){
        return {success: 'ok', message:'Tudo certo'}

    }

    
}

export async function buscar(){
    
    try{
        const res = await fetch('http://localhost:3333/api/users', {
            cache: 'no-store'
        })

        if(!res.ok){
            console.log('Error ')
        }

        return await res.json()
        
    }catch(error){
        console.log(error)
    }
}
