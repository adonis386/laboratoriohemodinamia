import { site } from "@/lib/site";

const SLOGAN_PATTERN = /^Al [Ll]ado de (tu|tú) corazón/i;

export function isBrandSlogan(text: string): boolean {
  return SLOGAN_PATTERN.test(text.trim());
}

type BrandSloganProps = {
  className?: string;
  nameClassName?: string;
  sloganClassName?: string;
  showName?: boolean;
  /** Footer uses «tú»; elsewhere «tu». */
  useTuAccent?: boolean;
};

export default function BrandSlogan({
  className = "",
  nameClassName = "font-bold",
  sloganClassName = "font-bold",
  showName = true,
  useTuAccent = false,
}: BrandSloganProps) {
  const sloganText = useTuAccent ? "Al lado de tú corazón" : "Al Lado de tu Corazón";

  return (
    <div className={className}>
      {showName && <p className={nameClassName}>{site.name}</p>}
      <p className={sloganClassName}>
        {sloganText}
        <sup className="ml-px align-super text-[0.65em] font-normal leading-none">®</sup>
      </p>
    </div>
  );
}
