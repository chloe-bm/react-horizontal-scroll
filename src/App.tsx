import HorizontalScroll from "./HorizontalScroll";

const data = new Array(10).fill("1");

function App() {
  return (
    <div>
      <HorizontalScroll>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              height: "20px",
              width: "170px",
              border: "1px solid red",
              padding: "1rem 2rem",
            }}
          >
            item
          </div>
        ))}
      </HorizontalScroll>
    </div>
  );
}

export default App;
