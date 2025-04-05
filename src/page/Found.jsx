import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, ArrowLeft } from "lucide-react"
import { DatePicker } from "@/components/date-picker"
import { LocationSelector } from "@/components/location-selector"
import { ItemCategorySelector } from "@/components/item-category-selector"
import { ImageUploader } from "@/components/image-uploader"

export default function ReportFoundItem() {
  return (
    <div className="flex min-h-screen flex-col px-2 w-screen m-auto items-center">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-green-600" />
            <span className="text-lg font-bold">Campus Lost & Found</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="/" className="text-sm font-medium hover:text-green-600 transition-colors">
              Dashboard
            </a>
            <a href="/lost" className="text-sm font-medium hover:text-green-600 transition-colors">
              Lost Items
            </a>
            <a href="/found" className="text-sm font-medium hover:text-green-600 transition-colors">
              Found Items
            </a>
            {/* <a href="/my-items" className="text-sm font-medium hover:text-green-600 transition-colors">
              My Items
            </a> */}
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex text-white">
              Log In
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container max-w-3xl">
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </a>
          </div>
          <Card>
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Report a Found Item</CardTitle>
                  <CardDescription>Fill out the form below with details about the item you found</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="item-name">Item Name</Label>
                    <Input id="item-name" placeholder="e.g., Laptop, Water Bottle, Backpack" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="item-category">Item Category</Label>
                    <ItemCategorySelector />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of the item (color, brand, distinguishing features, etc.)"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date Found</Label>
                    <DatePicker />
                  </div>
                  <div className="space-y-2">
                    <Label>Approximate Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (6AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                        <SelectItem value="evening">Evening (5PM - 10PM)</SelectItem>
                        <SelectItem value="night">Night (10PM - 6AM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Location Found</Label>
                  <LocationSelector />
                </div>

                <div className="space-y-2">
                  <Label>Current Item Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Where is the item now?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="with-me">I'm keeping it safe</SelectItem>
                      <SelectItem value="campus-security">Dropped off at Campus Security</SelectItem>
                      <SelectItem value="department-office">Left at Department Office</SelectItem>
                      <SelectItem value="library-desk">Left at Library Front Desk</SelectItem>
                      <SelectItem value="student-center">Left at Student Center</SelectItem>
                      <SelectItem value="other">Other (specify in description)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Upload Images (Optional)</Label>
                  <ImageUploader />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Your Name</Label>
                    <Input id="contact-name" placeholder="Full Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address</Label>
                    <Input id="contact-email" type="email" placeholder="email@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone Number (Optional)</Label>
                  <Input id="contact-phone" type="tel" placeholder="(123) 456-7890" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="text-white">Cancel</Button>
              <Button className="bg-green-600 hover:bg-green-700">Submit Found Item Report</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Campus Lost & Found. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

