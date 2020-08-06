import axios from "axios";

const mediaUrl = "api/media/";
const formatUrl = "api/format/";

const state = {
  media: [],
  singleMedia: [],
  relatedMedia: [],
  formats: [],
  error: "",
};

const getters = {
  getAllMedia: (state) => {
    return state.media;
  },
  getSingleMedia: (state) => {
    return state.singleMedia;
  },
  getRelatedMedia: (state) => {
    return state.relatedMedia;
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
    let data = response.data.map((media) => ({ ...media, startDate: new Date(media.startDate) }));
    data = data.sort((a, b) => a.startDate < b.startDate);

    commit("setMedia", data);
  },
  async fetchSingleMedia({ commit }, id) {
    commit("resetState");
    const response = await axios.get(`${mediaUrl}${id}`);
    const data = response.data.map((media) => ({ ...media, startDate: new Date(media.startDate) }));

    const response2 = await axios.get(`${mediaUrl}filter/${data[0].name}/${id}`);
    const data2 = response2.data.map((media) => ({ ...media, startDate: new Date(media.startDate) }));

    console.log(data2);
    commit("setSingleMedia", data);
    commit("setRelatedMedia", data2);
  },
  async fetchMediaByName({ commit }, name) {
    const response = await axios.get(`${mediaUrl}filter/${name}`);
    const data = response.data.map((media) => ({ ...media, startDate: new Date(media.startDate) }));

    commit("setMedia", data);
  },
  async addMedia({ commit }, newMedia) {
    const response = await axios.post(mediaUrl, newMedia);
    response.data.startDate = new Date(response.data.startDate);

    commit("newMedia", response.data);
  },
  async deleteMedia({ commit }, id) {
    console.log("ID2:", id);
    await axios.delete(`${mediaUrl}${id}`);

    commit("removeMedia", id);
  },
  async filterMedia({ commit }, { limit, format, fromDate, toDate }) {
    const response = await axios.get(`${mediaUrl}filter/${limit}/${format}/${fromDate}/${toDate}`);
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

    commit("setFormat", data);
  },
  setError({ commit }, error) {
    commit("setError", error);
  },
  resetState({ commit }) {
    commit("resetState");
  },
};

const mutations = {
  // Media
  setMedia: (state, media) => (state.media = media),
  setSingleMedia: (state, singleMedia) => (state.singleMedia = singleMedia),
  setRelatedMedia: (state, media) => (state.relatedMedia = media),
  newMedia: (state, media) => state.media.unshift(media),
  removeMedia: (state, id) => {
    state.media = state.media.filter((media) => media._id !== id);
    state.singleMedia = [];
  },
  changeMedia: (state, updatedMedia) => {
    const index = state.media.findIndex((media) => media.id === updatedMedia.id);
    if (index !== -1) {
      state.media.splice(index, 1, updatedMedia);
    }
  },
  // Format
  setFormat: (state, format) => (state.formats = format),
  setError: (state, error) => (state.error = error),
  resetState: (state) => {
    state.media = [];
    state.singleMedia = [];
    state.relatedMedia = [];
    state.formats = [];
    state.error = "";
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
