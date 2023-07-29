import React, { useState } from "react";
import axios from "axios";

const updatePostAPI = async ({ id, title, content, setLoading }) => {
  const appName = "admin";
  const appPassword = "UrC8 Oj0d 47r6 kyCW Kdcj YgKa";
  const apiUrl = "https://ren.a2hosted.com/wp-json/wp/v2/posts/" + id;
  console.log("apiUrl", apiUrl);
  // 编码应用程序密码
  const authHeader = btoa(`${appName}:${appPassword}`);
  const headers = {
    Authorization: `Basic ${authHeader}`,
  };
  const data = {
    title: title,
    content: content,
  };
  try {
    await axios.post(apiUrl, data, { headers }).then((response) => {
      console.log("文章更新成功！", response.data);
    });
    setLoading(false);
  } catch (error) {
    console.error("文章更新失败。", error);
  }
};

export default updatePostAPI;
