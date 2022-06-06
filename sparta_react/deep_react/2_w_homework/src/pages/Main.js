import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const til_list = useSelector((store) => store.til.til_list);

  console.log(til_list);

  return (
    <>
      <div
        style={{
          borderRight: "1px solid #065880",
          width: "20vmin",
          height: "100vmin",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <p>1월</p>
        <p>2월</p>
        <p>3월</p>
        <p>4월</p>
      </div>
      <div
        style={{
          margin: "0 auto",
          padding: "1rem",
          width: "60vmin",
        }}
      >
        <div
          className="title-area"
          style={{
            borderBottom: "1px solid #ccc",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1>TIL</h1>
          <button
            style={{
              color: "#fff",
              background: "#065880",
              border: "none",
              borderRadius: "3rem",
              width: "3rem",
              height: "3rem",
              margin: "auto 0",
            }}
            onClick={() => {
              navigate("/write");
            }}
          >
            추가
          </button>
        </div>

        <div className="til-list">
          {til_list.map((til, idx) => {
            return (
              <div
                className="til-item"
                key={idx}
                style={{
                  border: "1px solid #888",
                  marginBottom: "2rem",
                  padding: ".5rem",
                }}
              >
                <h3>{til.title}</h3>
                <p>{til.content}</p>
                <p>{til.time}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
