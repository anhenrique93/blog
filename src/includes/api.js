import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://my-blog-ghvy.onrender.com'
})

const endpoints = {
  login: '/auth/login',
  getPosts: '/posts',

  //BLOG_POST
  addPost: '/posts',
  updatePost: (id) => `/posts/${id}`,
  deletePost: (id) => `/posts/${id}`,
  getLastPosts: (numberOfPosts) => `/posts/${numberOfPosts}`,
  getPostsPerPage: (pageNumber, postsPerPage) =>
    `/posts?page=${pageNumber}&per_page=${postsPerPage}`,

  //CATEGORY
  addCategory: '/categories',
  updateCategory: (id) => `/categories/${id}`,
  deleteCategory: (id) => `/categories/${id}`,

  //OTHERS
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

  //POSTS
  getAllPosts() {
    return instance
      .get(endpoints.getPosts)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error
      })
  },

  getLastPosts(numberOfPosts) {
    return instance
      .get(endpoints.getLastPosts(numberOfPosts))
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error
      })
  },

  getPostsPerPage(pageNumber, postsPerPage) {
    return instance
      .get(endpoints.getPostsPerPage(pageNumber, postsPerPage))
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

    // Posts
    addPost(postData, token) {
      const data = {
        post: {
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
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
          return JSON.stringify(response.data, null, 2)
        })
        .catch((error) => {
          return JSON.stringify(error.response.data, null, 2)
        })
    },

    updatePost(postData, token, postId) {
      const data = {
        post: {
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
        .patch(endpoints.updatePost(postId), data, {
          headers: { Authorization: `Bearer: ${token}` }
        })
        .then((response) => {
          return JSON.stringify(response.data, null, 2)
        })
        .catch((error) => {
          return JSON.stringify(error.response.data, null, 2)
        })
    },

    deletePost(token, postId) {
      return instance
        .delete(endpoints.deletePost(postId), {
          headers: { Authorization: `Bearer: ${token}` }
        })
        .then((response) => {
          return JSON.stringify(response.data, null, 2)
        })
        .catch((error) => {
          return JSON.stringify(error.response.data, null, 2)
        })
    },

    //CATEGORIES
    categories(token) {
      return instance
        .get(endpoints.getCategories, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          throw error
        })
    },

    addCategory(categoryData, token) {
      const data = {
        category: {
          pt_name: categoryData.pt_name,
          en_name: categoryData.en_name
        }
      }

      return instance
        .post(endpoints.addCategory, data, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
          return JSON.stringify(response.data, null, 2)
        })
        .catch((error) => {
          return JSON.stringify(error.response.data, null, 2)
        })
    },

    updateCategory(categoryData, token, categoryId) {
      const data = {
        category: {
          pt_name: categoryData.pt_name,
          en_name: categoryData.pt_name
        }
      }

      return instance
        .patch(endpoints.updateCategory(categoryId), data, {
          headers: { Authorization: `Bearer: ${token}` }
        })
        .then((response) => {
          return JSON.stringify(response.data, null, 2)
        })
        .catch((error) => {
          return JSON.stringify(error.response.data, null, 2)
        })
    },

    deleteCategory(token, categoryId) {
      return instance
        .delete(endpoints.deleteCategory(categoryId), {
          headers: { Authorization: `Bearer: ${token}` }
        })
        .then((response) => {
          return JSON.stringify(response.data, null, 2)
        })
        .catch((error) => {
          return JSON.stringify(error.response.data, null, 2)
        })
    },

    //TAGS
    tags(token) {
      return instance
        .get(endpoints.getTags, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          throw error
        })
    },

    //NETWORKS
    networks(token) {
      return instance
        .get(endpoints.getNetworks, {
          headers: { Authorization: `Bearer ${token}` }
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
