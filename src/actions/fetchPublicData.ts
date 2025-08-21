import {
  Collections,
  ContactResponse,
  EventsPageResponse,
  EventsResponse,
  GiveResponse,
  HomeResponse,
  MinistryResponse,
  TeamMemberResponse,
} from "../../pocketbase-types";
import { fetchAllCollectionData, fetchCollectionData } from "@/lib/data-fetcher";

export const contact = async () => {
  return await fetchCollectionData<ContactResponse>(Collections.Contact);
};

export const home = async () => {
  return await fetchCollectionData<HomeResponse>(Collections.Home);
};

export const teamMembers = async () => {
  return await fetchAllCollectionData<TeamMemberResponse>(Collections.TeamMember);
};

export const ministries = async () => {
  return await fetchAllCollectionData<MinistryResponse>(Collections.Ministry);
};

export const eventPage = async () => {
  return await fetchCollectionData<EventsPageResponse>(Collections.EventsPage);
};

export const events = async () => {
  return await fetchAllCollectionData<EventsResponse>(Collections.Events);
};

export const give = async () => {
  return await fetchCollectionData<GiveResponse>(Collections.Give);
};
