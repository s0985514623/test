import React from "react";
import { useState } from "react";
import deletePostAPI from "../../api/deletePost";
import { useQuery, useMutation, useQueryClient } from "react-query";

const Index = ({ id }) => {
  //取得 queryClient 物件
  const queryClient = useQueryClient();

  const mutation = useMutation(deletePostAPI, {
    // 成功完成 CreatePost 後，重新發起 Get API 查詢
    onSuccess: () => queryClient.invalidateQueries("getPosts"),
  });

  const handleDeletePost = () => {
    // 執行 CreatePost API
    //mutate()只能傳遞一個參數=>將函數在外面包裝一層或是{}打包成一個物件
    mutation.mutate(id);
  };
  return <button onClick={handleDeletePost}>刪除文章</button>;
};

export default Index;
