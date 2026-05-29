type StitchPlaceholderProps = {
  page: string;
  file: string;
};

export default function StitchPlaceholder({ page, file }: StitchPlaceholderProps) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-white p-12 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Pendiente — diseño Stitch
      </p>
      <h2 className="mt-2 text-2xl font-bold text-gray-800">{page}</h2>
      <p className="mx-auto mt-4 max-w-lg text-gray-600">
        Exporta <code className="rounded bg-gray-100 px-2 py-1 text-sm">{file}</code> desde
        Google Stitch a la carpeta{" "}
        <code className="rounded bg-gray-100 px-2 py-1 text-sm">stitch-export/</code> y
        avísanos para integrarlo aquí.
      </p>
    </div>
  );
}
