import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function AddQuestion({ onClose }) {
    const [formData, setFormData] = useState({
      question: '',
      details: '',
      competences: '',
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const { question, details, competences } = formData;
      const questionData = {
        question: question,
        details: details,
        competences: competences.split(',').map((comp) => comp.trim()),
      };
      console.log(questionData);
      onClose();
    };
  
    return (
      <div className="popup addqst">
        <form className="addpfe" onSubmit={handleSubmit}>
          <FontAwesomeIcon icon={faXmark} className="xmark" onClick={onClose} /> <br />
          <h1>Titre de la question</h1>
          <input type="text" placeholder="entrez la question..." name="question" value={formData.question} onChange={handleInputChange} />
          <h1>Details :</h1>
          <textarea id="textarea" type="text" placeholder="entrez de details sur cette questions..." name="details" value={formData.details} onChange={handleInputChange} />
         <h1>Competence :</h1>
          <textarea id="textarea" type="text" placeholder="entrez vos compétence (mettez une virgule entre chaque compétence)" name="competences" value={formData.competences} onChange={handleInputChange} />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }

export default AddQuestion