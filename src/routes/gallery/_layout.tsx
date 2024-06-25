import NavElement from '@/components/LeftPanel/NavElement';
import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/gallery/_layout')({
  component: Root,
});

function Root() {
  return (
    <div className="flex gap-6">
      <div className="grow">
        <Outlet />
      </div>
      <div className="flex flex-col gap-2 font-medium">
        <NavElement to="/gallery/button">Button</NavElement>
        <NavElement to="/gallery/input">Input</NavElement>
        <NavElement to="/gallery/checkbox">Checkbox</NavElement>
        <NavElement to="/gallery/slider">Slider</NavElement>
        <NavElement to="/gallery/dropdown">Dropdown</NavElement>
        <NavElement to="/gallery/textarea">Textarea</NavElement>
        <NavElement to="/gallery/positionpad">PositionPad</NavElement>
        <NavElement to="/gallery/togglebutton">ToggleButton</NavElement>
        <NavElement to="/gallery/toast">Toast</NavElement>
        <NavElement to="/gallery/togglebuttongroup">
          ToggleButtonGroup
        </NavElement>
      </div>
    </div>
  );
}
