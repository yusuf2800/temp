import "./Style.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Fourth = ({ name }) => {
  useEffect(() => {
    document.title = name;
  }, []);

  let days = [];
  let date = new Date("2025-02-28");

  const sides = [
    "6",
    "7",
    "9.5",
    "8",
    "6",
    "6",
    "8.5",
    "6",
    "7.5",
    "8.5",
    "7",
    "7",
    "7",
    "7",
    "8",
    "5",
    "5.5",
    "10",
    "8",
    "8.5",
    "8",
    "7",
    "9",
    "7",
  ];

  for (let i = 1; i <= 30; i++) {
    days.push([i, date.toDateString()]);
    date.setDate(date.getDate() + 1);
  }

  let count = 1.4;
  const parts = [1.4];
  const files = [];
  for (let i = 0; i < 23; i++) {
    if (count + 0.6 < Math.floor(count) + 1) {
      count += 1.1;
    } else {
      count += 1.7;
    }
    count = parseFloat(count.toFixed(1));
    parts.push(count);
  }

  parts.forEach((part) => {
    Number(part);
    files.push(`/quran pdfs/juz${Math.floor(part)}/${part}.pdf`);
  });

  return (
    <div>
      <div className="parent-container">
        <div className="child-container">
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Part</th>
                <th>Sides</th>
                <th>File</th>
              </tr>
            </thead>
            <tbody>
              {parts.map((part, i) => (
                <tr key={i}>
                  <td>{days[i][0]}</td>
                  <td>{part}</td>
                  <td>{sides[i]}</td>
                  <td>
                    <a href={files[i]} target="_blank">
                      <button className="child-btn">View</button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link key={Math.random()} to="/">
        <button className="home">
          <svg
            className="back"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="rgb(22, 60, 94)"
          >
            <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default Fourth;
