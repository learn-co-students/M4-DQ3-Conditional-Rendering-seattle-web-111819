import React, {Component} from 'react'

export default class MenuBar extends Component {
  handleClick = e => {
    this.props.onMenuChange(e.target.id)
  }

  render() {
    return (
      <div className="ui four item menu">
        <a 
          id="profile" 
          className={this.props.active === "profile"?"item active":"item"} 
          onClick={(e)=>this.handleClick(e)}
        >
          <i className="user large icon" id="profile"/>
        </a>

        <a 
          id="photo" 
          className={this.props.active === "photo"?"item active":"item"} 
          onClick={(e)=>this.handleClick(e)}
        >
          <i className="photo large icon" id="photo"/>
        </a>

        <a 
          id="cocktail" 
          className={this.props.active === "cocktail"?"item active":"item"} 
          onClick={(e)=>this.handleClick(e)}
        >
          <i className="cocktail large icon" id="cocktail"/>
        </a>

        <a 
          id="pokemon" 
          className={this.props.active === "pokemon"?"item active":"item"} 
          onClick={(e)=>this.handleClick(e)}
        > 
          <i className=" themeisle large icon" id="pokemon"/>
        </a>
      </div>
    )
  }
}