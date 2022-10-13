import React from 'react'
import './Token.css'
import Dashboard from '../Dashboard/Dashboard'
import Continue from '../../Components/Buttons/Continue/Continue'
import { Link } from 'react-router-dom'
// import Modal from 'react-modal';

const Token = () => {
  // const customStyles = {
  //   content: {
  //     top: '50%',
  //     left: '45%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //     outline: 'none'
  //   },
  // };

  // let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }


  return (
    // <Modal
    //     isOpen={modalIsOpen}
    //     onAfterOpen={afterOpenModal}
    //     onRequestClose={closeModal}
    //     style={customStyles}
    //     contentLabel="Example Modal" className='token'
    //   >

    <div className='token'>
     <div className="tokenDashboard">
     <Dashboard/>
     </div>
     <div className="tokenPopUp">
     <div className="tokenVerification">
        <h4>Enter your Token</h4>
        <p>Please enter the verification code sent to your Email</p>
        <form action="" className='tokenForm'>
          <input type="text" name="token" id="" className='tokenNumber' required/>
        <div className="skip">
        <Link to='/Dashboard'>
         <Continue/>
      </Link>
        </div>
        </form>
      </div>
     </div>
    </div>
      // </Modal>
  )
}

export default Token