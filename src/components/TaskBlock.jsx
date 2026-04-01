import { useState } from "react"
import { TaskBlockHeader } from "./TaskBlockHeader"
import { TaskBlockTasksList } from "./TaskBlockTasksList"

export function TaskBlock(props) {
    const{
        tasks=[],
        onTaskDo
    } = props


    return(
        <div className="task">
            <TaskBlockTasksList 
                tasks={tasks}
                onTaskDo={onTaskDo}
            />
        </div>
    )
}