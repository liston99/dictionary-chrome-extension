function Button({children, onClick}){
    return(
        <button onClick={onClick} className="py-1 px-2 bg-stone-500 cursor-pointer rounded font-medium text-sm hover:bg-stone-600">{children}</button>
    );
}

export default Button