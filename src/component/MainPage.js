import * as React from 'react'
import './MainPage.scss';
import CurrentTask from './CurrentTask';
import TaskTimer from './TaskTimer';

class MainPage extends React.Component{
    constructor(){
        super()
    }

    render(){
        const {tasks, isTaskPlaying, isTaskWorking, handleTasks, handleTaskPlaying} = this.props
        
        return (
            (tasks.length > 0) ? (
            <div className='main-page'>
                <CurrentTask firstTask={tasks[0]} isTaskWorking={isTaskWorking}/>
                <TaskTimer isTaskPlaying={isTaskPlaying} isTaskWorking={isTaskWorking} nowTimePlace={tasks[0].nowTimePlace} handleTasks={handleTasks} handleTaskPlaying={handleTaskPlaying}/>
            </div>
            ):(
                <div className='main-page'>
                    <div className='orange'>
                        <div className='color'></div>
                    </div>
                </div>
            )
        )
    }
}

export default MainPage