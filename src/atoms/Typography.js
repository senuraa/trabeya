import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const Component = styled.p`
  color: ${props => props.theme.colors.text[props.color]};
  font-size: ${props => props.theme.typography[props.variant].fontSize};
`
const Typography = props => {
  const {variant, children} = props;
  const tag = variant.includes('p') ? 'p' : variant;
  return (
    <Component as={tag} {...props}>{children}</Component>
  )
}
Typography.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired
}

Typography.defaultProps = {
  variant: 'p1',
  color: 'tertiary'
}
export default withTheme(Typography)
