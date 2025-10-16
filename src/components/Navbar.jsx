import "../style/Navbarstyle.css"
import styled from 'styled-components';

const Navbar = ({bottamrefrence , topref}) => {

  const handalBottamScroll=()=>{
    bottamrefrence.current?.scrollIntoView({behavior:"smooth"})
  }
  const handaltopScroll=()=>{
    topref.current?.scrollIntoView({behavior:"smooth"})
  }
  return (
    <>
      <div className="mainNav maindivs" >
        <div className="logo" >
           <button className="button" onClick={handaltopScroll} data-text="Awesome">
        <span className="actual-text">&nbsp;Jayesh&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;Jayesh&nbsp;</span>
      </button>
           </div>
        <div className="menu">
            <li className="btn2" >Home</li>
            <li className="btn2" >About</li>
            <li className="btn2" >Skills</li>
            <li className="btn2"  onClick={()=>{handalBottamScroll()}} >Links</li>
          </div>
      </div>
    </>
  );
};

export default Navbar;
