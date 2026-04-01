import '../style/ButtonOption.css';

export function ButtonOption(props){
    const{
        variant, 
        grup, 
        text, 
        icon,
        onNavTaskSortCategary,
    }=props

    
    return(
        <div className="container__button-option" >
            <button className={`button-option__block button-option__block--${variant} button-option__block--${grup}`} onClick={()=>{onNavTaskSortCategary(grup)}}>
                {icon && (
                    <div className="button-option__block--icon">
                        {icon}
                    </div>
                )}
                {text && (
                    <div className={`button-option__block--titel`}>
                        <h2>{text}</h2>
                    </div>
                )}
            </button>
        </div>
    )
}