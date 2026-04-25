export function Calendar(props)  {
    const{
        onCalendarListMonth
    }=props

    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    
    let mass = onCalendarListMonth

    return(
    <ul className="calendar__list">     
        <li className="calendar__week" inert>
            <ul className="calendar_days">
                {days.map((day, index) =>{
                    return(
                        <li className="calendar__day" key={index}>
                            <button className="day day__week"><h2>{day}</h2></button>
                        </li>
                    )
                })}
            </ul>
        </li>
        
        <div>
           {mass.map((mas, rowIndex)=>(
            <ul className="calendar_days" key={rowIndex}>
                {mas.map((m, columnIndex)=>(
                    <li className="calendar__day" key={columnIndex}>
                        <button className="day" >{m}</button>
                    </li>
                ))}
            </ul>
           ))} 
        </div>
        {/*<li className="calendar__week">
            <ul className="calendar_days">
                {months.map((m, index) =>{
                    return(
                        <li className="calendar__day" key={index}>
                            <button className="day"><h2>{m}</h2></button>
                        </li>
                    )
                })}
            </ul>
        </li>

        <li className="calendar__week">
            <ul className="calendar_days">
                {months.map((m, index) =>{
                    return(
                        <li className="calendar__day" key={index}>
                            <button className="day"><h2>{m}</h2></button>
                        </li>
                    )
                })}
            </ul>
        </li>
        <li className="calendar__week">
            <ul className="calendar_days">
                {months.map((m, index) =>{
                    return(
                        <li className="calendar__day" key={index}>
                            <button className="day"><h2>{m}</h2></button>
                        </li>
                    )
                })}
            </ul>
        </li>
        <li className="calendar__week">
            <ul className="calendar_days">
                {months.map((m, index) =>{
                    return(
                        <li className="calendar__day" key={index}>
                            <button className="day"><h2>{m}</h2></button>
                        </li>
                    )
                })}
            </ul>
        </li>
        <li className="calendar__week">
            <ul className="calendar_days">
                {months.map((m, index) =>{
                    return(
                        <li className="calendar__day" key={index}>
                            <button className="day"><h2>{m}</h2></button>
                        </li>
                    )
                })}
            </ul>
        </li>
        <li className="calendar__week">
            <ul className="calendar_days">
                {months.map((m, index) =>{
                    return(
                        <li className="calendar__day" key={index}>
                            <button className="day"><h2>{m}</h2></button>
                        </li>
                    )
                })}
            </ul>
        </li>
        <li className="calendar__day">
            <button className="day"><h2>1</h2></button>
        </li>*/}
    </ul>
    )
}
