import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGitSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const headersocial = () => {
  return (
    <div>
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/syed-faiyaz-hussaini-54840823b" target= "blank"><BsLinkedin/></a>
            <a href="https://faizhussaini.github.io/portfolio/" target= "blank"><FaGitSquare/></a>
            <a href="instagram.com/ifaiz_hussaini" target= "blank"><BsInstagram/></a>
        </div>
    </div>
  )
}

export default headersocial