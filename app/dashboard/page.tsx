"use client"

import { useSession } from "next-auth/react";
import EmptyState from "../components/EmptyState";

import { Journal } from "../components/Journal";


const Page = () => {


    const { data } = useSession();


  if (!data?.user) {
    return <EmptyState title="You must log in to view the dashboard" />;
  }
  return (
    <section className="flex flex-col min-h-screen bg-primary text-white pt-20 items-center">
      <Journal />
   
    </section>
  );
};

export default Page;
