"use client"

import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}>
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props} />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const NavigationMenuTrigger = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(
      "focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}>
    {children}{" "}
    <ChevronDownIcon
      className="relative top-[1px] ml-1 size-3 transition duration-200 group-data-[state=open]:rotate-180" />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion^=from-]:zoom-in-90 data-[motion^=to-]:zoom-out-90 data-[side=bottom]:slide-in-from-top-px data-[side=left]:slide-in-from-right-px data-[side=right]:slide-in-from-left-px data-[side=top]:slide-in-from-bottom-px left-0 top-0 w-full md:absolute md:w-auto ",
      className
    )}
    {...props} />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center", className)}>
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      {...props} />
  </div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in relative top-[60%] z-[1] flex h-1.5 items-end justify-center overflow-hidden rounded-t-[4px] bg-border transition-all",
      className
    )}
    {...props}>
    <div className="bg-popover relative top-[60%] size-2 rotate-45 rounded-tl-sm" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
