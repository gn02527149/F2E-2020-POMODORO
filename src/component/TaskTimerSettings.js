import * as React from 'react'
import './TaskTimerSettings.scss';

class TaskTimerSettings extends React.Component{
    constructor(){
        super()

    }

    render(){
        const {handleTaskPlaying, isTaskPlaying, isTaskWorking} = this.props
        const iconColor = isTaskWorking?'task-start':'task-break'
        const defaultIconClass = 'material-icons '

        return (
            <div className='task-setting'>
                <i className={defaultIconClass + (!isTaskPlaying && iconColor)} onClick={()=>{(!isTaskPlaying) && handleTaskPlaying('start')}}>play_arrow</i>
                <i className={defaultIconClass + (isTaskPlaying && iconColor)} onClick={()=>{(isTaskPlaying) && handleTaskPlaying('pause')}}>pause</i>
                <i className={defaultIconClass + (isTaskWorking && iconColor)} onClick={()=>{(isTaskWorking) && handleTaskPlaying('reset')}}>replay</i>
            </div>
        )
    }
}

export default TaskTimerSettings