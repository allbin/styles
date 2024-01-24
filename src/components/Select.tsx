import React from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { cn } from '../helpers/classnames';

export interface SelectOption {
  id: string;
  label: string;
  description?: string;
}
interface SelectProps {
  label?: string;
  options: SelectOption[];
  onSelect: (id: string) => void;
  value?: string;
  placeholder?: string;
  /** Locks the dropdown width to the size of the parent element. Defaults to false. */
  fullWidthDropDown?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  onSelect,
  value,
  placeholder,
  label,
  fullWidthDropDown,
}) => {
  const selected_option = options.find((o) => o.id === value);
  return (
    <Listbox value={selected_option} onChange={(v) => onSelect(v.id)}>
      {({ open }) => (
        <>
          <div className="relative grow">
            {label && (
              <Listbox.Label className="mb-1 block text-sm font-medium leading-6 text-text-900">
                {label}
              </Listbox.Label>
            )}
            <div className="inline-flex w-full divide-x divide-primary-700 rounded-md shadow-sm">
              <div className="inline-flex grow items-center gap-x-1.5 rounded-l-md bg-primary-600 px-3 py-2 text-text-50 shadow-sm">
                <p className="text-sm font-semibold">
                  {selected_option?.label || placeholder}
                </p>
              </div>
              <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-primary-600 p-2 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-secondary-50">
                <ChevronDownIcon
                  className="size-5 text-text-50"
                  aria-hidden="true"
                />
              </Listbox.Button>
            </div>

            {open && (
              <Listbox.Options
                className={cn(
                  'absolute right-0 z-10 mt-1 min-w-56 origin-top-right divide-y divide-secondary-200 overflow-hidden rounded-md bg-background-50 shadow-lg ring-1 ring-accent-950/5 focus:outline-none',
                  fullWidthDropDown && 'w-full max-w-full',
                )}
              >
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      cn(
                        'cursor-default select-none p-4 text-sm text-text-950',
                        active && 'bg-primary-200',
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p
                            className={cn(
                              'font-normal',
                              selected && 'font-semibold',
                            )}
                          >
                            {option.label}
                          </p>
                          {selected ? (
                            <CheckIcon className="size-5" aria-hidden="true" />
                          ) : null}
                        </div>
                        {option.description && (
                          <p
                            className={cn(
                              'mt-2 text-text-600',
                              active && 'text-text-900',
                            )}
                          >
                            {option.description}
                          </p>
                        )}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            )}
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Select;
