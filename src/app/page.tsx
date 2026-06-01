import HeroCarousel from "@/components/home/HeroCarousel";
import AlliesSection from "@/components/home/AlliesSection";
import StrategicPlanSection from "@/components/home/StrategicPlanSection";
import HistorySection from "@/components/home/HistorySection";
import ProceduresPreview from "@/components/home/ProceduresPreview";
import DoctorsPreview from "@/components/home/DoctorsPreview";
import BlogPreview from "@/components/home/BlogPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import FadeIn from "@/components/motion/FadeIn";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <FadeIn>
        <AlliesSection />
      </FadeIn>
      <FadeIn>
        <StrategicPlanSection />
      </FadeIn>
      <FadeIn>
        <HistorySection />
      </FadeIn>
      <FadeIn>
        <ProceduresPreview />
      </FadeIn>
      <FadeIn>
        <DoctorsPreview />
      </FadeIn>
      <FadeIn>
        <BlogPreview />
      </FadeIn>
      <FadeIn>
        <GalleryPreview />
      </FadeIn>
    </>
  );
}
