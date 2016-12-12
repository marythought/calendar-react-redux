import React, { PropTypes } from 'react'

const Link = ({ children, active, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a
      href='#'
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

const propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Object.assign(Link, propTypes)
