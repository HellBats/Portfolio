import { create } from "zustand"

type Counter ={
    count:number;
    increment:() => void;
    decrement:() => void;
}

export type Drag = 
{
    x:number,
    y:number,
}

type DraggablePositon = {
    components:Drag[],
    setPos:(id:number,x:number,y:number) => void,
}

export const useDrag = create<DraggablePositon>((set) => ({
  components: [],
  setPos(id, x, y) {
    set((state) => { // 1. Use curly braces {} for a code block
      const new_pos: Drag = { x: x, y: y };
      
      // 2. Create a NEW array (immutable update)
      const new_components = [...state.components]; 
      
      // 3. Update the new array
      new_components[id] = new_pos;

      // 4. Return the new state object explicitly
      return { components: new_components };
    });
  },
}));


export const useCounter = create<Counter>((set) => ({
    count:0,
    increment:() => {
        set((state) => ({count:state.count+1}));
    },
    decrement:() => {
        set((state) => ({count:state.count-1}));
    }
}));