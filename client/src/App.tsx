function App() {
  const link = import.meta.env.PROD ? import.meta.env.VITE_API_LINK : "./api";

  console.log("meta: ", import.meta.env);

  fetch(link + "/buh")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <>
      <h1>buh</h1>
    </>
  );
}

export default App;
