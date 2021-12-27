export default function CancelIcn2({ width, height }) {
  return (
    <svg width={`${width}` || '26'} height={`${height}` || '26'} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 6.5L6.5 19.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 6.5L19.5 19.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
