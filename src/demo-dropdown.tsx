import React, { useState } from 'react'
import { Dropdown } from 'boge-ui'

const DemoDropdown = () => {
  const [open, setOpen] = useState(false)
  const onToggle = () => setOpen(prev => !prev)

  return (
    <div>
      <h2>Demo Dropdown</h2>
      <Dropdown onClick={onToggle} label="Dropdown" isOpen={open}>
        Ini adalah content dropdown
      </Dropdown>
    </div>
  )
}

export default DemoDropdown