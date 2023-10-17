import { CAMPSITES } from "../../app/shared/CAMPSITES";

// our selector function
export const selectAllCampsites = () => {
  return CAMPSITES;
};


export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
}