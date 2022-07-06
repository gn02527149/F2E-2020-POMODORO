import React from 'react';
import './App.scss';
import MainPage from './MainPage';
import SideNav from './SideNav';

class App extends React.Component {
  constructor(){
    super()

    this.handleSideMenu=this.handleSideMenu.bind(this)
    this.handleTaskPlaying=this.handleTaskPlaying.bind(this)
    this.handleTasks=this.handleTasks.bind(this)
    this.handleClickMenu=this.handleClickMenu.bind(this)
    this.handleTaskSetting=this.handleTaskSetting.bind(this)
    this.handleChartsPeriod=this.handleChartsPeriod.bind(this)

    let sevenDaysAgoDate = new Date(new Date()-6*24*3600*1000)

    this.workTimeLength = '00:10'
    this.breakTimeLength = '00:05'

    this.state = {
      showSideMenu: false,
      isTaskWorking: true, // Task 進行 or 休息
      isTaskPlaying: false, // 倒數 or 暫停
      whereSideMenu: 'add-task',
      sevenDaysAgoDate,
      passedTasks: [
        // {
        //   title: 'second task',
        //   tomatos: {
        //     sum: 8,
        //     count: 7
        //   },
        //   isCompleted: false,
        //   completedTime: '2019/8/4',
        //   nowTimePlace: this.workTimeLength,
        //   isEditing: false
        // }
      ],
      tasks: [
      // {
      //   title: 'first task',
      //   tomatos: {
      //     sum: 10,
      //     count: 9
      //   },
      //   isCompleted: false,
      //   completedTime: null,
      //   nowTimePlace: this.breakTimeLength,
      //   isEditing: false
      // }
      ]
    }
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  _separateTimeString(timeString){
    let nowTimer = timeString.split(':')

    return parseInt(nowTimer[0]) * 60 + parseInt(nowTimer[1])
  }

  _combineTimeString(timeNumber){
    let second = (timeNumber % 60 < 10)? '0' + timeNumber % 60 : timeNumber % 60
    let minute = ((timeNumber - second) / 60 < 10)? '0' + (timeNumber - second) / 60 : (timeNumber - second) / 60

    return minute + ':' + second
  }

  _startTimer(){
    clearInterval(this.timerID)
    let {tasks} = this.state

    if(tasks[0].isCompleted){
      return
    }

    this.timerID = setInterval(()=>{
      tasks = this.state.tasks
      let nowTimer = this._separateTimeString(tasks[0].nowTimePlace)

      if(nowTimer === 0){
        clearInterval(this.timerID)
        
        tasks[0].tomatos.count++
        this.setState({
          tasks
        })
        this._completedLevel()
        return

      }else{
        nowTimer--
        tasks[0].nowTimePlace = this._combineTimeString(nowTimer)
        
        this.setState({
          tasks,
          isTaskWorking: true,
          isTaskPlaying: true
        })
      }
    }, 500)
  }

  _pauseTimer(){
    clearInterval(this.timerID)
    const tasks = this.state.tasks

    this.setState({
      tasks
    })
  }

  _breakTimer(){
    clearInterval(this.timerID)
    let {tasks} = this.state

    this.timerID = setInterval(()=>{
      tasks = this.state.tasks
      let {nowTimePlace, tomatos} = tasks[0]
      let nowTimer = this._separateTimeString(nowTimePlace)

      if((tomatos.count === tomatos.sum) && (nowTimer === 0)){
        clearInterval(this.timerID)
        tasks[0].isCompleted=true

        this.setState({
          isTaskWorking: true,
          isTaskPlaying: false,
          tasks
        })
        this._resetTask()
        return

      }else if(nowTimer === 0){
        clearInterval(this.timerID)
        this._completedLevel()
        return

      }else{
        nowTimer--
        tasks[0].nowTimePlace = this._combineTimeString(nowTimer)

        this.setState({
          tasks
        })
      }
    }, 500)
  }

  _resetTask(){
    let {tasks, passedTasks}=this.state

    if(tasks[0].isCompleted){
      const nowTime = new Date()
      tasks[0].completedTime = `${nowTime.getFullYear()}/${parseInt(nowTime.getMonth() + 1)}/${nowTime.getDate()}`
      let shiftFirstTask = tasks.shift()
      passedTasks.push(shiftFirstTask)
      this.setState({
        tasks,
        passedTasks
      })
    }
  }

  _completedLevel(){
    let {tasks, isTaskWorking} = this.state
    let updatedTimePlace = isTaskWorking ? this.breakTimeLength : this.workTimeLength

    tasks[0].nowTimePlace = updatedTimePlace

    setTimeout(()=>{
      this.setState({
        tasks,
        isTaskWorking: !isTaskWorking,
        isTaskPlaying: false
      })
    }, 300)
  }

  handleTaskPlaying(taskSettings){
    let {tasks, isTaskWorking} = this.state

    switch(taskSettings){

      case 'start':
        if(isTaskWorking){
          this._startTimer()

          this.setState({
            isTaskPlaying: true,
            isTaskWorking: true
          })

        }else{
          this._breakTimer()

          this.setState({
            isTaskPlaying: true,
            isTaskWorking: false
          })

        }
      break

      case 'pause':
        this._pauseTimer()

        this.setState({
          isTaskPlaying: false
        })
      break

      case 'reset':
        tasks[0].nowTimePlace = this.workTimeLength
        
        this.setState({
          tasks
        })
      break

      default:
      break
    }
  }

  handleSideMenu(){
    this.setState({
        showSideMenu: !this.state.showSideMenu
    })
  }

  handleTaskSetting(doWhat, data){
    let {doType, doIndex} = doWhat
    let {tasks, passedTasks} = this.state

    if('tasks' in data ){
      let taskIsEditing = data.tasks.isEditing

      tasks = tasks.map((task, index)=>{
        if(taskIsEditing){
          task.isEditing = false
        }else{
          task.isEditing = (doIndex === index)? !taskIsEditing : taskIsEditing
        }
        return task

      })
      
      this.setState({
        tasks
      })

    }else if('passedTasks' in data){
      let passedTaskIsEditing = data.passedTasks.isEditing

      passedTasks = passedTasks.map((passedTask, index)=>{
        if(passedTaskIsEditing){
          passedTask.isEditing = false
        }else{
          passedTask.isEditing = (doIndex === index)? !passedTaskIsEditing : passedTaskIsEditing
        }
        return passedTask
      })
      
      this.setState({
        passedTasks
      })
    }
  }

  handleTasks(doWhat, data){
    let {doType, doIndex} = doWhat
    let {tasks, passedTasks} = this.state
    
    switch(doType){

      case 'create':
        tasks.push({
          title: data.title,
          tomatos: {
            sum: data.count,
            count: 0
          },
          isCompleted: false,
          completedTime: null,
          nowTimePlace: this.workTimeLength,
          isEditing: false
        })

        this._resetTask()
        this.setState({
          tasks
        })
      break
      
      case 'edit':
        tasks[doIndex].title = data.title
        tasks[doIndex].isEditing = false
        
        this.setState({
          tasks
        })
      break
      
      case 'delete':
        if(doIndex===0){
          return
        }
        tasks.splice(doIndex, 1)

        this._resetTask()
        this.setState({
          tasks
        })
      break

      case 'redo':
        passedTasks[doIndex].nowTimePlace = this.workTimeLength
        passedTasks[doIndex].isCompleted = false
        passedTasks[doIndex].isEditing = false
        tasks.push(passedTasks[doIndex])
        passedTasks.splice(doIndex, 1)
        
        this.setState({
          tasks,
          passedTasks
        })
      break
      
      case 'completed':
        clearInterval(this.timerID)
        tasks[0].isCompleted = true

        this._resetTask()
        this.setState({
          tasks,
          passedTasks
        })
      break

      default:
      break
    }
  }

  handleClickMenu(clickWhat){

    this.setState({
      whereSideMenu: clickWhat
    })
  }

  handleChartsPeriod(type){
    const oneDay = 1 * 24 * 3600 * 1000
    let sevenDaysAgoDate = this.state.sevenDaysAgoDate

    if(type === 'prev'){
      sevenDaysAgoDate = new Date(sevenDaysAgoDate.getTime() - oneDay)

    }else if(type === 'next'){
      sevenDaysAgoDate = new Date(sevenDaysAgoDate.getTime() + oneDay)

    }

    this.setState({
      sevenDaysAgoDate
    })

  }

  render(){
    let {tasks, passedTasks, isTaskPlaying, isTaskWorking, showSideMenu, whereSideMenu, sevenDaysAgoDate} = this.state

    return (
        <div className='App'>
            <MainPage tasks={tasks} isTaskPlaying={isTaskPlaying} isTaskWorking={isTaskWorking} handleTasks={this.handleTasks} handleTaskPlaying={this.handleTaskPlaying}/>
            <SideNav passedTasks={passedTasks} tasks={tasks} isTaskPlaying={isTaskPlaying} handleTasks={this.handleTasks} handleTaskSetting={this.handleTaskSetting} handleSideMenu={this.handleSideMenu} handleChartsPeriod={this.handleChartsPeriod} showSideMenu={showSideMenu} whereSideMenu={whereSideMenu} sevenDaysAgoDate={sevenDaysAgoDate} handleClickMenu={this.handleClickMenu}/>
        </div>
    )
  }
}

export default App;
