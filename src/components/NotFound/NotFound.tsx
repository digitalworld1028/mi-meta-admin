import { Row, Table, Stack, Image } from "react-bootstrap";
import "./notfound.scss";



const NotFound = () => {
  return (
    <div style={{background:"white"}} >
      <img className="w-40" src="/images/NotFound/elephant 1.png" style={{height:"100vh"}} />
      <div className="elephant-container   text-center">
        <p className="text-center mb-5 elephant-title" >We said we were doing things differently, but an error is still just an error..</p>
        <p className="elephant-content text-center pt-5">
          Unfortunately there isn’t much else to see here other than our awesome mascot. Please turn around and go back to 
          <a href="/dashboard" className="mimeta_url"> mi-meta.io </a>
        </p>
      </div>
    </div>
  );
};

export { NotFound };
