import { Link } from 'react-router-dom'
import navbar from '../styles/navbar.module.scss'

const NavLink = ({ href, text }) => {
  return (
    <Link to={href} className={`text-base m-auto font-medium text-white hover:text-pink-400 sm:hidden ${navbar.navxl}`}>
      {text}
    </Link>
  )
}

export default NavLink
