export default {
  apiUrl: process.env.REACT_APP_API_URL,
  authHeader: {
    Authorization: 'Basic '+window.btoa('admin:admin'),
  }
}
