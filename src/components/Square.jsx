export function Square ({
  children, isSelect, updateBoard, index
}) {
  const squared = `square ${isSelect ? 'is-selected' : ''}`
  const handlerClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handlerClick} className={squared}>
      {children}
    </div>

  )
}
