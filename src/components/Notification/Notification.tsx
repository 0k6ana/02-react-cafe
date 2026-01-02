interface NotificationProps {
  message: string;
}

export default function Notification({ message }: NotificationProps) {
  return <p>{message}</p>;
}


