import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Next, TypeScript } from "./_components/TechStacks";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatters";

const PricingCard = ({
  name,
  priceInCents,
  maxNumberOfDailyInsights,
  canCustomizeBanner,
}: (typeof subscriptionTiersInOrder)[number]) => {
  return (
    <Card>
      <CardHeader>
        <div className="text-accent font-semibold mb-8">{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100} /mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfDailyInsights)} insights daily.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button>Choose</Button>
        </SignUpButton>
      </CardContent>
    </Card>
  );
};

const HomePage = () => {
  return (
    <>
      <section className="min-h-screen bg-[radial-gradient(hsl(210,72%,65%,40%),hsl(200,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
          Personal growth shouldn't be a hassle.
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          Discover your true potential with our comprehensive MBTI personality
          test. Our platform is designed to help you understand yourself better
          and encourage personal growth. Most of our services are free,
          providing you with valuable insights and resources to enhance your
          self-development journey. For those seeking more in-depth analysis and
          personalized guidance, we offer tiered services to meet your unique
          needs. Join us today and embark on a transformative journey towards
          your desired future.
        </p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2">
            Get started for free <ArrowRightIcon className="size-5" />
          </Button>
        </SignUpButton>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
          <h2 className="text-3xl text-center text-balance">
            Developed using these stacks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
            <Next />
            <TypeScript />
          </div>
        </div>
      </section>

      <section id="pricing" className="px-8 py-16 bg-accent/5">
        <h2 className="text-4xl text-center text-balance font-semibold mb-8">
          Craving for more?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
