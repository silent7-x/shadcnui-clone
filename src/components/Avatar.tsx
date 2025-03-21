import { PropsWithChildren, useState } from "react";
import { cn } from "@/lib/utils";

export type AvatarProps = PropsWithChildren & { className?: string };

export const Avatar = ({
  className,
  children,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={cn(
        "border-border flex size-10 items-center justify-center overflow-hidden rounded-full hover:cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const AvatarFallback = ({ alt }: { alt: string }) => {
  return <span>{alt?.[0] ?? "?"}</span>;
};

type AvatarImageProps = {
  src?: string;
  alt: string;
  className?: string;
};

export const AvatarImage = ({ src, alt, className }: AvatarImageProps) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return <AvatarFallback alt={alt} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "size-full bg-black object-contain dark:bg-white",
        className,
      )}
      onError={() => setError(true)}
    />
  );
};
