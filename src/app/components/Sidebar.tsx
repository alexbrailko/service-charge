import Link from 'next/link';
import { CloseIcon } from '../images/svg/CloseIcon';
import { Nav } from './Nav';
import { Button } from './ui/Button';
import { useGlobalstore } from '../store/globals';

const Sidebar = ({
  isOpen,
  toggle
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  const setContactModalOpen = useGlobalstore(
    (state) => state.setContactModalOpen
  );

  return (
    <>
      <div
        className="sidebar-container flex flex-col fixed w-full h-full overflow-hidden justify-center bg-dark pt-[75px] pb-[40px] px-10 left-0 z-10"
        style={{
          opacity: `${isOpen ? '1' : '0'}`,
          top: ` ${isOpen ? '0' : '-100%'}`
        }}
      >
        <button
          className="absolute right-[15px] top-[15px] p-[15px] bg-white rounded-md"
          onClick={toggle}
        >
          <CloseIcon color={'var(--dark)'} />
        </button>
        <div>
          <Nav
            onLinkClick={toggle}
            className="text-white space-y-6 font-medium text-xl"
          />
        </div>
        <div className="mt-auto">
          <h4 className="text-[28px] text-white mb-2">Contact us</h4>
          <p className="text-white text-[15px] mb-4">
            Whether you`re buying your house, planning to invest in UK property
            market or looking to optimise your service charge spending
          </p>
          <Button
            title="Send a message"
            onClick={() => setContactModalOpen(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
