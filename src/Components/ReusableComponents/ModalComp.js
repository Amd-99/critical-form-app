import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';    

const ModalComp = (props) => {
    
    return (
            <div>
            <div>
        
      <Modal
        open={props.openModal}
        onClose={props.handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
     
      <pre>
          {props.dataValues}
      </pre>
        
      
      </Modal>
    </div>  
        </div>
    )
}

export default ModalComp
