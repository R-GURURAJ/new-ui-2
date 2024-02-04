import React from 'react'

function Groups() {
    return (
        <div>

            {/* <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
              <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                  <div class="relative flex items-center space-x-4">
                      <div class="relative">
                          <span class="absolute text-green-500 right-0 bottom-0">
                              <svg width="20" height="20">
                                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                              </svg>
                          </span>
                          <img src="https:images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"/>
                      </div>
                      <div class="flex flex-col leading-tight">
                          <div class="text-2xl mt-1 flex items-center">
                              <span class="text-gray-700 mr-3">Anderson Vanhron</span>
                          </div>
                          <span class="text-lg text-gray-600">Junior Developer</span>
                      </div>
                  </div>
                  <div class="flex items-center space-x-2">
                      <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                          <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                          </svg>
                      </button>
                      <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                          <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                          </svg>
                      </button>
                      <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                          <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                          </svg>
                      </button>
                  </div>
              </div>
              <div id="messages" class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                  <div class="chat-message">
                      <div class="flex items-end">
                          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                              <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Can be verified on any platform using docker</span></div>
                          </div>
                          <img src="https:images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1"/>
                      </div>
                  </div>
                  <div class="chat-message">
                      <div class="flex items-end justify-end">
                          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                              <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span></div>
                          </div>
                          <img src="https:images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2"/>
                      </div>
                  </div>
                  <div class="chat-message">
                      <div class="flex items-end">
                          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                              <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Command was run with root privileges. I'm sure about that.</span></div>
                              <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I've update the description so it's more obviously now</span></div>
                              <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">FYI https:askubuntu.com/a/700266/510172</span></div>
                              <div>
                                  <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                      Check the line above (it ends with a # so, I'm running it as root )
                                      <pre># npm install -g @vue/devtools</pre>
                                  </span>
                              </div>
                          </div>
                          <img src="https:images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1"/>
                      </div>
                  </div>
                  <div class="chat-message">
                      <div class="flex items-end justify-end">
                          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                              <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks</span></div>
                          </div>
                          <img src="https:images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2"/>
                      </div>
                  </div>
                  <div class="chat-message">
                      <div class="flex items-end">
                          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                              <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Thanks for your message David. I thought I'm alone with this issue. Please, ? the issue to support it :</span></div>
                          </div>
                          <img src="https:images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1"/>
                      </div>
                  </div>
                  <div class="chat-message">
                      <div class="flex items-end justify-end">
                          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                              <div><span class="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">Are you using sudo?</span></div>
                              <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Run this command sudo chown -R `whoami` /Users.npm-global/ then install the package globally without using sudo</span></div>
                          </div>
                          <img src="https:images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2"/>
                      </div>
                  </div>
                  <div class="chat-message">
                      <div class="flex items-end">
                          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                              <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">It seems like you are from Mac OS world. There is no /Users/ folder on linux ?</span></div>
                              <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">I have no issue with any other packages installed with root permission globally.</span></div>
                          </div>
                          <img src="https:images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1"/>
                      </div>
                  </div>
                  <div class="chat-message">
                      <div class="flex items-end justify-end">
                          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                              <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem</span></div>
                          </div>
                          <img src="https:images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2"/>
                      </div>
                  </div>
                  <div class="chat-message">
                      <div class="flex items-end">
                          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                              <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I get the same error on Arch Linux (also with sudo)</span></div>
                              <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I also have this issue, Here is what I was doing until now: #1076</span></div>
                              <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">even i am facing</span></div>
                          </div>
                          <img src="https:images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1"/>
                      </div>
                  </div>
              </div>
              <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                  <div class="relative flex">
                      <span class="absolute inset-y-0 flex items-center">
                          <button type="button" class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                              <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                              </svg>
                          </button>
                      </span>
                      <input type="text" placeholder="Write your message!" class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"/>
                          <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
                              <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                  <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                                  </svg>
                              </button>
                              <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                  <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  </svg>
                              </button>
                              <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                  <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                  </svg>
                              </button>
                              <button type="button" class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                                  <span class="font-bold">Send</span>
                                  <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ml-2 transform rotate-90">
                                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                  </svg>
                              </button>
                          </div>
                  </div>
              </div>
          </div> */}
            {/* <div class="py-10 h-screen bg-gray-300 px-2">
              <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
                  <div class="md:flex">
                      <div class="w-full p-4">
                          <div class="relative"> <input type="text" class="w-full h-12 rounded focus:outline-none px-3 focus:shadow-md" placeholder="Search..."/> <i class="fa fa-search absolute right-3 top-4 text-gray-300"></i> </div>
                          <ul>
                              <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                                  <div class="flex ml-2"> <img src="https:i.imgur.com/aq39RMA.jpg" width="40" height="40" class="rounded-full"/>
                                      <div class="flex flex-col ml-2"> <span class="font-medium text-black">Jessica Koel</span> <span class="text-sm text-gray-400 truncate w-32">Hey, Joel, I here to help you out please tell me</span> </div>
                                  </div>
                                  <div class="flex flex-col items-center"> <span class="text-gray-300">11:26</span> <i class="fa fa-star text-green-400"></i> </div>
                              </li>
                              <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                                  <div class="flex ml-2"> <img src="https:i.imgur.com/aq39RMA.jpg" width="40" height="40" class="rounded-full"/>
                                      <div class="flex flex-col ml-2"> <span class="font-medium text-black">Jessica Koel</span> <span class="text-sm text-gray-400 truncate w-32">Hey, Joel, I here to help you out please tell me</span> </div>
                                  </div>
                                  <div class="flex flex-col items-center"> <span class="text-gray-300">11:26</span> <i class="fa fa-star text-green-400"></i> </div>
                              </li>
                              <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                                  <div class="flex ml-2"> <img src="https:i.imgur.com/aq39RMA.jpg" width="40" height="40" class="rounded-full"/>
                                      <div class="flex flex-col ml-2"> <span class="font-medium text-black">Jessica Koel</span> <span class="text-sm text-gray-400 truncate w-32">Hey, Joel, I here to help you out please tell me</span> </div>
                                  </div>
                                  <div class="flex flex-col items-center"> <span class="text-gray-300">11:26</span> <i class="fa fa-star text-green-400"></i> </div>
                              </li>
                              <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                                  <div class="flex ml-2"> <img src="https:i.imgur.com/aq39RMA.jpg" width="40" height="40" class="rounded-full"/>
                                      <div class="flex flex-col ml-2"> <span class="font-medium text-black">Jessica Koel</span> <span class="text-sm text-gray-400 truncate w-32">Hey, Joel, I here to help you out please tell me</span> </div>
                                  </div>
                                  <div class="flex flex-col items-center"> <span class="text-gray-300">11:26</span> <i class="fa fa-star text-green-400"></i> </div>
                              </li>
                              <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                                  <div class="flex ml-2"> <img src="https:i.imgur.com/aq39RMA.jpg" width="40" height="40" class="rounded-full"/>
                                      <div class="flex flex-col ml-2"> <span class="font-medium text-black">Jessica Koel</span> <span class="text-sm text-gray-400 truncate w-32">Hey, Joel, I here to help you out please tell me</span> </div>
                                  </div>
                                  <div class="flex flex-col items-center"> <span class="text-gray-300">11:26</span> <i class="fa fa-star text-green-400"></i> </div>
                              </li>
                          
                          </ul>
                      </div>
                  </div>
              </div>
          </div> */}
            <body data-mode="dark">

                <div class="lg:flex">
                    <div class="sidebar-menu w-full lg:w-[75px] shadow lg:flex lg:flex-col flex flex-row justify-between items-center fixed lg:relative z-40 bottom-0 bg-white dark:bg-zinc-600 ">
                        <div class="hidden lg:my-5 lg:block">
                            <a href="index.html" class="block dark:hidden">
                                <span>
                                    <img src="./assets/images/logo.svg" alt="" class="h-[30px]" />
                                </span>
                            </a>

                            <a href="index.html" class="hidden dark:block">
                                <span>
                                    <img src="./assets/images/logo.svg" alt="" class="h-[30px]" />
                                </span>
                            </a>
                        </div>

                        <div class="w-full mx-auto lg:my-auto">
                            <ul id="tabs" class="flex flex-row justify-center w-full lg:flex-col lg:flex nav-tabs">
                                <li class="flex-grow lg:flex-grow-0">
                                    <a id="default-tab" href="#first" class="tab-button flex relative items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg">
                                        <div class="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                                            <div class="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                                            <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Profile</span>
                                        </div>
                                        <i class="text-2xl ri-user-2-line"></i>
                                    </a>
                                </li>
                                <li class="flex-grow lg:flex-grow-0">
                                    <a href="#second" class="tab-button active relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg">
                                        <div class="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                                            <div class="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                                            <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Chats</span>
                                        </div>
                                        <i class="text-2xl ri-message-3-line"></i>
                                    </a>
                                </li>
                                <li class="flex-grow lg:flex-grow-0">
                                    <a href="#third" class="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg">
                                        <div class="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                                            <div class="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                                            <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Groups</span>
                                        </div>
                                        <i class="text-2xl ri-group-line"></i>
                                    </a>
                                </li>
                                <li class="flex-grow lg:flex-grow-0">
                                    <a href="#fourth" class="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg">
                                        <div class="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                                            <div class="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                                            <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Contacts</span>
                                        </div>
                                        <i class="text-2xl ri-contacts-line"></i>
                                    </a>
                                </li>
                                <li class="flex-grow lg:flex-grow-0">
                                    <a href="#fifth" class="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg">
                                        <div class="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                                            <div class="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                                            <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Settings</span>
                                        </div>
                                        <i class="text-2xl ri-settings-2-line"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="w-20 my-5 lg:w-auto">
                            <ul class="lg:block">
                                <li class="hidden text-center light-dark-mode nav-item lg:block">
                                    <a href="/" class="hidden dark:block dark:text-violet-100/80">
                                        <i class="text-2xl ri-sun-line "></i>
                                    </a>
                                    <a href="/" class="block text-gray-500 dark:hidden">
                                        <i class="text-2xl ri-moon-clear-line"></i>
                                    </a>
                                </li>

                                <li class="relative lg:mt-4 dropdown lg:dropup">
                                    <a href="/" class="dropdown-toggle" id="dropdownButton2" data-bs-toggle="dropdown">
                                        <img src="./assets/images/avatar-1.jpg" alt="" class="w-10 h-10 p-1 mx-auto rounded-full bg-gray-50 dark:bg-zinc-700" />
                                    </a>

                                    <ul class="absolute z-40 hidden float-left w-40 py-2 mx-4 mb-12 text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu bg-clip-padding dark:bg-zinc-700" aria-labelledby="dropdownButton2">
                                        <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-600/50 ltr:text-left rtl:text-right" href="/">Profile <i class="text-gray-500 rtl:float-left ltr:float-right ri-profile-line text-16"></i></a>
                                        </li>
                                        <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-600/50 ltr:text-left rtl:text-right" href="/">Setting <i class="text-gray-500 rtl:float-left ltr:float-right ri-settings-3-line text-16"></i></a>
                                        </li>
                                        <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-600/50 ltr:text-left rtl:text-right" href="auth-lock-screen.html">Lock Screen <i class="text-gray-500 rtl:float-left ltr:float-right ri-git-repository-private-line text-16"></i></a>
                                        </li>
                                        <li class="my-2 border-b border-gray-100/20"></li>
                                        <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-600/50 ltr:text-left rtl:text-right" href="auth-login.html">Log out <i class="text-gray-500 rtl:float-left ltr:float-right ri-logout-circle-r-line text-16"></i></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div class="fixed transition-all duration-300 ease-linear top-[50%] switcher z-50" id="style-switcher">
                        <div class="w-48 p-4 bg-white shadow-md dark:bg-zinc-700">
                            <div>
                                <h3 class="mb-2 font-medium text-gray-900 text-14 dark:text-gray-100">Select your color</h3>
                                <ul class="flex gap-3 ">
                                    <li>
                                        <a class="h-10 w-10 bg-[#815DF2] block rounded-full active" data-color="violet" href="/">k</a>
                                    </li>
                                    <li>
                                        <a class="h-10 w-10 bg-[#38c284] block rounded-full" data-color="green" href="/">k</a>
                                    </li>
                                    <li>
                                        <a class="h-10 w-10 bg-[#dd4948] block rounded-full" data-color="red" href="/">k</a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                    <a href="/" onclick="toggleSwitcher()" class="fixed z-50 flex-col gap-3 px-4 py-3 ltr:right-0 rtl:left-0 font-normal text-white group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 top-[44%] text-14 ltr:rounded-l rtl:rounded-r hidden lg:block">
                        <i class="text-xl mdi mdi-cog mdi-spin"></i>
                    </a>
                    <div class="chat-leftsidebar lg:w-[380px] group-data-[theme-color=violet]:bg-slate-50 group-data-[theme-color=green]:bg-green-50/20 group-data-[theme-color=red]:bg-red-50/20 shadow overflow-y-hidden mb-[80px] lg:mb-0 group-data-[theme-color=violet]:dark:bg-zinc-700 group-data-[theme-color=green]:dark:bg-zinc-700 group-data-[theme-color=red]:dark:bg-zinc-700">
                        <div>
                            <div class="tab-content">
                                <div>
                                    <div class="px-6 pt-6">
                                        <div class="ltr:float-right rtl:float-left">
                                            <div class="relative flex-shrink-0 dropdown">
                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButtonA">
                                                    <i class="text-lg ri-more-2-fill"></i>
                                                </button>
                                                <ul class="absolute z-50 w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:right-auto rtl:left-0 ltr:left-auto ltr:right-0 my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600 hidden" aria-labelledby="dropdownMenuButtonA">
                                                    <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Action</a>
                                                    </li>
                                                    <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Another action</a>
                                                    </li>
                                                    <li class="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                                    <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4 class="mb-0 text-gray-700 dark:text-gray-50">My Profile</h4>
                                    </div>

                                    <div class="p-6 text-center border-b border-gray-100 dark:border-zinc-600">
                                        <div class="mb-4">
                                            <img src="./assets/images/avatar-1.jpg" class="w-24 h-24 p-1 mx-auto border border-gray-100 rounded-full dark:border-zinc-800" alt="" />
                                        </div>

                                        <h5 class="mb-1 text-16 dark:text-gray-50">Patricia Smith</h5>

                                        <h5 class="mb-0 truncate text-14 ltr:block rtl:hidden"><a href="/" class="text-gray-500 dark:text-gray-50"><i class="text-green-500 ltr:ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i> Active</a></h5>
                                        <h5 class="mb-0 truncate text-14 ltr:hidden rtl:block"><a href="/" class="text-gray-500 dark:text-gray-50">Active <i class="text-green-500 ltr:ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i></a></h5>
                                    </div>

                                    <div class="p-6 h-[550px]" data-simplebar="init"><div class="simplebar-wrapper"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style={{ right: '0px', bottom: '0px' }}><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: 'auto', overflow: 'hidden' }}><div class="simplebar-content" style={{ padding: '24px' }}>
                                        <div>
                                            <p class="mb-6 text-gray-500 dark:text-gray-300">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                                        </div>

                                        <div data-tw-accordion="collapse">
                                            <div class="text-gray-700 accordion-item">
                                                <h2>
                                                    <button type="button" class="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded-t accordion-header group active dark:border-b-zinc-600 dark:bg-zinc-600 dark:border-zinc-600">
                                                        <span class="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:block rtl:hidden">
                                                            <i class="mr-2 align-middle ri-user-2-line d-inline-block"></i> About
                                                        </span>
                                                        <span class="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:hidden rtl:block">
                                                            About <i class="ml-2 align-middle ri-user-2-line d-inline-block"></i>
                                                        </span>
                                                        <i class="mdi mdi-chevron-down text-lg group-[.active]:rotate-180 dark:text-gray-50"></i>
                                                    </button>
                                                </h2>

                                                <div class="block bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                                                    <div class="p-5">
                                                        <div>
                                                            <p class="mb-1 text-gray-500 dark:text-gray-300">Name</p>
                                                            <h5 class="text-sm dark:text-gray-50">Patricia Smith</h5>
                                                        </div>
                                                        <div class="mt-5">
                                                            <p class="mb-1 text-gray-500 dark:text-gray-300">Email</p>
                                                            <h5 class="text-sm dark:text-gray-50">adc@123.com</h5>
                                                        </div>
                                                        <div class="mt-5">
                                                            <p class="mb-1 text-gray-500 dark:text-gray-300">Time</p>
                                                            <h5 class="text-sm dark:text-gray-50">11:40 AM</h5>
                                                        </div>
                                                        <div class="mt-5">
                                                            <p class="mb-1 text-gray-500 dark:text-gray-300">Location</p>
                                                            <h5 class="text-sm dark:text-gray-50">California, USA</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mt-2 text-gray-700 accordion-item">
                                                <h2>
                                                    <button type="button" class="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded accordion-header group dark:border-b-zinc-600 dark:bg-zinc-600 dark:border-zinc-600">
                                                        <span class="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:block rtl:hidden">
                                                            <i class="mr-2 align-middle ri-attachment-line d-inline-block"></i> Attached Files
                                                        </span>
                                                        <span class="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:hidden rtl:block">
                                                            Attached Files <i class="ml-2 align-middle ri-attachment-line d-inline-block"></i>
                                                        </span>
                                                        <i class="mdi mdi-chevron-down text-lg group-[.active]:rotate-180 dark:text-gray-50"></i>
                                                    </button>
                                                </h2>
                                                <div class="hidden bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                                                    <div class="p-5">
                                                        <div class="p-2 mb-2 border rounded border-gray-100/80 dark:bg-zinc-800 dark:border-transparent">
                                                            <div class="flex items-center">
                                                                <div class="flex items-center justify-center w-10 h-10 rounded ltr:mr-3 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20 rtl:ml-3">
                                                                    <div class="text-xl rounded-lg group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 avatar-title ">
                                                                        <i class="ri-file-text-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div class="flex-grow">
                                                                    <div class="text-start">
                                                                        <h5 class="mb-1 text-sm dark:text-gray-50">Admin-A.zip</h5>
                                                                        <p class="mb-0 text-gray-500 text-13 dark:text-gray-300">12.5 MB</p>
                                                                    </div>
                                                                </div>

                                                                <div class="ltr:ml-4 rtl:mr-4">
                                                                    <ul class="flex items-center gap-3 mb-0 text-lg">
                                                                        <li>
                                                                            <a href="/" class="px-1 text-gray-500 dark:text-gray-300">
                                                                                <i class="ri-download-2-line"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li class="relative flex-shrink-0 dropstart">
                                                                            <a href="#!" class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButton23">
                                                                                <i class="text-lg ri-more-fill"></i>
                                                                            </a>
                                                                            <ul class="absolute z-50 w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600 hidden" aria-labelledby="dropdownMenuButton23">
                                                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Action</a>
                                                                                </li>
                                                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Another action</a>
                                                                                </li>
                                                                                <li class="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete</a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="p-2 mb-2 border rounded border-gray-100/80 dark:bg-zinc-800 dark:border-transparent">
                                                            <div class="flex items-center">
                                                                <div class="flex items-center justify-center w-10 h-10 rounded ltr:mr-3 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20 rtl:ml-3">
                                                                    <div class="text-xl rounded-lg group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 avatar-title ">
                                                                        <i class="ri-file-text-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div class="flex-grow">
                                                                    <div class="text-start">
                                                                        <h5 class="mb-1 text-sm dark:text-gray-50">Image-1.jpg</h5>
                                                                        <p class="mb-0 text-gray-500 text-13 dark:text-gray-300">4.2 MB</p>
                                                                    </div>
                                                                </div>

                                                                <div class="ltr:ml-4 rtl:mr-4">
                                                                    <ul class="flex items-center gap-3 mb-0 text-lg">
                                                                        <li>
                                                                            <a href="/" class="px-1 text-gray-500 dark:text-gray-300">
                                                                                <i class="ri-download-2-line"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li class="relative flex-shrink-0 dropstart">
                                                                            <a href="#!" class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButton2">
                                                                                <i class="text-lg ri-more-fill"></i>
                                                                            </a>
                                                                            <ul class="absolute z-50 w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600 hidden" aria-labelledby="dropdownMenuButton2">
                                                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Action</a>
                                                                                </li>
                                                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Another action</a>
                                                                                </li>
                                                                                <li class="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete</a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="p-2 mb-2 border rounded border-gray-100/80 dark:bg-zinc-800 dark:border-transparent">
                                                            <div class="flex items-center">
                                                                <div class="flex items-center justify-center w-10 h-10 rounded ltr:mr-3 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20 rtl:ml-3">
                                                                    <div class="text-xl rounded-lg group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 avatar-title ">
                                                                        <i class="ri-file-text-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div class="flex-grow">
                                                                    <div class="text-start">
                                                                        <h5 class="mb-1 text-sm dark:text-gray-50">Image-2.jpg</h5>
                                                                        <p class="mb-0 text-gray-500 text-13 dark:text-gray-300">3.1 MB</p>
                                                                    </div>
                                                                </div>

                                                                <div class="ltr:ml-4 rtl:mr-4">
                                                                    <ul class="flex items-center gap-3 mb-0 text-lg">
                                                                        <li>
                                                                            <a href="/" class="px-1 text-gray-500 dark:text-gray-300">
                                                                                <i class="ri-download-2-line"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li class="relative flex-shrink-0 dropstart">
                                                                            <a href="#!" class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButton3">
                                                                                <i class="text-lg ri-more-fill"></i>
                                                                            </a>
                                                                            <ul class="absolute z-50 w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600 hidden" aria-labelledby="dropdownMenuButton3">
                                                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Action</a>
                                                                                </li>
                                                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Another action</a>
                                                                                </li>
                                                                                <li class="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete</a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="p-2 mb-2 border rounded border-gray-100/80 dark:bg-zinc-800 dark:border-transparent">
                                                            <div class="flex items-center">
                                                                <div class="flex items-center justify-center w-10 h-10 rounded ltr:mr-3 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20 rtl:ml-3">
                                                                    <div class="text-xl rounded-lg group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 avatar-title ">
                                                                        <i class="ri-file-text-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div class="flex-grow">
                                                                    <div class="text-start">
                                                                        <h5 class="mb-1 text-sm dark:text-gray-50">Landing-A.zip</h5>
                                                                        <p class="mb-0 text-gray-500 text-13 dark:text-gray-300">6.7 MB</p>
                                                                    </div>
                                                                </div>

                                                                <div class="ltr:ml-4 rtl:mr-4">
                                                                    <ul class="flex items-center gap-3 mb-0 text-lg">
                                                                        <li>
                                                                            <a href="/" class="px-1 text-gray-500 dark:text-gray-300">
                                                                                <i class="ri-download-2-line"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li class="relative flex-shrink-0 dropstart">
                                                                            <a href="#!" class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButton4">
                                                                                <i class="text-lg ri-more-fill"></i>
                                                                            </a>
                                                                            <ul class="absolute z-50 w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600 hidden" aria-labelledby="dropdownMenuButton4">
                                                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Action</a>
                                                                                </li>
                                                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Another action</a>
                                                                                </li>
                                                                                <li class="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete</a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div></div></div></div><div class="simplebar-placeholder" style={{ width: '0px', height: '0px' }}></div></div><div class="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div class="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}></div></div><div class="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}><div class="simplebar-scrollbar" style={{ height: '0px', display: 'none' }}></div></div></div>
                                </div>
                            </div>

                            <div class="tab-content active">
                                <div>
                                    <div class="px-6 pt-6">
                                        <h4 class="mb-0 text-gray-700 dark:text-gray-50">Chats</h4>

                                        <div class="py-1 mt-5 mb-5 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                                            <span class="group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 pe-1 ps-3 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600" id="basic-addon1">
                                                <i class="text-lg text-gray-400 ri-search-line search-icon dark:text-gray-200"></i>
                                            </span>
                                            <input type="text" class="border-0 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 placeholder:text-gray-400" placeholder="Search messages or users" aria-label="Search messages or users" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    <div class="px-6 pb-6" dir="ltr">

                                        <div class="owl-carousel owl-theme owl-loaded owl-drag" id="user-status-carousel">









                                            <div class="owl-stage-outer"><div class="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '478px' }}><div class="owl-item active" style={{ width: '79.6px' }}><div class="text-center">
                                                <a href="/" class="block p-2 mt-4 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                                                    <div class="absolute inset-0 text-center">
                                                        <img src="./assets/images/avatar-2.jpg" alt="user-img" class="mx-auto rounded-full w-9 h-9" />
                                                        <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 lg:right-5 dark:border-zinc-600"></span>
                                                    </div>

                                                    <h5 class="mt-4 mb-0 truncate text-13 dark:text-gray-50">Patrick</h5>
                                                </a>
                                            </div></div><div class="owl-item active" style={{ width: '79.6px' }}><div class="text-center">
                                                <a href="/" class="block p-2 mt-4 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                                                    <div class="absolute inset-0 block text-center">
                                                        <img src="./assets/images/avatar-4.jpg" alt="user-img" class="mx-auto rounded-full w-9 h-9" />
                                                        <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 lg:right-5 dark:border-zinc-600"></span>
                                                    </div>

                                                    <h5 class="mt-4 mb-0 truncate text-13 dark:text-gray-50">Doris</h5>
                                                </a>
                                            </div></div>
                                                <div class="owl-item active" style={{ width: '79.6px' }}>
                                                    <div class="text-center">
                                                        <a href="/" class="block p-2 mt-4 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                                                            <div class="absolute inset-0 block text-center">
                                                                <img src="./assets/images/avatar-5.jpg" alt="user-img" class="mx-auto rounded-full w-9 h-9" />
                                                                <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 lg:right-5 dark:border-zinc-600"></span>
                                                            </div>

                                                            <h5 class="mt-4 mb-0 truncate text-13 dark:text-gray-50">Emily</h5>
                                                        </a>
                                                    </div></div>
                                                <div class="owl-item active" style={{width: "79.6px", margin: "16px"}}><div class="text-center">
                                                    <a href="/" class="block p-2 mt-4 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                                                        <div class="absolute inset-0 block text-center">
                                                            <img src="./assets/images/avatar-6.jpg" alt="user-img" class="mx-auto rounded-full w-9 h-9" />
                                                            <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 lg:right-5 dark:border-zinc-600"></span>
                                                        </div>

                                                        <h5 class="mt-4 mb-0 truncate text-13 dark:text-gray-50">Steve</h5>
                                                    </a>
                                                </div></div>
                                                <div class="owl-item" style="width: 79.6px; margin-right: 16px;"><div class="text-center">
                                                    <a href="/" class="block p-2 mt-4 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                                                        <div class="absolute inset-0 block mx-auto rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                            <span class="font-medium leading-9 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                T
                                                            </span>
                                                            <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 lg:right-1 dark:border-zinc-600"></span>
                                                        </div>
                                                        <h5 class="mt-4 mb-0 truncate text-13 dark:text-gray-50">Teresa</h5>
                                                    </a>
                                                </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div></div>
                                    </div>

                                    <div>
                                        <h5 class="px-6 mb-4 text-16 dark:text-gray-50">Recent</h5>

                                        <div class="h-[610px] px-2 simplebar-scrollable-y" data-simplebar="init"><div class="simplebar-wrapper" style="margin: 0px -8px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 0px 8px;">

                                            <ul class="chat-user-list">
                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                                                    <a href="/">
                                                        <div class="flex">
                                                            <div class="relative self-center ltr:mr-3 rtl:ml-3">
                                                                <img src="./assets/images/avatar-2.jpg" class="rounded-full w-9 h-9" alt="" />
                                                                <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                                                            </div>

                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-1 text-base truncate dark:text-gray-50">Patrick Hendricks</h5>
                                                                <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">Hey! there I'm available</p>
                                                            </div>
                                                            <div class="text-gray-500 text-11 dark:text-gray-300">05 min</div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="unread px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                                                    <a href="/">
                                                        <div class="relative flex">
                                                            <div class="relative self-center ltr:mr-3 rtl:ml-3">
                                                                <img src="./assets/images/avatar-3.jpg" class="rounded-full w-9 h-9" alt="" />
                                                                <span class="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-1 text-base truncate dark:text-gray-50">Mark Messer</h5>
                                                                <p class="mb-0 text-gray-800 truncate dark:text-gray-300 text-14"><i class="align-middle ri-image-fill me-1 ms-0"></i> Images</p>
                                                            </div>
                                                            <div class="text-gray-500 text-11 dark:text-gray-300">12 min</div>
                                                            <div class="absolute bottom-0 ltr:right-0 rtl:left-0">
                                                                <span class="px-2 py-1 text-red-500 rounded-full bg-red-500/20 text-11">02</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                                                    <a href="/">
                                                        <div class="flex">
                                                            <div class="relative self-center ltr:mr-3 rtl:ml-3">
                                                                <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                                    <span class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                        G
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-1 text-base truncate dark:text-gray-50">General</h5>
                                                                <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">This theme is awesome!</p>
                                                            </div>
                                                            <div class="text-gray-500 text-11 dark:text-gray-300">20 min</div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="px-5 py-[15px] border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50/50 group-data-[theme-color=red]:bg-red-50/50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                                                    <a href="/">
                                                        <div class="flex">
                                                            <div class="relative self-center ltr:mr-3 rtl:ml-3">
                                                                <img src="./assets/images/avatar-4.jpg" class="rounded-full w-9 h-9" alt="" />
                                                                <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-1 text-base truncate dark:text-gray-50">Doris Brown</h5>
                                                                <p class="text-gray-500 dark:text-gray-300 text-14">Nice to meet you</p>
                                                            </div>
                                                            <div class="text-gray-500 text-11 dark:text-gray-300">10:12 AM</div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="unread px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                                                    <a href="/">
                                                        <div class="relative flex ">
                                                            <div class="relative self-center ltr:mr-3 rtl:ml-3">
                                                                <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                                    <span class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                        D
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-1 text-base truncate dark:text-gray-50">Designer</h5>
                                                                <p class="mb-0 text-gray-800 truncate dark:text-gray-300 text-14">Next meeting tomorrow 10.00AM</p>
                                                            </div>
                                                            <div class="text-gray-500 text-11 dark:text-gray-300">12:01 PM</div>
                                                            <div class="absolute bottom-0 ltr:right-0 rtl:left-0">
                                                                <span class="px-2 py-1 text-red-500 rounded-full bg-red-500/20 text-11">01</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                                                    <a href="/">
                                                        <div class="flex">
                                                            <div class="relative self-center ltr:mr-3 rtl:ml-3">
                                                                <img src="./assets/images/avatar-6.jpg" class="rounded-full w-9 h-9" alt="" />
                                                                <span class="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-1 text-base truncate dark:text-gray-50">Steve Walker</h5>
                                                                <p class="text-gray-500 truncate dark:text-gray-300 text-14"><i class="align-middle ri-file-text-fill me-1 ms-0"></i> Admin-A.zip</p>
                                                            </div>
                                                            <div class="text-gray-500 text-11 dark:text-gray-300">03:20 PM</div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="typing px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                                                    <a href="/">
                                                        <div class="flex">
                                                            <div class="relative self-center ltr:mr-3 rtl:ml-3">
                                                                <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                                    <span class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                        A
                                                                    </span>
                                                                </div>
                                                                <span class="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-1 text-base truncate dark:text-gray-50">Albert Rodarte</h5>
                                                                <div class="flex items-end gap-2 mb-0 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 text-14">
                                                                    <p class="mb-0">typing</p>

                                                                    <div class="animate-typing flex gap-0.5">
                                                                        <p class="w-1 h-1 mb-1 rounded-full dot group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500 animate-bounce"></p>
                                                                        <p class="w-1 h-1 mb-1 rounded-full dot-2 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500 "></p>
                                                                        <p class="w-1 h-1 mb-1 rounded-full dot-3 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500 animate-bounce"></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="text-gray-500 text-11 dark:text-gray-300">04:56 PM</div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                                                    <a href="/">
                                                        <div class="flex">
                                                            <div class="relative self-center ltr:mr-3 rtl:ml-3">
                                                                <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                                    <span class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                        M
                                                                    </span>
                                                                </div>
                                                                <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-1 text-base truncate dark:text-gray-50">Mirta George</h5>
                                                                <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">Yeah everything is fine</p>
                                                            </div>
                                                            <div class="text-gray-500 text-11 dark:text-gray-300">12/07</div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                                                    <a href="/">
                                                        <div class="flex">
                                                            <div class="relative self-center ltr:mr-3 rtl:ml-3">
                                                                <img src="./assets/images/avatar-7.jpg" class="rounded-full w-9 h-9" alt="" />
                                                                <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-1 text-base truncate dark:text-gray-50">Paul Haynes</h5>
                                                                <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">Good morning</p>
                                                            </div>
                                                            <div class="text-gray-500 text-11 dark:text-gray-300">12/07</div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                                                    <a href="/">
                                                        <div class="flex">
                                                            <div class="relative self-center ltr:mr-3 rtl:ml-3">
                                                                <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                                    <span class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                        J
                                                                    </span>
                                                                </div>
                                                                <span class="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-1 text-base truncate dark:text-gray-50">Jonathan Miller</h5>
                                                                <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">Hi, How are you?</p>
                                                            </div>
                                                            <div class="text-gray-500 text-11 dark:text-gray-300">12/07</div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                                                    <a href="/">
                                                        <div class="flex">
                                                            <div class="relative self-center ltr:mr-3 rtl:ml-3">
                                                                <img src="./assets/images/avatar-8.jpg" class="rounded-full w-9 h-9" alt="" />
                                                                <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-1 text-base truncate dark:text-gray-50">Ossie Wilson</h5>
                                                                <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">I've finished it! See you so</p>
                                                            </div>
                                                            <div class="text-gray-500 text-11 dark:text-gray-300">11/07</div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                                                    <a href="/">
                                                        <div class="flex">
                                                            <div class="relative self-center ltr:mr-3 rtl:ml-3">
                                                                <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                                    <span class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                        S
                                                                    </span>
                                                                </div>
                                                                <span class="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-1 text-base truncate dark:text-gray-50">Sara Muller</h5>
                                                                <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">Wow that's great</p>
                                                            </div>
                                                            <div class="text-gray-500 text-11 dark:text-gray-300">11/07</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div></div></div></div><div class="simplebar-placeholder" style="width: 414px; height: 942px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 395px; transform: translate3d(0px, 214px, 0px); display: block;"></div></div></div>
                                    </div>

                                </div>

                            </div>

                            <div class="tab-content">

                                <div class="h-screen lg:h-auto">
                                    <div class="p-6">
                                        <div class="ltr:float-right rtl:float-left">
                                            <div class="relative">
                                                <button type="button" class="px-4 text-lg text-gray-500 group/tag dark:text-gray-300" data-tw-toggle="modal" data-tw-target="#modal-id">
                                                    <i class="ri-group-line me-1 ms-0"></i>
                                                    <span class="absolute items-center hidden mb-6 top-8 group-hover/tag:flex ltr:-left-8 rtl:-right-8">
                                                        <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Create groups</span>
                                                        <span class="w-3 h-3 -mt-6 rotate-45 bg-black ltr:-ml-12 rtl:-mr-12"></span>
                                                    </span>
                                                </button>

                                            </div>
                                        </div>
                                        <h4 class="mb-6 dark:text-gray-50">Groups</h4>

                                        <div class="relative z-50 hidden modal" id="modal-id">
                                            <div class="fixed inset-0 z-50 overflow-hidden">
                                                <div class="absolute inset-0 transition-opacity bg-black bg-opacity-50 modal-overlay"></div>
                                                <div class="flex items-center justify-center max-w-lg min-h-screen p-4 mx-auto text-center animate-translate">
                                                    <div class="relative w-full max-w-lg my-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl -top-10 dark:bg-zinc-700">
                                                        <div class="group-data-[theme-color=violet]:bg-violet-800/10 group-data-[theme-color=green]:bg-green-800/10 group-data-[theme-color=red]:bg-red-800/10 group-data-[theme-color=violet]:dark:bg-zinc-700 group-data-[theme-color=red]:dark:bg-zinc-700 group-data-[theme-color=green]:dark:bg-zinc-700">
                                                            <div class="flex items-center justify-between p-4 border-b border-gray-100 dark:border-zinc-500">
                                                                <h5 class="mb-0 text-gray-800 text-16 dark:text-gray-50" id="addgroup-exampleModalLabel">Create New Group</h5>
                                                                <button type="button" class="absolute top-3 ltr:right-2.5 rtl:left-2.5 text-gray-400 border-transparent hover:bg-gray-50/50/50 hover:text-gray-900 rounded-lg text-sm px-2 py-1 ml-auto inline-flex items-center dark:hover:bg-zinc-600 dark:text-gray-100" data-tw-dismiss="modal">
                                                                    <i class="text-xl text-gray-500 mdi mdi-close dark:text-zinc-100/60"></i>
                                                                </button>
                                                            </div>
                                                            <div class="p-4">
                                                                <form>
                                                                    <div class="mb-8">
                                                                        <label class="block mb-2 ltr:text-left dark:text-gray-200 rtl:text-right">Group Name</label>
                                                                        <input type="text" class="py-1.5 bg-transparent border-gray-100 rounded placeholder:text-13 w-full focus:border-violet-500 focus:ring-0 focus:ring-offset-0 placeholder:dark:text-gray-200 dark:border-zinc-500" id="addgroupname-input" placeholder="Enter Group Name" />
                                                                    </div>
                                                                    <div class="mb-8 ltr:text-left rtl:text-right">
                                                                        <label class="dark:text-gray-300 ">Group Members</label>
                                                                        <div class="mt-2 mb-3">
                                                                            <button class="group-data-[theme-color=violet]:bg-slate-200 group-data-[theme-color=green]:bg-white group-data-[theme-color=red]:bg-white border-0 btn group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 dark:text-gray-50" type="button" id="toggleButton">
                                                                                Select Members
                                                                            </button>
                                                                        </div>

                                                                        <div class="hidden" id="collapseElement">
                                                                            <div class="border border-gray-100 rounded dark:border-zinc-500">
                                                                                <div class="px-3 py-2 rounded bg-gray-100/50 dark:bg-zinc-600">
                                                                                    <h5 class="mb-0 text-base text-gray-800 dark:text-gray-50">Contacts</h5>
                                                                                </div>
                                                                                <div class="p-2 bg-white dark:bg-zinc-800">
                                                                                    <div data-simplebar="init" class="h-[150px]"><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: auto; overflow: hidden;"><div class="simplebar-content" style="padding: 0px;">
                                                                                        <div>
                                                                                            <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                                                A
                                                                                            </div>

                                                                                            <ul>
                                                                                                <li class="px-5 py-[10px]">
                                                                                                    <div class="flex items-center gap-3">
                                                                                                        <input type="checkbox" class="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck1" checked="" />
                                                                                                        <label for="memberCheck1" class="dark:text-gray-300">Albert Rodarte</label>
                                                                                                    </div>
                                                                                                </li>

                                                                                                <li class="px-5 py-[10px]">
                                                                                                    <div class="flex items-center gap-3">
                                                                                                        <input type="checkbox" class="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck2" />
                                                                                                        <label for="memberCheck2" class="dark:text-gray-300">Allison Etter</label>
                                                                                                    </div>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>

                                                                                        <div>
                                                                                            <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                                                C
                                                                                            </div>

                                                                                            <ul>
                                                                                                <li class="px-5 py-[10px]">
                                                                                                    <div class="flex items-center gap-3">
                                                                                                        <input type="checkbox" class="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck3" />
                                                                                                        <label for="memberCheck3" class="dark:text-gray-300">Craig Smiley</label>
                                                                                                    </div>
                                                                                                </li>

                                                                                            </ul>
                                                                                        </div>

                                                                                        <div>
                                                                                            <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                                                D
                                                                                            </div>

                                                                                            <ul>
                                                                                                <li class="px-5 py-[10px]">
                                                                                                    <div class="flex items-center gap-3">
                                                                                                        <input type="checkbox" class="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck4" />
                                                                                                        <label for="memberCheck4" class="dark:text-gray-300">Daniel Clay</label>
                                                                                                    </div>
                                                                                                </li>

                                                                                            </ul>
                                                                                        </div>

                                                                                        <div>
                                                                                            <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                                                I
                                                                                            </div>

                                                                                            <ul>
                                                                                                <li class="px-5 py-[10px]">
                                                                                                    <div class="flex items-center gap-3">
                                                                                                        <input type="checkbox" class="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck5" />
                                                                                                        <label for="memberCheck5" class="dark:text-gray-300">Iris Wells</label>
                                                                                                    </div>
                                                                                                </li>

                                                                                            </ul>
                                                                                        </div>

                                                                                        <div>
                                                                                            <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                                                J
                                                                                            </div>

                                                                                            <ul>


                                                                                                <li class="px-5 py-[10px]">
                                                                                                    <div class="flex items-center gap-3">
                                                                                                        <input type="checkbox" class="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck8" />
                                                                                                        <label for="memberCheck8" class="dark:text-gray-300">Joy Southern</label>
                                                                                                    </div>
                                                                                                </li>
                                                                                                <li class="px-5 py-[10px]">
                                                                                                    <div class="flex items-center gap-3">
                                                                                                        <input type="checkbox" class="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck8" />
                                                                                                        <label for="memberCheck8" class="dark:text-gray-300">Joy Southern</label>
                                                                                                    </div>
                                                                                                </li>
                                                                                                <li class="px-5 py-[10px]">
                                                                                                    <div class="flex items-center gap-3">
                                                                                                        <input type="checkbox" class="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck8" />
                                                                                                        <label for="memberCheck8" class="dark:text-gray-300">Joy Southern</label>
                                                                                                    </div>
                                                                                                </li>

                                                                                            </ul>
                                                                                        </div>

                                                                                        <div>
                                                                                            <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                                                M
                                                                                            </div>

                                                                                            <ul>
                                                                                                <li class="px-5 py-[10px]">
                                                                                                    <div class="flex items-center gap-3">
                                                                                                        <input type="checkbox" class="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck9" />
                                                                                                        <label for="memberCheck9" class="dark:text-gray-300">Michael Hinton</label>
                                                                                                    </div>
                                                                                                </li>

                                                                                                <li class="px-5 py-[10px]">
                                                                                                    <div class="flex items-center gap-3">
                                                                                                        <input type="checkbox" class="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck10" />
                                                                                                        <label for="memberCheck10" class="dark:text-gray-300">Mary Farmer</label>
                                                                                                    </div>
                                                                                                </li>

                                                                                            </ul>
                                                                                        </div>

                                                                                        <div>
                                                                                            <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                                                P
                                                                                            </div>

                                                                                            <ul>
                                                                                                <li class="px-5 py-[10px]">
                                                                                                    <div class="flex items-center gap-3">
                                                                                                        <input type="checkbox" class="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck11" />
                                                                                                        <label for="memberCheck11" class="dark:text-gray-300">Phillis Griffin</label>
                                                                                                    </div>
                                                                                                </li>

                                                                                            </ul>
                                                                                        </div>

                                                                                        <div>
                                                                                            <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                                                R
                                                                                            </div>

                                                                                            <ul>
                                                                                                <li class="px-5 py-[10px]">
                                                                                                    <div class="flex items-center gap-3">
                                                                                                        <input type="checkbox" class="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck12" />
                                                                                                        <label for="memberCheck12" class="dark:text-gray-300">Rocky Jackson</label>
                                                                                                    </div>
                                                                                                </li>

                                                                                            </ul>
                                                                                        </div>

                                                                                        <div>
                                                                                            <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                                                S
                                                                                            </div>

                                                                                            <ul>
                                                                                                <li class="px-5 py-[10px]">
                                                                                                    <div class="flex items-center gap-3">
                                                                                                        <input type="checkbox" class="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck13" />
                                                                                                        <label for="memberCheck13" class="dark:text-gray-300">Simon Velez</label>
                                                                                                    </div>
                                                                                                </li>

                                                                                            </ul>
                                                                                        </div>
                                                                                    </div></div></div></div><div class="simplebar-placeholder" style={{width: "0px", height: "0px"}}></div></div><div class="simplebar-track simplebar-horizontal" style={{visibility: "hidden"}}><div class="simplebar-scrollbar" style={{width: "0px" ,display: "none"}}></div></div><div class="simplebar-track simplebar-vertical" style={{visibility: "hidden"}}><div class="simplebar-scrollbar" style={{height: "0px", display: "none"}}></div></div></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="mb-5 ltr:text-left rtl:text-right">
                                                                        <label for="addgroupdescription-input" class="block mb-2 dark:text-gray-50">Description</label>
                                                                        <textarea class="w-full bg-transparent border-gray-100 rounded placeholder:text-13 focus:border-violet-500 focus:ring-0 focus:ring-offset-0 dark:border-zinc-500 dark:text-gray-200 dark:placeholder:text-gray-200" id="addgroupdescription-input" rows="3" placeholder="Enter Description"></textarea>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div class="flex p-4 border-t border-gray-100 ltr:justify-end dark:border-zinc-500 rtl:justify-start">
                                                                <div>
                                                                    <button type="button" class="border-0 btn hover:underline group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500" data-tw-dismiss="modal">Close</button>
                                                                    <button type="button" class="text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=violet]:hover:bg-violet-600 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=green]:hover:bg-green-600 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=red]:hover:bg-red-600">Create Groups</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="py-1 mt-5 mb-5 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                                            <span class="group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 pe-1 ps-3 " id="basic-addon2">
                                                <i class="text-lg text-gray-700 ri-search-line search-icon dark:text-gray-200"></i>
                                            </span>
                                            <input type="text" class="border-0 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 dark:text-gray-400" placeholder="Search messages or users" aria-label="Search messages or users" aria-describedby="basic-addon2" />
                                        </div>


                                        <div class="chat-message-list chat-group-list" data-simplebar="init"><div class="simplebar-wrapper" style={{margin: "0px"}}><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style={{right: "0px", bottom: "0px"}}><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{height: "auto", overflow: "hidden"}}><div class="simplebar-content" style={{padding: "0px"}}>


                                            <ul>
                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                                                    <a href="/">
                                                        <div class="flex items-center">
                                                            <div class="ltr:mr-5 rtl:ml-5">
                                                                <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                                    <span class="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                        G
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#General</h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                                                    <a href="/">
                                                        <div class="flex items-center">
                                                            <div class="ltr:mr-5 rtl:ml-5">
                                                                <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                                    <span class="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                        R
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Reporting <span class="rtl:float-left ltr:float-right px-1.5 py-0.5 text-red-500 rounded-full bg-red-500/20 text-11">+23</span></h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                                                    <a href="/">
                                                        <div class="flex items-center">
                                                            <div class="ltr:mr-5 rtl:ml-5">
                                                                <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                                    <span class="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                        D
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Designers</h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                                                    <a href="/">
                                                        <div class="flex items-center">
                                                            <div class="ltr:mr-5 rtl:ml-5">
                                                                <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                                    <span class="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                        D
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Developers <span class="rtl:float-left ltr:float-right px-1.5 py-0.5 text-red-500 rounded-full bg-red-500/20 text-11">New</span></h5>
                                                            </div>
                                                        </div>

                                                    </a>
                                                </li>

                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                                                    <a href="/">
                                                        <div class="flex items-center">
                                                            <div class="ltr:mr-5 rtl:ml-5">
                                                                <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                                    <span class="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                        P
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Project-alpha</h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                                                    <a href="/">
                                                        <div class="flex items-center">
                                                            <div class="ltr:mr-5 rtl:ml-5">
                                                                <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                                                    <span class="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                        B
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow overflow-hidden">
                                                                <h5 class="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Snacks</h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div></div></div></div><div class="simplebar-placeholder" style={{width: "0px" ,height: "0px"}}></div></div><div class="simplebar-track simplebar-horizontal" style={{visibility: "hidden"}}><div class="simplebar-scrollbar" style={{width: '0px', display: 'none'}}></div></div><div class="simplebar-track simplebar-vertical" style={{visibility: "hidden"}}><div class="simplebar-scrollbar" style={{height: "0px", display: "none"}}></div></div></div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-content">
                                <div>
                                    <div class="p-6 pb-0">
                                        <div class="ltr:float-right rtl:float-left">
                                            <div class="relative">
                                                <button type="button" class="px-4 text-lg text-gray-500 group/tag" data-tw-toggle="modal" data-tw-target="#modal-id2">
                                                    <i class="mr-1 ri-user-add-line ms-0 dark:text-violet-200"></i>
                                                    <span class="absolute items-center hidden mb-6 top-8 group-hover/tag:flex ltr:-left-8 rtl:-right-8">
                                                        <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Add Contact</span>
                                                        <span class="w-3 h-3 -mt-6 rotate-45 bg-black ltr:-ml-12 rtl:-mr-12"></span>
                                                    </span>
                                                </button>

                                            </div>
                                        </div>
                                        <h4 class="mb-6 dark:text-gray-50">Contacts</h4>

                                        <div class="relative z-50 hidden modal" id="modal-id2" aria-modal="true">
                                            <div class="fixed inset-0 z-50 overflow-hidden">
                                                <div class="absolute inset-0 transition-opacity bg-black bg-opacity-50 modal-overlay"></div>
                                                <div class="flex items-center justify-center max-w-lg min-h-screen p-4 mx-auto text-center animate-translate">
                                                    <div class="relative w-full max-w-lg my-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl -top-10 dark:bg-zinc-700">
                                                        <div class="bg-violet-800/10 dark:bg-zinc-700">
                                                            <div class="flex items-center justify-between p-4 border-b border-gray-100 dark:border-zinc-500">
                                                                <h5 class="mb-0 text-gray-800 text-16 dark:text-gray-50" id="addgroup-exampleModaL">Add Contact</h5>
                                                                <button type="button" class="absolute top-3 ltr:right-2.5 rtl:left-2.5 text-gray-400 border-transparent hover:bg-gray-50/50/50 hover:text-gray-900 rounded-lg text-sm px-2 py-1 ml-auto inline-flex items-center dark:hover:bg-zinc-600 dark:text-gray-100" data-tw-dismiss="modal">
                                                                    <i class="text-xl text-gray-500 mdi mdi-close dark:text-zinc-100/60"></i>
                                                                </button>
                                                            </div>
                                                            <div class="p-4">
                                                                <form>
                                                                    <div class="mb-5 ltr:text-left rtl:text-right">
                                                                        <label class="block mb-2 dark:text-gray-300">Email</label>
                                                                        <input type="text" class="py-1.5 bg-transparent border-gray-100 rounded placeholder:text-13 w-full focus:border-violet-500 focus:ring-0 focus:ring-offset-0 dark:border-zinc-500 dark:placeholder:text-gray-300" id="addgroupname-input1" placeholder="Enter Email" />
                                                                    </div>

                                                                    <div class="mb-5 ltr:text-left rtl:text-right">
                                                                        <label class="block mb-2 dark:text-gray-300">Invatation Message</label>
                                                                        <textarea class="w-full bg-transparent border-gray-100 rounded placeholder:text-13 focus:border-violet-500 focus:ring-0 focus:ring-offset-0 dark:border-zinc-500 dark:placeholder:text-gray-300" id="addgroupdescription-input1" rows="3" placeholder="Enter Message"></textarea>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div class="flex justify-end p-4 border-t border-gray-100 dark:border-zinc-500">
                                                                <div>
                                                                    <button type="button" class="border-0 btn hover:underline group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500" data-tw-dismiss="modal">Close</button>
                                                                    <button type="button" class="text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=violet]:hover:bg-violet-600 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=green]:hover:bg-green-600 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=red]:hover:bg-red-600">Invite Contact</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="py-1 mt-5 mb-5 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 rounded group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                                            <span class="group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 pe-1 ps-3 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600" id="basic-addon">
                                                <i class="text-lg text-gray-700 ri-search-line search-icon dark:text-gray-200"></i>
                                            </span>
                                            <input type="text" class="border-0 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 placeholder:dark:text-gray-300" placeholder="Search users.." aria-describedby="basic-addon" />
                                        </div>
                                    </div>

                                    <div class="h-[80vh]" data-simplebar="init"><div class="simplebar-wrapper" style={{margin: "0px"}}><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style={{right: "0px",bottom: "0px"}}><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{height: 'auto', overflow: "hidden"}}><div class="simplebar-content" style={{padding: "0px"}}>

                                        <div class="p-6">
                                            <div>
                                                <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                    A
                                                </div>

                                                <ul class="list-unstyled contact-list">
                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Albert Rodarte</h5>
                                                            </div>
                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonB">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonB">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Allison Etter</h5>
                                                            </div>
                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonC">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonC">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="mt-3">
                                                <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                    C
                                                </div>

                                                <ul class="list-unstyled contact-list">
                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Craig Smiley</h5>
                                                            </div>
                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonD">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonD">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="mt-3">
                                                <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                    D
                                                </div>

                                                <ul class="list-unstyled contact-list">
                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Daniel Clay</h5>
                                                            </div>
                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonEM">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonEM">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Doris Brown</h5>
                                                            </div>

                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonES">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonES">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>

                                            <div class="mt-3">
                                                <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                    I
                                                </div>

                                                <ul class="list-unstyled contact-list">

                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Iris Wells</h5>
                                                            </div>
                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonF">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonF">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="mt-3">
                                                <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                    J
                                                </div>

                                                <ul class="list-unstyled contact-list">
                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Juan Flakes</h5>
                                                            </div>
                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonG">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonG">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">John Hall</h5>
                                                            </div>
                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonH">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonH">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Joy Southern</h5>
                                                            </div>
                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonI">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonI">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="mt-3">
                                                <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                    M
                                                </div>

                                                <ul class="list-unstyled contact-list">
                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Mary Farmer</h5>
                                                            </div>
                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonJ">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonJ">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Mark Messer</h5>
                                                            </div>
                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonK">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonK">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Michael Hinton</h5>
                                                            </div>

                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonL">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonL">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>

                                            <div class="mt-3">
                                                <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                    O
                                                </div>

                                                <ul class="list-unstyled contact-list">
                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Ossie Wilson</h5>
                                                            </div>
                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonM">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonM">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>

                                            <div class="mt-3">
                                                <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                    P
                                                </div>

                                                <ul class="list-unstyled contact-list">
                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Phillis Griffin</h5>
                                                            </div>

                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonN">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonN">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Paul Haynes</h5>
                                                            </div>

                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonO">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonO">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>

                                            <div class="mt-3">
                                                <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                    R
                                                </div>

                                                <ul class="list-unstyled contact-list">
                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Rocky Jackson</h5>
                                                            </div>

                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonP">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonP">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>

                                            <div class="mt-3">
                                                <div class="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                    S
                                                </div>

                                                <ul class="list-unstyled contact-list">
                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Sara Muller</h5>
                                                            </div>

                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonQ">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonQ">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Simon Velez</h5>
                                                            </div>

                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonR">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonR">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="px-5 py-[15px]">
                                                        <div class="flex items-center">
                                                            <div class="flex-grow">
                                                                <h5 class="m-0 text-gray-700 text-14 dark:text-gray-50">Steve Walker</h5>
                                                            </div>

                                                            <div class="relative flex-shrink-0 dropdown">
                                                                <button class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonS">
                                                                    <i class="text-lg ri-more-2-fill"></i>
                                                                </button>
                                                                <ul class="absolute z-50 w-40 py-2 my-6 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:left-auto ltr:right-0 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-zinc-500/50 dark:shadow-sm hidden" aria-labelledby="dropdownMenuButtonS">
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Share <i class="float-right text-gray-500 dark:text-gray-300 ri-share-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Block <i class="float-right text-gray-500 dark:text-gray-300 ri-forbid-line"></i></a>
                                                                    </li>
                                                                    <li><a class="block w-full px-6 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-300 dark:hover:bg-zinc-500/50" href="/">Remove <i class="float-right text-gray-500 dark:text-gray-300 ri-delete-bin-line"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>

                                    </div></div></div></div><div class="simplebar-placeholder" style={{width: '0px', height: '0px'}}></div></div><div class="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}><div class="simplebar-scrollbar" style={{width: '0px', display: 'none'}}></div></div><div class="simplebar-track simplebar-vertical" style={{visibility: 'hidden'}}><div class="simplebar-scrollbar" style={{height: '0px', display: 'none'}}></div></div></div>


                                </div>
                            </div>

                            <div class="tab-content">
                                <div>
                                    <div class="px-6 pt-6">
                                        <h4 class="mb-0 text-gray-700 dark:text-gray-50">Settings</h4>
                                    </div>

                                    <div class="p-6 text-center border-b border-gray-100 dark:border-zinc-500">
                                        <div class="relative mb-4">
                                            <img src="./assets/images/avatar-1.jpg" class="w-24 h-24 p-1 mx-auto border border-gray-100 rounded-full dark:border-zinc-800" alt="" />
                                            <a href="#!" class="absolute bottom-0 w-10 h-10 bg-gray-100 rounded-full ltr:right-28 rtl:left-28dark:bg-zinc-800 dark:text-gray-100">
                                                <i class="leading-10 ri-pencil-fill text-16"></i>
                                            </a>
                                        </div>

                                        <h5 class="mb-1 text-16 dark:text-gray-50">Patricia Smith</h5>

                                        <div class="relative mb-1 dropdown">
                                            <a class="pb-1 text-gray-500 dropdown-toggle d-block dark:text-gray-300" href="/" role="button" data-bs-toggle="dropdown" id="dropdownMenuButtonX">
                                                Available <i class="mdi mdi-chevron-down"></i>
                                            </a>

                                            <ul class="absolute z-50 hidden py-2 mt-2 text-left list-none bg-white border rounded shadow-lg left-20 dropdown-menu w-36 top-6 dark:bg-zinc-700 bg-clip-padding border-gray-50 dark:border-zinc-500" aria-labelledby="dropdownMenuButtonX">
                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600/80 ltr:text-left rtl:text-right" href="/">Available</a>
                                                </li>
                                                <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600/80 ltr:text-left rtl:text-right" href="/">Busy</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="p-6 h-[550px]" data-simplebar="init"><div class="simplebar-wrapper" style={{ margin: '-24px' }}><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style={{ right: '0px', bottom: '0px' }}><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: 'auto', overflow: 'hidden' }}><div class="simplebar-content" style={{ padding: '24px' }}>

                                        <div data-tw-accordion="collapse">
                                            <div class="text-gray-700 accordion-item">
                                                <h2>
                                                    <button type="button" class="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded-t accordion-header group active dark:border-zinc-600 dark:bg-zinc-600 dark:text-gray-50">
                                                        <span class="m-0 text-[14px] font-medium">Personal Info</span>
                                                        <i class="mdi mdi-chevron-down text-lg group-[.active]:rotate-180"></i>
                                                    </button>
                                                </h2>

                                                <div class="block bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                                                    <div class="p-5">
                                                        <div>
                                                            <div class="ltr:float-right rtl:float-left">
                                                                <button type="button" class="py-1.5 btn bg-slate-100 border-transparent rounded hover:bg-gray-50 transition-all ease-in-out dark:bg-zinc-600 dark:text-gray-50 dark:hover:bg-zinc-500/50"><i class="mr-1 align-middle ri-edit-fill"></i> Edit</button>
                                                            </div>
                                                            <p class="mb-1 text-gray-500 dark:text-gray-300">Name</p>
                                                            <h5 class="text-sm dark:text-gray-50">Patricia Smith</h5>
                                                        </div>
                                                        <div class="mt-5">
                                                            <p class="mb-1 text-gray-500 dark:text-gray-300">Email</p>
                                                            <h5 class="text-sm dark:text-gray-50">adc@123.com</h5>
                                                        </div>
                                                        <div class="mt-5">
                                                            <p class="mb-1 text-gray-500 dark:text-gray-300">Time</p>
                                                            <h5 class="text-sm dark:text-gray-50">11:40 AM</h5>
                                                        </div>
                                                        <div class="mt-5">
                                                            <p class="mb-1 text-gray-500 dark:text-gray-300">Location</p>
                                                            <h5 class="text-sm dark:text-gray-50">California, USA</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mt-2 text-gray-700 accordion-item">
                                                <h2>
                                                    <button type="button" class="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded accordion-header group dark:bg-zinc-600 dark:text-gray-50 dark:border-zinc-600">
                                                        <span class="m-0 text-[14px] font-semibold">Privacy</span>
                                                        <i class="mdi mdi-chevron-down text-lg group-[.active]:rotate-180"></i>
                                                    </button>
                                                </h2>
                                                <div class="hidden bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                                                    <div class="p-5">
                                                        <div class="py-4">
                                                            <div class="flex items-center">
                                                                <div class="flex-grow overflow-hidden">
                                                                    <h5 class="mb-0 text-gray-700 truncate text-13 dark:text-gray-50">Profile photo</h5>
                                                                </div>
                                                                <div class="relative flex-shrink-0 dropdown">
                                                                    <button class="border-transparent rounded btn dropdown-toggle bg-slate-100 px-1.5 py-1 dark:bg-zinc-500 dark:text-gray-50" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonY">
                                                                        Everyone <i class="mdi mdi-chevron-down"></i>
                                                                    </button>
                                                                    <ul class="absolute z-50 w-40 py-2 my-8 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600 hidden" aria-labelledby="dropdownMenuButtonY">
                                                                        <li><a class="block w-full px-5 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Everyone</a>
                                                                        </li>
                                                                        <li><a class="block w-full px-5 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">selected</a>
                                                                        </li>
                                                                        <li><a class="block w-full px-5 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Nobody</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="py-4 border-t border-gray-100/80 dark:border-zinc-600">
                                                            <div class="flex items-center">
                                                                <div class="flex-grow overflow-hidden">
                                                                    <h5 class="mb-0 text-gray-700 truncate text-13 dark:text-gray-50">Last seen</h5>

                                                                </div>
                                                                <div class="flex items-center">
                                                                    <label for="toggleSwitch" class="flex items-center cursor-pointer">
                                                                        <span class="relative">
                                                                            <input type="checkbox" id="toggleSwitch" class="sr-only" checked="" />
                                                                            <span class="block w-8 h-5 rounded-full checked-bg"></span>
                                                                            <span class="absolute w-3 h-3 transition rounded-full dot left-1 top-1"></span>
                                                                        </span>
                                                                    </label>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="py-4 border-t border-gray-100/80 dark:border-zinc-600">
                                                            <div class="flex items-center">
                                                                <div class="flex-grow overflow-hidden">
                                                                    <h5 class="mb-0 text-gray-700 truncate text-13 dark:text-gray-50">Status</h5>
                                                                </div>
                                                                <div class="relative flex-shrink-0 dropdown">
                                                                    <button class="border-transparent rounded btn dropdown-toggle bg-slate-100 px-1.5 py-1 dark:bg-zinc-500 dark:text-gray-50" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonT">
                                                                        Everyone <i class="mdi mdi-chevron-down"></i>
                                                                    </button>
                                                                    <ul class="absolute z-50 w-40 py-2 my-8 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600 hidden" aria-labelledby="dropdownMenuButtonT">
                                                                        <li><a class="block w-full px-5 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Everyone</a>
                                                                        </li>
                                                                        <li><a class="block w-full px-5 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">selected</a>
                                                                        </li>
                                                                        <li><a class="block w-full px-5 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Nobody</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="py-4 border-t border-gray-100/80 dark:border-zinc-600">
                                                            <div class="flex items-center">
                                                                <div class="flex-grow overflow-hidden">
                                                                    <h5 class="mb-0 text-gray-700 truncate text-13 dark:text-gray-50">Read receipts</h5>

                                                                </div>
                                                                <div class="flex items-center">
                                                                    <label for="toggleSwitch2" class="flex items-center cursor-pointer">
                                                                        <span class="relative">
                                                                            <input type="checkbox" id="toggleSwitch2" class="sr-only" checked="" />
                                                                            <span class="block w-8 h-5 rounded-full checked-bg"></span>
                                                                            <span class="absolute w-3 h-3 transition rounded-full dot left-1 top-1"></span>
                                                                        </span>
                                                                    </label>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="py-4 border-t border-gray-100/80 dark:border-zinc-600">
                                                            <div class="flex items-center">
                                                                <div class="flex-grow overflow-hidden">
                                                                    <h5 class="mb-0 text-gray-700 truncate text-13 dark:text-gray-50">Profile photo</h5>
                                                                </div>
                                                                <div class="relative flex-shrink-0 dropdown">
                                                                    <button class="border-transparent rounded btn dropdown-toggle bg-slate-100 px-1.5 py-1 dark:bg-zinc-500 dark:text-gray-50" type="button" data-bs-toggle="dropdown" id="dropdownMenuButtonZM">
                                                                        Everyone <i class="mdi mdi-chevron-down"></i>
                                                                    </button>
                                                                    <ul class="absolute z-50 w-40 py-2 my-8 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600 hidden" aria-labelledby="dropdownMenuButtonZM">
                                                                        <li><a class="block w-full px-5 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Everyone</a>
                                                                        </li>
                                                                        <li><a class="block w-full px-5 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">selected</a>
                                                                        </li>
                                                                        <li><a class="block w-full px-5 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Nobody</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mt-2 text-gray-700 accordion-item">
                                                <h2>
                                                    <button type="button" class="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded accordion-header group dark:border-zinc-600 dark:bg-zinc-600 dark:text-gray-50">
                                                        <span class="m-0 text-[14px] font-medium">Security</span>
                                                        <i class="mdi mdi-chevron-down text-lg group-[.active]:rotate-180"></i>
                                                    </button>
                                                </h2>
                                                <div class="hidden bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                                                    <div class="p-5">
                                                        <div>
                                                            <div class="flex items-center">
                                                                <div class="flex-grow overflow-hidden">
                                                                    <h5 class="mb-0 text-gray-700 truncate text-13 dark:text-gray-50">Show security notification</h5>

                                                                </div>
                                                                <div class="flex items-center">
                                                                    <label for="toggleSwitch3" class="flex items-center cursor-pointer">
                                                                        <span class="relative">
                                                                            <input type="checkbox" id="toggleSwitch3" class="sr-only" />
                                                                            <span class="block w-8 h-5 rounded-full checked-bg"></span>
                                                                            <span class="absolute w-3 h-3 transition rounded-full dot left-1 top-1"></span>
                                                                        </span>
                                                                    </label>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mt-2 text-gray-700 accordion-item">
                                                <h2>
                                                    <button type="button" class="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded accordion-header group dark:border-zinc-600 dark:bg-zinc-600 dark:text-gray-50">
                                                        <span class="m-0 text-[14px] font-medium">Help</span>
                                                        <i class="mdi mdi-chevron-down text-lg group-[.active]:rotate-180"></i>
                                                    </button>
                                                </h2>
                                                <div class="hidden bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                                                    <div class="p-5">
                                                        <div class="py-3">
                                                            <h5 class="mb-0 text-gray-700 text-13 dark:text-gray-300"><a href="/" class="block text-body">FAQs</a></h5>
                                                        </div>
                                                        <div class="py-3 border-t border-gray-100 dark:border-zinc-600">
                                                            <h5 class="mb-0 text-gray-700 text-13 dark:text-gray-300"><a href="/" class="text-body d-block">Contact</a></h5>
                                                        </div>
                                                        <div class="py-3 border-t border-gray-100 dark:border-zinc-600">
                                                            <h5 class="mb-0 text-gray-700 text-13 dark:text-gray-300"><a href="/" class="text-body d-block">Terms &amp; Privacy policy</a></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div></div></div></div><div class="simplebar-placeholder" style={{ width: '0px', height: '0px' }}></div></div><div class="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div class="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}></div></div><div class="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}><div class="simplebar-scrollbar" style={{ height: '0px', display: 'none' }}></div></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full overflow-hidden transition-all duration-150 bg-white user-chat dark:bg-zinc-800">
                        <div class="lg:flex">

                            <div class="relative w-full overflow-hidden ">
                                <div class="p-4 border-b border-gray-100 lg:p-6 dark:border-zinc-600">
                                    <div class="grid items-center grid-cols-12">
                                        <div class="col-span-8 sm:col-span-4">
                                            <div class="flex items-center">
                                                <div class="block ltr:mr-2 rtl:ml-2 lg:hidden">
                                                    <a href="/" class="p-2 text-gray-500 user-chat-remove text-16"><i class="ri-arrow-left-s-line"></i></a>
                                                </div>
                                                <div class="rtl:ml-3 ltr:mr-3">
                                                    <img src="./assets/images/avatar-4.jpg" class="rounded-full h-9 w-9" alt="" />
                                                </div>
                                                <div class="flex-grow overflow-hidden">
                                                    <h5 class="mb-0 truncate text-16 ltr:block rtl:hidden"><a href="/" class="text-gray-800 dark:text-gray-50">Doris Brown</a> <i class="text-green-500 ltr:ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i></h5>
                                                    <h5 class="mb-0 truncate text-16 rtl:block ltr:hidden"><i class="text-green-500 ltr:ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i> <a href="/" class="text-gray-800 dark:text-gray-50">Doris Brown</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-4 sm:col-span-8">
                                            <ul class="flex items-center justify-end lg:gap-4">
                                                <li class="px-3">
                                                    <div class="relative dropstart">
                                                        <button class="p-0 text-xl text-gray-500 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton10" data-tw-auto-close="outside">
                                                            <i class="ri-search-line"></i>
                                                        </button>
                                                        <ul class="absolute z-50 hidden mt-2 text-left list-none bg-white border rounded-lg shadow-lg w-fit border-gray-50 dropdown-menu top-8 dark:bg-zinc-700 bg-clip-padding dark:border-gray-700" aria-labelledby="dropdownMenuButton10">
                                                            <li class="p-2">
                                                                <input type="text" class="text-gray-500 border-0 rounded bg-gray-50 placeholder:text-14 text-14 dark:bg-zinc-600 dark:text-gray-300 placeholder:dark:text-gray-300 focus:ring-0" placeholder="Search.." />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li>
                                                    <button type="button" class="hidden text-xl text-gray-500 border-0 btn dark:text-gray-300 lg:block" data-tw-toggle="modal" data-tw-target="#audiCallModal">
                                                        <i class="ri-phone-line"></i>
                                                    </button>
                                                </li>


                                                <li class="relative z-50 hidden modal" id="audiCallModal">
                                                    <div class="fixed inset-0 z-50 overflow-hidden">
                                                        <div class="absolute inset-0 transition-opacity bg-black bg-opacity-50 modal-overlay"></div>
                                                        <div class="flex items-center justify-center max-w-lg min-h-screen p-4 mx-auto text-center animate-translate">
                                                            <div class="relative w-full max-w-lg my-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl -top-10 dark:bg-zinc-700">
                                                                <div class="group-data-[theme-color=violet]:bg-violet-800/10 group-data-[theme-color=green]:bg-green-50/50 group-data-[theme-color=red]:bg-red-50/50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                                                                    <div class="p-4">
                                                                        <div class="p-6">
                                                                            <div class="p-4 text-center">
                                                                                <div class="mb-6">
                                                                                    <img src="./assets/images/avatar-4.jpg" alt="" class="w-24 h-24 mx-auto rounded-full" />
                                                                                </div>

                                                                                <h5 class="mb-1 text-gray-800 truncate dark:text-gray-50">Doris Brown</h5>
                                                                                <p class="text-gray-500 dark:text-gray-300">Start Audio Call</p>

                                                                                <div class="mt-10">
                                                                                    <ul class="flex justify-center mb-1">
                                                                                        <li class="px-2 ml-0 mr-2">
                                                                                            <button type="button" class="w-12 h-12 text-white bg-red-500 border-transparent rounded-full btn hover:bg-red-600" data-tw-dismiss="modal">
                                                                                                <span class="text-xl bg-transparent">
                                                                                                    <i class="ri-close-fill"></i>
                                                                                                </span>
                                                                                            </button>
                                                                                        </li>
                                                                                        <li class="px-2">
                                                                                            <button type="button" class="w-12 h-12 text-white bg-green-500 border-transparent rounded-full btn hover:bg-green-600">
                                                                                                <span class="text-xl bg-transparent">
                                                                                                    <i class="ri-phone-fill"></i>
                                                                                                </span>
                                                                                            </button>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li>
                                                    <button type="button" class="hidden text-xl text-gray-500 border-0 btn dark:text-gray-300 lg:block" data-tw-toggle="modal" data-tw-target="#videoCallModal">
                                                        <i class="ri-vidicon-line"></i>
                                                    </button>
                                                </li>

                                                <li class="relative z-50 hidden modal dark:text-gray-300" id="videoCallModal">
                                                    <div class="fixed inset-0 z-50 overflow-hidden">
                                                        <div class="absolute inset-0 transition-opacity bg-black bg-opacity-50 modal-overlay"></div>
                                                        <div class="flex items-center justify-center max-w-lg min-h-screen p-4 mx-auto text-center animate-translate">
                                                            <div class="relative w-full max-w-lg my-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl -top-10 dark:bg-zinc-700">
                                                                <div class="group-data-[theme-color=violet]:bg-violet-800/10 group-data-[theme-color=green]:bg-green-50/50 group-data-[theme-color=red]:bg-red-50/50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                                                                    <div class="p-4">
                                                                        <div class="p-6">
                                                                            <div class="p-4 text-center">
                                                                                <div class="mb-6">
                                                                                    <img src="./assets/images/avatar-4.jpg" alt="" class="w-24 h-24 mx-auto rounded-full" />
                                                                                </div>

                                                                                <h5 class="mb-1 truncate dark:text-gray-50">Doris Brown</h5>
                                                                                <p class="text-gray-500 dark:text-gray-300">Start Video Call</p>

                                                                                <div class="mt-10">
                                                                                    <ul class="flex justify-center mb-1">
                                                                                        <li class="px-2 ml-0 mr-2">
                                                                                            <button type="button" class="w-12 h-12 text-white bg-red-500 border-transparent rounded-full btn hover:bg-red-600" data-tw-dismiss="modal">
                                                                                                <span class="text-xl bg-transparent">
                                                                                                    <i class="ri-close-fill"></i>
                                                                                                </span>
                                                                                            </button>
                                                                                        </li>
                                                                                        <li class="px-2">
                                                                                            <button type="button" class="w-12 h-12 text-white bg-green-500 border-transparent rounded-full btn hover:bg-green-600">
                                                                                                <span class="text-xl bg-transparent">
                                                                                                    <i class="ri-vidicon-fill"></i>
                                                                                                </span>
                                                                                            </button>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>



                                                <li class="px-3">
                                                    <a href="/" class="hidden text-gray-500 dark:text-gray-300 lg:block profileTab">
                                                        <i class="text-xl ri-group-line"></i>
                                                    </a>
                                                </li>

                                                <li class="px-3">
                                                    <div class="relative dropdown">
                                                        <button class="p-0 text-xl text-gray-500 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton11">
                                                            <i class="ri-more-fill"></i>
                                                        </button>
                                                        <ul class="absolute z-50 hidden w-40 py-2 mx-4 mt-2 text-left list-none bg-white border rounded shadow-lg ltr:-right-4 border-gray-50 dropdown-menu top-8 dark:bg-zinc-600 bg-clip-padding dark:border-gray-600/50 rtl:-left-5" aria-labelledby="dropdownMenuButton11">
                                                            <li class="block lg:hidden">
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent profileTab dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 ltr:text-left rtl:text-right" href="/">View profile <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-300 ri-user-2-line text-16"></i></a>
                                                            </li>
                                                            <li class="block lg:hidden"><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 ltr:text-left rtl:text-right" href="/" data-tw-toggle="modal" data-tw-target="#audiCallModal">Audio <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-300 ri-phone-line text-16"></i></a>
                                                            </li>
                                                            <li class="block lg:hidden"><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 ltr:text-left rtl:text-right" href="/" data-tw-toggle="modal" data-tw-target="#videoCallModal">Video <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-300 ri-vidicon-line text-16"></i></a>
                                                            </li>
                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 ltr:text-left rtl:text-right" href="/">Archive <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-300 ri-archive-line text-16"></i></a>
                                                            </li>
                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 ltr:text-left rtl:text-right" href="/">Muted <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-300 ri-volume-mute-line text-16"></i></a>
                                                            </li>
                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 ltr:text-left rtl:text-right" href="/">Delete <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-300 ri-delete-bin-line text-16"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="h-[80vh] p-4 lg:p-6 simplebar-scrollable-y" data-simplebar="init"><div class="simplebar-wrapper" style={{ margin: '-16px' }}><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style={{ right: '0px', bottom: '0px' }}><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: '100%', overflow: 'hidden scroll' }}><div class="simplebar-content" style={{ padding: '16px' }}>

                                    <ul class="mb-0">
                                        <li class="clear-both py-4">
                                            <div class="flex items-end gap-3">
                                                <div>
                                                    <img src="./assets/images/avatar-4.jpg" alt="" class="rounded-full h-9 w-9" />
                                                </div>

                                                <div>
                                                    <div class="flex gap-2 mb-2">
                                                        <div class="relative px-5 py-3 text-white rounded-lg ltr:rounded-bl-none rtl:rounded-br-none group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500">
                                                            <p class="mb-0">
                                                                Good morning
                                                            </p>
                                                            <p class="mt-1 mb-0 text-xs text-right text-white/50"><i class="align-middle ri-time-line"></i> <span class="align-middle">10:00</span></p>
                                                            <div class="before:content-[''] before:absolute before:border-[5px] before:border-transparent group-data-[theme-color=violet]:ltr:before:border-l-violet-500 group-data-[theme-color=violet]:ltr:before:border-t-violet-500 group-data-[theme-color=green]:ltr:before:border-l-green-500 group-data-[theme-color=green]:ltr:before:border-t-green-500 group-data-[theme-color=red]:ltr:before:border-l-red-500 group-data-[theme-color=red]:ltr:before:border-t-red-500 group-data-[theme-color=violet]:rtl:before:border-r-violet-500 group-data-[theme-color=violet]:rtl:before:border-t-violet-500 group-data-[theme-color=green]:rtl:before:border-r-green-500 group-data-[theme-color=green]:rtl:before:border-t-green-500 group-data-[theme-color=red]:rtl:before:border-r-red-500 group-data-[theme-color=red]:rtl:before:border-t-red-500 ltr:before:left-0 rtl:before:right-0 before:-bottom-2"></div>
                                                        </div>
                                                        <div class="relative self-start dropdown">
                                                            <a class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-100" href="/" role="button" data-bs-toggle="dropdown" id="dropdownMenuButton12">
                                                                <i class="ri-more-2-fill"></i>
                                                            </a>
                                                            <div class="absolute z-50 hidden w-40 py-2 my-6 text-left list-none bg-white border-none rounded shadow-lg ltr:left-auto ltr:right-0 xl:ltr:left-0 xl:ltr:right-auto rtl:left-0 rtl:right-auto xl:rtl:right-0 xl:rtl:left-auto dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-gray-600/50" aria-labelledby="dropdownMenuButton12">
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Copy <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-file-copy-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Save <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-save-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Forward <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-chat-forward-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-delete-bin-line"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="font-medium text-gray-700 text-14 dark:text-gray-300">Doris Brown</div>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="clear-both py-4">
                                            <div class="relative inline-flex items-end mb-6 text-right ltr:rtl:float-left ltr:float-right rtl:float-left">
                                                <div class="order-3 mr-0 ltr:ml-4 rtl:mr-4">
                                                    <img src="./assets/images/avatar-1.jpg" alt="" class="rounded-full h-9 w-9" />
                                                </div>

                                                <div>
                                                    <div class="flex gap-2 mb-2 ltr:justify-end rtl:justify-start">
                                                        <div class="relative order-2 px-5 py-3 text-gray-700 rounded-lg ltr:rounded-br-none rtl:rounded-bl-none bg-gray-50 dark:bg-zinc-700 dark:text-gray-50">
                                                            <p class="mb-0">
                                                                Good morning, How are you? What about our next meeting?
                                                            </p>
                                                            <p class="mt-1 mb-0 text-xs text-left text-gray-500 dark:text-gray-300"><i class="align-middle ri-time-line"></i> <span class="align-middle">10:02</span></p>
                                                            <div class="before:content-[''] before:absolute before:border-[5px] before:border-transparent ltr:before:border-r-gray-50 ltr:before:border-t-gray-50 rtl:before:border-l-gray-50 rtl:before:border-t-gray-50 ltr:before:right-0 rtl:before:left-0 before:-bottom-2 ltr:dark:before:border-t-zinc-700 ltr:dark:before:border-r-zinc-700 rtl:dark:before:border-t-zinc-700 rtl:dark:before:border-l-zinc-700"></div>
                                                        </div>

                                                        <div class="relative self-start order-1 dropstart">
                                                            <a class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-100" href="/" role="button" data-bs-toggle="dropdown" id="dropdownMenuButton13">
                                                                <i class="ri-more-2-fill"></i>
                                                            </a>
                                                            <div class="absolute z-50 hidden py-2 my-6 text-left list-none bg-white border-none rounded shadow-lg ltr:right-auto ltr:left-0 xl:ltr:right-0 xl:ltr:left-auto rtl:right-0 rtl:left-auto xl:rtl:left-0 xl:rtl:right-auto dropdown-menu w-36 bg-clip-padding dark:bg-zinc-700" aria-labelledby="dropdownMenuButton13">
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Copy <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-file-copy-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Save <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-save-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Forward <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-chat-forward-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-delete-bin-line"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="font-medium text-gray-700 rtl:text-left text-14 dark:text-gray-300">Patricia Smith</div>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="clear-both py-4">
                                            <div class="relative mt-3 mb-6 text-center">
                                                <div class="before:content-['] before:absolute before:w-full before:h-[1px] before:left-0 before:right-0 before:bg-gray-50 before:top-[10px] dark:before:bg-zinc-600"></div>
                                                <span class="relative bg-gray-50 text-13 py-[6px] px-3 rounded dark:bg-zinc-600 dark:text-gray-50">Today</span>
                                            </div>
                                        </li>

                                        <li class="clear-both py-4">
                                            <div class="flex items-end gap-3">
                                                <div>
                                                    <img src="./assets/images/avatar-4.jpg" alt="" class="rounded-full h-9 w-9" />
                                                </div>

                                                <div>
                                                    <div class="flex gap-2 mb-2">
                                                        <div class="relative px-5 py-3 text-white rounded-lg ltr:rounded-bl-none rtl:rounded-br-none group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500">
                                                            <p class="mb-0">
                                                                Yeah everything is fine
                                                            </p>
                                                            <p class="mt-1 mb-0 text-xs text-right text-white/50"><i class="align-middle ri-time-line"></i> <span class="align-middle">10:05</span></p>
                                                            <div class="before:content-[''] before:absolute before:border-[5px] before:border-transparent group-data-[theme-color=violet]:ltr:before:border-l-violet-500 group-data-[theme-color=violet]:ltr:before:border-t-violet-500 group-data-[theme-color=green]:ltr:before:border-l-green-500 group-data-[theme-color=green]:ltr:before:border-t-green-500 group-data-[theme-color=red]:ltr:before:border-l-red-500 group-data-[theme-color=red]:ltr:before:border-t-red-500 group-data-[theme-color=violet]:rtl:before:border-r-violet-500 group-data-[theme-color=violet]:rtl:before:border-t-violet-500 group-data-[theme-color=green]:rtl:before:border-r-green-500 group-data-[theme-color=green]:rtl:before:border-t-green-500 group-data-[theme-color=red]:rtl:before:border-r-red-500 group-data-[theme-color=red]:rtl:before:border-t-red-500 ltr:before:left-0 rtl:before:right-0 before:-bottom-2"></div>
                                                        </div>
                                                        <div class="relative self-start dropdown">
                                                            <a class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-100" href="/" role="button" data-bs-toggle="dropdown" id="dropdownMenuButton14">
                                                                <i class="ri-more-2-fill"></i>
                                                            </a>
                                                            <div class="absolute z-50 hidden w-40 py-2 my-6 text-left list-none bg-white border-none rounded shadow-lg ltr:left-auto ltr:right-0 xl:ltr:left-0 xl:ltr:right-auto rtl:left-0 rtl:right-auto xl:rtl:right-0 xl:rtl:left-auto dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-gray-600/50" aria-labelledby="dropdownMenuButton14">
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Copy <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-file-copy-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Save <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-save-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Forward <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-chat-forward-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-delete-bin-line"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="flex gap-2 mb-2">
                                                        <div class="relative px-5 py-3 text-white rounded-lg ltr:rounded-bl-none rtl:rounded-br-none group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500">
                                                            <p class="mb-0">
                                                                &amp; Next meeting tomorrow 10.00AM
                                                            </p>
                                                            <p class="mt-1 mb-0 text-xs text-right text-white/50"><i class="align-middle ri-time-line"></i> <span class="align-middle">10:05</span></p>
                                                            <div class="before:content-[''] before:absolute before:border-[5px] before:border-transparent group-data-[theme-color=violet]:ltr:before:border-l-violet-500 group-data-[theme-color=violet]:ltr:before:border-t-violet-500 group-data-[theme-color=green]:ltr:before:border-l-green-500 group-data-[theme-color=green]:ltr:before:border-t-green-500 group-data-[theme-color=red]:ltr:before:border-l-red-500 group-data-[theme-color=red]:ltr:before:border-t-red-500 group-data-[theme-color=violet]:rtl:before:border-r-violet-500 group-data-[theme-color=violet]:rtl:before:border-t-violet-500 group-data-[theme-color=green]:rtl:before:border-r-green-500 group-data-[theme-color=green]:rtl:before:border-t-green-500 group-data-[theme-color=red]:rtl:before:border-r-red-500 group-data-[theme-color=red]:rtl:before:border-t-red-500 ltr:before:left-0 rtl:before:right-0 before:-bottom-2"></div>
                                                        </div>
                                                        <div class="relative self-start dropdown">
                                                            <a class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-100" href="/" role="button" data-bs-toggle="dropdown" id="dropdownMenuButton15">
                                                                <i class="ri-more-2-fill"></i>
                                                            </a>
                                                            <div class="absolute z-50 hidden w-40 py-2 my-6 text-left list-none bg-white border-none rounded shadow-lg ltr:left-auto ltr:right-0 xl:ltr:left-0 xl:ltr:right-auto rtl:left-0 rtl:right-auto xl:rtl:right-0 xl:rtl:left-auto dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-gray-600/50" aria-labelledby="dropdownMenuButton15">
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Copy <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-file-copy-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Save <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-save-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Forward <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-chat-forward-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-delete-bin-line"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="font-medium text-gray-700 text-14 dark:text-gray-300">Doris Brown</div>
                                                </div>

                                            </div>
                                        </li>

                                        <li class="clear-both py-4">
                                            <div class="relative inline-flex items-end mb-6 text-right ltr:rtl:float-left ltr:float-right rtl:float-left">
                                                <div class="order-3 mr-0 ltr:ml-4 rtl:mr-4">
                                                    <img src="./assets/images/avatar-1.jpg" alt="" class="rounded-full h-9 w-9" />
                                                </div>

                                                <div>
                                                    <div class="flex gap-2 mb-2 ltr:justify-end rtl:justify-start">
                                                        <div class="relative order-2 px-5 py-3 text-gray-700 rounded-lg ltr:rounded-br-none rtl:rounded-bl-none bg-gray-50 dark:bg-zinc-700 dark:text-gray-50">
                                                            <p class="mb-0">
                                                                Wow that's great
                                                            </p>
                                                            <p class="mt-1 mb-0 text-xs text-left text-gray-500 dark:text-gray-300"><i class="align-middle ri-time-line"></i> <span class="align-middle">10:06</span></p>
                                                            <div class="before:content-[''] before:absolute before:border-[5px] before:border-transparent ltr:before:border-r-gray-50 ltr:before:border-t-gray-50 rtl:before:border-l-gray-50 rtl:before:border-t-gray-50 ltr:before:right-0 rtl:before:left-0 before:-bottom-2 ltr:dark:before:border-t-zinc-700 ltr:dark:before:border-r-zinc-700 rtl:dark:before:border-t-zinc-700 rtl:dark:before:border-l-zinc-700"></div>
                                                        </div>
                                                        <div class="relative self-start order-1 dropdown">
                                                            <a class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-100" href="/" role="button" data-bs-toggle="dropdown" id="dropdownMenuButton16">
                                                                <i class="ri-more-2-fill"></i>
                                                            </a>
                                                            <div class="absolute z-50 hidden py-2 my-6 text-left list-none bg-white border-none rounded shadow-lg ltr:right-auto ltr:left-0 xl:ltr:right-0 xl:ltr:left-auto rtl:right-0 rtl:left-auto xl:rtl:left-0 xl:rtl:right-auto dropdown-menu w-36 bg-clip-padding dark:bg-zinc-700" aria-labelledby="dropdownMenuButton16">
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Copy <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-file-copy-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Save <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-save-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Forward <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-chat-forward-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-delete-bin-line"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="font-medium text-gray-700 rtl:text-left text-14 dark:text-gray-300">Patricia Smith</div>
                                                </div>

                                            </div>
                                        </li>

                                        <li class="clear-both py-4">
                                            <div class="flex items-end gap-3">
                                                <div>
                                                    <img src="./assets/images/avatar-4.jpg" alt="" class="rounded-full h-9 w-9" />
                                                </div>

                                                <div>
                                                    <div class="flex gap-2 mb-2">

                                                        <div class="relative px-5 py-3 text-white rounded-lg ltr:rounded-bl-none rtl:rounded-br-none group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500">
                                                            <div class="before:content-[''] before:absolute before:border-[5px] before:border-transparent group-data-[theme-color=violet]:ltr:before:border-l-violet-500 group-data-[theme-color=violet]:ltr:before:border-t-violet-500 group-data-[theme-color=green]:ltr:before:border-l-green-500 group-data-[theme-color=green]:ltr:before:border-t-green-500 group-data-[theme-color=red]:ltr:before:border-l-red-500 group-data-[theme-color=red]:ltr:before:border-t-red-500 group-data-[theme-color=violet]:rtl:before:border-r-violet-500 group-data-[theme-color=violet]:rtl:before:border-t-violet-500 group-data-[theme-color=green]:rtl:before:border-r-green-500 group-data-[theme-color=green]:rtl:before:border-t-green-500 group-data-[theme-color=red]:rtl:before:border-r-red-500 group-data-[theme-color=red]:rtl:before:border-t-red-500 ltr:before:left-0 rtl:before:right-0 before:-bottom-2"></div>
                                                            <ul class="relative mb-0">
                                                                <li class="relative inline-block mr-2">
                                                                    <div>
                                                                        <a class="inline-block m-1 popup-img" href="assets/images/small/img-1.jpg" title="Project 1">
                                                                            <img src="./assets/images/img-1.jpg" alt="" class="border rounded h-28" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="absolute right-[10px] left-auto bottom-[10px]">
                                                                        <ul>
                                                                            <li class="inline-block p-2">
                                                                                <a download="img-1.jpg" href="assets/images/small/img-1.jpg" class="font-medium">
                                                                                    <i class="text-lg ri-download-2-line"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li class="relative self-start inline-block p-2 dropdown">
                                                                                <a class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-100" href="/" role="button" data-bs-toggle="dropdown" id="dropdownMenuButton17">
                                                                                    <i class="text-lg text-white ri-more-2-fill"></i>
                                                                                </a>
                                                                                <div class="absolute z-50 hidden w-40 py-2 my-10 text-left list-none bg-white border-none rounded shadow-lg ltr:left-0 ltr:right-auto rtl:right-0 rtl:left-auto dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-gray-600/50" aria-labelledby="dropdownMenuButton19">
                                                                                    <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Copy <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-100 ri-file-copy-line"></i></a>
                                                                                    <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Save <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-save-line"></i></a>
                                                                                    <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Forward <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-chat-forward-line"></i></a>
                                                                                    <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-delete-bin-line"></i></a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>

                                                                <li class="relative inline-block mr-2">
                                                                    <div>
                                                                        <a class="inline-block m-1 popup-img" href="assets/images/small/img-2.jpg" title="Project 2">
                                                                            <img src="./assets/images/img-2.jpg" alt="" class="border rounded h-28" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="absolute right-[10px] left-auto bottom-[10px]">
                                                                        <ul class="mb-0 list-inline">
                                                                            <li class="inline-block p-2">
                                                                                <a download="img-2.jpg" href="assets/images/small/img-2.jpg" class="font-medium">
                                                                                    <i class="text-lg ri-download-2-line"></i>
                                                                                </a>
                                                                            </li>
                                                                            <li class="relative self-start inline-block p-2 dropdown">
                                                                                <a class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" href="/" role="button" data-bs-toggle="dropdown" id="dropdownMenuButton18">
                                                                                    <i class="text-lg text-white ri-more-2-fill"></i>
                                                                                </a>
                                                                                <div class="absolute z-50 hidden w-40 py-2 my-10 text-left list-none bg-white border-none rounded shadow-lg ltr:left-0 ltr:right-auto rtl:right-0 rtl:left-auto dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-gray-600/50" aria-labelledby="dropdownMenuButton19">
                                                                                    <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Copy <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-100 ri-file-copy-line"></i></a>
                                                                                    <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Save <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-save-line"></i></a>
                                                                                    <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Forward <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-chat-forward-line"></i></a>
                                                                                    <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-delete-bin-line"></i></a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <p class="mt-1 mb-0 text-xs text-right text-white/50"><i class="align-middle ri-time-line"></i> <span class="align-middle">10:09</span></p>
                                                        </div>

                                                        <div class="relative self-start dropdown">
                                                            <a class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" href="/" role="button" data-bs-toggle="dropdown" id="dropdownMenuButton19">
                                                                <i class="ri-more-2-fill"></i>
                                                            </a>
                                                            <div class="absolute z-50 hidden w-40 py-2 my-6 text-left list-none bg-white border-none rounded shadow-lg ltr:left-auto ltr:right-0 xl:ltr:left-0 xl:ltr:right-auto rtl:left-0 rtl:right-auto xl:rtl:right-0 xl:rtl:left-auto dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-gray-600/50" aria-labelledby="dropdownMenuButton19">
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Copy <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-100 ri-file-copy-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Save <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-save-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Forward <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-chat-forward-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-delete-bin-line"></i></a>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div class="font-medium text-gray-700 text-14 dark:text-gray-300">Doris Brown</div>
                                                </div>

                                            </div>
                                        </li>

                                        <li class="clear-both py-4">
                                            <div class="relative inline-flex items-end mb-6 text-right ltr:rtl:float-left ltr:float-right rtl:float-left">
                                                <div class="order-3 mr-0 ltr:ml-4 rtl:mr-4">
                                                    <img src="./assets/images/avatar-1.jpg" alt="" class="rounded-full h-9 w-9" />
                                                </div>

                                                <div>
                                                    <div class="flex justify-end gap-2 mb-2">

                                                        <div class="relative order-2 px-5 py-3 text-gray-700 rounded-lg rounded-br-none bg-gray-50 dark:bg-zinc-700">
                                                            <div class="before:content-[''] before:absolute before:border-[5px] before:border-transparent ltr:before:border-r-gray-50 ltr:before:border-t-gray-50 rtl:before:border-l-gray-50 rtl:before:border-t-gray-50 ltr:before:right-0 rtl:before:left-0 before:-bottom-2 ltr:dark:before:border-t-zinc-700 ltr:dark:before:border-r-zinc-700 rtl:dark:before:border-t-zinc-700 rtl:dark:before:border-l-zinc-700"></div>
                                                            <div class="p-2 mb-2 bg-white rounded dark:bg-zinc-800">
                                                                <div class="flex flex-wrap items-center gap-2 attached-file">
                                                                    <div class="flex items-center justify-center w-12 h-12 rounded group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                        <i class="ri-file-text-fill"></i>
                                                                    </div>
                                                                    <div class="overflow-hidden flex-grow-1">
                                                                        <div class="text-start">
                                                                            <h5 class="mb-1 truncate text-14 dark:text-gray-50">admin_v1.0.zip</h5>
                                                                            <p class="mb-0 text-gray-500 truncate text-13 dark:text-gray-500">12.5 MB</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="rtl:mr-4 ltr:ml-4">
                                                                        <div class="flex items-start gap-2">
                                                                            <div>
                                                                                <a download="admin_v1.0.zip" href="assets/images/small/admin_v1.0.zip" class="font-medium ">
                                                                                    <i class="text-lg group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 ri-download-2-line"></i>
                                                                                </a>
                                                                            </div>
                                                                            <div class="relative self-start order-1 dropstart">
                                                                                <a class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" href="/" role="button" data-bs-toggle="dropdown" id="dropdownMenuButton20">
                                                                                    <i class="text-lg text-gray-500 ri-more-2-fill dark:text-gray-300"></i>
                                                                                </a>
                                                                                <div class="absolute left-0 right-auto z-50 hidden py-2 my-6 text-left list-none bg-white border-none rounded shadow-lg lg:ltr:right-0 lg:ltr:left-auto rtl:left-0 rtl:right-auto dropdown-menu w-36 bg-clip-padding dark:bg-zinc-700" aria-labelledby="dropdownMenuButton20">

                                                                                    <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Forward <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-100 ri-chat-forward-line"></i></a>
                                                                                    <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-100 ri-delete-bin-line"></i></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <p class="mt-1 mb-0 text-xs text-left text-gray-500"><i class="align-middle ri-time-line"></i> <span class="align-middle">10:16</span></p>
                                                        </div>

                                                        <div class="relative self-start order-1 dropstart">
                                                            <a class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-100" href="/" role="button" data-bs-toggle="dropdown" id="dropdownMenuButton21">
                                                                <i class="ri-more-2-fill"></i>
                                                            </a>
                                                            <div class="absolute z-50 hidden py-2 my-6 text-left list-none bg-white border-none rounded shadow-lg ltr:right-auto ltr:left-0 xl:ltr:right-0 xl:ltr:left-auto rtl:right-0 rtl:left-auto xl:rtl:left-0 xl:rtl:right-auto dropdown-menu w-36 bg-clip-padding dark:bg-zinc-700" aria-labelledby="dropdownMenuButton21">
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Copy <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-100 ri-file-copy-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Save <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-100 ri-save-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Forward <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-100 ri-chat-forward-line"></i></a>
                                                                <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="/">Delete <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-100 ri-delete-bin-line"></i></a>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div class="font-medium text-gray-700 rtl:text-left text-14 dark:text-gray-300">Patricia Smith</div>
                                                </div>

                                            </div>
                                        </li>

                                        <li class="clear-both py-4">
                                            <div class="flex items-end gap-3">
                                                <div>
                                                    <img src="./assets/images/avatar-4.jpg" alt="" class="rounded-full h-9 w-9" />
                                                </div>

                                                <div>
                                                    <div class="flex gap-2 mb-2">
                                                        <div class="relative px-5 py-3 text-white rounded-lg ltr:rounded-bl-none rtl:rounded-br-none group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500">
                                                            <div class="before:content-[''] before:absolute before:border-[5px] before:border-transparent group-data-[theme-color=violet]:ltr:before:border-l-violet-500 group-data-[theme-color=violet]:ltr:before:border-t-violet-500 group-data-[theme-color=green]:ltr:before:border-l-green-500 group-data-[theme-color=green]:ltr:before:border-t-green-500 group-data-[theme-color=red]:ltr:before:border-l-red-500 group-data-[theme-color=red]:ltr:before:border-t-red-500 group-data-[theme-color=violet]:rtl:before:border-r-violet-500 group-data-[theme-color=violet]:rtl:before:border-t-violet-500 group-data-[theme-color=green]:rtl:before:border-r-green-500 group-data-[theme-color=green]:rtl:before:border-t-green-500 group-data-[theme-color=red]:rtl:before:border-r-red-500 group-data-[theme-color=red]:rtl:before:border-t-red-500 ltr:before:left-0 rtl:before:right-0 before:-bottom-2"></div>
                                                            <div class="flex items-end gap-2 mb-0 text-white text-14">
                                                                <p class="mb-0">typing</p>

                                                                <div class="animate-typing flex gap-0.5">
                                                                    <p class="w-1 h-1 mb-1 bg-white rounded-full dot animate-bounce"></p>
                                                                    <p class="w-1 h-1 mb-1 bg-white rounded-full dot-2 "></p>
                                                                    <p class="w-1 h-1 mb-1 bg-white rounded-full dot-3 animate-bounce"></p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="font-medium text-gray-700 text-14 dark:text-gray-300">Doris Brown</div>
                                                </div>

                                            </div>
                                        </li>

                                    </ul>
                                </div></div></div></div><div class="simplebar-placeholder" style={{ width: '414px', height: '1396px' }}></div></div><div class="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div class="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}></div></div><div class="simplebar-track simplebar-vertical" style={{ visibility: 'visible' }}><div class="simplebar-scrollbar" style={{ height: '368px', transform: 'translate3d(0px, 0px, 0px)', display: 'block' }}></div></div></div>

                                <div class="z-40 w-full p-6 mb-0 bg-white border-t lg:mb-1 border-gray-50 dark:bg-zinc-800 dark:border-zinc-700">

                                    <div class="flex gap-2">

                                        <div class="flex-grow">
                                            <input type="text" class="w-full border-transparent rounded bg-gray-50 placeholder:text-14 text-14 dark:bg-zinc-700 dark:placeholder:text-gray-300 dark:text-gray-300" placeholder="Enter Message..." />
                                        </div>
                                        <div>
                                            <div>
                                                <ul class="mb-0">
                                                    <li class="inline-block" title="Emoji">
                                                        <button type="button" class="border-transparent group/tooltip btn relative group-data-[theme-color=violet]:dark:text-violet-200 group-data-[theme-color=green]:dark:text-green-200 group-data-[theme-color=red]:dark:text-red-200 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 text-16">
                                                            <div class="absolute items-center hidden -top-10 ltr:-left-2 group-hover/tooltip:flex rtl:-right-2">
                                                                <div class="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                                                                <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Emoji</span>
                                                            </div>
                                                            <i class="ri-emotion-happy-line"></i>
                                                        </button>
                                                    </li>
                                                    <li class="inline-block" title="Attached File">
                                                        <button type="button" class="border-transparent btn group/tooltip group-data-[theme-color=violet]:dark:text-violet-200 group-data-[theme-color=green]:dark:text-green-200 group-data-[theme-color=red]:dark:text-red-200 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 text-16">
                                                            <div class="absolute items-center hidden -top-10 ltr:-left-2 group-hover/tooltip:flex rtl:-right-2">
                                                                <div class="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                                                                <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Attached File</span>
                                                            </div>
                                                            <i class="ri-attachment-line"></i>
                                                        </button>
                                                    </li>
                                                    <li class="inline-block">
                                                        <button type="submit" class="text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=violet]:hover:bg-violet-600 group-data-[theme-color=green]:hover:bg-green-600">
                                                            <i class="ri-send-plane-2-fill"></i>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div class="user-profile-sidebar h-[100vh] bg-white shadow overflow-y-hidden mb-[85px] lg:mb-0 group-data-[theme-color=violet]:dark:bg-zinc-800 border-l-4 border-gray-50 dark:border-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-700 group-data-[theme-color=red]:dark:bg-zinc-700 absolute xl:relative top-0 bottom-0" style={{ display: 'none' }}>

                                <div class="px-6 pt-6">
                                    <div class="text-end">
                                        <button type="button" class="text-2xl text-gray-500 border-0 btn dark:text-gray-200" id="user-profile-hide">
                                            <i class="ri-close-line"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="p-6 text-center border-b border-gray-100 dark:border-zinc-600">
                                    <div class="mb-4">
                                        <img src="./assets/images/avatar-1.jpg" class="w-24 h-24 p-1 mx-auto border border-gray-100 rounded-full dark:border-zinc-800" alt="" />
                                    </div>

                                    <h5 class="mb-1 text-16 dark:text-gray-50">Doris Brown</h5>
                                    <h5 class="mb-0 truncate text-14 ltr:block rtl:hidden"><a href="/" class="text-gray-500 dark:text-gray-50"><i class="text-green-500 ltr:ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i> Active</a></h5>
                                    <h5 class="mb-0 truncate text-14 ltr:hidden rtl:block"><a href="/" class="text-gray-500 dark:text-gray-50">Active <i class="text-green-500 ltr:ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i></a></h5>
                                </div>



                                <div class="p-6 h-[550px]" data-simplebar="init"><div class="simplebar-wrapper" style={{ margin: '-24px' }}><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style={{ right: '0px', bottom: '0px' }}><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: 'auto', overflow: 'hidden' }}><div class="simplebar-content" style={{ padding: '24px' }}>
                                    <div>
                                        <p class="mb-6 text-gray-500 dark:text-gray-300">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                                    </div>

                                    <div data-tw-accordion="collapse">
                                        <div class="text-gray-700 accordion-item">
                                            <h2>
                                                <button type="button" class="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded-t accordion-header group active dark:border-b-zinc-600 dark:bg-zinc-600 dark:border-zinc-600">
                                                    <span class="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:block rtl:hidden">
                                                        <i class="mr-2 align-middle ri-user-2-line d-inline-block"></i> About
                                                    </span>
                                                    <span class="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:hidden rtl:block">
                                                        About <i class="ml-2 align-middle ri-user-2-line d-inline-block"></i>
                                                    </span>
                                                    <i class="mdi mdi-chevron-down text-lg group-[.active]:rotate-180 dark:text-gray-50"></i>
                                                </button>
                                            </h2>

                                            <div class="block bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                                                <div class="p-5">
                                                    <div>
                                                        <p class="mb-1 text-gray-500 dark:text-gray-300">Name</p>
                                                        <h5 class="text-sm dark:text-gray-50">Doris Brown</h5>
                                                    </div>
                                                    <div class="mt-5">
                                                        <p class="mb-1 text-gray-500 dark:text-gray-300">Email</p>
                                                        <h5 class="text-sm dark:text-gray-50">adc@123.com</h5>
                                                    </div>
                                                    <div class="mt-5">
                                                        <p class="mb-1 text-gray-500 dark:text-gray-300">Time</p>
                                                        <h5 class="text-sm dark:text-gray-50">11:40 AM</h5>
                                                    </div>
                                                    <div class="mt-5">
                                                        <p class="mb-1 text-gray-500 dark:text-gray-300">Location</p>
                                                        <h5 class="text-sm dark:text-gray-50">California, USA</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-2 text-gray-700 accordion-item">
                                            <h2>
                                                <button type="button" class="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded accordion-header group dark:border-b-zinc-600 dark:bg-zinc-600 dark:border-zinc-600">
                                                    <span class="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:block rtl:hidden">
                                                        <i class="mr-2 align-middle ri-attachment-line d-inline-block"></i> Attached Files
                                                    </span>
                                                    <span class="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:hidden rtl:block">
                                                        Attached Files <i class="ml-2 align-middle ri-attachment-line d-inline-block"></i>
                                                    </span>
                                                    <i class="mdi mdi-chevron-down text-lg group-[.active]:rotate-180 dark:text-gray-50"></i>
                                                </button>
                                            </h2>
                                            <div class="hidden bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                                                <div class="p-5">
                                                    <div class="p-2 mb-2 border rounded border-gray-100/80 dark:bg-zinc-800 dark:border-transparent">
                                                        <div class="flex items-center">
                                                            <div class="flex items-center justify-center w-10 h-10 rounded ltr:mr-3 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20 rtl:ml-3">
                                                                <div class="text-xl rounded-lg group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 avatar-title ">
                                                                    <i class="ri-file-text-fill"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow">
                                                                <div class="text-start">
                                                                    <h5 class="mb-1 text-sm dark:text-gray-50">Admin-A.zip</h5>
                                                                    <p class="mb-0 text-gray-500 text-13 dark:text-gray-300">12.5 MB</p>
                                                                </div>
                                                            </div>

                                                            <div class="ltr:ml-4 rtl:mr-4">
                                                                <ul class="flex items-center gap-3 mb-0 text-lg">
                                                                    <li>
                                                                        <a href="/" class="px-1 text-gray-500 dark:text-gray-300">
                                                                            <i class="ri-download-2-line"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li class="relative flex-shrink-0 dropstart">
                                                                        <a href="#!" class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButton23">
                                                                            <i class="text-lg ri-more-fill"></i>
                                                                        </a>
                                                                        <ul class="absolute z-50 w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600 hidden" aria-labelledby="dropdownMenuButton23">
                                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Action</a>
                                                                            </li>
                                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Another action</a>
                                                                            </li>
                                                                            <li class="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Delete</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="p-2 mb-2 border rounded border-gray-100/80 dark:bg-zinc-800 dark:border-transparent">
                                                        <div class="flex items-center">
                                                            <div class="flex items-center justify-center w-10 h-10 rounded ltr:mr-3 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20 rtl:ml-3">
                                                                <div class="text-xl rounded-lg group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 avatar-title ">
                                                                    <i class="ri-file-text-fill"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow">
                                                                <div class="text-start">
                                                                    <h5 class="mb-1 text-sm dark:text-gray-50">Image-1.jpg</h5>
                                                                    <p class="mb-0 text-gray-500 text-13 dark:text-gray-300">4.2 MB</p>
                                                                </div>
                                                            </div>

                                                            <div class="ltr:ml-4 rtl:mr-4">
                                                                <ul class="flex items-center gap-3 mb-0 text-lg">
                                                                    <li>
                                                                        <a href="/" class="px-1 text-gray-500 dark:text-gray-300">
                                                                            <i class="ri-download-2-line"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li class="relative flex-shrink-0 dropstart">
                                                                        <a href="#!" class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButton2">
                                                                            <i class="text-lg ri-more-fill"></i>
                                                                        </a>
                                                                        <ul class="absolute z-50 w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600 hidden" aria-labelledby="dropdownMenuButton2">
                                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Action</a>
                                                                            </li>
                                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Another action</a>
                                                                            </li>
                                                                            <li class="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Delete</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="p-2 mb-2 border rounded border-gray-100/80 dark:bg-zinc-800 dark:border-transparent">
                                                        <div class="flex items-center">
                                                            <div class="flex items-center justify-center w-10 h-10 rounded ltr:mr-3 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20 rtl:ml-3">
                                                                <div class="text-xl rounded-lg group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 avatar-title ">
                                                                    <i class="ri-file-text-fill"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow">
                                                                <div class="text-start">
                                                                    <h5 class="mb-1 text-sm dark:text-gray-50">Image-2.jpg</h5>
                                                                    <p class="mb-0 text-gray-500 text-13 dark:text-gray-300">3.1 MB</p>
                                                                </div>
                                                            </div>

                                                            <div class="ltr:ml-4 rtl:mr-4">
                                                                <ul class="flex items-center gap-3 mb-0 text-lg">
                                                                    <li>
                                                                        <a href="/" class="px-1 text-gray-500 dark:text-gray-300">
                                                                            <i class="ri-download-2-line"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li class="relative flex-shrink-0 dropstart">
                                                                        <a href="#!" class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButton3">
                                                                            <i class="text-lg ri-more-fill"></i>
                                                                        </a>
                                                                        <ul class="absolute z-50 w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600 hidden" aria-labelledby="dropdownMenuButton3">
                                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Action</a>
                                                                            </li>
                                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Another action</a>
                                                                            </li>
                                                                            <li class="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Delete</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="p-2 mb-2 border rounded border-gray-100/80 dark:bg-zinc-800 dark:border-transparent">
                                                        <div class="flex items-center">
                                                            <div class="flex items-center justify-center w-10 h-10 rounded ltr:mr-3 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20 rtl:ml-3">
                                                                <div class="text-xl rounded-lg group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 avatar-title ">
                                                                    <i class="ri-file-text-fill"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow">
                                                                <div class="text-start">
                                                                    <h5 class="mb-1 text-sm dark:text-gray-50">Landing-A.zip</h5>
                                                                    <p class="mb-0 text-gray-500 text-13 dark:text-gray-300">6.7 MB</p>
                                                                </div>
                                                            </div>

                                                            <div class="ltr:ml-4 rtl:mr-4">
                                                                <ul class="flex items-center gap-3 mb-0 text-lg">
                                                                    <li>
                                                                        <a href="/" class="px-1 text-gray-500 dark:text-gray-300">
                                                                            <i class="ri-download-2-line"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li class="relative flex-shrink-0 dropstart">
                                                                        <a href="#!" class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButton4">
                                                                            <i class="text-lg ri-more-fill"></i>
                                                                        </a>
                                                                        <ul class="absolute z-50 w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600 hidden" aria-labelledby="dropdownMenuButton4">
                                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Action</a>
                                                                            </li>
                                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Another action</a>
                                                                            </li>
                                                                            <li class="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                                                            <li><a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600" href="/">Delete</a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div></div></div></div><div class="simplebar-placeholder" style={{ width: '0px', height: '0px' }}></div></div><div class="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div class="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}></div></div><div class="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}><div class="simplebar-scrollbar" style={{ height: '0px', display: 'none' }}></div></div></div>
                            </div>

                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Groups
