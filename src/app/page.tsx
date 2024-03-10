import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWapper";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center ">
        <div className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
          <p className="text-sm font-semibold text-blue-500">
            <h1 className="max-w-4xl text-5xl font-semibold md:text-6xl lg:text-7xl">
              Want to Study ?{" "}
              <span className="text-yellow-500 font-bold">
                Get Exams and Roadmaps in seconds
              </span>
              in seconds
            </h1>
          </p>
          <Button size="lg">
            <Link href="/exams">Get your Roadmap</Link>
            <ArrowRight />
          </Button>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
}
