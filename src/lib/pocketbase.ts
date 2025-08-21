import PocketBase from "pocketbase";
import { TypedPocketBase } from "../../pocketbase-types";

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL) as TypedPocketBase;

export default pb;
