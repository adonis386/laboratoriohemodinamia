export function galleryImageSrc(index: number): string {
  return encodeURI(`/galery (${index}).png`);
}

/** Fotos 1 y 2 excluidas según solicitud del cliente */
export const galleryImages = Array.from({ length: 9 }, (_, i) => {
  const n = i + 3;
  return {
    src: galleryImageSrc(n),
    alt: `Laboratorio Hemodinamia HCC - Galería ${n}`,
  };
});

/** Primeras 3 imágenes visibles para el preview en la home */
export const galleryPreview = galleryImages.slice(0, 3);
