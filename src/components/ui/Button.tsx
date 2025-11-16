

export function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-5 py-2 bg-blue-600 rounded-md hover:bg-blue-700 hover:cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}