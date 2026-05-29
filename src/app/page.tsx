import HeroCarousel from "@/components/home/HeroCarousel";
import AlliesSection from "@/components/home/AlliesSection";
import StrategicPlanSection from "@/components/home/StrategicPlanSection";
import HistorySection from "@/components/home/HistorySection";
import ProceduresPreview from "@/components/home/ProceduresPreview";
import DoctorsPreview from "@/components/home/DoctorsPreview";
import BlogPreview from "@/components/home/BlogPreview";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <AlliesSection />
      <StrategicPlanSection />
      <HistorySection />
      <ProceduresPreview />
      <DoctorsPreview />
      <BlogPreview />
      <GalleryPreview />
    </>
  );
}
