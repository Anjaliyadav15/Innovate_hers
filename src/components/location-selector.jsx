"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const locations = [
  { value: "library", label: "University Library" },
  { value: "library-1st", label: "University Library - 1st Floor" },
  { value: "library-2nd", label: "University Library - 2nd Floor" },
  { value: "library-3rd", label: "University Library - 3rd Floor" },
  { value: "student-union", label: "Student Union" },
  { value: "student-union-food", label: "Student Union - Food Court" },
  { value: "student-union-lounge", label: "Student Union - Lounge" },
  { value: "gym", label: "Campus Gym" },
  { value: "gym-locker-m", label: "Gym - Men's Locker Room" },
  { value: "gym-locker-w", label: "Gym - Women's Locker Room" },
  { value: "science", label: "Science Building" },
  { value: "engineering", label: "Engineering Building" },
  { value: "arts", label: "Arts Building" },
  { value: "business", label: "Business School" },
  { value: "cafeteria", label: "Main Cafeteria" },
  { value: "dorm-a", label: "Dormitory A" },
  { value: "dorm-b", label: "Dormitory B" },
  { value: "dorm-c", label: "Dormitory C" },
  { value: "parking-north", label: "North Parking Lot" },
  { value: "parking-south", label: "South Parking Lot" },
  { value: "bus-stop", label: "Campus Bus Stop" },
  { value: "other", label: "Other (specify in description)" },
]

export function LocationSelector() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between text-white">
          {value ? locations.find((location) => location.value === value)?.label : "Select location..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandList>
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandGroup className="max-h-[300px] overflow-y-auto">
              {locations.map((location) => (
                <CommandItem
                  key={location.value}
                  value={location.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === location.value ? "opacity-100" : "opacity-0")} />
                  {location.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

