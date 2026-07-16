import React, { useState } from 'react'
import {  axiosSchema, type axiosForminputType, type axiosFormoutputType } from './axiosSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { email } from 'zod'
import { FieldError, FieldLabel, Field} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { axiosInstance } from '@/lib/axiosIntance'
import { toast } from 'sonner'

export default function axiosForm() {
  const [isLoading, setIsLoading] = useState (false)
    const form= useForm<axiosForminputType, unknown, axiosFormoutputType>({
      resolver: zodResolver(axiosSchema),
      defaultValues: {
        email:"",
        password: "",
      },
      mode: "onChange",
      reValidateMode: "onChange"
    })
    async function axiosFormSubmit(data :  axiosFormoutputType) {
      try {
        setIsLoading(true)
        const response = await axiosInstance.post('/user',data)
        if(response.status === 201){
          
         toast.success("data successfully created")
        } else {
         toast.error("error occured")
          console.log("error occured")
        }

      } catch (error) {
        console.log(error)
        toast.error("failed")
      }finally{
setIsLoading(false)
      }
      
    }
  return (
    <div>
      <form onSubmit={form.handleSubmit(axiosFormSubmit)}>
        <Controller
        name='email'
        control={form.control}
        render={({field, fieldState}) => (
          <Field>
            <FieldLabel> Email </FieldLabel>
            <Input type="text" {...field}
            placeholder='Enter your email'/>
            {fieldState.invalid && <FieldError errors = {[fieldState.error]} />}
          </Field>
        )}
        />

<Controller
        name='password'
        control={form.control}
        render={({field, fieldState}) => (
          <Field>
            <FieldLabel> Password </FieldLabel>
            <Input type="text" {...field}
            placeholder='Enter your password'/>
            {fieldState.invalid && <FieldError errors = {[fieldState.error]} />}
          </Field>
        )}
        />
        <Button type='submit'>
          {
            isLoading ? "submitting...." : "submit"
          }
        </Button>
      </form>
      </div>
  )
}
