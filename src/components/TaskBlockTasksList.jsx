import { TaskBlockTasksItem } from "./TaskBlockTasksItem"

export function TaskBlockTasksList(props){
    const{
        className='',
        tasks=[],
        onTaskDo,
    }=props

    return(
        <ul className={`tacks__list ${className}`}>
            {tasks.map((task)=>(
                <TaskBlockTasksItem
                    key={task.id}
                    {...task}
                    onTaskDo={onTaskDo}
                />
            ))
            }
        </ul>
    )
}