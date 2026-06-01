import MaterialIcon from "@/components/ui/MaterialIcon";

type ContactFieldProps = {
  id: string;
  label: string;
  icon: string;
  children: React.ReactNode;
  className?: string;
  iconTop?: boolean;
};

export default function ContactField({
  id,
  label,
  icon,
  children,
  className = "",
  iconTop = false,
}: ContactFieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-sm font-semibold text-on-surface"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <MaterialIcon name={icon} className="text-lg text-primary" />
        </span>
        {label}
      </label>
      <div className="relative">
        <MaterialIcon
          name={icon}
          className={`pointer-events-none absolute left-3 z-10 text-xl text-primary/70 ${
            iconTop ? "top-3.5" : "top-1/2 -translate-y-1/2"
          }`}
          aria-hidden
        />
        {children}
      </div>
    </div>
  );
}

export const contactInputClass =
  "w-full rounded-xl border border-page-gray bg-ice-blue-light/40 py-3 pl-11 pr-4 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20";
