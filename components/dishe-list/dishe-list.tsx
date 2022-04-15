import Styles from "./dishe-list.module.css"
import { Dishe, Dishe2, Dishe3, Dishe4, Dishe5, Dishe6 } from "@/components"

export function DisheList(){
  return(
    <div className={Styles.list}>
      <Dishe />
      <Dishe2 />
      <Dishe3 />
      <Dishe4 />
      <Dishe5 />
      <Dishe6 />
    </div>
  )
}