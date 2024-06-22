import LoginImage from '../../Assets/LoginImage.jpg'
import GoogleColorIcon from '../../Assets/GoogleColorIcon.svg'
import FBcolorIcon2 from '../../Assets/FBcolorIcon2.svg'
import AppleIcon from '../../Assets/AppleIcon.svg'
import { Link } from 'react-router-dom'
const Login = () => {
  const Party_Login = [
    {
      name: "Sign in with Google",
      image: GoogleColorIcon,
    },
    {
      name: "Login with Facebook",
      image: FBcolorIcon2,
    },
    {
      name: "Log in with Apple",
      image: AppleIcon,
    },
  ]
  return (
    <>
      <section className=' pt-[72px] pb-5  bg-[#f7f7f7]'>
        <div className='max-w-screen-xl lg:px-[90px] sm:px-24 px-4 m-auto '>
          <div className='flex flex-wrap justify-between items-center'>
            <div className='sm:w-1/2 w-full'>
              <img className='w-full' src={LoginImage} alt="login" />
            </div>
            <div className='sm:w-[41%] w-full'>
              <div className='login-text'>
                <h1 className='font-bold text-[64px] text-[#CB5846]'>Log In</h1>
                <p className='mt-3 font-normal text-base text-black'>Lorem ipsum dolor sit amet adipiscing elit.</p>
              </div>
              <form className='mt-11' action="">
                <input type="email" placeholder='Email' className='outline-none mb-4 border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' />
                <input type="password" placeholder='Password' className='outline-none mb-4 border bg-[#f7f7f7] border-[#888888] w-full h-11 px-4 py-4 text-sm' />
                <button className='border leading-none border-[#888888] bg-[#E93439] text-[#F7F7F7] w-full h-11  py-4 text-sm text-center'>
                  Login
                </button>
              </form>
              <div className='login-with mt-8 flex gap-4 flex-wrap'>
                {
                  Party_Login.map((link, indx) => (
                    <Link to={"/"} key={indx} className='w-full flex justify-center items-center gap-3 border border-[#888888] h-11 text-sm'>
                      <img className='w-[26px] h-[26px]' src={link.image} alt={link.name}/>
                      <span>{link.name}</span>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Login