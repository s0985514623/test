import React, { useState, useCallback, useEffect } from "react";
import ListRow from "../../components/ListRow";
import CreatePost from "../../api/CreatePost.jsx";
import fetchData from "../../api/";

const Index = () => {
  const [extractedData, setExtractedData] = useState([]);
  const [Loading, setLoading] = useState(true);

  //Get Post API
  const fetchDataAndSetData = async () => {
    try {
      const data = await fetchData();
      setExtractedData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //Create Post API useState
  const onCreatePost = (newPost) => {
    setExtractedData([...extractedData, newPost]);
  };
  const onDeletePost = (deletePost) => {
    setExtractedData(deletePost);
  };

  useEffect(() => {
    fetchDataAndSetData();
  }, []);

  if (Loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ListRow
        extractedData={extractedData}
        setLoading={setLoading}
        onDeletePost={onDeletePost}
      />
      <CreatePost
        fetchDataAndSetData={fetchDataAndSetData}
        onCreatePost={onCreatePost}
        setLoading={setLoading}
      />
    </>
  );
};

export default Index;
