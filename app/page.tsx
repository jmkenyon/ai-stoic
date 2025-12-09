import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen text-white flex md:flex-row flex-col pt-30 pl-30">
      <section className="flex flex-col items-center max-w-[50%]">
        <h1 className="font-bold text-7xl pb-10">Your stoic companion</h1>

        <h2>Ready to become the best version of yourself?</h2>
        <h2>Sign up today!</h2>

 
       

      </section>
      <section className="md:pt-40 pt-10 md:pl-15">

        <h2 className="font-bold">What&apos;s included?</h2>
        <h3>AI-intergrated journal</h3>
        <h3>Habit forming calender</h3>
        <h3>Inspiring newsletter and blog</h3> 
      </section>
    </main>
  );
}
