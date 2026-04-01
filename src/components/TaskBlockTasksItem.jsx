export function TaskBlockTasksItem(props){
    const {
        className='',
        id,
        tipe,
        titel,
        message,
        day,
        mounth,
        time,
        onTaskDo,
    }=props

    return(
        <li className={`task__item learning ${tipe} ${className}`}>
            <div className="task__headerBlock headerBlock row">
                <div className="headerBlock__titel">
                    <h2>{titel}</h2>
                </div>
                <button className={`headerBlock__Do__${tipe}`} onClick={()=>{onTaskDo(id)}}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M7.77,20.589a3.012,3.012,0,0,1-2.137-.883L0,14.073l1.424-1.425,5.633,5.633a1.008,1.008,0,0,0,1.425,0L22.576,4.187,24,5.612,9.906,19.706A3.01,3.01,0,0,1,7.77,20.589Z"/>
                        </svg>
                    </div>
                </button>

            </div>

            <div className="task__mainBlock mainBlock row">
                <p>{message}</p>
            </div>

            <div className="task__foterBlock foterBlock row">
                <div className="foterBlock__buttons">
                <button className={`foterBlock__buttonDay__${tipe}`}>
                    <div className="foterBlock__buttonDay--icon">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M19,2h-1V1c0-.552-.447-1-1-1s-1,.448-1,1v1H8V1c0-.552-.447-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM5,4h14c1.654,0,3,1.346,3,3v1H2v-1c0-1.654,1.346-3,3-3Zm14,18H5c-1.654,0-3-1.346-3-3V10H22v9c0,1.654-1.346,3-3,3Zm0-8c0,.552-.447,1-1,1H6c-.553,0-1-.448-1-1s.447-1,1-1h12c.553,0,1,.448,1,1Zm-7,4c0,.552-.447,1-1,1H6c-.553,0-1-.448-1-1s.447-1,1-1h5c.553,0,1,.448,1,1Z " />
                    </svg>
                    </div>
                    <p className="foterBlock__buttonDay--text">
                        `{day} {mounth}`
                    </p>
                </button>
                <button className={`foterBlock__buttonTime__${tipe}`}>
                    <div className="foterBlock__buttonTime--icon">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm5,10c0-.553-.447-1-1-1h-3V6c0-.553-.448-1-1-1s-1,.447-1,1v6c0,.553,.448,1,1,1h4c.553,0,1-.447,1-1Z"/></svg>
                    </div>
                    <p className="foterBlock__buttonTime--text">
                        {time}
                    </p>
                </button>
                </div>
                <button className={`foterBlock__Ect__${tipe}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z"/><path d="M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><path d="M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><circle cx="2" cy="5" r="2"/><circle cx="2" cy="12" r="2"/><circle cx="2" cy="19" r="2"/>
                    </svg>
                    <p>Подробнее</p>
                </button>
                {/*<button className="task__button-change button-task button-change">
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"/>
                </svg>
                <p>Изменить</p>
                </button>*/}
            </div>
        </li>   
    )
}