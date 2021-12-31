import React from "react"
import PropTypes from "prop-types"
import page from './Edumet.html'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} dangerouslySetInnerHTML={{ __html: page }}/>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
