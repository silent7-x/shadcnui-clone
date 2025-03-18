import { PropsWithChildren, useState } from "react";

export type AvatarProps = { fallback?: string };

export const Avatar = (props: PropsWithChildren) => {
  return (
    <div className="border-border flex size-10 items-center justify-center overflow-hidden rounded-full hover:cursor-pointer">
      {props.children}
    </div>
  );
};

export const AvatarFallback = (props: { children: string }) => {
  return <span>{props.children?.[0] ?? "?"}</span>;
};

export const AvatarImage = (props: { src?: string; alt: string }) => {
  const [error, setError] = useState(false);

  if (!props.src || error) {
    return <AvatarFallback>{props.alt}</AvatarFallback>;
  }

  return (
    <img
      src={props.src}
      alt={props.alt}
      className="size-full object-contain"
      onError={() => setError(true)}
    />
  );
};
