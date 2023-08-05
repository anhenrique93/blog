import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://my-blog-ghvy.onrender.com'
})

const endpoints = {
  login: '/auth/login',

  //Authenticated endpoints
  addPost: '/posts'
}

export const api = {
  login(email, password) {
    const data = {
      email: email,
      password: password
    }

    return instance
      .post(endpoints.login, data)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error
      })
  },
  authenticatedRequest: {
    headers() {
      const token = localStorage.getItem('token')
      const headers = {
        Authorization: `Bearer ${token}`
      }
      return headers
    },

    addPost(postData) {
      const data = {
        pt_title: postData.pt_title,
        en_title: postData.en_title,
        pt_excerpt: postData.pt_excerpt,
        en_excerpt: postData.en_excerpt,
        pt_body: postData.pt_body,
        author: postData.author,
        date: postData.date,
        category_ids: postData.categories,
        tag_ids: postData.tag_ids
      }

      return instance
        .post(endpoints.addPost, data, this.headers())
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          throw error
        })
    }
  }
}
