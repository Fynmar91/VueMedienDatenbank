// import axios from "axios";

// const url = "api/media/";

// class MediaService {
//   // Get Medias
//   static getMedia() {
//     return new Promise((resolve, reject) => {
//       axios
//         .get(url)
//         .then((res) => {
//           const data = res.data;
//           resolve(data.map((media) => ({ ...media, createdAt: new Date(media.createdAt) })));
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   }

//   // Create Media
//   static insertMedia(text) {
//     return axios.post(url, {
//       text,
//     });
//   }

//   // Delete Media
//   static deleteMedia(id) {
//     return axios.delete(`${url}${id}`);
//   }
// }

// export default MediaService;
