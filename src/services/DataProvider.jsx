// import React, { createContext, useContext, useState, useEffect } from 'react';

// export const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((json) => {
//         setData(json);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   const updateData = (updatedData) => {
//     setData(updatedData);
//   };

//   const value = {
//     data,
//     loading,
//     error,
//     updateData,
//   };

//   return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
// };

// export const useData = () => {
//   return useContext(DataContext);
// };
