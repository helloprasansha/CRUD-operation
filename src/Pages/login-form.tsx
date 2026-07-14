import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { loginSchema, type loginSchemaType } from './loginSchema'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function LoginForm() {

    const form = useForm<loginSchemaType>({
        resolver: zodResolver(loginSchema),
        defaultValues:{
            email:"",
            password:"",
            name:"",
            age:1,
        }  ,
        mode:"onChange",
        reValidateMode:"onChange"
    })

    function loginSubmit( data: any){
        console.log(data)

    }

  return (
   <div>
    <form onSubmit={form.handleSubmit(loginSubmit)}>
        <FieldGroup className='max-w-[300px] m-10'>
             <Controller
        name='email'
        control={form.control}
        render={({field, fieldState})=>(
            <Field>
                <FieldLabel>Email</FieldLabel>

                <Input type='email' {...field} placeholder='example@gmail.com'/>

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
        )}
        
        />

        <Controller
        name='password'
        control={form.control}
        render={({field, fieldState})=>(
            <Field>
                <FieldLabel>Password</FieldLabel>

                <Input type='password' {...field} placeholder='your password'/>

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
        )}
        />

        </FieldGroup>
       



<Button type='submit'>Submit</Button>
    </form>

   </div>
  )
}
