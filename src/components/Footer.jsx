import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className = "text-center">
            <p>Copyright &copy; 2021</p>
            <Link to="/about" ><span className="text-blue-400 underline"> About </span></Link>
        </div>
    )
}

export default Footer
