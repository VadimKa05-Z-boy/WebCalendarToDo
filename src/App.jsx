import { useState, useEffect, useRef, useMemo, useCallback} from "react";
import {Calendar} from "./components/Calendar"
import CalendarHeader from "./components/CalendarHeader"
import { NavigationForTask } from "./components/NavigationForTask"
import { TaskBlock } from "./components/TaskBlock"

  const grups=[
    {id:1, variant:"dark",grup:"work", text:"Work", icon:(
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M20.74,10.312l-4.3-6.171A5,5,0,0,0,12.336,2H8.5A5.024,5.024,0,0,0,3.825,5.228L1.753,10.692A4,4,0,0,0,0,14v1.5a2.505,2.505,0,0,0,2,2.45v.55a3.5,3.5,0,0,0,7,0V18h6v.5a3.5,3.5,0,0,0,7,0v-.55a2.505,2.505,0,0,0,2-2.45V15A5.011,5.011,0,0,0,20.74,10.312ZM14.8,5.284,18.084,10H11V4h1.336A3,3,0,0,1,14.8,5.284Zm-9.1.653A3.014,3.014,0,0,1,8.5,4H9v6H4.154ZM7,18.5a1.5,1.5,0,0,1-3,0V18H7ZM18.5,20A1.5,1.5,0,0,1,17,18.5V18h3v.5A1.5,1.5,0,0,1,18.5,20ZM22,15.5a.5.5,0,0,1-.5.5H2.5a.5.5,0,0,1-.5-.5V14a2,2,0,0,1,2-2H19a3,3,0,0,1,3,3Z"/>
    </svg>
    )},
    {id:2, variant:"dark", grup:"learning", text:"Learning", icon:(
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M20,0H5c-1.654,0-3,1.346-3,3V21c0,1.654,1.346,3,3,3H22V2c0-1.103-.897-2-2-2Zm0,18H8V2h4V11l2.5-2.5,2.5,2.5V2h3V18ZM5,2h1V18h-1c-.351,0-.687,.061-1,.172V3c0-.551,.449-1,1-1Zm0,20c-.551,0-1-.449-1-1s.449-1,1-1h15v2H5Z"/>
      </svg>
    )},
    {id:3, variant:"dark", grup:"home", text:"Home&Family", icon:(
      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/>
      </svg>
    )},
  ]

function App() {
  const [tasks, setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem('tasks')

    if(savedTasks){
      return JSON.parse(savedTasks)
    }

    return[
      {id:1, tipe:'learning', titel:'Создание to-do-list', message:'Нужно накинуть разные стили', mounth:'Feb', day:'29', time:'45 min'},
      {id:2, tipe:'work', titel:'Создание to-do-list', message:'Нужно накинуть разные стили', mounth:'Feb', day:'29', time:'45 min'},
      {id:3, tipe:'home', titel:'Создание to-do-list', message:'Нужно накинуть разные стили', mounth:'Feb', day:'29', time:'45 min'}
    ]
  })

  const[trash, setTrash] = useState([])

  const [selectedCategory, setSelectedCategory] = useState(null)



  const [carentDate,setCarentDate] = useState(()=>new Date())

  const [modeCalendar, setModeCalendar] =useState('month')

  const [monthMenu, setMonthMenu] = useState('MonthMenuClose')

  const generateCalendarGrid = useMemo(()=>{
    const monthNow = carentDate.getMonth()
    const yearNow = carentDate.getFullYear()
    let dayNow = (carentDate.getDay() + 6) % 7
    const mounthLength = new Date(yearNow, monthNow, 0).getDate()
    const mounthStart =  (new Date(yearNow,monthNow,1).getDay()+6) % 7 

    if (modeCalendar === `month`){
      {/*сдесь реализации создания сетки 7 на 7 , где первая строка захарткожена под дни недели*/}
      
      let mas = []
      for(let i=1; i <= mounthLength; i++){
        mas.push(i)
      }
      
      for(let i=0; i<mounthStart; i++){
        mas.unshift(``)
      }
      
      for(let i=mas.length; i< 42; i++){
          mas.push(``)
      }

      let masFin=[[],[],[],[],[],[]]
      let b =0;
      for(let i=0; i<6; i++){
        for(let y=0; y<7; y++){
          masFin[i][y]=mas[b];
          b+=1
        }
      }
      console.log(masFin)
      return masFin

    }else if(modeCalendar === `week`){
      {/*сдесь реализации создания сетки 2 на 7 , где первая строка захарткожена под дни недели*/}
      
      let mas = []

      let a = carentDate.getDate() + (6 - dayNow)
      
      for(let i=6; i!==0; i--){
        mas[i] = a
        a--
      }

      let masFin = [mas]
      console.log(masFin)
      return masFin

    }else if(modeCalendar === `day`){
      {/*сдесь реализации создания сетки 2 на 1 , где первая строка захарткожена под день недели*/}
      let mas = [carentDate.getDate()];
      let masFin = [mas]
      return masFin 
    }
  },[carentDate, modeCalendar]) 

  const popoverRef = useRef(null)
  useEffect(() => {
    popoverRef.current?.setAttribute('popover', 'auto');
  }, [])

  const choseYear =()=>{
    console.log('Выбор года')
    popoverRef.current?.showPopover();
  }

  const popoverMonth = useRef(null)
  useEffect(() => {
    popoverMonth.current?.setAttribute('popover', 'auto');
  }, [])

  const choseMonth = ()=>{
    console.log('Выбираем месяц' )
    popoverMonth.current?.showPopover();
  }

  const upMonth = useCallback(() =>{
    let monthNext = new Date(carentDate)
    monthNext.setMonth(monthNext.getMonth()+1)

    setCarentDate(monthNext)
    
    console.log(carentDate,`следующий месяц`, monthNext)
  },[carentDate])

  const downMonth = useCallback(()=>{
    /*let newMonth, newYear

    if(blockMonth === 0) {
      newMonth = 11 
      newYear = blockYear - 1
    } else {
      newMonth = blockMonth - 1
      newYear = blockYear
    } 

    setBlockMonth(newMonth) 
    setBlockYear(newYear)*/
    let oldMonth = new Date(carentDate)
    oldMonth.setMonth(oldMonth.getMonth()-1)

    setCarentDate(oldMonth)
    console.log('исходный месяц: ', carentDate,`предыдущий месяц`, oldMonth)
  },[carentDate])

  const sortMont = useCallback(()=>{
    setModeCalendar('month')
    console.log(`Задачи на этот месяц`)
  },[modeCalendar])

  const sortWeek = useCallback(()=>{
    /*let a = 0
    let dayNow = now.getDate()
    for(let i=0; i<6; i++){
      for(let y=0; y<7; y++){
        if(dayNow === masFin[i][y]){
          a = i;
          break
        }
      }
    }
    
    setListCaledar([masFin[a]])*/
    setModeCalendar('week')
    console.log(`Задачи на эту неделю`,dayNow, a, masFin[a])
  },[modeCalendar])

  const sortDay = useCallback(()=>{
    //let dayNow = now.getDate()
    setModeCalendar('day')
    console.log(`Задачи на этот день`)
  },[modeCalendar])

  {/*Функции для блока поиска-сортировки задач */}
  const foundTask = ()=>{
    console.log(`задача найдена `)
  }

  const delitAllTack = useCallback(()=>{
    console.log(`Все задачи удалины`)
    const windowAllDell = confirm('Are yuo want del ALL tasks')
    if(windowAllDell){
      setTasks([])
    } 
  },[tasks])

  const addTask = () =>{
    {/*const newId = tasks.at(-1).id + 18*/}
    setTasks(
      [...tasks,{id:Date.now(), tipe:'work', titel:'Создание to-do-list', message:'Нужно накинуть разные стили', mounth:'Feb', day:'29', time:'45 min'}]
    )
  }

  const addCategoriy = ()=>{
    console.log(`Добавлена новая группа для задач`)
  }

  const sortCategory = useCallback((grupCategory)=>{
    console.log(grupCategory)
    if (selectedCategory === grupCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(grupCategory);
    }
  },[selectedCategory])

  {/*Данные для задач и функции для этого блока */}

  const DoTask = useCallback((taskId)=>{
    const TaskToRemove =  tasks.find((task)=>task.id === taskId)  
    setTasks(
      tasks.filter((task)=>task.id !==taskId)
    )
    setTrash([...trash, TaskToRemove])
  },[tasks,trash])
  
  const filteredTasks = useMemo(()=> selectedCategory
    ? tasks.filter(task => task.tipe === selectedCategory)
    : tasks,[tasks, selectedCategory])

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])
 
  return (
    <div>

      <div className="block">
        <CalendarHeader 
          onChoseYear ={choseYear}
          onChoseMonth ={choseMonth}
          onUpMonth = {upMonth}
          onDownMonth = {downMonth}
          onButtonSortLisMonthTask = {sortMont}
          onButtonSortLisWeekTask = {sortWeek}
          onButtonSortLisDayTask = {sortDay}
          yearNow = {carentDate.getFullYear()}
          monthNow = {carentDate.getMonth()}
        />
        
        <div
          id="munuForButYear"
          ref={popoverRef}
        >
          <button onClick={()=>{
            const year = new Date(carentDate)
            year.setFullYear(carentDate.getFullYear()-1)
            setCarentDate(year)
            popoverRef.current?.hidePopover()
          }}>
            <h2>
              {carentDate.getFullYear()-1}
            </h2>
          </button>
          <button onClick={()=>{
            const year = new Date(carentDate)
            year.setFullYear(carentDate.getFullYear())
            setCarentDate(year)
            popoverRef.current?.hidePopover()
          }}>
            <h2>
              {carentDate.getFullYear()}
            </h2>
          </button>
          <button onClick={()=>{
            const year = new Date(carentDate)
            year.setFullYear(carentDate.getFullYear() + 1)
            setCarentDate(year)
            popoverRef.current?.hidePopover()
          }}>
            <h2>
              {carentDate.getFullYear()+1}
            </h2>
          </button>
        </div>

        <div id="munuForButMonth" ref={popoverMonth}>
          {['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
            .map((monthName, index) => (
              <button
                key={index}
                onClick={() => {
                  const newDate = new Date(carentDate);  // копируем текущую дату
                  newDate.setMonth(index);               // устанавливаем нужный месяц
                  setCarentDate(newDate);
                  popoverMonth.current?.hidePopover();
                }}
              >
                {monthName}
              </button>
            ))
          }
        </div>

        
        <Calendar
          //onCalendarListMonth={listCalendar}
          onCalendarGrid = {generateCalendarGrid}
          onCalendarType = {modeCalendar}
        />
      </div>
      
      <NavigationForTask 
        onNavTaskButtonFound={foundTask}
        onNavTaskButtonDelAll={delitAllTack}
        onNavTaskButtonAdd={addTask}
        onNavTaskButtonAddCategor={addCategoriy}
        onNavTaskButtonSort={sortCategory}
        grups={grups}
      />

      <TaskBlock
        tasks={filteredTasks}
        onTaskDo={DoTask} 
      />
    </div>
  )
}

export default App
