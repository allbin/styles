/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IconsImport } from './routes/icons'
import { Route as FontsImport } from './routes/fonts'
import { Route as ColorsImport } from './routes/colors'
import { Route as IndexImport } from './routes/index'
import { Route as GalleryLayoutImport } from './routes/gallery/_layout'
import { Route as GalleryLayoutIndexImport } from './routes/gallery/_layout/index'
import { Route as GalleryLayoutTogglebuttongroupImport } from './routes/gallery/_layout/togglebuttongroup'
import { Route as GalleryLayoutTogglebuttonImport } from './routes/gallery/_layout/togglebutton'
import { Route as GalleryLayoutToastImport } from './routes/gallery/_layout/toast'
import { Route as GalleryLayoutTextareaImport } from './routes/gallery/_layout/textarea'
import { Route as GalleryLayoutSliderImport } from './routes/gallery/_layout/slider'
import { Route as GalleryLayoutPositionpadImport } from './routes/gallery/_layout/positionpad'
import { Route as GalleryLayoutInputImport } from './routes/gallery/_layout/input'
import { Route as GalleryLayoutDropdownImport } from './routes/gallery/_layout/dropdown'
import { Route as GalleryLayoutCheckboxImport } from './routes/gallery/_layout/checkbox'
import { Route as GalleryLayoutButtonImport } from './routes/gallery/_layout/button'

// Create Virtual Routes

const GalleryImport = createFileRoute('/gallery')()

// Create/Update Routes

const GalleryRoute = GalleryImport.update({
  path: '/gallery',
  getParentRoute: () => rootRoute,
} as any)

const IconsRoute = IconsImport.update({
  path: '/icons',
  getParentRoute: () => rootRoute,
} as any)

const FontsRoute = FontsImport.update({
  path: '/fonts',
  getParentRoute: () => rootRoute,
} as any)

const ColorsRoute = ColorsImport.update({
  path: '/colors',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const GalleryLayoutRoute = GalleryLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => GalleryRoute,
} as any)

const GalleryLayoutIndexRoute = GalleryLayoutIndexImport.update({
  path: '/',
  getParentRoute: () => GalleryLayoutRoute,
} as any)

const GalleryLayoutTogglebuttongroupRoute =
  GalleryLayoutTogglebuttongroupImport.update({
    path: '/togglebuttongroup',
    getParentRoute: () => GalleryLayoutRoute,
  } as any)

const GalleryLayoutTogglebuttonRoute = GalleryLayoutTogglebuttonImport.update({
  path: '/togglebutton',
  getParentRoute: () => GalleryLayoutRoute,
} as any)

const GalleryLayoutToastRoute = GalleryLayoutToastImport.update({
  path: '/toast',
  getParentRoute: () => GalleryLayoutRoute,
} as any)

const GalleryLayoutTextareaRoute = GalleryLayoutTextareaImport.update({
  path: '/textarea',
  getParentRoute: () => GalleryLayoutRoute,
} as any)

const GalleryLayoutSliderRoute = GalleryLayoutSliderImport.update({
  path: '/slider',
  getParentRoute: () => GalleryLayoutRoute,
} as any)

const GalleryLayoutPositionpadRoute = GalleryLayoutPositionpadImport.update({
  path: '/positionpad',
  getParentRoute: () => GalleryLayoutRoute,
} as any)

const GalleryLayoutInputRoute = GalleryLayoutInputImport.update({
  path: '/input',
  getParentRoute: () => GalleryLayoutRoute,
} as any)

const GalleryLayoutDropdownRoute = GalleryLayoutDropdownImport.update({
  path: '/dropdown',
  getParentRoute: () => GalleryLayoutRoute,
} as any)

const GalleryLayoutCheckboxRoute = GalleryLayoutCheckboxImport.update({
  path: '/checkbox',
  getParentRoute: () => GalleryLayoutRoute,
} as any)

const GalleryLayoutButtonRoute = GalleryLayoutButtonImport.update({
  path: '/button',
  getParentRoute: () => GalleryLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/colors': {
      id: '/colors'
      path: '/colors'
      fullPath: '/colors'
      preLoaderRoute: typeof ColorsImport
      parentRoute: typeof rootRoute
    }
    '/fonts': {
      id: '/fonts'
      path: '/fonts'
      fullPath: '/fonts'
      preLoaderRoute: typeof FontsImport
      parentRoute: typeof rootRoute
    }
    '/icons': {
      id: '/icons'
      path: '/icons'
      fullPath: '/icons'
      preLoaderRoute: typeof IconsImport
      parentRoute: typeof rootRoute
    }
    '/gallery': {
      id: '/gallery'
      path: '/gallery'
      fullPath: '/gallery'
      preLoaderRoute: typeof GalleryImport
      parentRoute: typeof rootRoute
    }
    '/gallery/_layout': {
      id: '/gallery/_layout'
      path: '/gallery'
      fullPath: '/gallery'
      preLoaderRoute: typeof GalleryLayoutImport
      parentRoute: typeof GalleryRoute
    }
    '/gallery/_layout/button': {
      id: '/gallery/_layout/button'
      path: '/button'
      fullPath: '/gallery/button'
      preLoaderRoute: typeof GalleryLayoutButtonImport
      parentRoute: typeof GalleryLayoutImport
    }
    '/gallery/_layout/checkbox': {
      id: '/gallery/_layout/checkbox'
      path: '/checkbox'
      fullPath: '/gallery/checkbox'
      preLoaderRoute: typeof GalleryLayoutCheckboxImport
      parentRoute: typeof GalleryLayoutImport
    }
    '/gallery/_layout/dropdown': {
      id: '/gallery/_layout/dropdown'
      path: '/dropdown'
      fullPath: '/gallery/dropdown'
      preLoaderRoute: typeof GalleryLayoutDropdownImport
      parentRoute: typeof GalleryLayoutImport
    }
    '/gallery/_layout/input': {
      id: '/gallery/_layout/input'
      path: '/input'
      fullPath: '/gallery/input'
      preLoaderRoute: typeof GalleryLayoutInputImport
      parentRoute: typeof GalleryLayoutImport
    }
    '/gallery/_layout/positionpad': {
      id: '/gallery/_layout/positionpad'
      path: '/positionpad'
      fullPath: '/gallery/positionpad'
      preLoaderRoute: typeof GalleryLayoutPositionpadImport
      parentRoute: typeof GalleryLayoutImport
    }
    '/gallery/_layout/slider': {
      id: '/gallery/_layout/slider'
      path: '/slider'
      fullPath: '/gallery/slider'
      preLoaderRoute: typeof GalleryLayoutSliderImport
      parentRoute: typeof GalleryLayoutImport
    }
    '/gallery/_layout/textarea': {
      id: '/gallery/_layout/textarea'
      path: '/textarea'
      fullPath: '/gallery/textarea'
      preLoaderRoute: typeof GalleryLayoutTextareaImport
      parentRoute: typeof GalleryLayoutImport
    }
    '/gallery/_layout/toast': {
      id: '/gallery/_layout/toast'
      path: '/toast'
      fullPath: '/gallery/toast'
      preLoaderRoute: typeof GalleryLayoutToastImport
      parentRoute: typeof GalleryLayoutImport
    }
    '/gallery/_layout/togglebutton': {
      id: '/gallery/_layout/togglebutton'
      path: '/togglebutton'
      fullPath: '/gallery/togglebutton'
      preLoaderRoute: typeof GalleryLayoutTogglebuttonImport
      parentRoute: typeof GalleryLayoutImport
    }
    '/gallery/_layout/togglebuttongroup': {
      id: '/gallery/_layout/togglebuttongroup'
      path: '/togglebuttongroup'
      fullPath: '/gallery/togglebuttongroup'
      preLoaderRoute: typeof GalleryLayoutTogglebuttongroupImport
      parentRoute: typeof GalleryLayoutImport
    }
    '/gallery/_layout/': {
      id: '/gallery/_layout/'
      path: '/'
      fullPath: '/gallery/'
      preLoaderRoute: typeof GalleryLayoutIndexImport
      parentRoute: typeof GalleryLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  ColorsRoute,
  FontsRoute,
  IconsRoute,
  GalleryRoute: GalleryRoute.addChildren({
    GalleryLayoutRoute: GalleryLayoutRoute.addChildren({
      GalleryLayoutButtonRoute,
      GalleryLayoutCheckboxRoute,
      GalleryLayoutDropdownRoute,
      GalleryLayoutInputRoute,
      GalleryLayoutPositionpadRoute,
      GalleryLayoutSliderRoute,
      GalleryLayoutTextareaRoute,
      GalleryLayoutToastRoute,
      GalleryLayoutTogglebuttonRoute,
      GalleryLayoutTogglebuttongroupRoute,
      GalleryLayoutIndexRoute,
    }),
  }),
})

/* prettier-ignore-end */
