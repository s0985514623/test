import React from "react";
import axios from "axios";

const createPost = async ({ title, content }) => {
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

  try {
    await axios.post(apiUrl, data, { headers }).then((response) => {
      console.log("文章创建成功！", response.data);
    });
  } catch (error) {
    console.error("文章创建失败。", error);
  }
};

export default createPost;
