export function Calendar()  {
    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const months = [11, 12, 13, 23, 41, 51, 71];

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
        {/*<li className="calendar__day">
            <button className="day"><h2>1</h2></button>
        </li>*/}
    </ul>
    )
}
