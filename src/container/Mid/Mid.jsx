import React from 'react'
import MotionWrap from '../../wrapper/MotionWrap'
import './Mid.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'

const abouts =[
   { title:'web Developement',imgUrl:images.cart1},
    {title:'web UI/UX',imgUrl:images.cart2},
    {title:'web UI/UX',imgUrl:images.cart2},{title:'web UI/UX',imgUrl:images.cart2}
]

function Mid() {
   
  return (
    <div className='app__mid '>
        <motion.div
        whileInView = {{opacity:[0,1]}}
        transition={{duration:0.5}}
        >
        <div className="app__mid-tag">
            <img src = {images.midtag} alt = "tag"/>
        </div>

        </motion.div>
        <motion.div
        whileInView = {{opacity:[0,1]}}
        transition={{duration:0.5}}>
        
        <div className="app__profiles">
        {abouts.map((about,index)=>(
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5,type:'tween'}}
          className='app__profile-item'
           key={about.title+index}>
            <div className='app__mid-img'>
            <img src={about.imgUrl} alt ={about.title}/>
            </div>
            <h2 className='bold-text' style={{margin:20}}>{about.title}</h2>
          {/* <p className='p-text' style={{marginTop:5}}>{about.description}</p>
           */}<button >Learn</button>
          </motion.div>
        ))}
      </div>
        </motion.div>

       
    </div>
  )
}

export default MotionWrap(Mid,'mid')