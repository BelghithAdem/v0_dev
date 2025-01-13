'use client'

import { ChevronsUpDown, Star, HelpCircle } from 'lucide-react'
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Customer } from "@/types/sales-order"
import { Badge } from "@/components/ui/badge"
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

interface CustomerSearchProps {
  customers?: Customer[]
  onSelect: (customer: Customer) => void
  selectedCustomer?: Customer
}

export function CustomerSearch({ customers = [], onSelect, selectedCustomer }: CustomerSearchProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {selectedCustomer ? (
              <div className="flex items-center gap-2">
                <span>{selectedCustomer.name}</span>
                {selectedCustomer.insights?.isPreferredCustomer && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Preferred
                  </Badge>
                )}
              </div>
            ) : (
              "Select customer..."
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0">
          <Command>
            <CommandInput placeholder="Search customers..." />
            <CommandEmpty>No customers available.</CommandEmpty>
            <CommandGroup>
              {customers.length > 0 ? (
                customers.map((customer) => (
                  <CommandItem
                    key={customer.id}
                    onSelect={() => {
                      onSelect(customer)
                      setOpen(false)
                    }}
                    className="flex flex-col items-start py-3"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-medium">{customer.name}</span>
                      {customer.insights?.isPreferredCustomer && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          Preferred
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{customer.email}</span>
                      <span>{customer.insights?.totalOrders ?? 0} orders</span>
                      <span>${(customer.insights?.averageOrderValue ?? 0).toLocaleString()} avg</span>
                    </div>
                  </CommandItem>
                ))
              ) : (
                <CommandItem>No customers available</CommandItem>
              )}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="absolute right-12 top-0">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Search and select a customer from your existing customer database. You can search by name, email, or customer ID.</p>
          </TooltipContent>
        </TooltipRoot>
      </TooltipProvider>
    </div>
  )
}

