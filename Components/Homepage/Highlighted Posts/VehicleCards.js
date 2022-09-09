import { collection, onSnapshot, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import HomepageCard from "./HomepageCard";

function VehicleCards() {
  const [posts, setPosts] = useState([]);
  const [currentShow, setCurrentShow] = useState(3);
  useEffect(() => {
    return onSnapshot(query(collection(db, "Vehicles")), (snapshot) => {
      setPosts(snapshot.docs);
    });
  }, [db]);
  return (
    <div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 items-center justify-items-center md:px-1 lg:px-4 cursor-pointer">
        {posts.slice(0, currentShow).map((post) => (
          <HomepageCard
            key={post.id}
            image={
              post.data().ImageURL
                ? post.data().ImageURL
                : post.data().ImageArray[0]
            }
            Price={post.data().Price}
            VehicleType={post.data().VehicleType}
            Brand={post.data().Brand}
            Model={post.data().Model}
            Kilometers={post.data().Kilometer}
            GearType={post.data().GearType}
            FuelType={post.data().FuelType}
            Horsepower={post.data().HorsePower}
            EngineSize={post.data().EngineSize}
            Color={post.data().Color}
            ModelYear={post.data().ModelYear}
            Torque={post.data().Torque}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-items-center justify-center space-x-6">
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

export default VehicleCards;
