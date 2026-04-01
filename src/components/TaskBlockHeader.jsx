import { Button } from "./Button"

export function TaskBlockHeader(props){
    const{
        onTaskHeaderInput,
        onNavTaskButtonFound,
        onNavTaskButtonDelAll,
        onNavTaskButtonAdd,
    } = props

    return(
        <div className="task__serch">
            <div className="task__serch--block">
                <input 
                    className="task__serch--input" 
                    name="search" placeholder="Поиск..." 
                    onChange={(event)=> onTaskHeaderInput(event.target.value)}>
                </input>
                <Button 
                    variant="black"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/>
                        </svg>
                    }
                    onClick={onNavTaskButtonFound}
                />
            </div>
            <div style={{ display: 'flex', columnGap: '1rem' }}>
                <Button 
                    variant="black"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <g id="_01_align_center" data-name="01 align center"><polygon points="24 11 13 11 13 0 11 0 11 11 0 11 0 13 11 13 11 24 13 24 13 13 24 13 24 11"/></g>
                        </svg>
                    }
                    style={{ transform: 'rotate(45deg)' }}
                    onClick={onNavTaskButtonDelAll}
                />
                <Button 
                    variant="black"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <g id="_01_align_center" data-name="01 align center"><polygon points="24 11 13 11 13 0 11 0 11 11 0 11 0 13 11 13 11 24 13 24 13 13 24 13 24 11"/></g>
                        </svg>
                    }
                    onClick={onNavTaskButtonAdd}
                />
            </div>
        </div>
    )
}