export const CircleSVG = ({ width = 360 }) => {
  return (
    <svg width={width} height={width} viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="360" rx="32" fill="#C28A59"/>
      <circle cx="180" cy="180" r="110" stroke="#B92A2B" strokeWidth="64"/>
    </svg>
  )
}
