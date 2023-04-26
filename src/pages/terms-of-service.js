import React, {useState} from "react";
import {Link, navigate} from "gatsby";
import SearchIcon from "../images/search-icon.svg"
import Logo from "../images/logo.svg"
import '../styles/global.css';

const Terms = () => {
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
          <h1 title="MP3 PAW - Terms And Conditions">MP3 PAW - Terms And Conditions</h1>
          <div className="font-regular text-justify text-[13px]">
            <p>
              The service that <b>MP3 PAW</b> offers to the user (to find music available on
              the Internet), is conditioned on the user accepting, without any type of modification, the terms,
              conditions and other information contained on this page. By visiting and using <b>MP3 PAW</b>, full
              compliance with and acceptance of the terms set out in the following list is acknowledged.
            </p>

            <p>
              <b>MP3 PAW</b> provides the user with results based on third-party search engines. The links and/or
              results shown
              on this page are not under the control of <b>MP3 PAW
            </b>.

            </p>
            <p><b>MP3 PAW</b> and its administrators, are
              not responsible for the content of the results or links offered from this site, since referring to the
              previous point, they are also based on the search parameters indicated by the user.
            </p><p><b>MP3
            PAW</b> provides results or links that are used at the convenience of and by the user, therefore, the user
            is solely responsible for the use of said material.
          </p>
            <p>
              <b>MP3 PAW</b> does not have any kind of
              relationship and/or association with the search engines on which the results or links are based, nor
              with
              the companies or companies responsible for the linked material.
            </p>
            <p>
              <b>MP3 PAW</b> offers an automatic
              service that can not be controlled by administrators. The results or links shown on this site are based
              on
              third-party search engines (referring to one of the previous points) or through our "robot" that is
              responsible for scanning thousands of web pages to index audio files that they are available in a
              totally
              FREE and FREE way on the Internet, keeping only the location of the same, but not the audio file as
              such.
              Since we can not manually select each audio file, the administrators of <b>MP3 PAW</b> do not assume any
              responsibility for such material and any kind of legalities that this may lead to.
            </p>
            <p>
              <b>MP3
                PAW</b> does not offer any guarantee, express or implicit, of the services we offer, such as
              interruptions, delays, errors, inaccuracies or typographical errors.
            </p>
            <p>
              <b>MP3 PAW</b> does not offer
              any guarantee about the results or links, since this is offered through third-party servers, these may
              be
              infected with viruses or any type of malware, however, we work 100% to prevent this from happening.
            </p>
            <p>
              In the event that any result or link violates the laws or copyright, you as a representative must
              contact the server that hosts such content. However, <b>MP3 PAW</b> will do everything possible to
              eliminate any type of link with said material, whenever possible.
            </p>
            <p>
              By visiting and/or downloading
              from <b>MP3 PAW</b>, the user accepts that <b>MP3 PAW</b> and its administrators, are absolved of all
              responsibility, losses and costs, of the claims against <b>MP3 PAW</b>.
            </p>
            <strong>
              Finally, the user
              when visiting or making use of any service offered by <b>MP3 PAW</b>, both in its mobile and desktop
              versions, accepts that:
            </strong>
            <p>
              When visiting and/or downloading from <b>MP3 PAW</b>, the user
              understands that the distribution or download of music files is illegal unless he/she does so with the
              intention of previewing his/her content and then intends to delete the music file after his/her preview
            </p>
            <p>
              When visiting and/or downloading from <b>MP3 PAW</b>, the user agrees not to share music files
              through P2P networks or any network to share files.
            </p>
            <p>
              When visiting and/or downloading from <b>MP3
              PAW</b>, the user undertakes to delete any file that is obtained through this site, after its preview.
            </p>
            <p>
              <b>MP3 PAW</b> respects and supports the rights of artitas and anyone related to the creation of
              any musical work. So we will be happy to collaborate to eliminate any type of content that does not
              comply with the content rights.
            </p>
            <p>
              <b>MP3 PAW</b> reserves the right to modify the content of this
              page without prior notice.
            </p>
            <strong>
              If you do not understand or do not agree with what is expressed
              on this page, you should not use this page.
            </strong>
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

export default Terms

export const Head = () => (
  <>
    <html lang="en"/>
    <title>MP3 PAW - Terms And Conditions</title>
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta httpEquiv="content-language" content="en-us"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="robots" content="index,follow"/>
    <meta name="description" content="Here you will find our terms of service."/>
    <link rel="canonical" href="https://mp3paw.mobi/terms-of-service/"/>
  </>
)
