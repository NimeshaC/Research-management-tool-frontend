import React from "react";
import Menu from "../../../components/AdminMenu";
import Bin from "../../../images/bin.png";

function Templates() {
	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu />
				</div>
				<div className='col-span-11 my-auto'>
					<div className='h-full w-full'>
						<div className='mx-auto bg-white w-[70.5rem] drop-shadow-xl rounded-xl mt-0 h-[33rem]'>
							<h2 className='text-xl font-bold ml-5 pt-2 capitalize'>
								Templates
							</h2>
							<div className='mx-auto w-[67rem] h-[20rem] border-2 border-[#E2E8F0] mt-[2rem] rounded-lg'>
								<div className='overflow-auto h-[18rem] mx-8 mt-5'>
									<table className='border-collapse w-full '>
										<thead>
											<tr>
												<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
													template name
												</th>
												<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
													action
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className='capitalize py-2 px-2'>
													IEEE Journal and Conference Template
												</td>
												<td className='py-2 px-2 flex ml-5'>
													<img src={Bin} alt='bin' />
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<button className='capitalize text-lg font-bold px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right mt-4 mr-[1.8rem] text-sm'>
								add new
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Templates;
