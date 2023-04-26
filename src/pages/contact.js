import React, {useState} from "react";
import {Link, navigate} from "gatsby";
import SearchIcon from "../images/search-icon.svg"
import Logo from "../images/logo.svg"
import '../styles/global.css';

const Contact = () => {
  const [inputValue, setInputValue] = useState("test");

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleClickSearch = () => {
    navigate("/mp3-download", {state: {search: inputValue}})
  };

  const handleSearchKeyDown = (e) => {
    if (e.keyCode === 13) {
      navigate("/mp3-download", {state: {search: inputValue}})
    }
  };

  return (
    <>
      <header className="p-5 bg-primary border border-[#5d2e0d]">
        <div className="mx-auto max-w-[550px]">
          <div className="mb-2.5 text-center">
            <Link to="/" className="text-white text-[32px] inline-flex items-center"
                  title="MP3 PAW - Download MP3 Music Free">
              <img className="mr-1 mb-0" src={Logo} alt="logo"/>
              <span className="font-sans mr-1">MP3 PAW</span>
            </Link>
          </div>
          <div className="bg-[#7F3F11] hover:bg-[#6E360F] py-small rounded-md text-white flex">
            <input
              type="text"
              autoCapitalize="characters"
              placeholder="Search Your Favorite Music"
              onChange={handleInputChange}
              onKeyDown={handleSearchKeyDown}
              className="hover:bg-[#6E360F] capitalize font-regular font-medium !outline-none w-full rounded-md h-[30px] pl-5 text-sm bg-transparent"
            />
            <button onClick={handleClickSearch}>
              <img className="mb-0 cursor-pointer mr-2" src={SearchIcon} alt="SearchIcon"/>
            </button>
          </div>
        </div>
      </header>
      <section className="p-5">
        <div className="mx-auto max-w-[550px]">
          <h1 title="MP3 PAW - Terms And Conditions">MP3 PAW - Contact</h1>
          <div className="font-regular text-justify text-[13px]">
            <div className="mt-8 md:mb-16 mb-2.5">
                <div className="mb-8">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Name:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-8">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="message"
                  >
                    Message:
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    required
                  />
                </div>
                <button
                  className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Submit
                </button>
              </div>
          </div>
        </div>
      </section>
      <footer className="bg-primary h-[130px] border text-center border-[#5d2e0d] flex items-center">
        <div className="mx-auto max-w-[550px]">
          <div>
            <div className="mb-2.5 flex justify-center">
              <Link to="/" className="text-white text-2xl flex" title="MP3 PAW - Download MP3 Music Free">
                <img className="mr-1 mb-0" src={Logo} alt="logo"/>
                <span className="font-sans mr-1">MP3 PAW</span>
              </Link>
            </div>
            <ul className="mt-2.5 mb-1">
              <li className="inline-block mr-3">
                <Link className="text-xs text-[#ffffff99]" to="/" title="MP3 PAW - Download MP3 Music Free">MP3
                  PAW</Link>
              </li>
              <li className="inline-block mr-3">
                <Link className="text-xs text-[#ffffff99]" to="/terms-of-service/"
                      title="MP3 PAW - Download MP3 Music Free">TERMS</Link>
              </li>
              <li className="inline-block mr-3">
                <Link className="text-xs text-[#ffffff99]" to="/copyright/"
                      title="MP3 PAW - Download MP3 Music Free">COPYRIGHT</Link>
              </li>
              <li className="inline-block mr-3">
                <Link className="text-xs text-[#ffffff99]" to="/contact/"
                      title="MP3 PAW - Download MP3 Music Free">CONTACT</Link>
              </li>
            </ul>
            <div className="text-xs text-[#ffffff4d] font-regular">© 2023 MP3 PAW. All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact

export const Head = () => (
  <>
    <html lang="en"/>
    <title>MP3 PAW - Contact US</title>
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta httpEquiv="content-language" content="en-us"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="robots" content="index,follow"/>
    <meta name="description" content="Here you will find our contact us."/>
    <link rel="canonical" href="https://mp3paw.mobi/contact/"/>
  </>
)
