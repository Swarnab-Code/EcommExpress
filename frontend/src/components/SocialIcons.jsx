import React from 'react'
import { Link } from 'react-router-dom'
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'

const SocialIcons = () => {
	return (
		<div className='flex gap-6 pr-4'>
			<Link to={''} className='text-[#ff0000] text-2xl hover:-translate-y-1 transition-all duration-500'><RiYoutubeFill /></Link>
			<Link to={''} className='text-[#e1306c] text-2xl hover:translate-y-1 transition-all duration-500'><RiInstagramFill /></Link>
			<Link to={''} className='text-[#1da1f2] text-2xl hover:-translate-y-1 transition-all duration-500'><RiTwitterFill /></Link>
			<Link to={''} className='text-[#0077b5] text-2xl hover:translate-y-1 transition-all duration-500'><RiLinkedinFill /></Link>
			<Link to={''} className='text-[#316ff6] text-2xl hover:-translate-y-1 transition-all duration-500'><RiFacebookFill /></Link>
			<Link to={''} className='text-[#f5f5f5] text-2xl hover:translate-y-1 transition-all duration-500'><RiGithubFill /></Link>
		</div>
	)
}

export default SocialIcons
