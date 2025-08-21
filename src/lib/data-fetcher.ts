import pb from "@/lib/pocketbase";
import { Collections } from "../../pocketbase-types";

/**
 * Generic data fetcher for PocketBase collections
 * @param collection - The collection name to fetch from
 * @param page - Page number (default: 1)
 * @param perPage - Items per page (default: 1)
 * @returns First item from the collection or null if error/empty
 */
export const fetchCollectionData = async <T>(
  collection: Collections,
  page: number = 1,
  perPage: number = 1,
): Promise<T | null> => {
  try {
    const data = await pb.collection(collection).getList(page, perPage, {
      requestKey: null, // Disable auto-cancellation
    });
    return (data.items[0] as T) || null;
  } catch (error) {
    console.error(`Error fetching ${collection} data:`, error);
    return null;
  }
};

/**
 * Fetches all records from a collection
 * @param collection - The collection name to fetch from
 * @returns All items from the collection or empty array if error
 */
export const fetchAllCollectionData = async <T>(collection: Collections): Promise<T[]> => {
  try {
    const data = await pb.collection(collection).getFullList({
      requestKey: null, // Disable auto-cancellation
    });
    return data as T[];
  } catch (error) {
    console.error(`Error fetching all ${collection} data:`, error);
    return [];
  }
};
