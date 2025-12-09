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
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";


const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
  const { handleSubmit, register } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    axios
      .post("/api/register", data)
      .then(() => {
        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false, 
        }).then((response) => {
          setIsLoading(false);
          if (response?.ok) {
            toast.success("Account created succesfully");
          }
        });
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error || "Something went wrong");
        if (error.response.status === 409) {
          router.push("/login")
        }
        setIsLoading(false);
      });
  };

  return (
    <section className="flex flex-col h-screen bg-primary text-white pt-40 items-center">
      <div className="min-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup className="flex flex-col">
            <FieldSet className="">
              <FieldLegend className="font-bold text-center">
                Sign up
              </FieldLegend>
              <FieldDescription className="font-bold text-center">
                Join the 1000s bettering themselves with Stoic AI
              </FieldDescription>
              <FieldGroup >
                <Field>
                  <FieldLabel htmlFor="name">
                    Name
                  </FieldLabel>
                  <Input
                    type="text"
                    id="name"
                    placeholder="e.g. John Doe"
                    {...register("name")}
                  />
                </Field>
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
                <p className="text-sm">Already have an account? <span className="hover:underline font-bold"><Link href="/login">Log in</Link></span></p>
              </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal" className="justify-center">
              <Button
                variant={"outline"}
                type="submit"
          
              >
                {isLoading ? "Creating account..." : "Sign up"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </section>
  );
};

export default Page;
