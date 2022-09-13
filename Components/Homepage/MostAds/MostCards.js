import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import MostCard from "./MostCard";

const MostCards = () => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    onSnapshot(query(collection(db, "houses")), (snapshot) =>
      setHouses(snapshot.docs)
    );
  }, [db]);
  const counts = {};
  useEffect(() => {
    houses
      .map((i) => i.data().Municipality)
      .forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
      });
  }, [db]);

  return (
    <div className="px-2 mb-4 flex-center-center overflow-y-auto space-x-4 "></div>
  );
};

export default MostCards;
