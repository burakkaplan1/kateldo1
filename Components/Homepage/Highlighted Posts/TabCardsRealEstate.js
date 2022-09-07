import { collection, onSnapshot, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import RealEstateCard from "./RealEstateCard";
function TabCardsRealEstate() {
  const [posts, setPosts] = useState([]);
  const [currentShow, setCurrentShow] = useState(3);
  useEffect(() => {
    return onSnapshot(query(collection(db, "houses")), (snapshot) => {
      setPosts(snapshot.docs);
    });
  }, [db]);
  console.log(posts.map((i) => i.data()));
  return (
    <div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 items-center justify-items-center md:px-1 lg:px-4">
        {posts.slice(0, currentShow).map((post) => (
          <RealEstateCard
            key={post.id}
            image={
              post.data().ImageURL
                ? post.data().ImageURL
                : post.data().ImageArray[4]
            }
            Price={post.data().Price}
            RentOrSale={post.data().RentOrSale}
            Province={post.data().Province}
            Municipality={post.data().Municipality}
            PostalCode={post.data().PostalCode}
            Street={post.data().Street}
            PlotSize={post.data().PlotArea}
            RoomNumber={post.data().NumberOfRoom}
            BedroomNumber={post.data().NumberOfBedroom}
            HouseType={post.data().HouseType}
          />
        ))}
      </div>
      <div className="mt-2 flex-center-center justify-items-center space-x-6">
        {currentShow > 3 && (
          <button
            className="px-3 py-2 border-2 text-blue-800 border-blue-300 hover:bg-blue-500 hover:text-white"
            onClick={() => setCurrentShow(currentShow - 3)}
          >
            Show less
          </button>
        )}
        {currentShow <= 12 && (
          <button
            className="px-3 py-2 border-2 text-blue-800 border-blue-300 hover:bg-blue-500 hover:text-white"
            onClick={() => setCurrentShow(currentShow + 3)}
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
}

export default TabCardsRealEstate;
