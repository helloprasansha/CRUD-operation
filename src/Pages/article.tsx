import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { articleSchema, type articleSchemaInputType, type articleSchemaOutputType } from './article-schema'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { axiosInstance } from '@/lib/axiosIntance'
import { useState } from 'react'
import { HugeiconsIcon, Loader, LoaderPinwheelIcon, Loading03Icon } from '@hugeicons/core-free-icons'

export default function article() {
    const [isLoading, setIsLoading] = useState(false)
    const form= useForm<articleSchemaInputType, unknown, articleSchemaOutputType>({
        resolver: zodResolver(articleSchema),
        defaultValues: {
            name: "",
            stock: "",
            solditems: "",
            rating: "",
            description: "",
        },
        mode: "onChange",
        reValidateMode: "onChange"
    })
    async function articleSubmit( data: articleSchemaOutputType){

try {
    setIsLoading(true)
    const res = await axiosInstance.post('/article', data)
    if(res.status === 201){
        setIsLoading(false)
        console.log("data successfully created")
    }else{
        setIsLoading(false)
        console.log("error occured")
    }

    
    
} catch (error) {
    console.log(error)
    
}
       
    }
  return (
    <>
    <form onSubmit={form.handleSubmit(articleSubmit)}>
    <Controller
    name='name'
    control={form.control}
    render={({field, fieldState})=>(
        <Field>
            <FieldLabel>Name</FieldLabel>

            <Input type='text' {...field} placeholder='Enter your name'/>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
    )}
    />
    <Controller
    name='stock'
    control={form.control}
    render={({field, fieldState})=>(
        <Field>
            <FieldLabel>Stock</FieldLabel>

            <Input type='text'  {...field} placeholder='Enter stock'/>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
    )}
    />
    <Controller
    name='solditems'
    control={form.control}
    render={({field, fieldState})=>(
        <Field>
            <FieldLabel>solditems</FieldLabel>

            <Input type='text' {...field} placeholder='Enter your solditems'/>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
    )}
    />
     <Controller
        name='rating'
        control={form.control}
        render={({field, fieldState})=>(
            <Field>
                <FieldLabel>rating</FieldLabel>

                <Input type='text' {...field} placeholder='your rating'/>

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
        )}
        />
         <Controller
        name='description'
        control={form.control}
        render={({field, fieldState})=>(
            <Field>
                <FieldLabel>description</FieldLabel>

                <Input type='text' {...field} placeholder='your description'/>

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
        )}
        />
    <Button type='submit'>
        {
            isLoading ? "submitting..." :"submit"
        }
    </Button>
    </form>
    </>
  )
}
