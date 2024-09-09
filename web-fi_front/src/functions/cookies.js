import axios from "axios";

const getCookie = async (cookie_name) => {
  try {
    const results = await axios.get(`http://localhost:8000/cookies/get/${cookie_name}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      withCredentials: true

    })

    console.log(results)
    return results.data
  }
  catch (error) {
    console.log(error)
  }
}

const postCookie = async (cookie_name, cookie_data) => {
  try {
    const results = await axios.post(`http://localhost:8000/cookies/post/${cookie_name}`, cookie_data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      withCredentials: true
    })

    console.log(results)
    return results.data
  }
  catch (error) {
    console.log(error)
  }
}

const deleteCookie = async (cookie_name) => {
  try {
    const results = axios.delete(`http://localhost:8000/cookies/delete/${cookie_name}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      withCredentials: true
    })

    console.log(results)
  }
  catch (error) {
    console.log(error)
  }
}

export { getCookie, postCookie, deleteCookie }