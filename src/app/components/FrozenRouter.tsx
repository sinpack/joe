// /src/app/components/HOC/FrozenRoute.tsx || /app/components/HOC/FrozenRoute.tsx

'use client';

import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useContext, useRef, ReactNode } from 'react';

interface FrozenRouteProps {
  children: ReactNode;
}

const FrozenRoute: React.FC<FrozenRouteProps> = ({ children }) => {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
};

export default FrozenRoute;
