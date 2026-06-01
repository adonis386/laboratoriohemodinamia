function isHeading(text: string): boolean {
  const trimmed = text.trim();
  if (trimmed.length > 140) return false;
  if (trimmed.endsWith(":")) return true;
  if (trimmed === trimmed.toUpperCase() && trimmed.length > 12 && /[A-ZÁÉÍÓÚÑ]/.test(trimmed)) {
    return true;
  }
  if (!trimmed.includes(".") && trimmed.length < 90) return true;
  return false;
}

type BlogArticleBodyProps = {
  paragraphs: string[];
};

export default function BlogArticleBody({ paragraphs }: BlogArticleBodyProps) {
  return (
    <div className="prose prose-lg max-w-none text-on-surface">
      {paragraphs.map((para) => {
        const key = para.slice(0, 48);
        if (isHeading(para)) {
          return (
            <h2 key={key} className="mb-4 mt-8 text-xl font-semibold text-primary first:mt-0">
              {para}
            </h2>
          );
        }
        return (
          <p key={key} className="mb-4 leading-relaxed text-on-surface-variant">
            {para}
          </p>
        );
      })}
    </div>
  );
}
