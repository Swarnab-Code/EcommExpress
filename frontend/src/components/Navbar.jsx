import React, { useState } from 'react'
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md'

const Navbar = ({ containerStyles }) => {
	const [isActive, setisActive] = useState("home")
	return (
		<nav className={`${containerStyles}`}>
			<a href={'#home'} onClick={() => setisActive("home")} className={isActive === "home" ? "active-link" : ""}><div className='flexCenter gap-x-1'><MdHomeFilled />Home</div></a>
			<a href={'#shop'} onClick={() => setisActive("shop")} className={isActive === "shop" ? "active-link" : ""}><div className='flexCenter gap-x-1'><MdCategory />Shop</div></a>
			<a href={'#app'} onClick={() => setisActive("app")} className={isActive === "app" ? "active-link" : ""}><div className='flexCenter gap-x-1'><MdShop2 />Get App</div></a>
			<a href={'#contact'} onClick={() => setisActive("contact")} className={isActive === "contact" ? "active-link" : ""}><div className='flexCenter gap-x-1'><MdContacts />Contact</div></a>
		</nav>
	)
}

export default Navbar
