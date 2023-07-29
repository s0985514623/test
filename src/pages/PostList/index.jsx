import React, { useState, useCallback, useEffect } from "react";
import ListRow from "../../components/ListRow";
import CreatePostBtn from "../../components/CreatePostBtn";
import fetchData from "../../api/";
import { useQuery, useIsMutating } from "react-query";

const Index = () => {
  //取得當前是否有任何一個 useMutation 請求正在進行中
  const isMutating = useIsMutating();

  //Get Post API
  const { data, isFetching, isError, error } = fetchData();

  //當有 useMutation 請求正在進行中時
  if (isMutating) {
    return <div>MutatingLoading...</div>;
  }

  if (isFetching) {
    return <div>fetchDataLoading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  // 為什麼不能將date set進一個useState裡面?
  // const [extractedData, setExtractedData] = useState([]);
  // console.log(data);
  // setExtractedData(data); //
  // console.log(extractedData); //=> 重複執行好多次

  return (
    <>
      <ListRow postData={data} />
      <CreatePostBtn />
    </>
  );
};

export default Index;
