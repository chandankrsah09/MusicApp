import Featuredcourse from "@/components/Featuredcourse";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpComingWebinars from "@/components/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] text-white antialiased bg-grid-white/[0.02]">
      <Herosection />
      <Featuredcourse />
      <WhyChooseUs />
      <TestimonialCards />
      <UpComingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
