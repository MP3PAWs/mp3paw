import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import SearchIcon from "../images/search-icon.svg";
import Logo from "../images/logo.svg";
import "../styles/global.css";

const Copyright = () => {
  const [inputValue, setInputValue] = useState("test");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickSearch = () => {
    navigate("/mp3-download", { state: { search: inputValue } });
  };

  const handleSearchKeyDown = (e) => {
    if (e.keyCode === 13) {
      navigate("/mp3-download", { state: { search: inputValue } });
    }
  };

  return (
    <>
      <header className="p-5 bg-primary border border-[#5d2e0d]">
        <div className="mx-auto max-w-[550px]">
          <div className="mb-2.5 text-center">
            <Link to="/" className="text-white text-[32px] inline-flex items-center"
                  title="MP3 PAW - Download MP3 Music Free">
              <img className="mr-1 mb-0" src={Logo} alt="logo" />
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
              <img className="mb-0 cursor-pointer mr-2" src={SearchIcon} alt="SearchIcon" />
            </button>
          </div>
        </div>
      </header>
      <section className="p-5">
        <div className="mx-auto max-w-[550px]">
          <h1 title="MP3 PAW - Terms And Conditions">MP3 PAW - DMCA</h1>
          <div className="font-regular text-justify text-[13px]"><p> We want you to know that we do not have any
            copyrighted or illegal content on <b>MP3
              PAW</b> The Music Search information we host does not have files that can be copyrighted. We are in
            correspondence with the <a href="https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act"
                                       title="Digital Millennium Copyright Act" rel="nofollow"> Digital
              Millennium Copyright Act </a> ("DMCA") and general international copyright laws.</p><p>However, we still
            can remove urls, search results, or play options from our site if the copyright owner would like us to do
            so.</p><p>You need to follow the following procedure if you want to remove your work:</p><h3>Takedown
            Request</h3>
            <ul>
              <li>Send your claim via <u><b>contact form</b></u> of this site</li>
              <li>The Claim must be written in English language, it must be understandable and in polite form</li>
              <li>The Claim must be sent from a company mail, Claims sent from free service emails like AOL, Yahoo,
                Gmail, etc. will be rejected
              </li>
              <li>You must present an evidence that shows that you are the copyright holder or that you are acting on
                behalf of the copyright holder
              </li>
              <li>You must present an evidence that shows that the content is legally copyrighted and that you are the
                copyright holder
              </li>
              <li> The materials that need to be removed must be provided in form of material name and links to direct
                music pages. We don't accept links to search queries, categories or subcategories or media pages.
              </li>
              <li>Provide sufficient contact information with a valid email address.</li>
            </ul>
            <p> After following this instruction, we will processing your request and we will remove your work from our
              website. The name of your product will still remain indexed and any media page or further hosted music on
              other websites will still be available even if the file has our name on it or its description.</p><h3>Good
              Copyright Claim Example:</h3><p> This is a notice in accordance with the Online Copyright Infringement
              Liability Limitation Act (OCILLA) a part of the Digital Millennium Copyright Act of 1998 requesting the
              service providers to be held strictly liable for the acts of their users &amp; immediately cease the
              access to copyrighted material.</p><p> We have found infringing material on your website which indeed is
              our music 'The Music' released on December 12th, 2011.</p><p>The material that is claimed to be infringing
              should be removed or disabled immediately and the growth of piracy should be avoided.</p><h4>Below are the
              URL for your reference:</h4>
            <ul>
              <li><span className="link">https://mp3paw.app/[URL TO THE MATERIAL 1]</span></li>
              <li><span className="link">https://mp3paw.app/[URL TO THE MATERIAL 2]</span></li>
            </ul>
            <p> We have good faith &amp; belief that the use of the described material in the manner complained of is
              not authorized by the copyright owner, its agent, or the law.</p><p> The information in the notification
              is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of
              the owner of an exclusive right that is allegedly infringed.</p><p>We hereby declare that the information
              in the notification is accurate to the best of our knowledge &amp; belief.</p></div>
        </div>
      </section>
      <footer className="bg-primary h-[130px] border text-center border-[#5d2e0d] flex items-center">
        <div className="mx-auto max-w-[550px]">
          <div>
            <div className="mb-2.5 flex justify-center">
              <Link to="/" className="text-white text-2xl flex" title="MP3 PAW - Download MP3 Music Free">
                <img className="mr-1 mb-0" src={Logo} alt="logo" />
                <span className="font-sans mr-1">MP3 PAW</span>
              </Link>
            </div>
            <ul className="mt-2.5 mb-1">
              <li className="inline-block mr-3">
                <Link className="text-xs text-[#FFF]" to="/" title="MP3 PAW - Download MP3 Music Free">MP3
                  PAW</Link>
              </li>
              <li className="inline-block mr-3">
                <Link className="text-xs text-[#FFF]" to="/terms-of-service/"
                      title="MP3 PAW - Download MP3 Music Free">TERMS</Link>
              </li>
              <li className="inline-block mr-3">
                <Link className="text-xs text-[#FFF]" to="/copyright/"
                      title="MP3 PAW - Download MP3 Music Free">COPYRIGHT</Link>
              </li>
              <li className="inline-block mr-3">
                <Link className="text-xs text-[#FFF]" to="/contact/"
                      title="MP3 PAW - Download MP3 Music Free">CONTACT</Link>
              </li>
            </ul>
            <div className="text-xs text-[#FFF] font-regular">© 2023 MP3 PAW. All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Copyright;

export const Head = () => (
  <>
    <html lang="en" />
    <title>MP3 PAW - Copyright Claims</title>
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta httpEquiv="content-language" content="en-us" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index,follow" />
    <meta name="description" content="Here you will find our copyright claims." />
    <link rel="canonical" href="https://mp3paw.mobi/copyright/" />
  </>
);
