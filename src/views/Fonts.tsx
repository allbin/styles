import React from 'react';

const Fonts: React.FC = () => {
  return (
    <div className="mx-6 mt-6">
      Headings, colored by shade
      <div className="mb-8 grid grid-cols-12 gap-2">
        <h1>h1</h1>
        <h1 className="text-text-50">50</h1>
        <h1 className="text-text-100">100</h1>
        <h1 className="text-text-200">200</h1>
        <h1 className="text-text-300">300</h1>
        <h1 className="text-text-400">400</h1>
        <h1 className="text-text-500">500</h1>
        <h1 className="text-text-600">600</h1>
        <h1 className="text-text-700">700</h1>
        <h1 className="text-text-800">800</h1>
        <h1 className="text-text-900">900</h1>
        <h1 className="text-text-950">950</h1>
        <h2>h2</h2>
        <h2 className="text-text-50">50</h2>
        <h2 className="text-text-100">100</h2>
        <h2 className="text-text-200">200</h2>
        <h2 className="text-text-300">300</h2>
        <h2 className="text-text-400">400</h2>
        <h2 className="text-text-500">500</h2>
        <h2 className="text-text-600">600</h2>
        <h2 className="text-text-700">700</h2>
        <h2 className="text-text-800">800</h2>
        <h2 className="text-text-900">900</h2>
        <h2 className="text-text-950">950</h2>
        <h3>h3</h3>
        <h3 className="text-text-50">50</h3>
        <h3 className="text-text-100">100</h3>
        <h3 className="text-text-200">200</h3>
        <h3 className="text-text-300">300</h3>
        <h3 className="text-text-400">400</h3>
        <h3 className="text-text-500">500</h3>
        <h3 className="text-text-600">600</h3>
        <h3 className="text-text-700">700</h3>
        <h3 className="text-text-800">800</h3>
        <h3 className="text-text-900">900</h3>
        <h3 className="text-text-950">950</h3>
        <h4>h4</h4>
        <h4 className="text-text-50">50</h4>
        <h4 className="text-text-100">100</h4>
        <h4 className="text-text-200">200</h4>
        <h4 className="text-text-300">300</h4>
        <h4 className="text-text-400">400</h4>
        <h4 className="text-text-500">500</h4>
        <h4 className="text-text-600">600</h4>
        <h4 className="text-text-700">700</h4>
        <h4 className="text-text-800">800</h4>
        <h4 className="text-text-900">900</h4>
        <h4 className="text-text-950">950</h4>
        <h5>h5</h5>
        <h5 className="text-text-50">50</h5>
        <h5 className="text-text-100">100</h5>
        <h5 className="text-text-200">200</h5>
        <h5 className="text-text-300">300</h5>
        <h5 className="text-text-400">400</h5>
        <h5 className="text-text-500">500</h5>
        <h5 className="text-text-600">600</h5>
        <h5 className="text-text-700">700</h5>
        <h5 className="text-text-800">800</h5>
        <h5 className="text-text-900">900</h5>
        <h5 className="text-text-950">950</h5>
        <h6>h6</h6>
        <h6 className="text-text-50">50</h6>
        <h6 className="text-text-100">100</h6>
        <h6 className="text-text-200">200</h6>
        <h6 className="text-text-300">300</h6>
        <h6 className="text-text-400">400</h6>
        <h6 className="text-text-500">500</h6>
        <h6 className="text-text-600">600</h6>
        <h6 className="text-text-700">700</h6>
        <h6 className="text-text-800">800</h6>
        <h6 className="text-text-900">900</h6>
        <h6 className="text-text-950">950</h6>
      </div>
      <div className="mt-10 flex flex-col gap-2">
        Font sizes, default (sans) font
        <div className="mb-6 grid grid-cols-10 gap-2 font-sans">
          <p className="italic">xs</p>
          <p className="text-xs font-thin">Thin</p>
          <p className="text-xs font-extralight">Extra light</p>
          <p className="text-xs font-light">Light</p>
          <p className="text-xs font-normal">Normal</p>
          <p className="text-xs font-medium">Medium</p>
          <p className="text-xs font-semibold">Semi bold</p>
          <p className="text-xs font-bold">Bold</p>
          <p className="text-xs font-extrabold">Extra bold</p>
          <p className="text-xs font-black">Black</p>
          <p className="italic">sm</p>
          <p className="text-sm font-thin">Thin</p>
          <p className="text-sm font-extralight">Extra light</p>
          <p className="text-sm font-light">Light</p>
          <p className="text-sm font-normal">Normal</p>
          <p className="text-sm font-medium">Medium</p>
          <p className="text-sm font-semibold">Semi bold</p>
          <p className="text-sm font-bold">Bold</p>
          <p className="text-sm font-extrabold">Extra bold</p>
          <p className="text-sm font-black">Black</p>
          <p className="italic">base (md)</p>
          <p className="text-base font-thin">Thin</p>
          <p className="text-base font-extralight">Extra light</p>
          <p className="text-base font-light">Light</p>
          <p className="text-base font-normal">Normal</p>
          <p className="text-base font-medium">Medium</p>
          <p className="text-base font-semibold">Semi bold</p>
          <p className="text-base font-bold">Bold</p>
          <p className="text-base font-extrabold">Extra bold</p>
          <p className="text-base font-black">Black</p>
          <p className="italic">lg</p>
          <p className="text-lg font-thin">Thin</p>
          <p className="text-lg font-extralight">Extra light</p>
          <p className="text-lg font-light">Light</p>
          <p className="text-lg font-normal">Normal</p>
          <p className="text-lg font-medium">Medium</p>
          <p className="text-lg font-semibold">Semi bold</p>
          <p className="text-lg font-bold">Bold</p>
          <p className="text-lg font-extrabold">Extra bold</p>
          <p className="text-lg font-black">Black</p>
          <p className="italic">xl</p>
          <p className="text-xl font-thin">Thin</p>
          <p className="text-xl font-extralight">Extra light</p>
          <p className="text-xl font-light">Light</p>
          <p className="text-xl font-normal">Normal</p>
          <p className="text-xl font-medium">Medium</p>
          <p className="text-xl font-semibold">Semi bold</p>
          <p className="text-xl font-bold">Bold</p>
          <p className="text-xl font-extrabold">Extra bold</p>
          <p className="text-xl font-black">Black</p>
        </div>
        Font sizes, serif font
        <div className="grid grid-cols-10 gap-2 font-serif">
          <p className="italic">xs</p>
          <p className="text-xs font-thin">Thin</p>
          <p className="text-xs font-extralight">Extra light</p>
          <p className="text-xs font-light">Light</p>
          <p className="text-xs font-normal">Normal</p>
          <p className="text-xs font-medium">Medium</p>
          <p className="text-xs font-semibold">Semi bold</p>
          <p className="text-xs font-bold">Bold</p>
          <p className="text-xs font-extrabold">Extra bold</p>
          <p className="text-xs font-black">Black</p>
          <p className="italic">sm</p>
          <p className="text-sm font-thin">Thin</p>
          <p className="text-sm font-extralight">Extra light</p>
          <p className="text-sm font-light">Light</p>
          <p className="text-sm font-normal">Normal</p>
          <p className="text-sm font-medium">Medium</p>
          <p className="text-sm font-semibold">Semi bold</p>
          <p className="text-sm font-bold">Bold</p>
          <p className="text-sm font-extrabold">Extra bold</p>
          <p className="text-sm font-black">Black</p>
          <p className="italic">base</p>
          <p className="text-base font-thin">Thin</p>
          <p className="text-base font-extralight">Extra light</p>
          <p className="text-base font-light">Light</p>
          <p className="text-base font-normal">Normal</p>
          <p className="text-base font-medium">Medium</p>
          <p className="text-base font-semibold">Semi bold</p>
          <p className="text-base font-bold">Bold</p>
          <p className="text-base font-extrabold">Extra bold</p>
          <p className="text-base font-black">Black</p>
          <p className="italic">lg</p>
          <p className="text-lg font-thin">Thin</p>
          <p className="text-lg font-extralight">Extra light</p>
          <p className="text-lg font-light">Light</p>
          <p className="text-lg font-normal">Normal</p>
          <p className="text-lg font-medium">Medium</p>
          <p className="text-lg font-semibold">Semi bold</p>
          <p className="text-lg font-bold">Bold</p>
          <p className="text-lg font-extrabold">Extra bold</p>
          <p className="text-lg font-black">Black</p>
          <p className="italic">xl</p>
          <p className="text-xl font-thin">Thin</p>
          <p className="text-xl font-extralight">Extra light</p>
          <p className="text-xl font-light">Light</p>
          <p className="text-xl font-normal">Normal</p>
          <p className="text-xl font-medium">Medium</p>
          <p className="text-xl font-semibold">Semi bold</p>
          <p className="text-xl font-bold">Bold</p>
          <p className="text-xl font-extrabold">Extra bold</p>
          <p className="text-xl font-black">Black</p>
        </div>
        Font sizes, mono font
        <div className="grid grid-cols-10 gap-2 font-mono">
          <p className="italic">xs</p>
          <p className="text-xs font-thin">Thin</p>
          <p className="text-xs font-extralight">Extra light</p>
          <p className="text-xs font-light">Light</p>
          <p className="text-xs font-normal">Normal</p>
          <p className="text-xs font-medium">Medium</p>
          <p className="text-xs font-semibold">Semi bold</p>
          <p className="text-xs font-bold">Bold</p>
          <p className="text-xs font-extrabold">Extra bold</p>
          <p className="text-xs font-black">Black</p>
          <p className="italic">sm</p>
          <p className="text-sm font-thin">Thin</p>
          <p className="text-sm font-extralight">Extra light</p>
          <p className="text-sm font-light">Light</p>
          <p className="text-sm font-normal">Normal</p>
          <p className="text-sm font-medium">Medium</p>
          <p className="text-sm font-semibold">Semi bold</p>
          <p className="text-sm font-bold">Bold</p>
          <p className="text-sm font-extrabold">Extra bold</p>
          <p className="text-sm font-black">Black</p>
          <p className="italic">base</p>
          <p className="text-base font-thin">Thin</p>
          <p className="text-base font-extralight">Extra light</p>
          <p className="text-base font-light">Light</p>
          <p className="text-base font-normal">Normal</p>
          <p className="text-base font-medium">Medium</p>
          <p className="text-base font-semibold">Semi bold</p>
          <p className="text-base font-bold">Bold</p>
          <p className="text-base font-extrabold">Extra bold</p>
          <p className="text-base font-black">Black</p>
          <p className="italic">lg</p>
          <p className="text-lg font-thin">Thin</p>
          <p className="text-lg font-extralight">Extra light</p>
          <p className="text-lg font-light">Light</p>
          <p className="text-lg font-normal">Normal</p>
          <p className="text-lg font-medium">Medium</p>
          <p className="text-lg font-semibold">Semi bold</p>
          <p className="text-lg font-bold">Bold</p>
          <p className="text-lg font-extrabold">Extra bold</p>
          <p className="text-lg font-black">Black</p>
          <p className="italic">xl</p>
          <p className="text-xl font-thin">Thin</p>
          <p className="text-xl font-extralight">Extra light</p>
          <p className="text-xl font-light">Light</p>
          <p className="text-xl font-normal">Normal</p>
          <p className="text-xl font-medium">Medium</p>
          <p className="text-xl font-semibold">Semi bold</p>
          <p className="text-xl font-bold">Bold</p>
          <p className="text-xl font-extrabold">Extra bold</p>
          <p className="text-xl font-black">Black</p>
        </div>
      </div>
      <h3 className="mt-8 text-text-500">Sans, Serif, Mono</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-background-300 p-4">
        <p>
          Example default (sans) text <br /> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur ultricies, mauris sed faucibus
          sollicitudin, dui lacus ornare justo, ac euismod sapien dui sed odio.
          Pellentesque et erat risus. Quisque id diam lectus. Fusce dignissim
          nisi quis justo eleifend iaculis. Aliquam non mi non erat vehicula
          semper et quis eros. Sed ut nibh tincidunt, luctus ipsum ac, elementum
          est. Vivamus bibendum purus et sem consectetur feugiat. Quisque est
          massa, egestas a condimentum non, tristique at purus. Curabitur
          lobortis arcu a neque blandit aliquet. Pellentesque ac turpis sit amet
          sem commodo aliquet id eget enim. Phasellus sollicitudin velit vel
          iaculis maximus. Duis ut posuere sem, eget congue est.
        </p>
        <p className="mt-8 font-serif">
          Example serif text <br /> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur ultricies, mauris sed faucibus
          sollicitudin, dui lacus ornare justo, ac euismod sapien dui sed odio.
          Pellentesque et erat risus. Quisque id diam lectus. Fusce dignissim
          nisi quis justo eleifend iaculis. Aliquam non mi non erat vehicula
          semper et quis eros. Sed ut nibh tincidunt, luctus ipsum ac, elementum
          est. Vivamus bibendum purus et sem consectetur feugiat. Quisque est
          massa, egestas a condimentum non, tristique at purus. Curabitur
          lobortis arcu a neque blandit aliquet. Pellentesque ac turpis sit amet
          sem commodo aliquet id eget enim. Phasellus sollicitudin velit vel
          iaculis maximus. Duis ut posuere sem, eget congue est.
        </p>
        <p className="mt-8 font-mono">
          Example mono text <br /> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur ultricies, mauris sed faucibus
          sollicitudin, dui lacus ornare justo, ac euismod sapien dui sed odio.
          Pellentesque et erat risus. Quisque id diam lectus. Fusce dignissim
          nisi quis justo eleifend iaculis. Aliquam non mi non erat vehicula
          semper et quis eros. Sed ut nibh tincidunt, luctus ipsum ac, elementum
          est. Vivamus bibendum purus et sem consectetur feugiat. Quisque est
          massa, egestas a condimentum non, tristique at purus. Curabitur
          lobortis arcu a neque blandit aliquet. Pellentesque ac turpis sit amet
          sem commodo aliquet id eget enim. Phasellus sollicitudin velit vel
          iaculis maximus. Duis ut posuere sem, eget congue est.
        </p>
      </div>
      <h3 className="mt-8 text-text-500">Text colored by shade</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-background-300 p-4">
        <span className="mb-4 flex text-[32px] font-bold text-text-950">
          950 - Quisque id diam lectus
        </span>
        <p className="mb-4 font-bold text-text-950">
          950 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <span className="mb-4 flex text-[32px] font-bold text-text-900">
          900 - Quisque id diam lectus
        </span>
        <p className="mb-4 font-bold text-text-900">
          900 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <span className="mb-4 flex text-[32px] font-bold text-text-800">
          800 - Quisque id diam lectus
        </span>
        <p className="mb-4 font-bold text-text-800">
          800 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <span className="mb-4 flex text-[32px] font-bold text-text-700">
          700 - Quisque id diam lectus
        </span>
        <p className="mb-4 font-bold text-text-700">
          700 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <span className="mb-4 flex text-[32px] font-bold text-text-600">
          600 - Quisque id diam lectus
        </span>
        <p className="mb-4 font-bold text-text-600">
          600 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <span className="mb-4 flex text-[32px] font-bold text-text-500">
          500 - Quisque id diam lectus
        </span>
        <p className="mb-4 font-bold text-text-500">
          500 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <span className="mb-4 flex text-[32px] font-bold text-text-400">
          400 - Quisque id diam lectus
        </span>
        <p className="mb-4 font-bold text-text-400">
          400 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <span className="mb-4 flex text-[32px] font-bold text-text-300">
          300 - Quisque id diam lectus
        </span>
        <p className="mb-4 font-bold text-text-300">
          300 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <span className="mb-4 flex text-[32px] font-bold text-text-200">
          200 - Quisque id diam lectus
        </span>
        <p className="mb-4 font-bold text-text-200">
          200 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <span className="mb-4 flex text-[32px] font-bold text-text-100">
          100 - Quisque id diam lectus
        </span>
        <p className="mb-4 font-bold text-text-100">
          100 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <span className="mb-4 flex text-[32px] font-bold text-text-50">
          50 - Quisque id diam lectus
        </span>
        <p className="mb-4 font-bold text-text-50">
          50 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
      </div>
      <h3 className="mt-8 text-text-500">Constrast colors</h3>
      <div className="mb-8 grid grid-cols-3 flex-row gap-2 rounded-md border border-background-300 p-4">
        <div className="bg-primary-500 p-10">
          <span className="text-contrast-primary">Contrast bg-primary-500</span>
        </div>
        <div className="bg-secondary-500 p-10">
          <span className="text-contrast-secondary">
            Contrast bg-secondary-500
          </span>
        </div>
        <div className="bg-accent-500 p-10">
          <span className="text-contrast-accent">Contrast bg-accent-500</span>
        </div>
      </div>
      <div className="mb-8 grid grid-cols-4 flex-row gap-2 rounded-md border border-background-300 p-4">
        <div className="bg-red-500 p-10">
          <span className="text-contrast-accent">Contrast bg-red-500</span>
        </div>
        <div className="bg-green-500 p-10">
          <span className="text-contrast-green">Contrast bg-green-500</span>
        </div>
        <div className="bg-yellow-500 p-10">
          <span className="text-contrast-green">Contrast bg-yellow-500</span>
        </div>
        <div className="bg-blue-500 p-10">
          <span className="text-contrast-green">Contrast bg-blue-500</span>
        </div>
      </div>
    </div>
  );
};

export default Fonts;
