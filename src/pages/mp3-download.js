import React, { useEffect, useState } from "react";
import { Link, navigate } from "gatsby";
import SearchIcon from "../images/search-icon.svg";
import Logo from "../images/logo.svg";
import Loader from "../images/favcon.svg";
import "../styles/global.css";

const Download = (props) => {
  const searchValue = props?.location?.state?.search;
  const [inputValue, setInputValue] = useState(searchValue || "test");
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [currentDownloadIndex, setCurrentDownloadIndex] = useState(null);
  const [searchList, setSearchList] = useState();
  const [audioPlay, setAudioPlay] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [videoConverting, setVideoConverting] = useState(false);

  useEffect(() => {
    const fetchPromise = fetch(`https://me0xn4hy3i.execute-api.us-east-1.amazonaws.com/staging/api/resolve/resolveYoutubeSearch?search=${searchValue}`);
    fetchPromise.then(response => {
      return response.json();
    }).then(data => {
      setSearchList(data?.data);
    });
    setCurrentSongIndex(null);
  }, [searchValue]);

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

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const loadExternalScript = (domain, id) => {
      const script = document.createElement("script");
      script.src = `https://${domain}/401/${id}`;
      (document.body || document.documentElement).appendChild(script);
    };

    loadExternalScript("glizauvo.net", 5947847);
  }

  const handleClickAudioPlay = async (index, id) => {
    window.open("//lidsaich.net/4/5947945");
    setCurrentSongIndex(index);
    setCurrentDownloadIndex(null);
    setLoading(true);
    try {
      const response = await fetch(`https://yt-source.nico.dev/${id}`);
      const json = await response.json();
      setAudioPlay(json);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleOpenDrawerDownload = async (index, value) => {
    setCurrentDownloadIndex(index);
    setCurrentSongIndex(null);
    setVideoConverting(true);
    try {
      const response = await fetch(`https://mp3converter.fr/wp-content/plugins/youtube-mp3-by-leo/backend.php?id=${value?.videoId}`);
      const json = await response.json();
      if (json.status === "ok") {
        setVideoUrl(json);
        setVideoConverting(false);
      } else if (json.status === "processing") {
        setTimeout(function() {
          handleOpenDrawerDownload(index, value);
        }, 4000);
      } else {
        alert(json?.msg);
      }
    } catch (error) {
      setVideoConverting(false);
      console.error("Error fetching data:", error);
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
              placeholder="Search Your Favorite Music"
              onChange={handleInputChange}
              value={inputValue}
              onKeyDown={handleSearchKeyDown}
              className="hover:bg-[#6E360F] font-regular font-medium capitalize !outline-none w-full rounded-md h-[30px] pl-5 text-sm bg-transparent"
            />
            <button onClick={handleClickSearch}>
              <img className="mb-0 cursor-pointer mr-2" src={SearchIcon} alt="SearchIcon" />
            </button>
          </div>
        </div>
      </header>
      {!searchList ?
        <div className="flex justify-center items-center fixed left-0 top-0 w-full h-full">
          <span className="w-24 h-24 animate-bounce">
            <img src={Loader} className="text-primary" alt="loading" />
          </span>
        </div>
        :
        <section>
          <div className="p-5">
            <div className="mx-auto max-w-[550px]">
              <h1 className="pb-1 capitalize"
                  title={`${searchValue} MP3 Download`}>{`${searchValue} MP3 Download`}</h1>
              <div className="flex mt-2.5">
                <i
                  className="fa fa-whatsapp text-primary border border-primary mr-2.5 h-9 !flex justify-center items-center cursor-pointer flex-auto"></i>
                <i
                  className="fa fa-facebook text-primary border border-primary mr-2.5 h-9 !flex justify-center items-center cursor-pointer flex-auto"></i>
                <i
                  className="fa fa-twitter text-primary border border-primary mr-2.5 h-9 !flex justify-center items-center cursor-pointer flex-auto"></i>
                <i
                  className="fa fa-reddit-alien text-primary border border-primary mr-2.5 h-9 !flex justify-center items-center cursor-pointer flex-auto"></i>
                <i
                  className="fa fa-google-plus text-primary border border-primary mr-2.5 h-9 !flex justify-center items-center cursor-pointer flex-auto"></i>
                <i
                  className="fa fa-rss-square text-primary border border-primary h-9 !flex justify-center items-center cursor-pointer flex-auto"></i>
              </div>
              <div className="pt-3.5">
                {searchList?.map((item, index) => (
                  <div className="mb-3.5 pb-3.5 border-b-2 border-[#fbede4]">
                    <h2 className="truncate">
                        <span
                          className="text-white text-xs p-0.5 pt-0 rounded-sm bg-primary mr-1.5 font-regular">{item?.duration}</span>
                      <h3 title={item?.title}>{item?.title}</h3>
                    </h2>
                    <div className="py-2.5 text-sm">
                      <span className="mr-2.5">
                        <i className="fa fa-star text-[#eb9f6b] mr-0.5"></i>
                        <i className="fa fa-star text-[#eb9f6b] mr-0.5"></i>
                        <i className="fa fa-star text-[#eb9f6b] mr-0.5"></i>
                        <i className="fa fa-star text-[#eb9f6b] mr-0.5"></i>
                        <i className="fa fa-star text-[#eb9f6b] mr-0.5"></i>
                      </span>
                      <span>
                        <i className="fa fa-headphones text-[#eb9f6b] mr-0.5"></i>
                        <span className="text-[#e68948] font-regular">{item?.views}</span>
                      </span>
                    </div>
                    <div>
                      <ul className="flex justify-between">
                        <li className="w-[31%] cursor-pointer font-regular">
                          <button onClick={() => handleClickAudioPlay(index, item?.videoId)}
                                  className="truncate py-1.5 px-2.5 rounded w-full text-primary border border-primary border-b-[3px] hover:bg-[#fef8f5]">
                            <strong className="font-semibold">
                              <i className="fa fa-play mr-1.5"></i>
                              <span className="text-[13px]">Play Music</span>
                            </strong>
                          </button>
                        </li>
                        <li className="w-[31%] cursor-pointer font-regular">
                          <button onClick={() => handleOpenDrawerDownload(index, item)}
                                  className="truncate py-1.5 px-2.5 rounded w-full text-primary border border-primary border-b-[3px] hover:bg-[#fef8f5]">
                            <strong className="font-semibold">
                              <i className="fa fa-download mr-1.5"></i>
                              <span className="text-[13px]">Download</span>
                            </strong>
                          </button>
                        </li>
                        <li className="w-[31%] cursor-pointer font-regular">
                          <button
                            className="truncate py-1.5 px-2.5 rounded w-full text-primary border border-primary border-b-[3px] hover:bg-[#fef8f5]">
                            <strong className="font-semibold">
                              <i className="fa fa-cut mr-1.5"></i>
                              <span className="text-[13px]">Ringtone</span>
                            </strong>
                          </button>
                        </li>
                      </ul>
                      {loading && currentSongIndex === index ?
                        <div className="loading mt-2.5 text-white">.</div> :
                        <>
                          {(currentSongIndex === index && audioPlay) && (
                            <>
                              <audio className="mt-2.5" preload controls autoPlay>
                                <source src={audioPlay?.url} />
                              </audio>
                              <div className="flex font-regular w-[80%] justify-between m-auto my-4">
                                <a href="//eptougry.net/4/5947600" target="_blank" rel="noreferrer"
                                   className="bg-[#00a80c] text-center text-base text-white font-bold p-1.5 rounded w-[42%]">DOWNLOAD
                                  NOW
                                </a>
                                <a href="//eptougry.net/4/5947600" target="_blank" rel="noreferrer"
                                   className="bg-[#c3291a] text-center text-base text-white font-bold p-1.5 rounded w-[42%]">PLAY
                                  NOW
                                </a>
                              </div>
                            </>
                          )}
                        </>
                      }
                      {videoConverting && currentDownloadIndex === index ?
                        <div className="loading mt-2.5 text-white">.</div> :
                        <>
                          {(currentDownloadIndex === index) && (
                            <div className="bg-[#f5f5f5ba] text-center p-1">
                              <div className="my-4 font-regular text-sm">
                                <b>{videoUrl?.title}</b>
                              </div>
                              <a
                                className="truncate w-[80%] py-1.5 px-2.5 rounded m-auto text-primary border border-primary border-b-[3px] hover:bg-[#fef8f5]"
                                href={videoUrl?.link}
                                onClick={() => window.open("//lidsaich.net/4/5947945")}>Download</a>
                              <div className="flex font-regular w-[80%] justify-between m-auto my-4">
                                <a href="//eptougry.net/4/5947600" target="_blank" rel="noreferrer"
                                   className="bg-[#00a80c] text-base text-white font-bold p-1.5 rounded w-[42%]">DOWNLOAD
                                  NOW
                                </a>
                                <a href="//eptougry.net/4/5947600" target="_blank" rel="noreferrer"
                                   className="bg-[#c3291a] text-base text-white font-bold p-1.5 rounded w-[42%]">PLAY
                                  NOW
                                </a>
                              </div>
                            </div>
                          )}
                        </>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
        </section>
      }
    </>
  );
};

export default Download;

export const Head = () => (
  <>
    <html lang="en" />
    <title>MP3 PAW - Download MP3 Music Free in High Quality</title>
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta httpEquiv="content-language" content="en-us" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex,nofollow" />
    <meta name="description"
          content="MP3 Paw is Free MP3 Music Download in 320kbps High Quality. it's Popular and Essy to use MP3 Download." />
    <meta name="keywords"
          content="MP3 PAW, download mp3, download music, 320kbps mp3, mp3 music, free mp3, free music" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="MP3 PAW - Free MP3 Downloads" />
    <meta property="og:url" content="https://mp3paw.mobi/mp3-download/" />
    <meta property="og:title" content="MP3 PAW - Download MP3 Music Free in High Quality" />
    <meta property="og:image" content="https://mp3paw.mobi/icons/icon-72x72.png" />
    <meta property="og:description"
          content="MP3 Paw is Free MP3 Music Download in 320kbps High Quality. it's Popular and Essy to use MP3 Download." />
    <link rel="canonical" href="https://mp3paw.mobi/mp3-download/" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  </>
);