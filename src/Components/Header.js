import Button from './Button';
const Header = ({isVisible, toggle}) => {

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button toggle = {toggle} color = {isVisible ? "black" : "blue"} text ={isVisible ? "Close" : "Add" }  />
        </header>
    )
}

export default Header

