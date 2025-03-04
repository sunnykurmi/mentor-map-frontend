import {
  allcities,
  saveUser,
  removeUser,
  signuperror,
  signinerror,
  createcity,
  allroadmap,
  editcity,
  deletecity,
  studentform,
  partnerform,
  allpartners
} from "../Reducers/userSlice";
import axios from "../../utils/axios";

export const AllCities = () => async (dispatch, getState) => {
  try {
    const  {data}  = await axios.get("/");
    dispatch(allcities(data.allcities));
    dispatch(allpartners(data.allpartners));
  } catch (error) {
    console.log(error);
  }
};

export const asynccurrentUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/admin");
    dispatch(saveUser(data.loggedinuser));
  } catch (error) {
    console.log(error);
  }
};

export const asyncsignup = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/admin/signup", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error);
    // dispatch(signuperror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};

export const asyncsignin = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/admin/signin", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error);
    // dispatch(signinerror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};

export const asyncremoveUser = () => async (dispatch, getState) => {
  try {
    await axios.get("/admin/signout");
    dispatch(removeUser());
  } catch (error) {
    (error.response.data);
  }
};

export const CreateCity = (formdata) => async (dispatch) => {
  try {
    const response = await axios.post("/admin/createcity", formdata);
    dispatch(createcity(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const EditCity = (formdata , id) => async (dispatch) => {
  try {
    const response = await axios.post(`/admin/editcity/${id}`,formdata);
    dispatch(editcity(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const DeleteCity = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/admin/deletecity/${id}`);
    dispatch(deletecity(response.data));
  } catch (error) {
    console.log(error);
  }
};
export const Allroadmap = () => async (dispatch) => {
  try {
    const {data} = await axios.post(`/admin/allroadmap`);
    dispatch(allroadmap(data.roadmaps));
  } catch (error) {
    console.log(error);
  }
};

export const StudentForm = (formdata) => async (dispatch) => {
  try {
    const response = await axios.post("/studentform", formdata);
    dispatch(studentform(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const PartnerForm = (formdata) => async (dispatch) => {
  try {
    const response = await axios.post("/partnerwithus", formdata);
    dispatch(partnerform(response.data));
  } catch (error) {
    console.log(error);
  }
};
