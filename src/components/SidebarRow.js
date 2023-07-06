import React from 'react'
import './SidebarRow.css'

function SidebarRow({selected, Icon, title}) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}> 
    {/* if selected, add to selected class */}
      <Icon className='sidebarRow__icon'/>
      <p className='sidebarRow__title'>{title}</p>

      <hr/>
    </div>
  )
}

export default SidebarRow
