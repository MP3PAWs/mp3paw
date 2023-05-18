import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import SearchIcon from "../../images/search-icon.svg";
import Logo from "../../images/logo.svg";
import "../../styles/global.css";
import Alternative from "../../components/alternative";

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
            <Link to="/zh-cn/" className="text-white text-[32px] inline-flex items-center"
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
                to="/mp3-download/#future-wait-for-u"
                state={{ search: "Future Wait For U" }}
                title="Future Wait For U MP3 Download">
                Future Wait For U
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-puffin-on-zootiez"
                state={{ search: "Future PUFFIN ON ZOOTIEZ" }}
                title="Future PUFFIN ON ZOOTIEZ MP3 Download">
                Future PUFFIN ON ZOOTIEZ
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-712pm"
                state={{ search: "Future 712PM" }}
                title="Future 712PM MP3 Download">
                Future 712PM
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-im-dat-nigga"
                state={{ search: "Future I'M DAT N***A" }}
                title="Future I'M DAT N***A MP3 Download">
                Future I'M DAT N***A
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-love-you-better"
                state={{ search: "Future LOVE YOU BETTER" }}
                title="Future LOVE YOU BETTER MP3 Download">
                Future LOVE YOU BETTER
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-im-on-one"
                state={{ search: "Future I'M ON ONE" }}
                title="Future I'M ON ONE MP3 Download">
                Future I'M ON ONE
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-keep-it-burnin"
                state={{ search: "Future KEEP IT BURNIN" }}
                title="Future KEEP IT BURNIN MP3 Download">
                Future KEEP IT BURNIN
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-massaging-me"
                state={{ search: "Future MASSAGING ME" }}
                title="Future MASSAGING ME MP3 Download">
                Future MASSAGING ME
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-chickens"
                state={{ search: "Future CHICKENS" }}
                title="Future CHICKENS MP3 Download">
                Future CHICKENS
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-for-a-nut"
                state={{ search: "Future FOR A NUT" }}
                title="Future FOR A NUT MP3 Download">
                Future FOR A NUT
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-gold-stacks"
                state={{ search: "Future GOLD STACKS" }}
                title="Future GOLD STACKS MP3 Download">
                Future GOLD STACKS
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#jack-harlow-first-class"
                state={{ search: "Jack Harlow First Class" }}
                title="Jack Harlow First Class MP3 Download">
                Jack Harlow First Class
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-voodoo"
                state={{ search: "Future VOODOO" }}
                title="Future VOODOO MP3 Download">
                Future VOODOO
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-we-jus-wanna-get-high"
                state={{ search: "Future WE JUS WANNA GET HIGH" }}
                title="Future WE JUS WANNA GET HIGH MP3 Download">
                Future WE JUS WANNA GET HIGH
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-holy-ghost"
                state={{ search: "Future HOLY GHOST" }}
                title="Future HOLY GHOST MP3 Download">
                Future HOLY GHOST
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-the-way-things-going"
                state={{ search: "Future THE WAY THINGS GOING" }}
                title="Future THE WAY THINGS GOING MP3 Download">
                Future THE WAY THINGS GOING
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#future-back-to-the-basics"
                state={{ search: "Future BACK TO THE BASICS" }}
                title="Future BACK TO THE BASICS MP3 Download">
                Future BACK TO THE BASICS
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#harry-styles-as-it-was"
                state={{ search: "Harry Styles As It Was" }}
                title="Harry Styles As It Was MP3 Download">
                Harry Styles As It Was
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#lil-baby-in-a-minute"
                state={{ search: "Lil Baby In A Minute" }}
                title="Lil Baby In A Minute MP3 Download">
                Lil Baby In A Minute
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#lil-baby-frozen"
                state={{ search: "Lil Baby Frozen" }}
                title="Lil Baby Frozen MP3 Download">
                Lil Baby Frozen
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#lil-durk-what-happened-to-virgil"
                state={{ search: "Lil Durk What Happened To Virgil" }}
                title="Lil Durk What Happened To Virgil MP3 Download">
                Lil Durk What Happened To Virgil
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#lil-baby-right-on"
                state={{ search: "Lil Baby Right On" }}
                title="Lil Baby Right On MP3 Download">
                Lil Baby Right On
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#kodak-black-super-gremlin"
                state={{ search: "Kodak Black Super Gremlin" }}
                title="Kodak Black Super Gremlin MP3 Download">
                Kodak Black Super Gremlin
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#karol-g-provenza"
                state={{ search: "KAROL G PROVENZA" }}
                title="KAROL G PROVENZA MP3 Download">
                KAROL G PROVENZA
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#nocap-vaccine"
                state={{ search: "NoCap Vaccine" }}
                title="NoCap Vaccine MP3 Download">
                NoCap Vaccine
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#morgan-wallen-dont-think-jesus"
                state={{ search: "Morgan Wallen Don't Think Jesus" }}
                title="Morgan Wallen Don't Think Jesus MP3 Download">
                Morgan Wallen Don't Think Jesus
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#megan-thee-stallion-plan-b"
                state={{ search: "Megan Thee Stallion Plan B" }}
                title="Megan Thee Stallion Plan B MP3 Download">
                Megan Thee Stallion Plan B
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#drake-wants-and-needs"
                state={{ search: "Drake Wants and Needs" }}
                title="Drake Wants and Needs MP3 Download">
                Drake Wants and Needs
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#the-kid-laroi-thousand-miles"
                state={{ search: "The Kid LAROI Thousand Miles" }}
                title="The Kid LAROI Thousand Miles MP3 Download">
                The Kid LAROI Thousand Miles
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#gunna-pushin-p"
                state={{ search: "Gunna pushin P" }}
                title="Gunna pushin P MP3 Download">
                Gunna pushin P
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#lil-durk-ahhh-ha"
                state={{ search: "Lil Durk AHHH HA" }}
                title="Lil Durk AHHH HA MP3 Download">
                Lil Durk AHHH HA
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#becky-g-mamiii"
                state={{ search: "Becky G. MAMIII" }}
                title="Becky G. MAMIII MP3 Download">
                Becky G. MAMIII
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#glass-animals-heat-waves"
                state={{ search: "Glass Animals Heat Waves" }}
                title="Glass Animals Heat Waves MP3 Download">
                Glass Animals Heat Waves
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#lucky-daye-over"
                state={{ search: "Lucky Daye Over" }}
                title="Lucky Daye Over MP3 Download">
                Lucky Daye Over
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#lauren-spencer-smith-flowers"
                state={{ search: "Lauren Spencer-Smith Flowers" }}
                title="Lauren Spencer-Smith Flowers MP3 Download">
                Lauren Spencer-Smith Flowers
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#sleazyworld-go-sleazy-flow"
                state={{ search: "SleazyWorld Go Sleazy Flow" }}
                title="SleazyWorld Go Sleazy Flow MP3 Download">
                SleazyWorld Go Sleazy Flow
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#nocap-very-special"
                state={{ search: "NoCap Very Special" }}
                title="NoCap Very Special MP3 Download">
                NoCap Very Special
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#drake-knife-talk"
                state={{ search: "Drake Knife Talk" }}
                title="Drake Knife Talk MP3 Download">
                Drake Knife Talk
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#benson-boone-in-the-stars"
                state={{ search: "Benson Boone In The Stars" }}
                title="Benson Boone In The Stars MP3 Download">
                Benson Boone In The Stars
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#giveon-lie-again"
                state={{ search: "GIVĒON Lie Again" }}
                title="GIVĒON Lie Again MP3 Download">
                GIVĒON Lie Again
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#justin-bieber-honest"
                state={{ search: "Justin Bieber Honest" }}
                title="Justin Bieber Honest MP3 Download">
                Justin Bieber Honest
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#gunna-banking-on-me"
                state={{ search: "Gunna Banking On Me" }}
                title="Gunna Banking On Me MP3 Download">
                Gunna Banking On Me
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#nardo-wick-me-or-sum"
                state={{ search: "Nardo Wick Me or Sum" }}
                title="Nardo Wick Me or Sum MP3 Download">
                Nardo Wick Me or Sum
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#lil-durk-broadway-girls"
                state={{ search: "Lil Durk Broadway Girls" }}
                title="Lil Durk Broadway Girls MP3 Download">
                Lil Durk Broadway Girls
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#muni-long-hrs-hrs"
                state={{ search: "Muni Long Hrs & Hrs" }}
                title="Muni Long Hrs & Hrs MP3 Download">
                Muni Long Hrs & Hrs
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#lil-durk-petty-too"
                state={{ search: "Lil Durk Petty Too" }}
                title="Lil Durk Petty Too MP3 Download">
                Lil Durk Petty Too
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#nocap-ill-be-here"
                state={{ search: "NoCap I'll Be Here" }}
                title="NoCap I'll Be Here MP3 Download">
                NoCap I'll Be Here
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#the-kid-laroi-stay"
                state={{ search: "The Kid LAROI STAY" }}
                title="The Kid LAROI STAY MP3 Download">
                The Kid LAROI STAY
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#zach-bryan-something-in-the-orange"
                state={{ search: "Zach Bryan Something in the Orange" }}
                title="Zach Bryan Something in the Orange MP3 Download">
                Zach Bryan Something in the Orange
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#sza-i-hate-u"
                state={{ search: "SZA I Hate U" }}
                title="SZA I Hate U MP3 Download">
                SZA I Hate U
              </Link>
            </div>
          </div>
          <h1 className="mt-6" title="MP3 PAW - Download Free MP3 Music">MP3 PAW - 下载免费 MP3 音乐</h1>
          <p>
            MP3爪子 是一个 MP3 搜索引擎工具，允许您搜索和下载高质量的免费 MP3 音乐。本网站兼容所有类型的设备，例如计算机、平板电脑和智能手机。简单和用户友好的干扰使
            Mp3paw 成为流行的 MP3 下载器。
          </p>
          <p>
            只需点击几下，您就可以快速、轻松地免费下载 Mp3。只需键入要下载的音乐查询，然后单击“下载”按钮。下载将在几秒钟内开始。
          </p>
          <h2 className="mt-2 pb-2" title="How to use an MP3 paw?">如何使用 MP3 爪子？</h2>
          <ol className="m-0 pl-4 list-decimal text-justify">
            <li className="p-0 pb-2">在搜索框中输入关键字或音乐名称。</li>
            <li className="p-0 pb-2">单击搜索按钮并等待结果列表出现。</li>
            <li className="p-0">按您要下载的“下载”按钮。</li>
          </ol>
          <h2 className="mt-5 pb-2" title="Mp3Paw Features">Mp3Paw 功能</h2>
          <ol className="m-0 pl-4 list-disc text-justify">
            <li className="p-0 pb-2">高速转换和下载。</li>
            <li className="p-0 pb-2">100% 安全可靠。</li>
            <li className="p-0 pb-2">与所有浏览器和设备完全兼容。</li>
            <li className="p-0 pb-2">无需安装应用程序或软件。</li>
            <li className="p-0 pb-2">完全免费无限制地下载 MP3。</li>
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
    <html lang="zh-cn" />
    <title>MP3 PAW - 免费下载高品质 MP3 音乐</title>
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta httpEquiv="content-language" content="en-us" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index,follow" />
    <meta name="description"
          content="MP3 Paw 是 320kbps 高品质的免费 MP3 音乐下载。使用 MP3 下载是流行和 Essy。" />
    <meta name="keywords"
          content="MP3 PAW, download mp3, download music, 320kbps mp3, mp3 music, free mp3, free music" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="MP3 PAW - Free MP3 Downloads" />
    <meta property="og:url" content="https://mp3paw.mobi/zh-cn/" />
    <meta property="og:title" content="MP3 PAW - 免费下载高品质 MP3 音乐" />
    <meta property="og:image" content="https://mp3paw.mobi/icons/icon-72x72.png" />
    <meta property="og:description"
          content="MP3 Paw 是 320kbps 高品质的免费 MP3 音乐下载。使用 MP3 下载是流行和 Essy。" />
    <link rel="canonical" href="https://mp3paw.mobi/zh-cn/" />
    <meta name="google-site-verification" content="n9tcBQAttrl7f1rSG7BsTADmvk8IWaOaGe5eJjTlA9M" />
    <meta name="monetag" content="13bde2e4000dff0f27101ca40bffc618" />
    <Alternative />
  </>
);
