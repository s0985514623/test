import React, { useState } from "react";
import axios from "axios";

const createPostAPI = async (
  title,
  content,
  fetchDataAndSetData,
  onCreatePost,
  setLoading
) => {
  const appName = "admin";
  const appPassword = "UrC8 Oj0d 47r6 kyCW Kdcj YgKa";
  const apiUrl = "https://ren.a2hosted.com/wp-json/wp/v2/posts";

  // 编码应用程序密码
  const authHeader = btoa(`${appName}:${appPassword}`);
  const headers = {
    Authorization: `Basic ${authHeader}`,
  };

  // 构建请求体数据
  const data = {
    title: title,
    content: content,
    status: "publish",
  };
  //版本1 思路：新增文章後調用fetchDataAndSetData重新打API獲得文章
  // try {
  //   await axios.post(apiUrl, data, { headers })
  // 	.then((response) => {
  //     console.log("文章创建成功！", response.data);
  //     fetchDataAndSetData();
  //   });
  //版本2 思路：新增文章後獲取新的文章數據，調用function更新State
  try {
    await axios.post(apiUrl, data, { headers }).then((response) => {
      console.log("文章创建成功！", response.data);
      const id = response.data?.id || 0;
      const src = response.data?.src || "";
      const title = response.data?.title.raw || "";
      const description = response.data?.content.raw || "";
      const newPost = {
        id: id,
        src: src,
        title: title,
        description: description,
      };
      onCreatePost(newPost);
      setLoading(false);
      // console.log("newPost", newPost);
    });
  } catch (error) {
    console.error("文章创建失败。", error);
  }
};

const CreatePost = ({ fetchDataAndSetData, onCreatePost, setLoading }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = () => {
    setLoading(true);
    createPostAPI(
      title,
      content,
      fetchDataAndSetData,
      onCreatePost,
      setLoading
    );
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

export default CreatePost;
