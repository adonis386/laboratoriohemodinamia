export function galleryImageSrc(index: number): string {
  return encodeURI(`/galery (${index}).png`);
}

export const galleryImages = Array.from({ length: 11 }, (_, i) => {
  const n = i + 1;
  return {
    src: galleryImageSrc(n),
    alt: `Laboratorio Hemodinamia HCC - Galería ${n}`,
  };
});

/** Primeras 3 imágenes para el preview en la home */
export const galleryPreview = galleryImages.slice(0, 3);
