import * as Component from './App.styles'
import React, {useState} from 'react'
import * as types from './types'
import Itens from './components/Itens/RenderItens'
import Base from '../Base'
function App() {
  const [Data,setData] = useState<types.data[]>(Base)
  return (
    <Component.Container>
      <Component.Area>
        <Component.Header>
          Listas de Tarefas
        </Component.Header>
          {Data.map(item=>{
            return(
            <div>
              <Itens description={item} id={item.id} />
            </div>
            )})
          }
      </Component.Area>
    </Component.Container>
  )
}

export default App
