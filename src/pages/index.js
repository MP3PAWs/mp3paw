import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import SearchIcon from "../images/search-icon.svg";
import Logo from "../images/logo.svg";
import "../styles/global.css";

const Index = () => {
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
          <h1 title="Top MP3 Music Downloads">Top MP3 Music Downloads</h1>
          <div className="pt-3.5">
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future Wait For U" }}
                title="Future Wait For U MP3 Download">
                Future Wait For U
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future PUFFIN ON ZOOTIEZ" }}
                title="Future PUFFIN ON ZOOTIEZ MP3 Download">
                Future PUFFIN ON ZOOTIEZ
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future 712PM" }}
                title="Future 712PM MP3 Download">
                Future 712PM
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future I'M DAT N***A" }}
                title="Future I'M DAT N***A MP3 Download">
                Future I'M DAT N***A
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future LOVE YOU BETTER" }}
                title="Future LOVE YOU BETTER MP3 Download">
                Future LOVE YOU BETTER
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future I'M ON ONE" }}
                title="Future I'M ON ONE MP3 Download">
                Future I'M ON ONE
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future KEEP IT BURNIN" }}
                title="Future KEEP IT BURNIN MP3 Download">
                Future KEEP IT BURNIN
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future MASSAGING ME" }}
                title="Future MASSAGING ME MP3 Download">
                Future MASSAGING ME
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future CHICKENS" }}
                title="Future CHICKENS MP3 Download">
                Future CHICKENS
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future FOR A NUT" }}
                title="Future FOR A NUT MP3 Download">
                Future FOR A NUT
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future GOLD STACKS" }}
                title="Future GOLD STACKS MP3 Download">
                Future GOLD STACKS
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Jack Harlow First Class" }}
                title="Jack Harlow First Class MP3 Download">
                Jack Harlow First Class
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future VOODOO" }}
                title="Future VOODOO MP3 Download">
                Future VOODOO
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future WE JUS WANNA GET HIGH" }}
                title="Future WE JUS WANNA GET HIGH MP3 Download">
                Future WE JUS WANNA GET HIGH
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future HOLY GHOST" }}
                title="Future HOLY GHOST MP3 Download">
                Future HOLY GHOST
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future THE WAY THINGS GOING" }}
                title="Future THE WAY THINGS GOING MP3 Download">
                Future THE WAY THINGS GOING
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Future BACK TO THE BASICS" }}
                title="Future BACK TO THE BASICS MP3 Download">
                Future BACK TO THE BASICS
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Harry Styles As It Was" }}
                title="Harry Styles As It Was MP3 Download">
                Harry Styles As It Was
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Lil Baby In A Minute" }}
                title="Lil Baby In A Minute MP3 Download">
                Lil Baby In A Minute
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Lil Baby Frozen" }}
                title="Lil Baby Frozen MP3 Download">
                Lil Baby Frozen
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Lil Durk What Happened To Virgil" }}
                title="Lil Durk What Happened To Virgil MP3 Download">
                Lil Durk What Happened To Virgil
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Lil Baby Right On" }}
                title="Lil Baby Right On MP3 Download">
                Lil Baby Right On
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Kodak Black Super Gremlin" }}
                title="Kodak Black Super Gremlin MP3 Download">
                Kodak Black Super Gremlin
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "KAROL G PROVENZA" }}
                title="KAROL G PROVENZA MP3 Download">
                KAROL G PROVENZA
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "NoCap Vaccine" }}
                title="NoCap Vaccine MP3 Download">
                NoCap Vaccine
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Morgan Wallen Don't Think Jesus" }}
                title="Morgan Wallen Don't Think Jesus MP3 Download">
                Morgan Wallen Don't Think Jesus
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Megan Thee Stallion Plan B" }}
                title="Megan Thee Stallion Plan B MP3 Download">
                Megan Thee Stallion Plan B
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Drake Wants and Needs" }}
                title="Drake Wants and Needs MP3 Download">
                Drake Wants and Needs
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "The Kid LAROI Thousand Miles" }}
                title="The Kid LAROI Thousand Miles MP3 Download">
                The Kid LAROI Thousand Miles
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Gunna pushin P" }}
                title="Gunna pushin P MP3 Download">
                Gunna pushin P
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Lil Durk AHHH HA" }}
                title="Lil Durk AHHH HA MP3 Download">
                Lil Durk AHHH HA
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Becky G. MAMIII" }}
                title="Becky G. MAMIII MP3 Download">
                Becky G. MAMIII
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Glass Animals Heat Waves" }}
                title="Glass Animals Heat Waves MP3 Download">
                Glass Animals Heat Waves
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Lucky Daye Over" }}
                title="Lucky Daye Over MP3 Download">
                Lucky Daye Over
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Lauren Spencer-Smith Flowers" }}
                title="Lauren Spencer-Smith Flowers MP3 Download">
                Lauren Spencer-Smith Flowers
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "SleazyWorld Go Sleazy Flow" }}
                title="SleazyWorld Go Sleazy Flow MP3 Download">
                SleazyWorld Go Sleazy Flow
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "NoCap Very Special" }}
                title="NoCap Very Special MP3 Download">
                NoCap Very Special
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Drake Knife Talk" }}
                title="Drake Knife Talk MP3 Download">
                Drake Knife Talk
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Benson Boone In The Stars" }}
                title="Benson Boone In The Stars MP3 Download">
                Benson Boone In The Stars
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "GIVĒON Lie Again" }}
                title="GIVĒON Lie Again MP3 Download">
                GIVĒON Lie Again
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Justin Bieber Honest" }}
                title="Justin Bieber Honest MP3 Download">
                Justin Bieber Honest
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Gunna Banking On Me" }}
                title="Gunna Banking On Me MP3 Download">
                Gunna Banking On Me
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Nardo Wick Me or Sum" }}
                title="Nardo Wick Me or Sum MP3 Download">
                Nardo Wick Me or Sum
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Lil Durk Broadway Girls" }}
                title="Lil Durk Broadway Girls MP3 Download">
                Lil Durk Broadway Girls
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Muni Long Hrs & Hrs" }}
                title="Muni Long Hrs & Hrs MP3 Download">
                Muni Long Hrs & Hrs
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Lil Durk Petty Too" }}
                title="Lil Durk Petty Too MP3 Download">
                Lil Durk Petty Too
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "NoCap I'll Be Here" }}
                title="NoCap I'll Be Here MP3 Download">
                NoCap I'll Be Here
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "The Kid LAROI STAY" }}
                title="The Kid LAROI STAY MP3 Download">
                The Kid LAROI STAY
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "Zach Bryan Something in the Orange" }}
                title="Zach Bryan Something in the Orange MP3 Download">
                Zach Bryan Something in the Orange
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/"
                state={{ search: "SZA I Hate U" }}
                title="SZA I Hate U MP3 Download">
                SZA I Hate U
              </Link>
            </div>
          </div>
          <h1 className="mt-6" title="MP3 PAW - Download Free MP3 Music">MP3 PAW - Download Free MP3 Music</h1>
          <p>
            <Link className="contents text-[#551A8B]" to="https://mp3paw.mobi/">MP3 Paw</Link>&nbsp;is an MP3 search
            engine tool that allows you to search and download free MP3 music in high quality.
            This website is compatible with all types of devices, such as computers, tablets, and smartphones. Simple
            and user-friendly interference makes Mp3paw a popular MP3 downloader.
          </p>
          <p>
            You can download Mp3 quickly, easily, and Free with a few clicks. Just type a query of music you want to
            download and click on the Download button. Downloads start within a few seconds.
          </p>
          <h2 className="mt-2 pb-2" title="How to use an MP3 paw?">How to use an MP3 paw?</h2>
          <ol className="m-0 pl-4 list-decimal text-justify">
            <li className="p-0 pb-2">Enter a keyword or music name into the search box.</li>
            <li className="p-0 pb-2">Click the search button and wait until the list of results appears.</li>
            <li className="p-0">Press the “Download” button that you want to download.</li>
          </ol>
          <h2 className="mt-5 pb-2" title="Mp3Paw Features">Mp3Paw Features</h2>
          <ol className="m-0 pl-4 list-disc text-justify">
            <li className="p-0 pb-2">High-speed conversion and download.</li>
            <li className="p-0 pb-2">100% safe and secure.</li>
            <li className="p-0 pb-2">Fully compatible with all browsers and devices.</li>
            <li className="p-0 pb-2">There is no need to install apps or software.</li>
            <li className="p-0 pb-2">Download MP3 totally free without limitation.</li>
          </ol>
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

export default Index;

export const Head = () => (
  <>
    <html lang="en" />
    <title>MP3 PAW - Download MP3 Music Free in High Quality</title>
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta httpEquiv="content-language" content="en-us" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index,follow" />
    <meta name="description"
          content="MP3 Paw is Free MP3 Music Download in 320kbps High Quality. it's Popular and Essy to use MP3 Download." />
    <meta name="keywords"
          content="MP3 PAW, download mp3, download music, 320kbps mp3, mp3 music, free mp3, free music" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="MP3 PAW - Free MP3 Downloads" />
    <meta property="og:url" content="https://mp3paw.mobi/" />
    <meta property="og:title" content="MP3 PAW - Download MP3 Music Free in High Quality" />
    <meta property="og:image" content="https://www.mp3juices.blog/free9/images/mp3juices.png" />
    <meta property="og:description"
          content="MP3 Paw is Free MP3 Music Download in 320kbps High Quality. it's Popular and Essy to use MP3 Download." />
    <link rel="canonical" href="https://mp3paw.mobi/" />
    <meta name="google-site-verification" content="n9tcBQAttrl7f1rSG7BsTADmvk8IWaOaGe5eJjTlA9M" />
    <meta name="monetag" content="13bde2e4000dff0f27101ca40bffc618" />
  </>
);
