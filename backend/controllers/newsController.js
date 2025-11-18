import axios from "axios";

export const getNews = async (req, res) => {
  try {
    const API_KEY = process.env.NEWS_API_KEY;

    const { data } = await axios.get(
      `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in`
    );

    res.json({
      success: true,
      results: data.results,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Error fetching news" });
  }
};
