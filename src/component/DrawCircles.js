import * as React from 'react'
import './DrawCircles.scss';

class DrawCircles extends React.Component{
    constructor(){
        super()

    }

    render(){
        const {tomatos} = this.props

        return (
            <div className='task-circles'>
            {
                // Array(tomatos.sum).fill('').map((tomato, index)=>{
                //     return <div className={(index<tomatos.count?'task-circle task-circle-past':'task-circle')} key={'task-circle'+index}></div>
                // })
                Array(tomatos.count).fill('').map((tomato, index)=>{
                    return <div className='task-circle task-circle-past' key={'task-circle'+index}></div>
                })
            }{
                Array(tomatos.sum - tomatos.count).fill('').map((tomato, index)=>{
                    return <div className='task-circle' key={'task-circle'+index+tomatos.count}></div>
                })
            }
            </div>
        )
    }
}

export default DrawCircles