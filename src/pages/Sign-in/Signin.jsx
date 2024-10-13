
import Forms from '../../components/Forms'
import logo from '../../assets/enricher logo 1.png'
import logo1 from '../../assets/Frame 5.png'

const Signin = () => {
  return (
    <div className='h-screen flex'>

    <div className='w-[60%] border-red-500 border h-[100%] flex flex-col justify-center place-items-center gap-[60px] '>

    <div className='flex justify-between items-center w-[50%]'>
      <div className=''><img src={logo} alt="" /></div>


      <div className='flex-1 flex justify-center'>
        <div className='flex flex-col text-center'>
        <h1 className='font-bold text-[24px]'>Welcome Admin</h1>
        <p className='font-semibold text-[16px] text-customGray'>Sign in to continue</p>
        </div>
      </div>
      
    </div>
    <Forms label="" label2="" Btn="Sign in" goTo="/dashboard"/>

    </div>

    <div className='bg-custompurple flex flex-col justify-center'>
      <h1 className='font-normal text-[40px] text-white px-8'>Enricher.</h1>
    <img src={logo1} alt="" />
    </div>

   

  </div>
  )
}

export default Signin