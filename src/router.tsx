import { createRouter } from '@tanstack/react-router';

import { routeTree } from 'src/routeTree.gen';
import { NotFoundPage } from 'src/pages';

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
  defaultNotFoundComponent: () => <NotFoundPage />,
});
