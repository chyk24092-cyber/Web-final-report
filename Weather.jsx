import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//天気カードの部品作り(APIを使った非同期データ取得。)
//今回の場合、現地の天気
const WeatherCard = ({ name, lat, lon }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await response.json();
        setWeather(data.current_weather);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setLoading(false);
      }
    };
    fetchWeather();
  }, [lat, lon]);

  const getWeatherEmoji = (code) => {
    if (code === 0) return "☀️";
    if (code <= 3) return "⛅";
    if (code <= 45) return "🌫️";
    if (code <= 67) return "☔";
    if (code <= 82) return "🌧️";
    if (code <= 99) return "⛈️";
    return "☁️";
  };

  // 実際の画面の描画
  return (
    <div style={{ 
      background: 'white', 
      borderRadius: '15px', 
      padding: '20px', 
      width: '200px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      textAlign: 'center',
      color: '#38003c',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#555' }}>{name}</h3>
      {loading ? (
        <div style={{ padding: '20px' }}>Loading...</div>
      ) : weather ? (
        <>
          <div style={{ fontSize: '3rem', marginBottom: '10px' }}>
             {getWeatherEmoji(weather.weathercode)}
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            {weather.temperature}°C
          </div>
          <div style={{ fontSize: '0.9rem', color: '#888', marginTop: '10px' }}>
             Wind: {weather.windspeed}km/h
          </div>
        </>
      ) : (
        <div>Error</div>
      )}
    </div>
  );
};

// weather関数(カードの詳細)
const Weather = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#e0f7fa', 
      padding: '40px 20px', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>

      {/* このページのタイトル */}
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ color: '#006064', marginBottom: '10px', fontSize: '2.5rem' }}>🌤️ Local Weather Info</h1>
        <p style={{ color: '#00838f', marginBottom: '40px', fontSize: '1.2rem' }}>
        プレミアリーグの主な都市の現在の天気
        </p>

        {/* 3つのカードを並べる */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px', 
          flexWrap: 'wrap', 
          marginBottom: '50px' 
        }}>
          <WeatherCard name="🇬🇧 London" lat={51.5074} lon={-0.1278} />
          <WeatherCard name="🐝 Manchester" lat={53.4808} lon={-2.2426} />
          <WeatherCard name="🌊 Merseyside" lat={53.4084} lon={-2.9916} />
        </div>

        {/* 戻るボタン */}
        <Link to="/" style={{ 
          display: 'inline-block', 
          padding: '12px 30px', 
          backgroundColor: '#006064', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '30px', 
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
        }}>
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

//ほかのファイルでも使えるように
export default Weather;