import { useState } from 'react';
import './verification.css';
import { useParams, useNavigate } from 'react-router-dom';
function Verification() {
  const history = useNavigate();
  const [formData, setFormData] = useState({});
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1]; 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const { discutions } = formData;
    
    if (discutions === token) {
      history('/editstudentp');
    } else {
      window.location.reload(); // Refresh the page
    }
  };
  
  return (
    <div className="popup">
      <form onSubmit={handleSubmit} className="addpfe">
        <h3 id='vrftitle'>Vérification de votre email .</h3>
        <h4 id='vrftest'>Vous allez recevoir email avec votre code dans un instant .</h4>
        <label htmlFor="discutions" id="lbl">
          <br />
          <input
            type="text"
            name="discutions"
            id="discutions"
            placeholder="enter the verification code"
            className="inputp"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Vérifier</button>
      </form>
    </div>
  );
}

export default Verification;