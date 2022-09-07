import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  where,
  getDocs,
  query,
} from "@firebase/firestore";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getHouse = async () => {
      const data = await getDoc(doc(db, "houses", pid));
      setPosts(data.data());
    };
    getHouse();
  }, []);

  return (
    <div>
      <p>Post: {pid} </p>
      <p>{posts.Province}</p>
      <div>
        {posts.ImageArray.map((i) => {
          <img src={i} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Post;
