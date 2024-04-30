import { useEffect, useState } from "react";

interface IData {
  buh: string;
}

function App() {
  const [data, setData] = useState<IData | null>();

  useEffect(() => {
    const link = import.meta.env.PROD ? import.meta.env.VITE_API_LINK : "./api";

    fetch(link + "/buh")
      .then((res) => res.json())
      .then((data: IData) => setData(data));
  }, []);

  return (
    <>
      <h1>{data?.buh}</h1>
    </>
  );
}

export default App;
