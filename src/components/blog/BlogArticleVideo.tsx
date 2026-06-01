type BlogArticleVideoProps = {
  src: string;
  title: string;
};

export default function BlogArticleVideo({ src, title }: BlogArticleVideoProps) {
  return (
    <div className="mb-10 overflow-hidden rounded-2xl border border-outline-variant/20 bg-black shadow-lg">
      <video
        className="aspect-video w-full object-contain"
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
