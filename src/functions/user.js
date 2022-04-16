import axios from "axios";

export const createNewUser = async (nameOfUser, emailOfUser) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/user/${nameOfUser}/${emailOfUser}`
  );
};