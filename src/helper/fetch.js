import axios from "axios";

let respuesta = undefined;
const baseUrl = process.env.REACT_APP_API_URL;

const axiosPetition = async (endpoint, data = {}, method = "GET") => {
  const options = {
    method,
    url: `${baseUrl}${endpoint}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data,
  };

  await axios
    .request(options)
    .then(function (response) {
      const { data } = response;
      respuesta = data;
    })
    .catch(function (error) {
      respuesta = error;
    });
};

export { axiosPetition, respuesta };
