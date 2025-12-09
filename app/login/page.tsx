"use client"

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";


const Page = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: ""
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((response) => {
      setIsLoading(false);

      if (response?.ok) {
        toast.success("Login succesful")
        router.refresh()
        router.push("/dashboard")

      } else {
        toast.error("Invalid email or password")
      }
    }).catch(() => {
      toast.error("Something went wrong")
      setIsLoading(false)
    })
  }

  return (
    <section className="flex flex-col h-screen bg-primary text-white justify-center items-center">
      <div className="min-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup className="flex flex-col">
            <FieldSet className="">
              <FieldLegend className="font-bold text-center">Login</FieldLegend>
              <FieldDescription className="font-bold text-center">
                Welcome back!
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    type="email"
                    id="email"
                    placeholder="e.g. johndoe@email.com"
                    required
                    {...register("email")}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input 
                    type="password" 
                    id="password" 
                    required 
                    {...register("password")}
                  />
                </Field>
                <p className="text-sm">Don&apos;t have an account? <span className="hover:underline font-bold"><Link href="/signup">Sign up</Link></span></p>
              </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal" className="justify-center">
              <Button variant={"outline"} type="submit">
                {isLoading ? "Logging in..." : 'Log in'}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </section>
  );
};

export default Page;
