import React from 'react'
import MotionWrap from '../../wrapper/MotionWrap'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './Header.scss'
function Header() {
      return (
            <div className='app__header app__flex'>

                  <div className='app__header-info'>
                        <motion.div
                              whileInView={{ opacity: [0, 1] }}
                              transition={{ duration: 0.5 }}
                              className='app__header-info1'>

                              <img src={images.info1} alt="headlogo" />
                        </motion.div>

                        <motion.div
                              whileInView={{ opacity: [0, 1] }}
                              transition={{ duration: 0.5 }}
                              className='app__header-info2' style={{ marginTop: '12px' }}>

                              <img src={images.info2} alt="headlogo" />
                        </motion.div>

                  </div>

                  <div className='app__header-main'>
                        <motion.div
                              whileInView={{ opacity: [0, 1] }}
                              transition={{ duration: 0.5 }}
                              className='app__header-img'>

                              <img src={images.headl} alt="headlogo" />
                        </motion.div>

                  </div>
            </div>
      )
}

export default MotionWrap(Header, 'home')