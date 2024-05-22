"use client";
import { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Land() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 1500);
  };
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="flex flex-column justify-center">
      <div
        className=" text-white text-4xl"
        style={{ textAlign: "center", marginTop: "6rem" }}
      >
        <div>Password Generator</div>
        <div style={{ fontSize: "1.5rem", color: "#0275ff" }}>
          (Powered by NextJs)
        </div>
        <div
          className="bg-gradient-to-b from-gray-700 to-black"
          style={{
            border: "1px solid #0275ff",
            borderRadius: "8px",
            width: "45vw",
            marginTop: "5rem",
            fontSize: "1rem",
            boxShadow: "0px 6px 16px 0px #0275ff",
          }}
        >
          <input
            type="text"
            value={password}
            className="outline-none px-3 m-5 bg-black text-white"
            placeholder="Password"
            readOnly
            style={{ borderRadius: "8px", width: "35vw" }}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-black text-white px-3"
            style={{ borderRadius: "8px" }}
          >
            copy
          </button>
          <div
            className="flex text-1xl gap-x-2 justify-evenly text-white bg-black"
            style={{ borderRadius: "0px 0px 8px 8px" }}
          >
            <div className="flex item-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
                style={{ backgroundColor: "black" }}
              />
              <label htmlFor="length" style={{ fontSize: "" }}>
                Length: {length}
              </label>
            </div>
            <div className="flex item-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                className="cursor-pointer"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="length" style={{ fontSize: "" }}>
                Numbers
              </label>
            </div>
            <div className="flex item-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                className="cursor-pointer"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="length" style={{ fontSize: "" }}>
                Characters
              </label>
            </div>
          </div>
        </div>
        {notification && (
          <div
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-gray-700 to-black text-white px-4 py-2 rounded shadow-lg"
            style={{
              border: "1px solid #0275ff",
              borderRadius: "8px",
              fontSize: "1rem",
              boxShadow: "0px 6px 16px 0px #0275ff",
              marginBottom: "4rem",
            }}
          >
            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />{" "}
            Password copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
}
