import axios from "axios";

export const loadCardDataFunc = async (id) => {
  let config = {
    headers: {
      Authorization: `token ${`e298b9a8a78ff698f088cf7ff0c46771e969bf2b`}`,
    },
  };

  const data = await axios.get(
    `https://admin.aamartaka.com/api/v1/credit_card/?institute=${id}`,
    config
  );
  console.log(data);
  return data;
};
