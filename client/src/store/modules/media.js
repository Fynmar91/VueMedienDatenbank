import axios from "axios";

const url = "api/media/";

const state = {
  media: [],
  error: "",
};

const getters = {
  getAllMedia: (state) => {
    return state.media;
  },
  getError: (state) => {
    return state.error;
  },
};

const actions = {
  async fetchMedia({ commit }) {
    const response = await axios.get(url);
    const data = response.data.map((media) => ({ ...media, startDate: new Date(media.startDate) }));

    commit("setMedia", data);
  },
  async addMedia({ commit }, newMedia) {
    const response = await axios.post(url, newMedia);
    response.data.startDate = new Date(response.data.startDate);

    commit("newMedia", response.data);
  },
  async deleteMedia({ commit }, id) {
    await axios.delete(`${url}${id}`);

    commit("removeMedia", id);
  },
  async filterMedia({ commit }, e) {
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    const response = await axios.get(`${url}limit/${limit}`);
    const data = response.data.map((media) => ({ ...media, startDate: new Date(media.startDate) }));

    commit("setMedia", data);
  },
  // async updateMedia({ commit }, updatedMedia) {
  //   const response = await axios.put(`${url}${updatedMedia.id}`);

  //   commit("changeMedia", response.data);
  //},
  setError({ commit }, error) {
    commit("writeError", error);
  },
};

const mutations = {
  setMedia: (state, media) => (state.media = media),
  newMedia: (state, media) => state.media.unshift(media),
  removeMedia: (state, id) => (state.media = state.media.filter((media) => media._id !== id)),
  changeMedia: (state, updatedMedia) => {
    const index = state.media.findIndex((media) => media.id === updatedMedia.id);
    if (index !== -1) {
      state.media.splice(index, 1, updatedMedia);
    }
  },
  writeError: (state, error) => (state.error = error),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
