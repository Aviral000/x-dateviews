import React, { useState } from 'react';

export default function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  const [sortByDate, setSortByDate] = useState(false);
  const [sortByViews, setSortByViews] = useState(false);

  const sortByDateHandler = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.date !== b.date) {
        return new Date(a.date) - new Date(b.date);
      } else {
        return a.views - b.views;
      }
    });
    setData(sortedData);
    setSortByDate(true);
    setSortByViews(false);
  };

  const sortByViewsHandler = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views !== b.views) {
        return a.views - b.views;
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });
    setData(sortedData);
    setSortByViews(true);
    setSortByDate(false);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button type='button' onClick={sortByDateHandler}>
        Sort by Date
      </button>
      <button type='button' onClick={sortByViewsHandler}>
        Sort by Views
      </button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
