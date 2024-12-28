import React from 'react'

function ListItem() {
  return (
    <div>
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
        </div>
  )
}

export default ListItem
