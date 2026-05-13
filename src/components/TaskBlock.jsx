import { useState } from "react"
import { TaskBlockHeader } from "./TaskBlockHeader"
import { TaskBlockTasksList } from "./TaskBlockTasksList"
import { TaskContext } from "../context/TaskContect"

export function TaskBlock(props) {
    const{
        tasks=[],
        onTaskDo
    } = props

    if(tasks.length === 0 ){
        return(
             <div className="task">
                <h3>Массив пуст</h3>
            </div>
        )
    }

    return(
        <div className="task">
            <TaskBlockTasksList 
                tasks={tasks}
                onTaskDo={onTaskDo}
            />
        </div>
    )
}