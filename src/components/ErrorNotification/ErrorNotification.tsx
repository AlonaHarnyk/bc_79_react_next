interface ErrorNotificationProps {
  message?: string;
}

export function ErrorNotification({
  message = "Something went wrong",
}: ErrorNotificationProps) {
  return <p>{message}</p>;
}
