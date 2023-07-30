"use client";
import { Fragment, useState } from 'react'
import { useRouter } from "next/navigation"
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  ShoppingCartIcon,
  SquaresPlusIcon,
  TruckIcon,
  XMarkIcon,
  TrashIcon,
  UserCircleIcon,
  InformationCircleIcon,
  ShieldCheckIcon,
  XCircleIcon,
  ShoppingBagIcon,
  UserPlusIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { HiShoppingCart, HiUser } from 'react-icons/hi'
import NextLink from 'next/link'
import Link from 'next/link';
import SearchBox from './searchbox';

const profileMenu = [
  { name: 'Profile Setting', description: 'You can update your data', href: '#', icon: UserCircleIcon },
  { name: 'Delivery', description: 'all about delivery fee and delivery policy', href: '#', icon: TruckIcon },
  { name: 'Contact', description: 'Connect with us', href: '#', icon: PhoneIcon },
  { name: 'About', description: 'All about us', href: '#', icon: InformationCircleIcon },
  { name: 'Privacy', description: 'Get a better understanding of your traffic', href: '#', icon: ShieldCheckIcon },
]
const profileMenuFooter = [
  { name: 'Sign in', href: '#', icon: UserCircleIcon },
  { name: 'Sign up', href: '#', icon: UserPlusIcon },
]

const btnCartMenu = [
  { name: 'RS: 500.00', description: 'Ratti Full Cream 400g', href: '#', icon: XCircleIcon },
  { name: 'RS: 800.00', description: 'Ceyloan Coffee 500g', href: '#', icon: XCircleIcon },
]

const btnCartFooter = [
  { name: 'Clear All', href: '#', icon: TrashIcon },
  { name: 'Checkout', href: '#', icon: ShoppingCartIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [showAnotherComponent, setShowAnotherComponent] = useState(false);

  const handleClick = () => {
    setShowAnotherComponent(true);
  };

  const handleBack = () => {
    setShowAnotherComponent(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    router.push('/bite-section/bite');
  };
  return (
    <>

      <header className="bg-white  shadow-sm sticky top-0 bg-opacity-70 backdrop-filter backdrop-blur-lg  " style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8" aria-label="Global" >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 ">
              {/* <span className="sr-only">Your Company</span> */}
              <img className="h-20 w-auto" src="/bimbiya.png" alt="Bimbiya" />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link href="/bite-section/bite">
              <div className=" flex items-center  text-sm font-semibold leading-6 text-gray-900">
                <ShoppingBagIcon onClick={togglePopup} className="w-6 h-6 text-black outline-none mr-2" />Bimbiya Bite
              </div></Link>

            <Link href="/foodcity-section/foodcity" >
              <div className="flex items-center text-sm font-semibold leading-6 text-gray-900">
                <HiShoppingCart className="w-6 h-6 text-black outline-none mr-2" /> Bimbiya Foodcity
              </div>
            </Link>

          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">

            {/* add to cart section */}

            {!showAnotherComponent ? (
              <button onClick={handleClick} style={{ paddingRight: '15px' }}>
                <MagnifyingGlassIcon className="w-6 h-6 text-black outline-none mr-2 transition-colors duration-300 ease-in-out group-hover:text-white-500" ></MagnifyingGlassIcon>
              </button>
            ) : (
              <>
                <SearchBox setShowAnotherComponent={setShowAnotherComponent} ></SearchBox>
              </>

            )}

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none">
                <a className="flex items-center mr-6 outline-none">
                  <HiShoppingCart className="w-6 h-6 text-black outline-none" />
                </a>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute  shadow-xl  -right-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden backdrop-filter backdrop-blur-lg rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-2 max-w-sm ">
                    {btnCartMenu.map((item) => (

                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg text-sm leading-6 hover:bg-gray-5 "
                        style={{ padding: '0.5rem' }}
                      >

                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  outline-none">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 outline-none" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 max-w-sm ">
                    {btnCartFooter.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400 " aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>


            {/* profile menu */}
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none">
                <a className="flex items-center outline-none">
                  <HiUser className="w-6 h-6 text-black outline-none" />
                </a>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -right-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden  backdrop-filter backdrop-blur-lg rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-2 max-w-sm">
                    {profileMenu.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg text-sm leading-6 hover:bg-gray-50"
                        style={{ padding: '0.5rem' }}
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white-100">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 max-w-sm">
                    {profileMenuFooter.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-20 w-auto" src="/bimbiya.png" alt="Bimbiya" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Bimbiya Bite
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Bimbiya Foodcity
                  </a>

                  {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a> */}
                </div>
                <div className="py-6">

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 text-gray-900">
                          <a className="flex items-center">
                            <HiUser className="w-6 h-6 text-gray-500" />
                          </a>
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...profileMenu].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                          <div className="w-300 flex justify-end px-2">
                            <TrashIcon className="w-10 h-10 text-gray-500 py-2 hover:text-red-500 hover:fill-red-500 transition-colors duration-200 ease-in-out cursor-pointer" title="Delete" />
                            <ShoppingCartIcon className="w-10 h-10 text-gray-500 py-2 hover:text-blue-500 hover:fill-blue-500 transition-colors duration-200 ease-in-out cursor-pointer" title="Checkout" />
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 text-gray-900">
                          <a className="flex items-center mr-6">
                            <HiShoppingCart className="w-6 h-6 text-gray-500" />
                          </a>
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...btnCartMenu].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                          <div className="w-300 flex justify-end px-2">
                            <TrashIcon className="w-10 h-10 text-gray-500 py-2 hover:text-red-500 hover:fill-red-500 transition-colors duration-200 ease-in-out cursor-pointer" title="Delete" />
                            <ShoppingCartIcon className="w-10 h-10 text-gray-500 py-2 hover:text-blue-500 hover:fill-blue-500 transition-colors duration-200 ease-in-out cursor-pointer" title="Checkout" />
                          </div>



                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>


    </>
  )
}
