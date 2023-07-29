import React from "react";
import { useState } from "react";
import createPost from "../../api/createPost";
import { useQuery, useMutation, useQueryClient } from "react-query";

const Index = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //取得 queryClient 物件
  const queryClient = useQueryClient();

  const mutation = useMutation(createPost, {
    // 成功完成 CreatePost 後，重新發起 Get API 查詢
    onSuccess: () => queryClient.invalidateQueries("getPosts"),
  });

  const handleCreatePost = () => {
    // 執行 CreatePost API
    //mutate()只能傳遞一個參數=>將函數在外面包裝一層或是{}打包成一個物件
    mutation.mutate({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <label>標題</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>內容</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleCreatePost}>新增文章</button>
    </div>
  );
};

export default Index;
