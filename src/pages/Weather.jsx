import { useState } from "react";
import { motion } from "framer-motion";
import { WiHumidity, WiStrongWind, WiThermometer } from "react-icons/wi";
import { FaSearch } from "react-icons/fa";
import ProjectPageHeader from "../components/ProjectPageHeader";

// Add your own free API key from https://openweathermap.org/api
const API_KEY = "YOUR_OPENWEATHER_API_KEY";

export default function Weather() {
  const [city, setCity] = useState("Tashkent");
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          cityName
        )}&units=metric&appid=${API_KEY}`
      );
      if (!res.ok) throw new Error("City not found");
      const json = await res.json();
      setData(json);
      setCity(cityName);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(input.trim());
  };

  return (
    <div className="min-h-screen pb-20">
      <ProjectPageHeader title="Weather Website" subtitle="Search any city for live weather data" />

      <div className="max-w-xl mx-auto px-6">
        <form onSubmit={handleSubmit} className="flex gap-3 mb-10">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search city..."
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 outline-none focus:border-accent transition-colors placeholder:text-white/30"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-transform flex items-center gap-2"
          >
            <FaSearch /> Search
          </button>
        </form>

        {API_KEY === "YOUR_OPENWEATHER_API_KEY" && (
          <p className="text-amber-400/80 text-sm text-center mb-6 glass rounded-xl p-4">
            Add your free OpenWeather API key in <code>src/pages/Weather.jsx</code> to enable live data.
          </p>
        )}

        {loading && <p className="text-center text-white/50">Loading...</p>}
        {error && <p className="text-center text-accent">{error}</p>}

        {data && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass glow-border rounded-3xl p-8 text-center"
          >
            <h2 className="text-2xl font-display font-bold mb-1">
              {data.name}, {data.sys?.country}
            </h2>
            <p className="text-white/50 mb-6 capitalize">{data.weather?.[0]?.description}</p>

            <img
              src={`https://openweathermap.org/img/wn/${data.weather?.[0]?.icon}@4x.png`}
              alt={data.weather?.[0]?.description}
              className="w-32 h-32 mx-auto"
            />

            <p className="text-6xl font-display font-bold mb-8">
              {Math.round(data.main?.temp)}°C
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="glass rounded-2xl p-4">
                <WiThermometer className="text-3xl text-accent mx-auto mb-1" />
                <p className="text-sm text-white/50">Feels Like</p>
                <p className="font-semibold">{Math.round(data.main?.feels_like)}°C</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <WiHumidity className="text-3xl text-accent mx-auto mb-1" />
                <p className="text-sm text-white/50">Humidity</p>
                <p className="font-semibold">{data.main?.humidity}%</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <WiStrongWind className="text-3xl text-accent mx-auto mb-1" />
                <p className="text-sm text-white/50">Wind</p>
                <p className="font-semibold">{data.wind?.speed} m/s</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
