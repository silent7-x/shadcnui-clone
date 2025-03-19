import { Avatar, AvatarImage } from "./Avatar";

export type SalesLineProps = {
  src: string;
  name: string;
  email: string;
  amount: number;
};

export const SalesLine = ({ src, name, email, amount }: SalesLineProps) => {
  return (
    <div className="gap flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <Avatar>
          <AvatarImage src={src} alt={name + "avatar"} />
        </Avatar>
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-light">{name}</p>
          <p className="text-muted-foreground text-xs">{email}</p>
        </div>
      </div>
      <p className="font-light">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)}
      </p>
    </div>
  );
};
