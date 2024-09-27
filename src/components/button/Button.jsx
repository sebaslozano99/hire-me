import PropTyes from "prop-types";



export default function Button({onClick, 
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
    <button onClick={onClick} className={className} style={additionalStyles} >
      {children}
    </button>
  )
}


Button.propTypes = {
  className: PropTyes.string,
  onClick: PropTyes.func,
  children: PropTyes.node,
  fontSize: PropTyes.number,
  padding: PropTyes.number,

}