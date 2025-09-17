import { useState } from "react";
import "./App.css";

function Todolist() {
  const [cv, setcv] = useState("");
  const [dscv, setdscv] = useState([]);

  const addcv = () => {
    if (cv.trim() !== "") {
      setdscv([...dscv, cv]);
      setcv("");
    }
  };

  const xoacv = (index) => {
    setdscv(dscv.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Bài 1: To-do List</h2>
      <input
        value={cv}
        onChange={(e) => setcv(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={addcv}>Thêm</button>
      <ul>
        {dscv.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => xoacv(i)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Colorbox({ color }) {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: color,
      }}
    />
  );
}

function ColorPicker() {
  const [color, setColor] = useState("white");
  return (
    <div>
      <h2>Bài 2: Color Picker</h2>
      <button onClick={() => setColor("red")}>Đỏ</button>
      <button onClick={() => setColor("blue")}>Xanh</button>
      <button onClick={() => setColor("yellow")}>Vàng</button>
      <Colorbox color={color} />
    </div>
  );
}

function Shopping() {
  const dssanpham = [
    { ten: "Sách", gia: 10000 },
    { ten: "Bút", gia: 5000 },
    { ten: "Vở", gia: 7000 },
  ];

  const [giohang, setgiohang] = useState([]);

  const them = (sanpham) => {
    setgiohang([...giohang, sanpham]);
  };

  let tongtien = 0;
  for (let p of giohang) {
    tongtien += p.gia;
  }

  return (
    <div>
      <h2>Bài 3: Giỏ hàng</h2>
      <h3>Sản phẩm</h3>
      {dssanpham.map((p, i) => (
        <div key={i}>
          {p.ten} - {p.gia}₫{" "}
          <button onClick={() => them(p)}>Thêm vào giỏ</button>
        </div>
      ))}
      <h3>Giỏ hàng</h3>
      <ul>
        {giohang.map((p, i) => (
          <li key={i}>
            {p.ten} - {p.gia}₫
          </li>
        ))}
      </ul>
      <p>Tổng tiền: {tongtien}₫</p>
    </div>
  );
}

function Post({ text }) {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);

  return (
    <div style={{ border: "1px solid white", padding: 10, margin: 10 }}>
      <p>{text}</p>
      <button onClick={() => setlike(like + 1)}>👍 {like}</button>
      <button onClick={() => setdislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}

function Posts() {
  return (
    <div>
      <h2>Bài 4: Like/Dislike Post</h2>
      <Post text="Học ReactJS có khó không?" />
      <Post text="Props và State là gì?" />
      <Post text="Lập trình web có vui không?" />
    </div>
  );
}

function Question({ q, onAnswer }) 
{
  return (
    <div>
      <p>{q.text}</p>
      {q.options.map((opt, i) => (
        <button key={i} onClick={() => onAnswer(i)} style={{ margin: "5px" }}>
          {opt}
        </button>
      ))}
    </div>
  );
}

function QuizApp() {
  const questions = [
    {
      text: "ReactJS dùng để làm gì?",
      options: ["Mobile App", "Web UI", "Hệ điều hành", "Cơ sở dữ liệu"],
      correct: 1,
    },
    {
      text: "Props trong React là gì?",
      options: ["Trạng thái", "Thuộc tính truyền vào", "API", "CSS"],
      correct: 1,
    },
    {
      text: "State dùng để?",
      options: [
        "Quản lý dữ liệu thay đổi",
        "Định nghĩa component",
        "Kết nối backend",
        "Trang trí giao diện",
      ],
      correct: 0,
    },
  ];

  const [cauhoi, setcauhoi] = useState(0);
  const [diem, setdiem] = useState(0);
  const [cauhoidatraloi, setcauhoidatraloi] = useState(0);

  const handleAnswer = (index) => {
    if (index === questions[cauhoi].correct) {
      setdiem(diem + 1);
    }
    setcauhoidatraloi(cauhoidatraloi + 1);

    if (cauhoi + 1 < 3) {
      setcauhoi(cauhoi + 1);
    }
  };

  return (
    <div>
      <h2>Bài 5: Quiz App</h2>
      {cauhoidatraloi === 3 ? (
        <p>
          Bạn đã trả lời đúng {diem}/3 câu.
        </p>
      ) : (
        <Question q={questions[cauhoi]} onAnswer={handleAnswer} />
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <Todolist />
      <hr />
      <ColorPicker />
      <hr />
      <Shopping />
      <hr />
      <Posts />
      <hr />
      <QuizApp />
    </div>
  );
}

export default App;
