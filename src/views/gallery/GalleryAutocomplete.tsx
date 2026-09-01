import React from 'react';
import {
  Autocomplete,
  AutocompleteOption,
} from '@/components/core/Autocomplete';
import Button from '@/components/core/Button';
import { IconCheck, IconUser } from '@/icons';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const fruitOptions: AutocompleteOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'orange', label: 'Orange' },
  { value: 'cola', label: 'Cola' },
  { value: 'fanta', label: 'Fanta' },
  { value: 'pineapple', label: 'Pineapple' },
  { value: 'watermelon', label: 'Watermelon' },
];

const descriptionOptions: AutocompleteOption[] = [
  { value: 'apple', label: 'Apple', description: 'Tastes like apple!' },
  { value: 'orange', label: 'Orange', description: 'Tastes like Fanta!' },
  {
    value: 'fanta',
    label: 'Fanta',
    description: 'Tastes like Orange!',
    disabled: true,
  },
  { value: 'cola', label: 'Cola', description: 'Tastes like Coca Cola!' },
];

const endContentOptions: AutocompleteOption[] = [
  {
    value: 'anna',
    label: 'Anna Andersson',
    description: 'anna@example.com',
    endContent: <IconCheck className="size-5 min-w-5" />,
  },
  {
    value: 'bertil',
    label: 'Bertil Bengtsson',
    description: 'bertil@example.com',
    endContent: <IconUser className="size-5 min-w-5" />,
  },
  {
    value: 'cecilia',
    label: 'Cecilia Carlsson',
    description: 'cecilia@example.com',
  },
];

const countryOptions: AutocompleteOption[] = [
  'Sweden',
  'Norway',
  'Denmark',
  'Finland',
  'Iceland',
  'Germany',
  'France',
  'Spain',
  'Portugal',
  'Italy',
  'Greece',
  'Poland',
  'Estonia',
  'Latvia',
  'Lithuania',
  'Netherlands',
  'Belgium',
  'Ireland',
  'Austria',
  'Switzerland',
].map((country) => ({ value: country.toLowerCase(), label: country }));

const GalleryAutocomplete: React.FC = () => {
  const [fruit, setFruit] = React.useState('');
  const [preselected, setPreselected] = React.useState('orange');
  const [errorValue, setErrorValue] = React.useState('');
  const [labelled, setLabelled] = React.useState('');
  const [withHelperText, setWithHelperText] = React.useState('');
  const [startAdorned, setStartAdorned] = React.useState('');
  const [endAdorned, setEndAdorned] = React.useState('');
  const [described, setDescribed] = React.useState('');
  const [person, setPerson] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [shortList, setShortList] = React.useState('');
  const [searched, setSearched] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [freeSolo, setFreeSolo] = React.useState('');
  const [contact, setContact] = React.useState('');

  return (
    <div>
      <h2 className="mb-4">Autocomplete</h2>
      <h3>Variants</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-primary-200 p-4">
        <Autocomplete
          id="autocomplete-1"
          placeholder="Default autocomplete with onValueChange"
          options={fruitOptions}
          value={fruit}
          onValueChange={setFruit}
        />
        <Autocomplete
          id="autocomplete-2"
          placeholder="This one is disabled"
          options={fruitOptions}
          value=""
          disabled
          onValueChange={() => undefined}
        />
        <Autocomplete
          id="autocomplete-3"
          placeholder="Selected value"
          options={fruitOptions}
          value={preselected}
          onValueChange={setPreselected}
        />
        <Autocomplete
          id="autocomplete-4"
          placeholder="Select Apple to see an error"
          options={fruitOptions}
          value={errorValue}
          onValueChange={setErrorValue}
          error={
            errorValue === 'apple' ? 'This is an error message' : undefined
          }
        />
        <Autocomplete
          id="autocomplete-5"
          placeholder="No options available"
          options={[]}
          value=""
          onValueChange={() => undefined}
        />
      </div>
      <h3>Label</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-primary-200 p-4 pt-10">
        <Autocomplete
          id="autocomplete-6"
          label="This is a label with absolute position"
          placeholder="Choose a fruit"
          options={fruitOptions}
          value={labelled}
          onValueChange={setLabelled}
        />
      </div>
      <h3>Helper text</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-primary-200 p-4 pb-10">
        <Autocomplete
          id="autocomplete-7"
          helperText="This is a helper text with absolute position"
          placeholder="Choose a fruit"
          options={fruitOptions}
          value={withHelperText}
          onValueChange={setWithHelperText}
        />
      </div>
      <h3>Adornments</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-primary-200 p-4">
        <Autocomplete
          id="autocomplete-8"
          placeholder="With a start adornment"
          startAdornment={<MagnifyingGlassIcon className="size-5" />}
          options={countryOptions}
          value={startAdorned}
          onValueChange={setStartAdorned}
        />
        <Autocomplete
          id="autocomplete-9"
          placeholder="With a custom end adornment"
          endAdornment={<MagnifyingGlassIcon className="size-5" />}
          options={countryOptions}
          value={endAdorned}
          onValueChange={setEndAdorned}
        />
      </div>
      <h3>Options with description and disabled option</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-primary-200 p-4">
        <Autocomplete
          id="autocomplete-10"
          placeholder="Choose a drink"
          options={descriptionOptions}
          value={described}
          onValueChange={setDescribed}
        />
      </div>
      <h3>Options with end content</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-primary-200 p-4">
        <Autocomplete
          id="autocomplete-11"
          placeholder="Choose a person"
          options={endContentOptions}
          value={person}
          onValueChange={setPerson}
        />
      </div>
      <h3>Long list with defined height on option box</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-primary-200 p-4">
        <Autocomplete
          id="autocomplete-12"
          placeholder="Search for a country"
          options={countryOptions}
          value={country}
          onValueChange={setCountry}
        />
        <Autocomplete
          id="autocomplete-13"
          placeholder="Option box is 120px high"
          optionsContainerHeight="120px"
          options={countryOptions}
          value={shortList}
          onValueChange={setShortList}
        />
      </div>
      <h3>Reacting to the search string</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-primary-200 p-4">
        <Autocomplete
          id="autocomplete-14"
          placeholder="Type to see the search string below"
          options={countryOptions}
          value={searched}
          onValueChange={setSearched}
          onSearchChange={setSearch}
        />
        <span className="text-sm text-text-700">
          Search: {search || '(empty)'} — Selected: {searched || '(none)'}
        </span>
      </div>
      <h3>Free solo</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-primary-200 p-4">
        <Autocomplete
          id="autocomplete-16"
          placeholder="Type anything, it does not have to be a fruit"
          options={fruitOptions}
          freeSolo
          value={freeSolo}
          onValueChange={setFreeSolo}
        />
        <span className="text-sm text-text-700">
          Value: {freeSolo || '(empty)'}
        </span>
      </div>
      <h3>Autocomplete example</h3>
      <div className="mb-8 flex w-full flex-row gap-2 rounded-md border border-primary-200 p-4 py-10">
        <Autocomplete
          id="autocomplete-15"
          label="Example with button"
          helperText="Start typing to filter the list"
          placeholder="Choose a person"
          options={endContentOptions}
          value={contact}
          onValueChange={setContact}
        />
        <Button className="w-[165px]" variant="filled">
          Next step
        </Button>
      </div>
    </div>
  );
};

export default GalleryAutocomplete;
