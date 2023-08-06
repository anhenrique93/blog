import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://my-blog-ghvy.onrender.com'
})

const endpoints = {
  login: '/auth/login',
  getPosts: '/posts',

  //Authenticated endpoints
  //POST
  addPost: '/posts',
  
  //GET
  getCategories: '/categories',
  getTags: '/tags',
  getNetworks: '/networks'
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

    addPost(postData, token) {
      const data = {
        "post": {
          pt_title: postData.pt_title,
          en_title: postData.en_title,
          pt_excerpt: postData.pt_excerpt,
          en_excerpt: postData.en_excerpt,
          pt_body: postData.pt_body,
          en_body: postData.en_body,
          author: postData.author,
          date: postData.date,
          category_ids: postData.categories,
          tag_ids: postData.tags
        }
      }

      return instance
        .post(endpoints.addPost, data, {
            headers: { "Authorization" : `Bearer ${token}` }
        })
        .then((response) => {
          alert("Post adicionado com sucesso!")
          return response.data
        })
        .catch((error) => {
          alert(error)  
        })
    },
    categories(token) {
      return instance
        .get(endpoints.getCategories, {
          headers: { "Authorization" : `Bearer ${token}` }
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          throw error
        })
    },
    tags(token) {
      return instance
        .get(endpoints.getTags, {
          headers: { "Authorization" : `Bearer ${token}` }
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          throw error
        })
    },
    networks(token) {
      return instance
        .get(endpoints.getNetworks, {
          headers: { "Authorization" : `Bearer ${token}` }
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          throw error
        })
    }
  }
}
