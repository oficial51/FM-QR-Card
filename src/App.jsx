
import './App.css'
import Qr from "../public/image-qr-code.png"

function App() {


  return (
    <div className='w-screen flex items-center justify-center h-screen bg-[#D5E1EF]'>
    <div className='w-[320px] bg-white flex flex-col items-center justify-center h-[500px] rounded-3xl shadow-md'>
      <img src={Qr} alt="Qr code" className='w-[288px] mx-auto h-[288px] mt-[-18px] mb-[24px] rounded-xl' />
      <p className='text-[21px] mx-[34px] text-[#242F4B] text-center font-bold'>Improve your front-end skills by building projects</p>
      <p className='text-[#80838C] mx-[37px] text-[15px] mt-[13px] text-center font-normal' style={{lineHeight: '18px'}}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level </p>
    </div>
    </div>
  )
}

export default App
