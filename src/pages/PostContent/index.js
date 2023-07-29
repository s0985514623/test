import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Button, Select, Image, Typography, Space } from "antd";
import UpdatePost from "../../components/UpdatePostBtn";
import { useIsMutating } from "react-query";

const { Paragraph } = Typography;

const PostContent = (props) => {
  const isMutating = useIsMutating();
  const [loading, setLoading] = useState(false);
  //上一頁
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const { state } = useLocation();
  console.log("state", state);

  const src =
    state?.src || "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";
  const title = state?.title || "";
  const description = state?.description || "";

  const [eitTitle, setEitTitle] = useState(title);
  const [eitDescription, setEitDescription] = useState(description);

  if (loading) {
    return <div>Loading...</div>;
  }

  // //當有 useMutation 請求正在進行中時
  // if (isMutating) {
  //   return <div>MutatingLoading...</div>;
  // }
  return (
    <Space direction="vertical" style={{ width: "100%" }} size="large">
      <Button type="default" onClick={handleClick}>
        回上一頁
      </Button>
      <Image width={500} src={src} />
      <Paragraph
        editable={{
          onChange: setEitTitle,
        }}
        level={1}
        style={{ margin: 0 }}
      >
        {eitTitle}
      </Paragraph>
      <Paragraph
        editable={{
          onChange: setEitDescription,
        }}
        level={2}
        style={{ margin: 0 }}
      >
        {eitDescription}
      </Paragraph>
      <UpdatePost
        id={state.id}
        title={eitTitle}
        content={eitDescription}
        setLoading={setLoading}
      />
    </Space>
  );
};

export default PostContent;
