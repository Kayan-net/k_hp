"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import React from 'react'
import { LoginSchema } from "@/scemas";
import { Input } from "@/components/ui/input";
import { CardWrapper } from "@/components/auth/card-wrapper";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";
import { Button } from "../ui/button";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

const onSubmit =  (values: z.infer<typeof LoginSchema>) => {
  console.log(values);
}



  return (
    <CardWrapper
      headerLabel="welcome back"
      backButtonLabel="dont have an account? sign up"
      backButtonHref="/auth/register"
      showSocialLogin
    >
     <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(() => { onSubmit})}
        className="space-y-6">
          <div className="space-y-4">

            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input {...field}
                  placeholder="kamrulhp@gmail.com"
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <input {...field}
                  type="password"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          </div>

          <FormError error="" />
          <FormSuccess message="" />

          <Button
            type="submit"
            className="w-full"
          >
            Login
          </Button>
        </form>
     </Form>

    </CardWrapper>
  )
}
