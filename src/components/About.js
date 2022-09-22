import React,{useEffect} from 'react'

export default function About(props) {
  props.setProgress(0)
  

  useEffect(() => {
    props.setProgress(100)
 // eslint-disable-next-line
  }, [])
   
  return (
    
    <div>
      <div id='nav-item-heading'> 
        ABOUT
      </div>
      <p className='text-content' >
      <span className='bullet'>#</span>  Energetic and passionate student want to grow and
excel in the field of blockchain and its technology.
 Efficient smart contract building.
Proficient in web designing
 Hands on experience in solidity/Ethereum smart
contract ,javascript connecting our interface to
blockchain using web3.js libraries and following skills
and tools
<br /><br />
<span className='bullet'># </span> Efficient smart contract building. <br /><br />
<span className='bullet'># </span> Proficient in web designing <br /><br />
<span className='bullet'># </span> Hands on experience in solidity/Ethereum smart
contract ,javascript, connecting our interface to
blockchain using web3.js libraries and following skills
and tools mentioned in the skills section
<br />
      </p>
     
    </div>
  )
}
