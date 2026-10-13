function Button({children, onClick}){
    return(
        <button onClick={onClick} className="py-0 px-2 bg-stone-500 cursor-pointer rounded font-medium text-sm">{children}</button>
    );
}

export default Button