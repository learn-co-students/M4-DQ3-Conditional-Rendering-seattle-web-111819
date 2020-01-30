import React from 'react'

const MenuBar = (props) => {
 


  return (
    <div className="ui four item menu" >
      <a className="item" id="Profile" onClick={() => props.onSwitchMenu(props.profile)} >
        <i className="user large icon" id="profile"/>
      </a>

      <a className="item" id="Photo" onClick={() => props.onSwitchMenu(props.photos)}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className="item" id="Cocktail" onClick={() => props.onSwitchMenu(props.cocktails)}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className="item" id="Pokemon"> 
        <i className=" themeisle large icon" id="pokemon" onClick={() => props.onSwitchMenu(props.pokemon)}/>
      </a>
    </div>
  )

}

export default MenuBar
