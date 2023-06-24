export const Play = ({ size = 34, ...props }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-play"
    {...props}
  >
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);
