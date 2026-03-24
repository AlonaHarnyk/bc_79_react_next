import Modal from "@/components/Modal/Modal";
import { getUsersById } from "@/lib/usersServices";

interface UserDetailsProps {
  params: Promise<{ userId: string }>;
}
export default async function UserDetails({ params }: UserDetailsProps) {
  const { userId } = await params;

  const user = await getUsersById(userId);

  return (
    <Modal>
      <p>Name {user.name}</p>
      <p> Email {user.email}</p>
      <p>Is online:{user.isOnline ? "yes" : "no"}</p>
    </Modal>
  );
}
