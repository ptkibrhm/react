import { Link, Outlet } from "react-router-dom"

const About = () => {
  return (
    <div> 
        <h1>About</h1>
        <hr></hr>
        <Link style={{marginRight:'10px'}} to="EmployeeAbout">Çalışanlar hakkında</Link>
        <Link to="CompanyAbout">Şirket hakkında</Link>
        <Outlet />
    </div>
  )
}

export default About