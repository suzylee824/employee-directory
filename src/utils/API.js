import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
const BASEURL = "https://randomuser.me/api/?results=200&nat=us"

export default function() {
    return axios.get(BASEURL);
  }
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   }

