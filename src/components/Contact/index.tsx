import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../firebase';
import { ContactContainer, FormButton } from "./styles";

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import { FormErrorSpan } from '../FormErrorSpan';
import { LoadingButton } from '../LoadingButton';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Digite seu nome!'),
  email: z.string().email('Digite seu email!'),
  content: z.string().min(1, 'Escreva uma mensagem!')
});

type ContactFormInputs = z.infer<typeof contactFormSchema>

export function Contact() {

  const { control, register, handleSubmit, formState: { isSubmitting, errors }, reset, } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  })

  const [loginData, setLoginData] = useState<ContactFormInputs>({} as ContactFormInputs)
  const [loading, setLoading] = useState(false)

  const userCollectionRef = collection(db, "contactData")

  async function handleNewSubmit(data: ContactFormInputs) {


    const notify = () => {
      toast.success('Mensagem enviada com sucesso! 🎉', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    setLoginData(data)

    setLoading(true)
    await setTimeout(() => {
      setLoading(false)
    }, 1000)


    await addDoc(userCollectionRef, {
      name: data.name,
      email: data.email,
      message: data.content,
    }).then(() => {
      notify()
    })

    reset();
  }

  return (
    <ContactContainer>
      <form action="" onSubmit={handleSubmit(handleNewSubmit)}>
        <h2>Entre em contato! 📝</h2>

        <label htmlFor="">
          <span>Nome: </span>
          {/* <input type="text" placeholder="Digite seu nome"
            onChange={(e) => {
              setName(e.target.value);
            }}
          /> */}
          <input
            type="text"
            placeholder="Digite seu nome:"
            {...register('name')}
          />
          <FormErrorSpan
            key={errors.name?.message}
            err={errors.name?.message}
          />
        </label>

        <label htmlFor="">
          <span>Email:</span>
          {/* <input type="email" placeholder="email@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          /> */}
          <input
            type="email"
            placeholder="email@example.com"
            {...register('email')}
          />
          <FormErrorSpan
            key={errors.email?.message}
            err={errors.email?.message}
          />
        </label>

        <label htmlFor="">
          <span>Mensagem:</span>
          {/* <textarea placeholder="Digite a mensagem que você deseja enviar"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          /> */}
          <textarea
            placeholder="Digite a mensagem que você deseja enviar"
            {...register('content')}
          />
          <FormErrorSpan
            key={errors.content?.message}
            err={errors.content?.message}
          />
        </label>

        {loading === false ? <FormButton type="submit">Enviar</FormButton> : <LoadingButton loading={loading} />}

      </form>
    </ContactContainer>
  )
}