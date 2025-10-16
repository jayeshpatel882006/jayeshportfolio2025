import "../style/Navbarstyle.css"

const Navbar = ({bottamrefrence }) => {

  const handalBottamScroll=()=>{
    bottamrefrence.current?.scrollIntoView({behavior:"smooth"})
  }
  return (
    <>
      <div className="mainNav maindivs" >
        <div className="logo">@</div>
        <div className="menu">
            <li className="btn2"  onClick={()=>{handalBottamScroll()}}>Home</li>
            <li className="btn2" >About</li>
            <li className="btn2" >Skills</li>
          </div>
      </div>
    </>
  );
};

export default Navbar;
