import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    clicked: ''
  }


  switchMenu = menuItem => {
    this.setState({
      clicked: menuItem
    })
  }
  

  render() {


    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar profile={Profile()} 
        photos={Photos()} 
        cocktails={Cocktails()} 
        pokemon={<Pokemon />} 
        onSwitchMenu={this.switchMenu}
        />
        {this.state.clicked}
        {/* {<Pokemon />} */}
      </div>
    )
  }

}

export default MainBox
