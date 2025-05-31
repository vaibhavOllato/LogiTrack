// src/components/Button.jsx
const Button = ({ children, onClick, variant = "primary" }) => {
  const base = "px-4 py-2 rounded font-semibold"
  const variants = {
    primary: "bg-cyan-600 text-white hover:bg-cyan-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    ghost: "bg-transparent text-cyan-600 hover:underline"
  }

  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
