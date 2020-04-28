import { useState, useRef, useEffect } from 'react';
import Router from 'next/router';
import { IconNotification, IconUser } from './Icons';

const Navbar = () => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(
    false
  );
  const ref = useRef<any>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (event && event.target) {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        setShowUserDropdown(false);
        setShowNotificationDropdown(false);
      }
    }
  };

  const handleLinkClick = (link: string) => {
    Router.push(link);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <>
      <nav className='bg-primary'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='hidden md:block'>
                <div className='flex items-baseline'>
                  <a
                    href='#'
                    className='px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-dark focus:outline-none focus:text-white focus:bg-dark'
                    onClick={() => handleLinkClick('/user/dashboard')}
                  >
                    Dashboard
                  </a>
                  <a
                    href='#'
                    className='ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-dark focus:outline-none focus:text-white focus:bg-dark'
                  >
                    Team
                  </a>
                  <a
                    href='#'
                    className='ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-dark focus:outline-none focus:text-white focus:bg-dark'
                  >
                    Projects
                  </a>
                  <a
                    href='#'
                    className='ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-dark focus:outline-none focus:text-white focus:bg-dark'
                  >
                    Calendar
                  </a>
                  <a
                    href='#'
                    className='ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-dark focus:outline-none focus:text-white focus:bg-dark'
                  >
                    Reports
                  </a>
                </div>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='ml-4 flex items-center md:ml-6' ref={ref}>
                <div className='ml-3 relative'>
                  <div>
                    <button
                      className='p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-dark'
                      aria-label='Notifications'
                      onClick={() => {
                        setShowNotificationDropdown(!showNotificationDropdown);
                        setShowUserDropdown(false);
                      }}
                    >
                      <IconNotification className='text-white' />
                    </button>
                  </div>
                  <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg'>
                    {showNotificationDropdown === true ? (
                      <div
                        className='py-1 rounded-md bg-white shadow-xs z-50'
                        role='menu'
                        aria-orientation='vertical'
                        aria-labelledby='user-menu'
                      >
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          role='menuitem'
                        >
                          Some notification title
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className='ml-3 relative'>
                  <div>
                    <button
                      className='p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-dark'
                      id='user-menu'
                      aria-label='User menu'
                      aria-haspopup='true'
                      onClick={() => {
                        setShowUserDropdown(!showUserDropdown);
                        setShowNotificationDropdown(false);
                      }}
                    >
                      <IconUser className='text-white' />
                    </button>
                  </div>
                  <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50'>
                    {showUserDropdown === true ? (
                      <div
                        className='py-1 rounded-md bg-white shadow-xs'
                        role='menu'
                        aria-orientation='vertical'
                        aria-labelledby='user-menu'
                      >
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          role='menuitem'
                          onClick={() => handleLinkClick('/user/profile')}
                        >
                          Your Profile
                        </a>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          role='menuitem'
                        >
                          Settings
                        </a>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          role='menuitem'
                        >
                          Sign out
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark focus:outline-none focus:bg-dark focus:text-white'>
                <svg
                  className='block h-6 w-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                <svg
                  className='hidden h-6 w-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className='hidden md:hidden'>
          <div className='px-2 pt-2 pb-3 sm:px-3'>
            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-dark'
              onClick={() => handleLinkClick('/user/dashboard')}
            >
              Dashboard
            </a>
            <a
              href='#'
              className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-dark focus:outline-none focus:text-white focus:bg-dark'
            >
              Team
            </a>
            <a
              href='#'
              className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-dark focus:outline-none focus:text-white focus:bg-dark'
            >
              Projects
            </a>
            <a
              href='#'
              className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-dark focus:outline-none focus:text-white focus:bg-dark'
            >
              Calendar
            </a>
            <a
              href='#'
              className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-dark focus:outline-none focus:text-white focus:bg-dark'
            >
              Reports
            </a>
          </div>
          <div className='pt-4 pb-3 border-t border-gray-700'>
            <div className='flex items-center px-5'>
              <div className='flex-shrink-0'>
                <img
                  className='h-10 w-10 rounded-full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
              </div>
              <div className='ml-3'>
                <div className='text-base font-medium leading-none text-white'>
                  Tom Cook
                </div>
                <div className='mt-1 text-sm font-medium leading-none text-gray-400'>
                  tom@example.com
                </div>
              </div>
            </div>
            {/* <div className='mt-3 px-2'>
              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-dark focus:outline-none focus:text-white focus:bg-dark'
              >
                Your Profile
              </a>
              <a
                href='#'
                className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-dark focus:outline-none focus:text-white focus:bg-dark'
              >
                Settings
              </a>
              <a
                href='#'
                className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-dark focus:outline-none focus:text-white focus:bg-dark'
              >
                Sign out
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
