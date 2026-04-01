import '../style/Button.css';

export function Button(props) {
    const { variant, text, icon, adaptiv, style, onClick } = props;

    return (
        <div className="container__button button" style={style} onClick={onClick}>
            <button className={`button-block button-block--${variant}`}>
                {icon && (
                    <div className="button-block__icon">
                        {icon}
                    </div>
                )}
                {text && (
                    <div className={`button-block__titel ${adaptiv ? 'adaptiv__button' : ''}`}>
                        <h2>{text}</h2>
                    </div>
                )}
            </button>
        </div>
    );
}