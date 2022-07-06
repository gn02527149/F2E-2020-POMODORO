import * as React from 'react'
import './SideNav.scss';
import SideNavContent from './SideNavContent';

class SideNav extends React.Component{
    constructor(){
        super()

        this.state = {
            menuLists: [
                {'add-task': 'add_circle_outline'},
                {'show-tasks': 'menu'},
                {'analysis-tasks': 'bar_chart'},
                {'choose-music': 'music_note'}
            ]
        }
    }


    render(){
        const {tasks, passedTasks, handleTasks, handleTaskSetting, handleSideMenu, handleClickMenu, handleChartsPeriod, isTaskPlaying, showSideMenu, whereSideMenu, sevenDaysAgoDate} = this.props
        const {menuLists} = this.state

        return (
            <div className='side-page'>
                <div id='side-page-menu'>
                {
                    menuLists.map((item, index)=>{
                        const menuTitle = Object.keys(item)[0]

                        return (<i onClick={()=>{handleClickMenu(menuTitle)}} data-menu-clicked={whereSideMenu === menuTitle} className={'material-icons ' + menuTitle} key={'side-menu' + index}>{Object.values(item)}</i>)
                    })
                }
                </div>
                <div id='control-button'>
                    <input type='checkbox' id='control-nav' onClick={()=>{handleSideMenu()}}/>
                    <label htmlFor='control-nav'></label>
                </div>
                { (showSideMenu) &&
                    <SideNavContent tasks={tasks} passedTasks={passedTasks} isTaskPlaying={isTaskPlaying} handleTasks={handleTasks} handleTaskSetting={handleTaskSetting} handleChartsPeriod={handleChartsPeriod} whereSideMenu={whereSideMenu} sevenDaysAgoDate={sevenDaysAgoDate}/>
                }
            </div>
        )
    }
}

export default SideNav


/*
<i className="add-task material-icons menu-click">add_circle_outline</i>
<i className="show-tasks material-icons">menu</i>
<i className="analysis-tasks material-icons">bar_chart</i>
<i className="choose-music material-icons">music_note</i>
*/