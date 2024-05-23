import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import TopBar from '../components/TopBar/TopBar';
import LeftPanel from '../components/LeftPanel/LeftPanel';

export const Route = createRootRouteWithContext()({
  component: Root,
});

function Root() {
  return (
    <div>
      <div className="h-12">
        <TopBar />
      </div>
      <div className="flex h-full">
        <div className="w-[300px] shrink-0">
          <LeftPanel />
        </div>
        <div className="grow px-4">
          <div className="grow rounded-xl bg-background-100 p-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
