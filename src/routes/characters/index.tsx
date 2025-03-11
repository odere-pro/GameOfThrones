import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/characters/')({
  component: () => {
    const navigate = useNavigate();
    navigate({ to: '/', replace: true });
    return null;
  },
});
