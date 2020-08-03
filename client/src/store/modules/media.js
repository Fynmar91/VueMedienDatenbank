import axios from "axios";

const mediaUrl = "api/media/";
const formatUrl = "api/format/";

const state = {
  media: [],
  formats: [],
  error: "",
};

const getters = {
  getAllMedia: (state) => {
    return state.media;
  },
  getAllFormats: (state) => {
    return state.formats;
  },
  getError: (state) => {
    return state.error;
  },
};

const actions = {
  // Media
  async fetchMedia({ commit }) {
    const response = await axios.get(mediaUrl);
    const data = response.data.map((media) => ({ ...media, startDate: new Date(media.startDate) }));

    commit("setMedia", data);
  },
  async addMedia({ commit }, newMedia) {
    const response = await axios.post(mediaUrl, newMedia);
    response.data.startDate = new Date(response.data.startDate);

    commit("newMedia", response.data);
  },
  async deleteMedia({ commit }, id) {
    await axios.delete(`${mediaUrl}${id}`);

    commit("removeMedia", id);
  },
  async filterMedia({ commit }, e) {
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    const response = await axios.get(`${mediaUrl}filter/${limit}`);
    const data = response.data.map((media) => ({ ...media, startDate: new Date(media.startDate) }));

    commit("setMedia", data);
  },
  // async updateMedia({ commit }, updatedMedia) {
  //   const response = await axios.put(`${mediaUrl}${updatedMedia.id}`);

  //   commit("changeMedia", response.data);
  //},

  // Format
  async fetchFormats({ commit }) {
    const response = await axios.get(formatUrl);
    const data = response.data;
    console.log(data);

    commit("setFormat", data);
  },

  setError({ commit }, error) {
    commit("writeError", error);
  },
};

const mutations = {
  // Media
  setMedia: (state, media) => (state.media = media),
  newMedia: (state, media) => state.media.unshift(media),
  removeMedia: (state, id) => (state.media = state.media.filter((media) => media._id !== id)),
  changeMedia: (state, updatedMedia) => {
    const index = state.media.findIndex((media) => media.id === updatedMedia.id);
    if (index !== -1) {
      state.media.splice(index, 1, updatedMedia);
    }
  },
  // Format
  setFormat: (state, format) => (state.formats = format),
  writeError: (state, error) => (state.error = error),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
