import Aidata from "./AIdata/ai-data.json";

const fetchAiData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Aidata);
    }, 1000);
  });
};
export default fetchAiData;
