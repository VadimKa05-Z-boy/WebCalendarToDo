export function Calendar(props)  {
    const{
        onCalendarListMonth,
        onCalendarGrid,
        onCalendarType
    }=props

    let day = (new Date().getDay() + 6) % 7 
    switch(day){
        case 0:
            day='ПН'
            break
        case 1:
            day='BT'
            break
        case 2:
            day='СР'
            break
        case 3:
            day='ЧТ'
            break
        case 4:
            day='ПТ'
            break
        case 5:
            day='СБ'
            break
        case 6:
            day='ВС'
            break
    }
    const days = (onCalendarType===`month`|| onCalendarType===`week`) ? ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] : [day]
    
    let mass =  onCalendarGrid //onCalendarListMonth

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
