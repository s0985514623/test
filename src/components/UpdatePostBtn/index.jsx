import React from "react";
import { useState } from "react";
import updatePostAPI from "../../api/updatePost";
import { useQuery, useMutation, useQueryClient } from "react-query";

const Index = ({ id, title, content, setLoading }) => {
  //取得 queryClient 物件
  const queryClient = useQueryClient();

  const mutation = useMutation(updatePostAPI, {
    // 成功完成 CreatePost 後，重新發起 Get API 查詢
    onSuccess: () => queryClient.invalidateQueries("getPosts"),
  });

  const handleUpdatePost = () => {
    mutation.mutate({ id, title, content, setLoading });
    setLoading(true);
  };
  return <button onClick={handleUpdatePost}>更新文章</button>;
};

export default Index;
