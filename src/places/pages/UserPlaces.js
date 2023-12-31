import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Builgind",
    description: "One of the most famouse skyscrapers of the world!",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Empire_State_Building_%28HDR%29.jpg/405px-Empire_State_Building_%28HDR%29.jpg",
    address: "20 W 34th St., New York, NY 10001, Sjedinjene Države",
    location: {
      lat: 40.7484405,
      lng: -73.9878531
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Empire State Builgind",
    description: "One of the most famouse skyscrapers of the world!",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Empire_State_Building_%28HDR%29.jpg/405px-Empire_State_Building_%28HDR%29.jpg",
    address: "20 W 34th St., New York, NY 10001, Sjedinjene Države",
    location: {
      lat: 40.7484405,
      lng: -73.9878531
    },
    creator: "u2"
  }
]

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;