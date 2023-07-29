import React from "react";
import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
/*預想順序
1.axios 打api 取得資料並將資料存進extractedData
2.將extractedData傳入ListRow 組件
3.確認取得API資料後，重新渲染組件
*/

const fetchPost = async () => {
  const response = await axios.get(
    "https://ren.a2hosted.com/wp-json/wp/v2/posts"
  );
  const extractedData = response.data.map((post) => ({
    id: post.id,
    title: post.title.rendered,
    description: post.excerpt.rendered,
    link: post.link,
  }));
  return extractedData;
};
const usePosts = () => {
  // 查询
  //const query = useQuery({ queryKey: ['todos'], queryFn: getTodos });
  return useQuery("getPosts", fetchPost);
};

const fetchData = () => {
  return axios
    .get("https://ren.a2hosted.com/wp-json/wp/v2/posts")
    .then(function (response) {
      //為什麼 =>{} 外面再加上() 會變成一個陣列? (表達式/代碼塊?)
      const extractedData = response.data.map((post) => ({
        id: post.id,
        title: post.title.rendered,
        description: post.excerpt.rendered,
        link: post.link,
      }));
      // handle success
      console.log(extractedData);
      return extractedData;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      throw error;
    });
};

export default usePosts;
