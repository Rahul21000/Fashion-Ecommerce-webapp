import { Link} from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  } from '@headlessui/react'

import { Popover,PopoverGroup, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon,MagnifyingGlassIcon,ShoppingCartIcon,ShoppingBagIcon,UserCircleIcon, } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import {Navigation} from "../api/NavData"
import { useDispatch } from 'react-redux'
import {signoutRequest} from "../feature/AuthSlice"         
import { useSelector } from "react-redux";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')

}

export default function Navbar() {
  const dispatch=useDispatch();
  const [current,setCurrent]=useState();
  const[category,setCategory]=useState();
  const [suggetionRendor,setSuggetionRendor]=useState("");
  const [openSetting,setOpenSetting]=useState(false);
  useEffect(()=>{
    const subcatItems=current&&Navigation.filter(item=>item.id===current)[0].submenu;
     setCategory(subcatItems)
  },[current])
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
  return (
    <Disclosure as="nav" className=" relative bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? ( 
                   <XMarkIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                  ) : (
                   
                    <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex items-center text-white ">
                 FashionHub
                </div>
              <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <PopoverGroup>
                  <Popover className=" flex justify-center  gap-x-4 items-center relative">
                    {Navigation.map((item) => (
                    
                      <PopoverButton key={item.id} className="flex  justify-evenly items-center text-sm leading-6 text-white">
                      <span onClick={()=>setCurrent(item.id)}> {item.menu}</span>
                        {/* <ChevronDownIcon className="h-5 w-5" aria-hidden="true" /> */}
                      </PopoverButton>
                     
                     ))}
    <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute left-1/2 z-10 top-12 w-screen max-w-max -translate-x-1/2 px-2">
          <div className="w-screen max-w-md  overflow-hidden rounded-md bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-1 flex flex-wrap">
              {category&&category.map(item=>(
            
              <div  className=" group relative  rounded-lg p-1 hover:bg-gray-50">
              <div>
                <a href={item.href} className="font-semibold text-gray-900">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
              </div>
            </div>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Transition>
                     
                    </Popover>
                    </PopoverGroup>
                  </div>
                </div>
            </div>
             
       <div className=" relative flex mt-1 rounded-md shadow-sm sm:block">
         <div className=" pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
          <span className="text-gray-500 sm:text-sm"><MagnifyingGlassIcon className="h-5 w-5 text-gray-500" /></span>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e)=>setSuggetionRendor(e.target.value)}
          className="block w-full rounded-lg border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
        <div className='absolute t-20 w-36 rounded-md bg-white z-10'>{suggetionRendor!==null&&suggetionRendor}</div>
        </div>
              <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="whislist"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 ">
                  <ShoppingBagIcon className="h-6 w-6 text-white" />
                </Link>
                <Link to="cart"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 ">
                  <ShoppingCartIcon className="h-6 w-6 text-white" />
                </Link>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <UserCircleIcon className="h-6 w-6 text-white" />
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 top-8 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem key={1}>
                        {({ focus }) => (
                        
                          <Link to="me"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-1 text-sm text-gray-700')}
                          >
                           Profile
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem key={2}>
                        {({ focus }) => (
                        
                          <Link to="your_order"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-1 text-sm text-gray-700')}
                          >
                           Your order
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem key={3}>
                        {({ focus }) => (
                        
                          <Link to="payment"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-1 text-sm text-gray-700')}
                          >
                           Payment Option
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem key={4}>
                        {({ focus }) => (
                        
                          <Link to="address"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-1 text-sm text-gray-700')}
                          >
                           Address
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem key={5}>
                        {({ focus }) => (
                           <p onClick={()=>setOpenSetting(!openSetting)}
                           className={classNames(focus ? 'bg-gray-100 relative hover:curser' : '', 'block px-4 py-1 text-sm text-gray-700')}
                         >
                          Settings
                          {openSetting&&
                          <div className="w-28 absolute right-36 top-0 origin-top-right bg-white shadow-md rounded-md px-2 py-2 z-10 sm:text-sm">
                          <button type="button" className="text-red-400 font-semi-bold ">Delete account</button>
                          <button type="button" className="">Policy privacy</button>
                          
                        </div>}
                         </p>
                        )}
                      </MenuItem>
                     {isLoggedIn?
                     <MenuItem key={6}>
                     {({ focus }) => (
                       <p onClick={()=>dispatch(signoutRequest())}
                         className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-1 text-sm text-gray-700')}
                       >
                         Sign out
                       </p>
                     )}
                   </MenuItem>
                   :
                   <MenuItem key={6}>
                     {({ focus }) => (
                     
                       <Link to="signin"
                         className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-1 text-sm text-gray-700')}
                       >
                        Sign In
                       </Link>
                     )}
                   </MenuItem> 
                    }
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className=" space-y-1 px-2 pb-3 pt-2">
              {Navigation.map((item) => (
                <p  onClick={()=>setCurrent(item.id)} className="text-base text-white font-medium my-2 p-1 hover:text-gray-200 hover:curser">{item.menu}</p>
              ))}
              {category&&category.map((item) => (
               <DisclosureButton
               key={item.id}
               as="a"
               className={classNames(
                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-100 hover:text-black',
                 'block rounded-md px-1 py-1 text-base font-medium'
               )}
               aria-current={item.current ? 'page' : undefined}
             >
               {item.name}
             </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}



