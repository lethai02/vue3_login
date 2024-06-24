<template>
    <div class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
          <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold text-gray-900 md:text-2xl">
                      Login an account
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">
                      <div>
                          <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 w-full p-2.5 " placeholder="name@company.com" required="">
                      </div>
                      <div>
                          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 w-full p-2.5 " required="">
                      </div>
                      <div class="flex items-center justify-between">
                          <div class="flex items-start">
                              <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 " required="">
                              </div>
                              <div class="ml-3 text-sm">
                                <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                              </div>
                          </div>
                          <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                      </div>
                      <router-link to="/product">
                      <button type="submit" class="w-full text-black hover:bg-gray-500 p-2 w-20 rounded-lg bg-gray-200 ">Login</button>
                    </router-link>
                      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </div>
    </template>
    <script>
    </script>