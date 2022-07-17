
import s from "./Grid.module.css"

const Grid = ({children}: any) => {

  return (
    <div className={s.root}>
      {children}
    </div>
  )
}

export default Grid