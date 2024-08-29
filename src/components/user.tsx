import { useStore } from "@/store/store"
import { useShallow } from "zustand/react/shallow";
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { UserIcon } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";



export const User = () => {
    const { address, setAddress, userName, fullName } = useStore(
      useShallow((state) => ({
        address: state.address,
        setAddress: state.setAddress,
        userName: state.userName,
        fullName: state.fullName,
      }))
    );

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" size="icon">
            <UserIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="overflow-y-auto  space-y-4 w-96">
          <div className="flex flex-col gap-2 justify-center">
            <p>{fullName}</p>
            <p className="text-sm text-muted-foreground">{userName}</p>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <Label htmlFor="address">Your Address:</Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </PopoverContent>
      </Popover>
    );
}