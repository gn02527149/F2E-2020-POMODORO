import * as React from 'react'
import './CurrentTask.scss';
import DrawCircles from './DrawCircles';

class CurrentTask extends React.Component{
    constructor(){
        super()

    }

    render(){
        const {isTaskWorking, firstTask} = this.props
        const {title, tomatos} = firstTask

        return (
            <div className='task-block'>
                <p className='title'>{title}</p>
                { isTaskWorking ? (
                    <div className='task-doing'>
                        <DrawCircles tomatos={tomatos}/>
                    </div>
                    ):(
                    <div className='break-card'>BREAK</div>
                )}
            </div>
        )
    }
}

export default CurrentTask