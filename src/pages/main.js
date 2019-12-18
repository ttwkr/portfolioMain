import React from 'react';
import MainMenu from '../component/main/mainmenu'
import '../styles/main.scss'
import '../styles/common.scss'
import Nav from '../component/nav/nav'


class Main extends React.Component {
  state = {
    menu : ['PORTFOLIO', 'ABOUT', 'CONTACT']
  }
  render(){
    return (
      <div className="Main">
        <Nav></Nav>
        <div className = "main__div">
          {this.state.menu.map((curr,i) => {
            return (
              <MainMenu key = {i} value={curr}/>
              )
          })}
        </div>
      </div>
    );
  }
}

export default Main;
