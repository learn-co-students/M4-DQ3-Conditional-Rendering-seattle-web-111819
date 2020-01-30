import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

export default class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      page: "profile"
    }
  }

  onMenuChange = page => {
    this.setState({page: page})
  }

  whichPage = () => {
    if (this.state.page === "profile") {
      return <Profile />
    } else if (this.state.page === "photo") {
      return <Photos />
    } else if (this.state.page === "cocktail") {
      return <Cocktails />
    } 
    return <Pokemon />
  }

  render() {
    return (
      <div>
        <MenuBar onMenuChange={this.onMenuChange} active={this.state.page}/>
        {this.whichPage()}
      </div>
    )
  }

}