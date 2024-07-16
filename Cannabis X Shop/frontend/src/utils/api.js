import axios from 'axios';
 // eslint-disable-next-line no-undef

 axios.interceptors.request.use(
    (config) => {
      const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWI5YWZhOTQ1YzAzMDAxMjljYThkMiIsInVzZXJuYW1lIjoic3VwZXJ1c2VyIiwiZXhwIjoxNjUzODAwMzU3LCJpYXQiOjE2NDYwMjQzNTd9.S4maxjBbrbUTDysPsVp5PkDnuj2YHd9zIq-D4VXXZxs"
 // eslint-disable-next-line no-param-reassign
      config.headers.common.Authorization = `Bearer ${authToken}`;
      return config;
    },
    (error) => Promise.reject(error),
 
);

export default axios;