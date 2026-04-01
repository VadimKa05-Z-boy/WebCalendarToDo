import { Button } from "./Button";
import { ButtonOption } from "./ButtonOption";
import { TaskBlockHeader } from "./TaskBlockHeader"

export function NavigationForTask(props) {


  const{
    onNavTaskButtonFound,
    onNavTaskButtonDelAll,
    onNavTaskButtonAdd,
    onNavTaskButtonAddCategor,
    onNavTaskButtonSort,
    grups=[]
  }=props

  return (
    <div className="task__header">
      <div className="task__header__menu">
        <TaskBlockHeader 
          onNavTaskButtonFound={onNavTaskButtonFound}
          onNavTaskButtonDelAll={onNavTaskButtonDelAll}
          onNavTaskButtonAdd={onNavTaskButtonAdd}
        />
        
        <nav className="task__navig navig">
          <ul className="navig__list">
            {grups.map((grup)=>(
              <li className="navig__item" key={grup.id}>
                <ButtonOption
                  {...grup}
                  onNavTaskSortCategary={onNavTaskButtonSort}
                />
              </li>
            ))}
            
          </ul>
          
          <Button 
            variant="black"
            text="Добавить категорию"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19,3H12.472a1.019,1.019,0,0,1-.447-.1L8.869,1.316A3.014,3.014,0,0,0,7.528,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V8A5.006,5.006,0,0,0,19,3ZM5,3H7.528a1.019,1.019,0,0,1,.447.1l3.156,1.579A3.014,3.014,0,0,0,12.472,5H19a3,3,0,0,1,2.779,1.882L2,6.994V6A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V8.994l20-.113V18A3,3,0,0,1,19,21Z"/>
              </svg>
            }
            adaptiv="true"
            onClick={onNavTaskButtonAddCategor}
          />
        </nav>
      </div>
    </div>
  );
}