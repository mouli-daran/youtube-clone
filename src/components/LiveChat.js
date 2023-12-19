import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, makeRandomMessage } from "../utils/Helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Api polling");

      dispatch(
        addMessage({
          name: generateName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className=" mx-2 rounded-lg p-2 border shadow-lg border-black h-[550px] bg-gray-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "Mouli",
            message: liveMessage,
          }))
          setLiveMessage("");
        }}
        className="border border-black px-2 m-2 rounded-xl"
      >
        <input
          className="w-[25rem] rounded-lg p-1"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className=" px-2 bg-green-300 rounded-xl">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
