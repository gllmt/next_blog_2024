"use client";

import PageContainer from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {

  return (
    <PageContainer>
      <div className="py-10 px-4">
        <div
          style={{backgroundImage: "url('/img/hero_bg.jpg')"}}
          className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center shadow-lg"
        >
          <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="sm:max-w-xl max-w-xs bg-secondary-foreground/80 p-4 rounded-lg">
                <h1 className="font-bold text-3xl sm:text-5xl text-white dark:text-black text-center">
                  Become A Better React Developer
                </h1>
                <Input type="email" placeholder="Enter your email" className="light:bg-white mt-4" />
                <Button size="lg" className="w-full py-6 text-xl mt-4 text-white dark:text-black light:bg-white">Subscibe to our newsletter</Button>
              </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
