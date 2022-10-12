// import React, { useEffect } from 'react'
import './BVN.css'
import Dashboard from '../../Dashboard/Dashboard'
import { Link } from 'react-router-dom'
import Continue from '../../../Components/Buttons/Continue/Continue'

const BVN = () => {
// const [BVN , setBVN] = useState('')
//   let Sandpoint= 'https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/:bvnnumber?seckey=FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X'

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
            <input type="date" name="date" id="" className='date' />
          </div>
          {/* <div className="DOBInput">
            <div className="dd" placeholder='DD'></div>
            <div className="mm"></div>
            <div className="yy"></div> 
          </div> */}
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
      </div>
    </div>
  )
}

export default BVN