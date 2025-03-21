import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectEmployee = () => {
  return (
    <Select defaultValue="Alicia Roch">
      <SelectTrigger className="dark:hover:bg-accent">
        <SelectValue placeholder="Employees" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Employees list</SelectLabel>
          <SelectItem value="Alicia Roch">
            <div className="flex items-center gap-4">
              <div className="size-5 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-200"></div>
              <p>Alicia Roch</p>
            </div>
          </SelectItem>
          <SelectItem value="Olivia Martin">
            <div className="flex items-center gap-4">
              <div className="size-5 rounded-full bg-gradient-to-r from-zinc-300 to-zinc-700"></div>
              <p>Olivia Martin</p>
            </div>
          </SelectItem>
          <SelectItem value="Jackson Lee">
            <div className="flex items-center gap-4">
              <div className="size-5 rounded-full bg-gradient-to-r from-zinc-50 to-zinc-500"></div>
              <p>Jackson Lee</p>
            </div>
          </SelectItem>
          <SelectItem value="Isabella Nguyen">
            <div className="flex items-center gap-4">
              <div className="size-5 rounded-full bg-gradient-to-r from-zinc-500 to-zinc-900"></div>
              <p>Isabella Nguyen</p>
            </div>
          </SelectItem>
          <SelectItem value="Sofia Davis">
            <div className="flex items-center gap-4">
              <div className="size-5 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-600"></div>
              <p>Sofia Davis</p>
            </div>
          </SelectItem>
          <SelectItem value="William Kim">
            <div className="flex items-center gap-4">
              <div className="to-dark size-5 rounded-full bg-gradient-to-r from-white"></div>
              <p>William Kim</p>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
