const variants = {
    primary: "bg-blue-500 text-blue-200 hover:bg-blue-600",
    delete: "text-xs px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 cursor-pointer"
} 


export default function Button({children, className = "", onClick, variant = "primary"}) {
    const base = "px-4 py-2 cursor-pointer self-center rounded mt-2"
     const variantClass = variants[variant] ?? variants.primary
    return (
        <button className={`${base} ${variantClass} ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

