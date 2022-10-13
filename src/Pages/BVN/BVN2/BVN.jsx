import React, { useEffect } from 'react'
import './BVN.css'
import Dashboard from '../../Dashboard/Dashboard'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
import Continue from '../../../Components/Buttons/Continue/Continue'

const BVN = () => {
  // const customStyles = {
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
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


// const [BVN , setBVN] = useState('')
//   let endPoint= 'https://api.flutterwave.com/v3/kyc/bvns/:bvn'
// const secretKey= 'FLWSECK-6629d9ddb42c408a555142dda5b40720-X'

//   const bvnChange=(e) => {
//     setBVN(e.target.value)
//   }
//   useEffect(() => {
//     const bvnChange = async() =>{
//       let response = await fetch('https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/:bvnnumber?seckey=FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X')
//       let data = await response.json()
//       setData(JSON.stringify(data))
//     }
//     bvnChange()
//   }, [BVN])

  
  return (
    <div className='bvn'>
      <div className="dashB">
      <Dashboard/>
      </div>
      <div className="bvnVerification">
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
        </div>
          </div>
        </form>

<div>
      {/* <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal> */}
    </div>
      </div>
    </div>
  )
}

export default BVN