import * as Component from './App.styles'
import React, {useState} from 'react'
import * as types from './types'
import Itens from './components/Itens/RenderItens'
import Base from '../Base'
import AddItens from './components/AddItens'
function App() {
  const [Data,setData] = useState<types.data[]>(Base)
  const addItens = (taskDiscription:string) => {
    let newData = [...Data]
    newData.push(
      { id:Data.length+1,
        description: taskDiscription,
        status:false})
        setData(newData)
  }

  const changeStatus = (obj:types.data) =>{
    Data.map(item => item.id === obj.id ? item.status = !obj.status : '')

  }
  return (
    <Component.Container>
      <Component.Area>
        <Component.Header>
          Listas de Tarefas
        </Component.Header>
        <AddItens onFinish={addItens}>
        </AddItens>
          {Data.map((item)=>
            <div key={item.id}>
              <Itens item={item} onChange={changeStatus}/>
            </div>
            )
          }
      </Component.Area>
    </Component.Container>
  )
}

export default App
