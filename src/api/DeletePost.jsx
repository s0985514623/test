import React, { useState } from "react";
import axios from "axios";

const deletePostAPI = async (id, setLoading, onDeletePost, extractedData) => {
  const appName = "admin";
  const appPassword = "UrC8 Oj0d 47r6 kyCW Kdcj YgKa";
  const apiUrl = "https://ren.a2hosted.com/wp-json/wp/v2/posts/" + id;
  console.log("apiUrl", apiUrl);
  // 编码应用程序密码
  const authHeader = btoa(`${appName}:${appPassword}`);
  const headers = {
    Authorization: `Basic ${authHeader}`,
  };

  try {
    await axios.delete(apiUrl, { headers }).then((response) => {
      console.log("文章删除成功！", response.data);

      //看是要重新打api取得資料還是useState刪除
      //使用useState刪除
      const upDeletePost = extractedData.filter((item) => item.id !== id);
      onDeletePost(upDeletePost);
      setLoading(false);
    });
  } catch (error) {
    console.error("文章刪除失败。", error);
  }
};

const DeletePost = ({ id, setLoading, onDeletePost, extractedData }) => {
  const handleDeletePost = () => {
    setLoading(true);
    deletePostAPI(id, setLoading, onDeletePost, extractedData);
  };
  return <button onClick={handleDeletePost}>刪除文章</button>;
};

export default DeletePost;
