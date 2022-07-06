import * as React from 'react'
import './SideNavContent.scss';
import DrawCircles from './DrawCircles';

class SideNavContent extends React.Component{
    constructor(){
        
        super()

        this.onChangeTask=this.onChangeTask.bind(this)
        this.handleTasks=this.handleTasks.bind(this)

        const nowDate = new Date()
        let todayDateArray = [nowDate.getFullYear(), nowDate.getMonth() + 1, nowDate.getDate()]

        this.state={
            title: '',
            count: 1,
            errorMsg: '',
            menuLists: [
                {'add-task': 'add_circle_outline'},
                {'show-tasks': 'menu'},
                {'analysis-tasks': 'bar_chart'},
                {'choose-music': 'music_note'}
            ],
            todayDateArray
        }
    }

    _getSevenDaysArray(start){
        let newArray = [start]

        Array(6).fill().forEach((item, index)=>{
            let afterOneDay = new Date(new Date(newArray[index]).getTime() + 1*24*3600*1000)
            newArray.push(`${afterOneDay.getFullYear()}/${parseInt(afterOneDay.getMonth()+1)}/${afterOneDay.getDate()}`)
        })

        return newArray
    }

    onChangeTask(e){
        const {className, value, dataset} = e.target

        this.setState({
            [className]: (className === 'count'? parseInt(dataset.number) : value)
        })
    }

    handleTasks(data){
        let errorMsg = []
        const {doType, doIndex} = data

        if(this.props.isTaskPlaying){
            errorMsg.push('請先將倒數器停止')
        }
        if(this.state.count === 0 && doType === 'create'){
            errorMsg.push('請選擇想要添加幾顆番茄')
        }
        if(this.state.title === ''){
            errorMsg.push('請輸入任務名稱')
        }

        if(errorMsg.length > 0){
            this.setState({
                errorMsg: 'ERROR：' + errorMsg.join('、')
            })

        }else if(doType!==''){
            this.props.handleTasks({doType, doIndex}, this.state)

            this.setState({
                title: '',
                errorMsg: '',
                count: 1
            })
        }
    }

    render(){
        let {whereSideMenu, tasks, passedTasks} = this.props

        switch (whereSideMenu){

            case 'add-task':
            const {title, count, errorMsg} = this.state

            return (
                <div id='side-page-content' className='add-task-content'>
                    <p className='title'>ADD NEW TASK</p>
                    <div className='content-block'>
                        <p className='sub-title'>TASK TITLE</p>
                        <input className='title' type='text' onChange={this.onChangeTask} value={title}/>
                    </div>
                    <div className='content-block'>
                        <p className='sub-title'>ESTIMATED TOMOTO</p>
                        <div className='tomatos'>
                            {
                                Array(10).fill('').map((item, index)=>{
                                    return (
                                        <div className='tomato' key={'tomato'+index}>
                                            <label className='count' onClick={this.onChangeTask} data-number={index+1} data-filled={(count > index ? true : false)}></label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <button onClick={()=>{this.handleTasks({'doType':'create', 'doIndex': -1})}}>ADD TASK</button>
                    <p className='error-msg'>{errorMsg}</p>
                </div>
            )
            break
            
            case 'show-tasks':
            const {handleTaskSetting, handleTasks} = this.props

            return (
                <div id='side-page-content' className='show-tasks-content'>
                    <p className='title'>TASK LISTS</p>
                    <div className='content-block'>
                        <p className='sub-title'>TO DO</p>
                        <ul className='todo-content-block'>
                            { tasks.length > 0 &&
                            tasks.map((task, index)=>{
                                const {title, tomatos, isEditing} = task
                                return (
                                    <li className='todo-content' key={'todo-content'+index}>
                                        <div className='show-todo'>
                                            <div className='task-info'>
                                                <p>{title}</p>
                                                <DrawCircles tomatos={tomatos}/>
                                            </div>
                                            <i className="task-setting fas fa-ellipsis-h" data-rotate={isEditing} onClick={()=>{handleTaskSetting({'doType':'edit', 'doIndex': index}, {'tasks': task})}}></i>
                                        </div>
                                        { isEditing === true && (
                                        <div className='edit-todo'>
                                            <p className='edit-todo-title'>TASK TITLE</p>
                                            <input className='title' type='text' onChange={this.onChangeTask} value={this.state.title}/>
                                            <button className='edit-todo-save' onClick={()=>{this.handleTasks({'doType':'edit', 'doIndex': index})}}>SAVE</button>
                                            <button className='edit-todo-delete' onClick={()=>{handleTasks({'doType':'delete', 'doIndex': index})}}>DELETE</button>
                                        </div>
                                        )}
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                    <div className='content-block'>
                        <p className='sub-title'>DONE</p>
                        <ul className='done-content-block'>
                            { passedTasks.length > 0 &&
                            passedTasks.map((passedTask, index)=>{
                                const {title, tomatos, isEditing} = passedTask
                                return (
                                    <li className='done-content' key={'done-content'+index}>
                                        <div className='show-done'>
                                            <i className="far fa-check-circle"></i>
                                            <div className='task-info'>
                                                <p>{title}</p>
                                                <DrawCircles tomatos={tomatos}/>
                                            </div>
                                            <i className="task-setting fas fa-ellipsis-h" data-rotate={isEditing} onClick={()=>{handleTaskSetting({'doType':'edit', 'doIndex': index}, {'passedTasks': passedTask})}}></i>
                                        </div>
                                        { isEditing===true && (
                                        <div className='edit-done'>
                                            <button className='edit-todo-save' onClick={()=>{handleTasks({'doType':'redo', 'doIndex': index})}}>REDO</button>
                                        </div>
                                        )}
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
            )
            break

            case 'analysis-tasks':
            const {todayDateArray} = this.state
            const {sevenDaysAgoDate, handleChartsPeriod} = this.props

            const sevenDaysAgoDateArray = [sevenDaysAgoDate.getFullYear(), sevenDaysAgoDate.getMonth()+1, sevenDaysAgoDate.getDate()]
            const sevenDaysArray = this._getSevenDaysArray(sevenDaysAgoDateArray.join('/'))

            return (
                <div id='side-page-content' className='analysis-tasks-content'>
                    <p className='title'>ANALYTICS REPORT</p>
                    <div className='content-block'>
                        <p className='sub-title'>TOMATO OF THIS WEEKE</p>
                        <div className='analysis-datas'>
                            <div className='analysis-data-block'>
                                <p className='statistics-data'>
                                {
                                    passedTasks.filter((passedTask, index)=>{
                                        return new Date(passedTask.completedTime).getTime() === new Date(todayDateArray.join('/')).getTime()
                                    }).length
                                }
                                </p>
                                <p className='statistics-period'>TODAY</p>
                            </div>
                            <div className='analysis-data-block'>
                                <p className='statistics-data'>
                                    { passedTasks.filter((passedTask, index)=>{
                                        return new Date(passedTask.completedTime).getTime() >= new Date(sevenDaysArray[0]).getTime() && new Date(passedTask.completedTime).getTime() <= new Date(sevenDaysArray[6]).getTime()
                                    }).length
                                    }
                                </p>
                                <p className='statistics-period'>{sevenDaysArray[0] + '-' + sevenDaysArray[6]}</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-block'>
                        <p className='sub-title'>CHART</p>
                        <div className='analysis-charts'>
                        {
                            sevenDaysArray.map((day, index)=>{
                                const doneTaskCount = passedTasks.filter((passedTask, index)=>{
                                    return passedTask.completedTime === day
                                }).length

                                return (
                                    <div className='analysis-charts-column' key={'analysis-charts-column'+index}>
                                        <div className='analysis-charts-count'>
                                        <p className='analysis-charts-count-number'>{doneTaskCount > 0 && doneTaskCount}</p>
                                        <DrawCircles tomatos={{'sum': doneTaskCount, 'count': doneTaskCount}}/>
                                        </div>
                                        <div className='analysis-charts-period'>{day.replace(todayDateArray[0]+'/','')}</div>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className='setting-block'>
                            <button onClick={()=>{handleChartsPeriod('prev')}}>PREV</button>
                            {(sevenDaysArray[6] === todayDateArray.join('/')) ? (
                                <button className='not-click'>NEXT</button>
                            ):(
                                <button onClick={()=>{handleChartsPeriod('next')}}>NEXT</button>
                            )}
                        </div>
                    </div>
                </div>
            )
            break

            case 'choose-music':
            return (
                <div id='side-page-content' className='choose-music-content'>
                    <p className='title'>RING TONE</p>
                    <div className='content-block'>
                        <p className='sub-title'>WORK</p>
                        <ul className='music-content-block'>
                        </ul>
                    </div>
                    <div className='content-block'>
                        <p className='sub-title'>BREAK</p>
                        <ul className='music-content-block'>
                        </ul>
                    </div>
                </div>
            )
            break

            default:
            break
        }
    }
}

export default SideNavContent