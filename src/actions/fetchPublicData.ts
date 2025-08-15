import { NavbarResponse, Collections, HomeResponse } from "@/lib/pocketbase-types";
import { fetchCollectionData } from "@/lib/data-fetcher";

export const navbar = async () => {
  return await fetchCollectionData<NavbarResponse>(Collections.Navbar);
};

export const home = async () => {
  return await fetchCollectionData<HomeResponse>(Collections.Home);
};
