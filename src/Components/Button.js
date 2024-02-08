const Button = ({color,text,toggle}) => {
    return <button onClick = {toggle} className="btn" style= {{backgroundColor : color}}>{text}</button>
}

export default Button