import Image from "next/image";

type IconVariant = "icon" | "artboard4";

export type IconProps = {
  variant?: IconVariant;
  width?: number;
  height?: number;
  className?: string;
};

export function Icon({ variant = "icon", width = 75, height = 75 }: IconProps) {
  const src = variant === "artboard4" ? "/Artboard4.svg" : "/icon.svg";
  return <Image src={src} width={width} height={height} alt="icon" />;
}

export default Icon;
