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
    <ul className='text-content'>
    {/* <span className='bullet'>* </span>  calculator<br/>
    <span className='bullet'>* </span>    clone of spotify website <br/>
    <span className='bullet'>* </span>  realtime news app <br/>
    <span className='bullet'>* </span>   clone of Netflix website <br/> */}
    <a href='https://netflixclone099.netlify.app'  target='blank'>Netflix website clone</a><br/><br/>
    <a href='/'   target='blank'>spotify website clone</a><br/><br/>
    <a href='https://mycalculator099.netlify.app/' target='blank'>simple calculator</a><br/><br/>
    <a href='https://newsawesome.netlify.app/' target='blank'>Realtime News app</a><br/><br/>
    <a href='https://textanalyzer099.netlify.app/' target='blank'>text analyzer</a>    
    </ul>
</div>
  )
}
