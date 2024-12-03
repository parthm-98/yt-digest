

export default function AddIcon({ className }: { className?: string }) {
 
  return (
    <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="opacity-50 group-hover:opacity-100"
                >
                  <path
                    stroke="#171717"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5.75V18.25"
                    fill="none"
                  />
                  <path
                    stroke="#171717"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.25 12L5.75 12"
                    fill="none"
                  />
                </svg>
  );
}
