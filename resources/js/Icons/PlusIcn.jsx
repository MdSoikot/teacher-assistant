export default function PlusIcn({ width, height }) {
  return (
    <svg width={`${width}` || '21'} height={`${height}` || '21'} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M12 5V19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 12H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="21" height="21" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
