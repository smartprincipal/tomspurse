import React from 'react'
import './BVN1.css'
import BankIcon from '../../../Asset/bankIcon.png'
import Dashboard from '../../Dashboard/Dashboard'
import Continue from '../../../Components/Buttons/Continue/Continue'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';

const BVN1 = () => {
  const customStyles = {
    content: {
      top: '50%',
      left: '45%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      outline: 'none'
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='bvn1'>
   <div className="dashB">
   <Dashboard/>
  </div>
   <div className="bvnInfo">
        
    <div className="infoImg">
    <img classname='bvnInfoImg' src={BankIcon} alt="" />
    </div>
     <h4>We need more information</h4>
     <p>We need to add your bvn to secure your account</p>
     
     <div className="skip">
      {/* <Link to='/BVN2'>
      
      <Continue/>
    </Link> */}
      <button onClick={openModal} className='ContinueButton'>Continue</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal" className='bvnVerification'
      >


        {/* <div className="bvnVerification"> */}
         <h4>Add your BVN</h4>
        <form action="" className='bvnForm'>
          <input 
          type="text" 
          name="BVN" id="" 
          className='bvnNumber' placeholder='Bank Verification Number' 
          // value={BVN}
          // onChange={bvnChange}
          required/>
          <div className="DOBBlock">
          <label htmlFor="" className='DOB'>Date of Birth</label>
          <div className="DOBInput">
            <div>
            <input type="text" name="date" className='dd' placeholder='DD'/>
            </div>
            <div>
              <input type="text" name='month' className='mm'placeholder='MM' />
            </div>
            <div>
              <input type="text" name="month" className='yy' placeholder='YY'/>
            </div>
          </div>
          </div>


        <div className="skip">
          <div><Link to='./'><p>Skip</p></Link></div>
          <div>
          <Link to='/Token'>
         <Continue/>
      </Link>
      {/* <button onClick={openModal} className='ContinueButton'>Continue</button> */}
        </div>
          </div>
        </form> 
        {/* </div> */}
        {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal" className='bvnVerification'
      >

      </Modal> */}

      </Modal>
       </div>

   </div>

</div>

 )
}

export default BVN1