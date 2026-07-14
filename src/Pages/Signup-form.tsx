import { Controller, useForm } from "react-hook-form"
import { signupSchema, signupSchemawithRefine, type signupSchemaType } from "./Signup-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Field, FieldError,  FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form } from "react-router-dom"

export default function SignupForm() {
    const form= useForm<signupSchemaType>({
        resolver: zodResolver(signupSchemawithRefine),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        mode: "onChange",
        reValidateMode: "onChange"
    })
    function signupSubmit( data: any){
        console.log(data)
    }

    return (
<>
  <form onSubmit={form.handleSubmit(signupSubmit)}>
    <Controller
    name='firstname'
    control={form.control}
    render={({field, fieldState})=>(
        <Field>
            <FieldLabel>Firstname</FieldLabel>

            <Input type='firstname' {...field} placeholder='Enter your firstname'/>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
    )}
    />
    <Controller
    name='lastname'
    control={form.control}
    render={({field, fieldState})=>(
        <Field>
            <FieldLabel>Lastname</FieldLabel>

            <Input type='lastname' {...field} placeholder='Enter your lastname'/>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
    )}
    />
    <Controller
    name='email'
    control={form.control}
    render={({field, fieldState})=>(
        <Field>
            <FieldLabel>email</FieldLabel>

            <Input type='email' {...field} placeholder='Enter your email'/>

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
         <Controller
        name='confirmPassword'
        control={form.control}
        render={({field, fieldState})=>(
            <Field>
                <FieldLabel>ConfirmPassword</FieldLabel>

                <Input type='password' {...field} placeholder='your password'/>

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
        )}
        />
    <Button type='submit'>Submit</Button>
    </form>
    </>
  )
}