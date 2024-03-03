// Popup.js
import React from 'react';
import Modal from 'react-modal';
import ProjectDetails from './ProjectDetails';

Modal.setAppElement('#root');

const Popup = ({ id, closeModal }) => {
  return (
    <Modal
      isOpen={true} 
      className="custom-modal"// Open the modal when this component is rendered
      onRequestClose={closeModal}
      // contentLabel="Description"
      // style={{maxWidth:"33%", maxHeight:"33%", top:"200px !important",bottom:"200px !important", left:"200px !important", right:"200px !important"}}
    >
      <div >
        <ProjectDetails id={id}/>
        {/* <a href={repo} target="_blank" rel="noopener noreferrer">Repository Link</a> */}
        <button style={{display:"flex",justifyContent:"center",margin:"0 auto",fontWeight:"900", border:"1px solid black",}} onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default Popup;
