type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="gradient-hero py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90 md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
