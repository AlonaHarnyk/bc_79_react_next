import { Contact } from "@/types/contacts";
import axios from "axios";

const contactsInstance = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export async function getContacts(hasWork?: boolean) {
  const { data } = await contactsInstance.get<Contact[]>("/contacts", {
    params: {
      hasWork,
    },
  });
  return data;
}
