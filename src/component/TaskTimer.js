import * as React from 'react'
import './TaskTimer.scss';
import TaskTimerSettings from './TaskTimerSettings';

class TaskTimer extends React.Component{
    constructor(){
        super()

    }

    render(){
        const {handleTasks, handleTaskPlaying, isTaskPlaying, isTaskWorking, nowTimePlace} = this.props
        const circleLength = isTaskWorking? 10 : 5

        let nowTimerCircle = nowTimePlace.split(':')
        nowTimerCircle = ( 1 - (parseInt(nowTimerCircle[0]) * 60 + parseInt(nowTimerCircle[1])) / (circleLength)) * 942

        return (
            <div className='task-timer'>
                <div className='task-now'>
                    <svg viewBox="0 0 300 300">
                        <circle className="circle1" r="150" cx="150" cy="150" data-stroke-break={isTaskWorking} style={{'strokeDasharray': (nowTimerCircle +' 942')}}/>
                    </svg>
                    <p className='task-now-timer'>{nowTimePlace}</p>
                </div>
                { (isTaskPlaying) ? (
                <div className='task-complete'>
                    <label htmlFor='checkbox-task-complete' style={{'cursor':'not-allowed'}}>TASK COMPLETE</label>
                </div>
                ):(
                <div className='task-complete'>
                    <label htmlFor='checkbox-task-complete' onClick={()=>{handleTasks({'doType':'completed', 'doIndex': -1}, true)}}>TASK COMPLETE</label>
                </div>
                )}
                <TaskTimerSettings handleTaskPlaying={handleTaskPlaying} isTaskPlaying={isTaskPlaying} isTaskWorking={isTaskWorking}/>
            </div>
        )
    }
}

export default TaskTimer