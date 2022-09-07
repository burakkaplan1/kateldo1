import FinderBoxInside from "./FinderBoxInside";

function FinderBoxs() {
  return (
    <div className="mt-8 mx-auto w-11/12 sm:w-5/6 flex-center-between flex-col sm:flex-row lg:justify-evenly">
      <FinderBoxInside
        NederlandsText="Vind een makelaar"
        EnglishText="Find an agent"
        TurkceText="Emlakçı bul"
        image="001-drawkit-content-man-colour.svg"
      />
      <FinderBoxInside
        NederlandsText="Toon locaties op kaart"
        EnglishText="Show locations on map"
        TurkceText="Konumları haritada göster"
        image="037-drawkit-nature-man-colour.svg"
      />
      <FinderBoxInside
        NederlandsText="helpen uw huis te verkopen"
        EnglishText="How to sell your property"
        TurkceText="Evinizi satmakta yardımcı olalım"
        image="009-app-user-colour.svg"
      />
    </div>
  );
}

export default FinderBoxs;
