import React from 'react'
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';    

const ModalComp = (props) => {
    
    return (
            <div>
            <div>
        
      <Modal
        open={props.openModal}
        onClose={props.handleCloseModal}
     
        
      >
     
     <Box > 
     <pre className='text-white bg-black' >
          {props.dataValues}
      </pre>
  </Box>
    
        
      
      </Modal>
    </div>  
        </div>
    )
}

export default ModalComp
