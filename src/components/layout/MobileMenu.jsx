import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export function MobileMenu({ isOpen, onClose, navigation }) {
  return (
    <Dialog 
      as="div" 
      className="lg:hidden" 
      open={isOpen} 
      onClose={onClose}
    >
      <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-all duration-300 ease-in-out">

        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="-m-1.5 p-1.5"
            onClick={onClose}
          >
            <span className={`text-2xl font-light text-custom-blue`}>
  Villa Terre de Provence
</span>

          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-8 flex flex-col items-center space-y-6">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-8 py-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group -mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2 text-base font-light text-gray-900 hover:bg-gray-50"
                  onClick={onClose}
                >
                  {item.name}
                  <span className="ml-auto text-gray-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}