import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="min-h-screen bg-[radial-gradient(hsl(210,72%,65%,40%),hsl(200,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
          Photo editing shouldn't be a hassle.
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          Let us take care of it, you just have to relax and take a coffee. Our
          advanced photo editing tools are designed to be intuitive and
          user-friendly, ensuring that you can achieve professional results
          without any hassle. Whether you're a seasoned photographer or just
          starting out, our platform provides all the features you need to
          enhance your images effortlessly. Join us today and experience the
          future of photo editing.
        </p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2">
            Get started for free <ArrowRightIcon className="size-5" />
          </Button>
        </SignUpButton>
      </section>
    </>
  );
};

export default HomePage;
