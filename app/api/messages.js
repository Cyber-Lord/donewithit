import client from "./client";

const send = (message, listinId) => {
  client.post("/messages", {
    message,
    listinId,
  });
};
export default {
  send,
};
