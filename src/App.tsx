import { User } from "./components/User";
import { Cart } from "./components/cart";
import { ChangeQtyButton } from "./components/change-qty-button";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";
import { PRODUCTS_DATA } from "./lib/mock-data";
import { useStore } from "./store/store";

function App() {
  const addProduct = useStore((state) => state.addProduct);
  const cartProducts = useStore((state) => state.products);

  return (
    <main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
      <div className="w-full flex items-center justify-between">
        <User />
        <Cart />
      </div>
      <h1 className="text-2xl">Products:</h1>
      <div className="space-y-2">
        {PRODUCTS_DATA.map((product) => (
          <Card key={product.id}>
            <CardHeader>{product.title}</CardHeader>
            <CardContent>{product.price}$</CardContent>
            <CardFooter>
              {cartProducts.find((item) => item.id === product.id) ? (
                <ChangeQtyButton productId={product.id} />
              ) : (
                <Button onClick={() => addProduct(product)}>Add To Cart</Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default App;
