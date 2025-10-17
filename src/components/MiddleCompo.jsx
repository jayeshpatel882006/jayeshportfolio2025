
import "../style/Middlecompostyle.css"
import jayeshphoto from "../../Assets/jayeshphoto.jpg"

const MiddleCompo = () => {
  return <div className="middlemaindiv maindivs">
    {/* <p>Parsonal Info </p> */}
  <div className="innerdiv">
  <div>
    <p className="introtxt">
    Hi I Am <span style={{color:"#ecdfcc9b"}}>Jayesh Patel</span>, <br></br>Building the future of the web through code and cloud.
    </p>
    </div>
  <div>
    <img src={jayeshphoto} alt="jayeshphoto" style={{width:"200px",height:"200px",borderRadius:"50%",objectFit:"cover"}} />
  </div>  
  </div>
  <div className="btndiv">
  <span className="contactbtn btn2">Contact me </span>
  <span className="contactbtn btn2">Projects</span>
  </div>
  </div>;
};

export default MiddleCompo;


