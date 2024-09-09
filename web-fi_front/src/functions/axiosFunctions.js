import axios from "axios";

const dataPost = async (url, data, csrf_token, e) => {
  e.preventDefault()

  try {
    const results = await axios.post(url, data, {
      headers: {
        "X-CSRFToken": csrf_token,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      withCredentials: true,
    })

    return results.data
  }
  catch (error) {
    console.log(error)
    return error
  }

}

// do userGet function
const dataGet = async (url, csrf_token) => {

  try {

    const results = await axios.get(url,
      {
        headers: {
          "X-CSRFToken": csrf_token,
        },
        withCredentials: true,
      })

    return results.data
  }
  catch (error) {
    console.log(error)
  }
}

export { dataPost, dataGet}