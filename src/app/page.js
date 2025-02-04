import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input"
import Image from "next/image";
import Form from 'next/form'
import { buscar, handless } from "@/actions/sendData";


export default async  function Home() {

  const data = await buscar()

  return (
    <>
      <Form action={handless}>
        <Input placeholder='Name' name='name'/>
        <Input placeholder='Email' name='email'/>
        <Button>Enviar</Button>
      </Form>

      {
        data.map((value) => (
          <ul key={value.id}>
            <li>Nome: {value.name}</li>
            <li>Emial: {value.email}</li>
          </ul>
        ))
      }

    </>
  );
}
