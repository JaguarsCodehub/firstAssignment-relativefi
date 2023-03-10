import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[#16052a]'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#16052a] overflow-hidden">
        <nav className="px-2 sm:px-4 py-2.5 bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="" className="flex items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/btc.png"
                className="h-6 mr-3 sm:h-9"
                alt=""
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                Trending Assets
              </span>
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="justify-center items-center align-middle mr-80 xl:mr-2 p-44 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {/* Card One */}
          <div className="card flex drop-shadow-lg shadow-inner shadow-purple-800 rounded-2xl rounded-b-2xl justify-center justify-start relative w-[360px] h-[500px] m-8 bg-[#2c0855]">
            <div
              className={`${styles.icon} relative w-[140px] h-[100px] bg-[#16052a] rounded-b-full`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/btc.png"
                alt=""
                className={`${styles.image} shadow-inner shadow-purple-800 bg-[#321060] rounded-full p-4 w-24 ml-5 bottom-6 relative z-[1000] cursor-pointer`}
              />
            </div>
            <div className="content absolute w-[100%] p-8 pt-32 text-center">
              <h2 className="font-bold text-purple-500 text-lg font-poppins">
                Bitcoin (BTC)
              </h2>
              <div className="flex flex-row cursor-pointer justify-center p-3 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <p className="text-white font-extrabold text-xl ml-2">
                  $31,812.80
                </p>
                <p className="text-[#00FFA6] font-extrabold text-lg ml-1">
                  +10%
                </p>
              </div>

              <h2 className="font-bold text-purple-500 text-md font-poppins mt-4">
                Price
              </h2>
              <div className="flex flex-row cursor-pointer justify-center p-3 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <p className="text-white font-extrabold text-xl">$60,000</p>
              </div>

              <h3 className="font-bold text-purple-500 text-md font-poppins mt-4">
                TVL
              </h3>

              <div className="flex flex-row cursor-pointer w-40 ml-16 items-center justify-center p-2 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/black/sol.png"
                />
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/white/eth.png"
                />
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/appc.png"
                />
              </div>

              <h1 className="font-bold text-gray-400 text-md font-sans mt-4">
                Popular pairs
              </h1>
            </div>
          </div>
          {/* Card Two */}
          <div className="card flex drop-shadow-lg shadow-inner shadow-purple-800 rounded-2xl rounded-b-2xl justify-center justify-start relative w-[360px] h-[500px] m-8 bg-[#2e0b57]">
            <div
              className={`${styles.icon} relative w-[140px] h-[100px] bg-[#16052a] rounded-b-full`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/white/sol.png"
                alt=""
                className={`${styles.image} shadow-inner shadow-purple-800 bg-[#321060] rounded-full p-4 w-24 ml-5 bottom-6 relative z-[1000] cursor-pointer`}
              />
            </div>
            <div className="content absolute w-[100%] p-8 pt-32 text-center">
              <h2 className="font-bold text-purple-500 text-lg font-poppins">
                Solana (SOL)
              </h2>
              <div className="flex flex-row cursor-pointer justify-center p-3 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <p className="text-white font-extrabold text-xl ml-2">$32.83</p>
                <p className="text-[#FF6D6D] font-extrabold text-lg ml-4">
                  -12.32%
                </p>
              </div>

              <h2 className="font-bold text-purple-500 text-md font-poppins mt-4">
                Price
              </h2>
              <div className="flex flex-row cursor-pointer justify-center p-3 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <p className="text-white font-extrabold text-xl">$60,000</p>
              </div>

              <h3 className="font-bold text-purple-500 text-md font-poppins mt-4">
                TVL
              </h3>

              <div className="flex flex-row cursor-pointer w-40 ml-16 items-center justify-center p-2 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/btc.png"
                />
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/white/eth.png"
                />
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/appc.png"
                />
              </div>

              <h1 className="font-bold text-gray-400 text-md font-sans mt-4">
                Popular pairs
              </h1>
            </div>
          </div>
          {/* Card Three */}
          <div className="card flex drop-shadow-lg shadow-inner shadow-purple-800 rounded-2xl rounded-b-2xl justify-center justify-start relative w-[360px] h-[500px] m-8 bg-[#2e0b57]">
            <div
              className={`${styles.icon} relative w-[140px] h-[100px] bg-[#16052a] rounded-b-full`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/white/eth.png"
                alt=""
                className={`${styles.image} shadow-inner shadow-purple-800 bg-[#321060] rounded-full p-4 w-24 ml-5 bottom-6 relative z-[1000] cursor-pointer`}
              />
            </div>
            <div className="content absolute w-[100%] p-8 pt-32 text-center">
              <h2 className="font-bold text-purple-500 text-lg font-poppins">
                Ethereum (ETH)
              </h2>
              <div className="flex flex-row cursor-pointer justify-center p-3 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <p className="text-white font-extrabold text-xl ml-2">
                  $1466.45
                </p>
                <p className="text-[#00FFA6] font-extrabold text-lg ml-1">
                  -11.93%
                </p>
              </div>

              <h2 className="font-bold text-purple-500 text-md font-poppins mt-4">
                Price
              </h2>
              <div className="flex flex-row cursor-pointer justify-center p-3 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <p className="text-white font-extrabold text-xl">$60,000</p>
              </div>

              <h3 className="font-bold text-purple-500 text-md font-poppins mt-4">
                TVL
              </h3>

              <div className="flex flex-row cursor-pointer w-40 ml-16 items-center justify-center p-2 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/btc.png"
                />
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/white/eth.png"
                />
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/appc.png"
                />
              </div>

              <h1 className="font-bold text-gray-400 text-md font-sans mt-4">
                Popular pairs
              </h1>
            </div>
          </div>
          {/* Card Four */}
          <div className="card flex drop-shadow-lg shadow-inner shadow-purple-800 rounded-2xl rounded-b-2xl justify-center justify-start relative w-[360px] h-[500px] m-8 bg-[#2e0b57]">
            <div
              className={`${styles.icon} relative w-[140px] h-[100px] bg-[#16052a] rounded-b-full`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/bnb.png"
                alt=""
                className={`${styles.image} shadow-inner shadow-purple-800 bg-[#321060] rounded-full p-4 w-24 ml-5 bottom-6 relative z-[1000] cursor-pointer`}
              />
            </div>
            <div className="content absolute w-[100%] p-8 pt-32 text-center">
              <h2 className="font-bold text-purple-500 text-lg font-poppins">
                Binance USD (BUSD)
              </h2>
              <div className="flex flex-row cursor-pointer justify-center p-3 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <p className="text-white font-extrabold text-xl ml-2">$1.00</p>
                <p className="text-[#00FFA6] font-extrabold text-lg ml-1">
                  +0.26%
                </p>
              </div>

              <h2 className="font-bold text-purple-500 text-md font-poppins mt-4">
                Price
              </h2>
              <div className="flex flex-row cursor-pointer justify-center p-3 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <p className="text-white font-extrabold text-xl">$60,000</p>
              </div>

              <h3 className="font-bold text-purple-500 text-md font-poppins mt-4">
                TVL
              </h3>

              <div className="flex flex-row cursor-pointer w-40 ml-16 items-center justify-center p-2 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/black/sol.png"
                />
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/white/eth.png"
                />
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/appc.png"
                />
              </div>

              <h1 className="font-bold text-gray-400 text-md font-sans mt-4">
                Popular pairs
              </h1>
            </div>
          </div>
          {/* Card Five */}
          <div className="card flex drop-shadow-lg shadow-inner shadow-purple-800 rounded-2xl rounded-b-2xl justify-center justify-start relative w-[360px] h-[500px] m-8 bg-[#2e0b57]">
            <div
              className={`${styles.icon} relative w-[140px] h-[100px] bg-[#16052a] rounded-b-full`}
            >
              <img
                src="data:image/png;base64,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"
                alt=""
                className={`${styles.image} shadow-inner shadow-purple-800 bg-[#321060] rounded-full p-4 w-24 ml-5 bottom-6 relative z-[1000] cursor-pointer`}
              />
            </div>
            <div className="content absolute w-[100%] p-8 pt-32 text-center">
              <h2 className="font-bold text-purple-500 text-lg font-poppins">
                Shiba Inu (SHIB)
              </h2>
              <div className="flex flex-row cursor-pointer justify-center p-3 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <p className="text-white font-extrabold text-xl ml-2">
                  $0.000000001948
                </p>
                <p className="text-[#FF6D6D] font-extrabold text-lg ml-1">
                  -8.1%
                </p>
              </div>

              <h2 className="font-bold text-purple-500 text-md font-poppins mt-4">
                Price
              </h2>
              <div className="flex flex-row cursor-pointer justify-center p-3 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <p className="text-white font-extrabold text-xl">$60,000</p>
              </div>

              <h3 className="font-bold text-purple-500 text-md font-poppins mt-4">
                TVL
              </h3>

              <div className="flex flex-row cursor-pointer w-40 ml-16 items-center justify-center p-2 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/black/sol.png"
                />
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/white/eth.png"
                />
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/appc.png"
                />
              </div>

              <h1 className="font-bold text-gray-400 text-md font-sans mt-4">
                Popular pairs
              </h1>
            </div>
          </div>
          {/* Card Six */}
          <div className="card flex drop-shadow-lg shadow-inner shadow-purple-800 rounded-2xl rounded-b-2xl justify-center justify-start relative w-[360px] h-[500px] m-8 bg-[#2e0b57]">
            <div
              className={`${styles.icon} relative w-[140px] h-[100px] bg-[#16052a] rounded-b-full`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/act.png"
                alt=""
                className={`${styles.image} shadow-inner shadow-purple-800 bg-[#321060] rounded-full p-4 w-24 ml-5 bottom-6 relative z-[1000] cursor-pointer`}
              />
            </div>
            <div className="content absolute w-[100%] p-8 pt-32 text-center">
              <h2 className="font-bold text-purple-500 text-lg font-poppins">
                Achain (ACT)
              </h2>
              <div className="flex flex-row cursor-pointer justify-center p-3 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <p className="text-white font-extrabold text-xl ml-2">
                  $812.80
                </p>
                <p className="text-[#00FFA6] font-extrabold text-lg ml-1">
                  +10%
                </p>
              </div>

              <h2 className="font-bold text-purple-500 text-md font-poppins mt-4">
                Price
              </h2>
              <div className="flex flex-row cursor-pointer justify-center p-3 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <p className="text-white font-extrabold text-xl">$60,000</p>
              </div>

              <h3 className="font-bold text-purple-500 text-md font-poppins mt-4">
                TVL
              </h3>

              <div className="flex flex-row cursor-pointer w-40 ml-16 items-center justify-center p-2 mt-4 shadow-inner shadow-violet-900 bg-[#230844] rounded-full">
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/black/sol.png"
                />
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/white/eth.png"
                />
                <img
                  className="w-8 mx-1"
                  src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/appc.png"
                />
              </div>

              <h1 className="font-bold text-gray-400 text-md font-sans mt-4">
                Popular pairs
              </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
