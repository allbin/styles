/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TogglebuttongroupImport } from './routes/togglebuttongroup'
import { Route as TogglebuttonImport } from './routes/togglebutton'
import { Route as ToastImport } from './routes/toast'
import { Route as TextareaImport } from './routes/textarea'
import { Route as SliderImport } from './routes/slider'
import { Route as PositionpadImport } from './routes/positionpad'
import { Route as InputImport } from './routes/input'
import { Route as IconsImport } from './routes/icons'
import { Route as FontsImport } from './routes/fonts'
import { Route as DropdownImport } from './routes/dropdown'
import { Route as ColorsImport } from './routes/colors'
import { Route as CheckboxImport } from './routes/checkbox'
import { Route as ButtonImport } from './routes/button'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const TogglebuttongroupRoute = TogglebuttongroupImport.update({
  path: '/togglebuttongroup',
  getParentRoute: () => rootRoute,
} as any)

const TogglebuttonRoute = TogglebuttonImport.update({
  path: '/togglebutton',
  getParentRoute: () => rootRoute,
} as any)

const ToastRoute = ToastImport.update({
  path: '/toast',
  getParentRoute: () => rootRoute,
} as any)

const TextareaRoute = TextareaImport.update({
  path: '/textarea',
  getParentRoute: () => rootRoute,
} as any)

const SliderRoute = SliderImport.update({
  path: '/slider',
  getParentRoute: () => rootRoute,
} as any)

const PositionpadRoute = PositionpadImport.update({
  path: '/positionpad',
  getParentRoute: () => rootRoute,
} as any)

const InputRoute = InputImport.update({
  path: '/input',
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

const DropdownRoute = DropdownImport.update({
  path: '/dropdown',
  getParentRoute: () => rootRoute,
} as any)

const ColorsRoute = ColorsImport.update({
  path: '/colors',
  getParentRoute: () => rootRoute,
} as any)

const CheckboxRoute = CheckboxImport.update({
  path: '/checkbox',
  getParentRoute: () => rootRoute,
} as any)

const ButtonRoute = ButtonImport.update({
  path: '/button',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
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
    '/button': {
      id: '/button'
      path: '/button'
      fullPath: '/button'
      preLoaderRoute: typeof ButtonImport
      parentRoute: typeof rootRoute
    }
    '/checkbox': {
      id: '/checkbox'
      path: '/checkbox'
      fullPath: '/checkbox'
      preLoaderRoute: typeof CheckboxImport
      parentRoute: typeof rootRoute
    }
    '/colors': {
      id: '/colors'
      path: '/colors'
      fullPath: '/colors'
      preLoaderRoute: typeof ColorsImport
      parentRoute: typeof rootRoute
    }
    '/dropdown': {
      id: '/dropdown'
      path: '/dropdown'
      fullPath: '/dropdown'
      preLoaderRoute: typeof DropdownImport
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
    '/input': {
      id: '/input'
      path: '/input'
      fullPath: '/input'
      preLoaderRoute: typeof InputImport
      parentRoute: typeof rootRoute
    }
    '/positionpad': {
      id: '/positionpad'
      path: '/positionpad'
      fullPath: '/positionpad'
      preLoaderRoute: typeof PositionpadImport
      parentRoute: typeof rootRoute
    }
    '/slider': {
      id: '/slider'
      path: '/slider'
      fullPath: '/slider'
      preLoaderRoute: typeof SliderImport
      parentRoute: typeof rootRoute
    }
    '/textarea': {
      id: '/textarea'
      path: '/textarea'
      fullPath: '/textarea'
      preLoaderRoute: typeof TextareaImport
      parentRoute: typeof rootRoute
    }
    '/toast': {
      id: '/toast'
      path: '/toast'
      fullPath: '/toast'
      preLoaderRoute: typeof ToastImport
      parentRoute: typeof rootRoute
    }
    '/togglebutton': {
      id: '/togglebutton'
      path: '/togglebutton'
      fullPath: '/togglebutton'
      preLoaderRoute: typeof TogglebuttonImport
      parentRoute: typeof rootRoute
    }
    '/togglebuttongroup': {
      id: '/togglebuttongroup'
      path: '/togglebuttongroup'
      fullPath: '/togglebuttongroup'
      preLoaderRoute: typeof TogglebuttongroupImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  ButtonRoute,
  CheckboxRoute,
  ColorsRoute,
  DropdownRoute,
  FontsRoute,
  IconsRoute,
  InputRoute,
  PositionpadRoute,
  SliderRoute,
  TextareaRoute,
  ToastRoute,
  TogglebuttonRoute,
  TogglebuttongroupRoute,
})

/* prettier-ignore-end */
