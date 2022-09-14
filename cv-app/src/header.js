import logo from './curriculum-vitae.png'

function Header() {


 return (
  <div className = 'headerWrapper'>
    <div className = 'siteName'>Curriculum-Vitae-Creator</div>
    <img src={logo} className = 'logo' ></img>


  </div>)
}
export default Header;
