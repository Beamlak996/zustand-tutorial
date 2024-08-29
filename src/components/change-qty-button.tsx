import { useStore } from "@/store/store"
import { useShallow } from "zustand/react/shallow"
import { Button } from "./ui/button"
import { Minus, Plus } from "lucide-react"

type Props = {
    productId: string
}  


export const ChangeQtyButton = ({productId}: Props) => {

    const { getProductById, decQty, incQty } = useStore(
      useShallow((state) => ({
        getProductById: state.getProductById,
        decQty: state.decQty,
        incQty: state.incQty,
      }))
    );

    const product = getProductById(productId);

    return (
      <>
        {product && (
          <div className="flex gap-2 items-center">
            <Button onClick={() => decQty(product.id)} size="icon">
              <Minus />
            </Button>
            {product.qty}
            <Button onClick={() => incQty(product.id)} size="icon">
              <Plus />
            </Button>
          </div>
        )}
      </>
    );
}