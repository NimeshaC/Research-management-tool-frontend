import React from "react";
import { Link } from "react-router-dom";
import Members from "../images/users.png";
import AddMember from "../images/user-plus.png";
import Groups from "../images/group-chat.png";
import Doc from "../images/text-document-alt.png";
import report from "../images/clipboard-minus.png";
import upload from "../images/upload.png";
import logout from "../images/logout.png";
import logo from "../images/logo.png";

function AdminMenu() {
	return (
		<div className='flex flex-col items-center w-[114px] bg-white h-screen rounded-tr-xl rounded-br-xl '>
			<div className='my-8 '>
				<img src={logo} alt='logo' />
			</div>
			<div className='w-full h-[244px] mt-16 flex flex-col items-center justify-center'>
				<img
					src={Groups}
					alt='home'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
				<img
					src={AddMember}
					alt='book'
					className='cursor-pointer py-2 hover:bg-white-blue px-[3rem]  mt-2 rounded-tr-xl rounded-br-xl active:bg-white-blue'
				/>

				<img
					src={Members}
					alt='document'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>

				<img
					src={Doc}
					alt='users'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
				<img
					src={report}
					alt='chat'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
				<img
					src={upload}
					alt='chat'
					className='cursor-pointer py-2 px-[3rem] mt-2 rounded-tr-xl rounded-br-xl hover:bg-white-blue active:bg-white-blue'
				/>
			</div>
			<div className='cursor-pointer mt-36'>
				<img src={logout} alt='logout' />
			</div>
		</div>
	);
}

export default AdminMenu;