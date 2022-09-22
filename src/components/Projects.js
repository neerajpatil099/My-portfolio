import React,{useEffect} from 'react'

export default function Projects(props) {
    props.setProgress(0)
    
  useEffect(() => {
    props.setProgress(100)
 // eslint-disable-next-line
  }, [])
  return (
    <div>
    <div id='nav-item-heading'>Projects</div>
    <p className='text-content'>
    <span className='bullet'>* </span>  calculator<br/>
    <span className='bullet'>* </span>    clone of spotify website <br/>
    <span className='bullet'>* </span>  realtime news app <br/>
    <span className='bullet'>* </span>   clone of myntra website <br/>
    <span className='bullet'>* </span>   clone of Netflix website <br/>

       
    </p>
</div>
  )
}
