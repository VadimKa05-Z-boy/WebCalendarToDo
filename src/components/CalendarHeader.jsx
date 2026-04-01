import React from "react";
import { Button } from "./Button";

const CalendarHeader = (props) =>{
    const{
      onChoseYear,
      onChoseMonth,
      onUpMonth,
      onDownMonth,
      onButtonSortLisMonthTask,
      onButtonSortLisWeekTask,
      onButtonSortLisDayTask
    }=props  

    return(
        <div className="calendar__header">
          <div className="calendar__header-firstLine firstLine">
            {/*<button className="firstLine__month"><h2>Ноябрь </h2></button>
            <button className="firstLine__year"><h2>2026</h2></button>
            */}
            <Button
              variant="white"
              text="2026"
              onClick={onChoseYear}
            />
            <Button 
              variant="white"
              text="Ноябрь"
              onClick={onChoseMonth}
            />

             <Button 
              variant="white"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"/>
                </svg>
              }
              onClick={onDownMonth}
            />
            <Button 
              variant="white"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z"/>
                </svg>
              }
              onClick={onUpMonth}
            />
          </div>
          <div className="calendar__header-secondLine secondLine">
            <div className="secondLine__buttons">
              <button className="secondLine__button" onClick={onButtonSortLisMonthTask}><h3>Month</h3></button>
              <button className="secondLine__button" onClick={onButtonSortLisWeekTask}><h3>Week</h3></button>
              <button className="secondLine__button" onClick={onButtonSortLisDayTask}><h3>Day</h3></button>
            </div>
          </div>
        </div>
    )
}

export default CalendarHeader;