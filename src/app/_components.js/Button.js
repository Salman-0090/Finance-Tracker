export default function Button({children, className, onClick}) {
    return (
        <button className={className}>
            {children}
        </button>
    )
}