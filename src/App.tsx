import { Button } from "./components/ui/button"
import { create } from "zustand"

const useStore = create<{
  count: number
  inc: () => void
  dec: () => void
}>((set) => ({
  count: 0,
  inc: () => set((state) => ({count: state.count + 1})),
  dec: () => set((state) => ({count: state.count - 1})),
}))

function App() {
  const { count, inc, dec } = useStore()
  return (
    <div className="flex flex-col gap-4" >
      <div className="text-2xl" >{count}</div>
      <div className="flex gap-2 items-center" >
      <Button onClick={inc} >Inc</Button>
      <Button onClick={dec} >Dec</Button>

      </div>
    </div>
  )
}

export default App
