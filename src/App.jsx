import { useState } from "react";
import { useNavigate } from "react-router-dom";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  // Dynamically import all images from the photos folder using Vite's import.meta.glob
  const photoModules = import.meta.glob('./assets/photos/*.{jpg,jpeg,png,gif,webp,avif}', { eager: true });
  const photos = Object.values(photoModules).map((mod) => mod.default || mod);

  const [yesPressed, setYesPressed] = useState(false);
  const [showNoPopup, setShowNoPopup] = useState(false);
  const yesButtonSize = 16;
  const navigate = useNavigate();


  const handleNoClick = () => {
    setShowNoPopup(true);
  };

  const handleYesClick = () => {
    navigate('/gift');
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 min-h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {/* Photo Grid Section */}
      <div className="w-full max-w-2xl px-4 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.length === 0 ? (
            <div className="col-span-3 text-center text-zinc-500">No photos found. Add images to src/assets/photos.</div>
          ) : (
            photos.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Photo ${idx + 1}`}
                className="rounded-lg shadow-md object-cover aspect-square"
              />
            ))
          )}
        </div>
        <div className="text-center text-sm text-zinc-500 mt-2">(Replace these with your own photos!)</div>
      </div>
      {/* End Photo Grid Section */}
      {showNoPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center max-w-xs">
            <img src="https://media.tenor.com/1lQ6p6Qw1g0AAAAi/angry-bear.gif" alt="Angry Bear" className="w-32 h-32 mb-4" />
            <div className="text-xl font-bold text-rose-600 mb-2">How dare you pidu!</div>
            <div className="text-center text-zinc-700 mb-4">No is not an option.<br/>Aap fas chuke ho ab 😈</div>
            <button
              className="mt-2 px-4 py-2 bg-rose-500 text-white rounded-lg font-bold hover:bg-rose-600"
              onClick={() => setShowNoPopup(false)}
            >
              Ok, Sorry 😅
            </button>
          </div>
        </div>
      )}
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy!!!
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              No
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
