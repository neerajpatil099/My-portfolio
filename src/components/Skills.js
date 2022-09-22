import React,{useEffect} from 'react'

export default function Skills(props) {
    props.setProgress(0)
    
  useEffect(() => {
    props.setProgress(100)
 // eslint-disable-next-line
  }, [])
  return (
    <div>
        <div id='nav-item-heading'>skills</div>
        <div className='skills-section'>
        <p className='text-content section-1'>
        <span className='bullet'>* </span> HTML <br />
        <span className='bullet'>* </span> css <br />
        <span className='bullet'>* </span> javascript <br />
        <span className='bullet'>* </span> reactjs <br />
        <span className='bullet'>* </span> solidity <br />
        <span className='bullet'>* </span> boostrap <br />
        </p>
        <p className='text-content section-2'>
        <span className='bullet'>* </span> Tailwind <br />
        <span className='bullet'>* </span> blockchain <br />
        <span className='bullet'>* </span> Web3.js <br />
        <span className='bullet'>* </span> Truffle <br />
        <span className='bullet'>* </span> Metamask <br />
        <span className='bullet'>* </span> Ganache <br />
        </p>
        </div>
    </div>
  )
}
