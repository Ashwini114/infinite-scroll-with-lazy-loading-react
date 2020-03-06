import React,{Suspense,lazy} from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Image = React.lazy(() => import('./Image'));



const ListItem = ({item}) =>{
  return (<div >
      <Suspense fallback={<div><AiOutlineLoading3Quarters /></div>}><Image img={item.poster_image}/></Suspense>
     <p>{item.name}</p>
     </div>)
}

export default ListItem;