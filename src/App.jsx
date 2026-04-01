import { useState, useEffect } from "react";
import {Calendar} from "./components/Calendar"
import CalendarHeader from "./components/CalendarHeader"
import { NavigationForTask } from "./components/NavigationForTask"
import { TaskBlock } from "./components/TaskBlock"

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

  const[trash, setTrash] =useState([])

  const [selectedCategory, setSelectedCategory] = useState(null)

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


  const choseYear =()=>{
    console.log('Выбор года')
  }

  const choseMonth = ()=>{
    console.log('Выбираем месяц')
  }

  const upMonth = () =>{
    console.log(`следующий месяц`)
  }

  const downMonth = ()=>{
    console.log(`предыдущий месяц`)
  }

  const sortMont = ()=>{
    console.log(`Задачи на этот месяц`)
  }

  const sortWeek = ()=>{
    console.log(`Задачи на эту неделю`)
  }

  const sortDay=()=>{
    console.log(`Задачи на этот день`)
  }

  {/*Функции для блока поиска-сортировки задач */}
  const foundTask = ()=>{
    console.log(`задача найдена `)
  }

  const delitAllTack = ()=>{
    console.log(`Все задачи удалины`)
    const windowAllDell = confirm('Are yuo want del ALL tasks')
    if(windowAllDell){
      setTasks([])
    } 
  }

  const addTask = () =>{
    {/*const newId = tasks.at(-1).id + 18*/}
    setTasks(
      [...tasks,{id:Date.now(), tipe:'work', titel:'Создание to-do-list', message:'Нужно накинуть разные стили', mounth:'Feb', day:'29', time:'45 min'}]
    )
  }

  const addCategoriy = ()=>{
    console.log(`Добавлена новая группа для задач`)
  }

  const sortCategory = (grupCategory)=>{
    console.log(grupCategory)
    if (selectedCategory === grupCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(grupCategory);
    }
  }

  {/*Данные для задач и функции для этого блока */}

  const DoTask = (taskId)=>{
    const TaskToRemove =  tasks.find((task)=>task.id === taskId)  
    setTasks(
      tasks.filter((task)=>task.id !==taskId)
    )
    setTrash([...trash, TaskToRemove])
  }
  
  const filteredTasks = selectedCategory
    ? tasks.filter(task => task.tipe === selectedCategory)
    : tasks;

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
        />
        <Calendar />
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
