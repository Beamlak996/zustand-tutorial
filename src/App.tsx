import { useShallow } from "zustand/react/shallow"
import { useStore } from "./store/store"

function App() {
  const { address, fullName } = useStore(
    useShallow((state)=> ({
      address: state.address,
      fullName: state.fullName
    }))
  )

  // const address=  useStore((state) => state.address)

  return (
    <div className="" >
      {address} {fullName}
    </div>
  )
}

export default App
