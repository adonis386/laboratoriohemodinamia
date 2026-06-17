type BlogArticleVideoProps = {
  src: string;
  title: string;
  aspectClass?: string;
};

export default function BlogArticleVideo({ src, title, aspectClass }: BlogArticleVideoProps) {
  return (
    <div className="mb-10 overflow-hidden rounded-2xl border border-outline-variant/20 bg-black shadow-lg">
      <video
        className={`w-full object-contain ${aspectClass ?? "aspect-video"}`}
        controls
        preload="metadata"
        playsInline
        aria-label={`Video del artículo: ${title}`}
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  );
}
