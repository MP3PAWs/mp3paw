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
            <Link to="/ms/" className="text-white text-[32px] inline-flex items-center"
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
                to="/mp3-download/#ed-sheeran"
                state={{ search: "Ed Sheeran - Curtains" }}
                title="Ed Sheeran - Curtains MP3 Song Download">
                Ed Sheeran - Curtains
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#rema-selena-gomez-calm-down"
                state={{ search: "Rema, Selena Gomez - Calm Down" }}
                title="Rema, Selena Gomez - Calm Down MP3 Song Download">
                Rema, Selena Gomez - Calm Down
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#miley-cyrus-flowers"
                state={{ search: "Miley Cyrus - Flowers" }}
                title="Miley Cyrus - Flowers MP3 Song Download">
                Miley Cyrus - Flowers
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#sza-kill-bill"
                state={{ search: "SZA - Kill Bill" }}
                title="SZA - Kill Bill MP3 Song Download">
                SZA - Kill Bill
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#post-malone-chemical"
                state={{ search: "Post Malone - Chemical" }}
                title="Post Malone - Chemical MP3 Song Download">
                Post Malone - Chemical
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#david-kushner-daylight"
                state={{ search: "David Kushner - Daylight" }}
                title="David Kushner - Daylight MP3 Song Download">
                David Kushner - Daylight
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#coi-leray-players"
                state={{ search: "Coi Leray - Players" }}
                title="Coi Leray - Players MP3 Song Download">
                Coi Leray - Players
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#the-weeknd-and-ariana-grande-die-for-you"
                state={{ search: "The Weeknd & Ariana Grande - Die For You" }}
                title="The Weeknd & Ariana Grande - Die For You MP3 Song Download">
                The Weeknd & Ariana Grande - Die For You
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#yng-lvcas-and-peso-pluma-la-bebe"
                state={{ search: "Yng Lvcas & Peso Pluma - La Bebe" }}
                title="Yng Lvcas & Peso Pluma - La Bebe MP3 Song Download">
                Yng Lvcas & Peso Pluma - La Bebe
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#shakira-acróstico"
                state={{ search: "Shakira - Acróstico" }}
                title="Shakira - Acróstico MP3 Song Download">
                Shakira - Acróstico
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#ella-baila-sola"
                state={{ search: "Ella Baila Sola" }}
                title="Ella Baila Sola MP3 Song Download">
                Ella Baila Sola
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#grupo-frontera-x-bad-bunny"
                state={{ search: "Grupo Frontera x Bad Bunny" }}
                title="Grupo Frontera x Bad Bunny MP3 Song Download">
                Grupo Frontera x Bad Bunny
              </Link>
            </div>
            <div className="bg-[#fbede4] hover:bg-[#fef8f5] rounded-md mb-2.5">
              <Link
                className="p-2.5 text-[#2a1406] text-sm"
                to="/mp3-download/#aventura-ella-y-yo"
                state={{ search: "Aventura - Ella y Yo" }}
                title="Aventura - Ella y Yo MP3 Song Download">
                Aventura - Ella y Yo
              </Link>
            </div>
          </div>
          <h1 className="mt-6" title="MP3 PAW - Download Free MP3 Music">MP3 PAW - Muat Turun Muzik MP3 Percuma</h1>
          <p>
            MP3 Paw ialah alat enjin carian MP3 yang membolehkan anda mencari dan memuat turun muzik MP3 percuma dalam
            kualiti yang tinggi. Laman web ini serasi dengan semua jenis peranti, seperti komputer, tablet dan telefon
            pintar. Gangguan yang mudah dan mesra pengguna menjadikan Mp3paw sebagai pemuat turun MP3 yang popular.
          </p>
          <p>
            Anda boleh memuat turun Mp3 dengan cepat, mudah dan Percuma dengan beberapa klik. Hanya taip pertanyaan
            muzik yang anda mahu muat turun dan klik pada butang Muat turun. Muat turun bermula dalam masa beberapa
            saat.
          </p>
          <h2 className="mt-2 pb-2" title="How to use an MP3 paw?">Bagaimana untuk menggunakan kaki MP3?</h2>
          <ol className="m-0 pl-4 list-decimal text-justify">
            <li className="p-0 pb-2">Masukkan kata kunci atau nama muzik ke dalam kotak carian.</li>
            <li className="p-0 pb-2">Klik butang carian dan tunggu sehingga senarai keputusan muncul.</li>
            <li className="p-0">Tekan butang "Muat turun" yang anda mahu muat turun.</li>
          </ol>
          <h2 className="mt-5 pb-2" title="Mp3Paw Features">Ciri Mp3Paw</h2>
          <ol className="m-0 pl-4 list-disc text-justify">
            <li className="p-0 pb-2">Penukaran dan muat turun berkelajuan tinggi.</li>
            <li className="p-0 pb-2">100% selamat dan selamat.</li>
            <li className="p-0 pb-2">Serasi sepenuhnya dengan semua penyemak imbas dan peranti.</li>
            <li className="p-0 pb-2">Tidak perlu memasang aplikasi atau perisian.</li>
            <li className="p-0 pb-2">Muat turun MP3 secara percuma tanpa had.</li>
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
    <html lang="ms" />
    <title>MP3 PAW - Muat Turun Muzik MP3 Percuma dalam Kualiti Tinggi</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index,follow" />
    <meta name="description"
          content="MP3 Paw ialah Muat Turun Muzik MP3 Percuma dalam Kualiti Tinggi 320kbps. ia Popular dan Essy untuk menggunakan Muat Turun MP3." />
    <meta name="keywords"
          content="MP3 PAW, download mp3, download music, 320kbps mp3, mp3 music, free mp3, free music" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="MP3 PAW - Free MP3 Downloads" />
    <meta property="og:url" content="https://mp3paw.mobi/ms/" />
    <meta property="og:title" content="MP3 PAW - Muat Turun Muzik MP3 Percuma dalam Kualiti Tinggi" />
    <meta property="og:image" content="https://mp3paw.mobi/icons/icon-72x72.png" />
    <meta property="og:description"
          content="MP3 Paw ialah Muat Turun Muzik MP3 Percuma dalam Kualiti Tinggi 320kbps. ia Popular dan Essy untuk menggunakan Muat Turun MP3." />
    <link rel="canonical" href="https://mp3paw.mobi/ms/" />
    <meta name="google-site-verification" content="n9tcBQAttrl7f1rSG7BsTADmvk8IWaOaGe5eJjTlA9M" />
    <meta name="monetag" content="13bde2e4000dff0f27101ca40bffc618" />
    <Alternative />
  </>
);
