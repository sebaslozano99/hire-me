import PropTyes from "prop-types";



export default function Button({
    onClick, 
    onMouseEnter,
    value = "",
    fontSize = 25, 
    padding = 5,
    className = "",
    children
  }) {

  const additionalStyles = {
    fontSize: `${fontSize}px`,
    cursor: "pointer",
    borderStyle: "none",
    padding: `${padding}px`,
  }

  return (
    <button onClick={onClick} onMouseEnter={onMouseEnter} className={className} style={additionalStyles} value={value} >
      {children}
    </button>
  )
}


Button.propTypes = {
  onClick: PropTyes.func,
  onMouseEnter: PropTyes.func,
  className: PropTyes.string,
  value: PropTyes.string,
  fontSize: PropTyes.number,
  padding: PropTyes.number,
  children: PropTyes.node,
}