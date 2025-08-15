import PocketBase from "pocketbase";
import { TypedPocketBase } from "@/lib/pocketbase-types";

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL) as TypedPocketBase;

export default pb;
