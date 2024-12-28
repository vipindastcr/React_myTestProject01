import React from 'react'


function ListItem(){
    return (

        <div className='list-item'>

                    <hr />
                    <div className='list-title'><h4>My Title One</h4></div>
                    <div className='list-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perferendis.</div>
                    <div className='list-label'>
                        <span>Label 1</span>
                        <span>Label 2</span>
                        <span>Label 3</span>
                    </div>
                    <hr />
        </div>
    )
}

function IndexJsx() {
  return (
    <div className='app'>
        <div className='app-header'>
            <span className='header-title'>code malayalam</span>
            <span>Home</span>
            <span>Usage</span>
            <span>Settings</span>
            <span>Logout</span>
        </div>
        <div className='app-body'>
            <div className='app-list'>
            {ListItem()}

            {ListItem()}

            {ListItem()}

            {ListItem()}
                
            </div>
        </div>
        <div className='app-footer'>Lorem ipsum dolor sit amet consectetur.</div>
    </div>
  )
}

export default IndexJsx
