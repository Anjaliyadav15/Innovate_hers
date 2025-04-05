import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, MapPin, Clock, CheckCircle2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentItemCard } from "@/components/recent-item-card"
import { SearchBar } from "@/components/search-bar"
import { StatsCard } from "@/components/stats-card"

export default function LostAndFound() {
  return (
    <div className="flex min-h-screen flex-col px-4">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-green-600" />
            <span className="text-lg font-bold">Campus Lost & Found</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="/" className="text-sm font-medium text-green-600 transition-colors">
              Dashboard
            </a>
            <a href="/lost-items" className="text-sm font-medium hover:text-green-600 transition-colors">
              Lost Items
            </a>
            <a href="/found-items" className="text-sm font-medium hover:text-green-600 transition-colors">
              Found Items
            </a>
            <a href="/my-items" className="text-sm font-medium hover:text-green-600 transition-colors">
              My Items
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex text-white">
              Log In
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-12">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Total Lost Items"
                value="124"
                description="Last 30 days"
                icon={<Clock className="h-5 w-5 text-red-500" />}
                trend="+12%"
                trendDirection="up"
              />
              <StatsCard
                title="Total Found Items"
                value="87"
                description="Last 30 days"
                icon={<CheckCircle2 className="h-5 w-5 text-green-500" />}
                trend="+8%"
                trendDirection="up"
              />
              <StatsCard
                title="Successful Matches"
                value="62"
                description="Last 30 days"
                icon={<CheckCircle2 className="h-5 w-5 text-blue-500" />}
                trend="+15%"
                trendDirection="up"
              />
              <StatsCard
                title="Pending Items"
                value="49"
                description="Awaiting claim"
                icon={<Clock className="h-5 w-5 text-amber-500" />}
                trend="-5%"
                trendDirection="down"
              />
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Lost & Found Dashboard</h1>
                <p className="text-muted-foreground mt-1">Report, search, and claim lost or found items on campus</p>
              </div>
              <div className="flex gap-3">
                <a href="/lost">
                  <Button className="bg-red-500 hover:bg-red-600">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Report Lost Item
                  </Button>
                </a>
                <a href="found">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Report Found Item
                  </Button>
                </a>
              </div>
            </div>

            <SearchBar />

            <Tabs defaultValue="all" className="mt-8">
              <TabsList className="grid w-full grid-cols-4 text-white">
                <TabsTrigger value="all" className="text-white">All Items</TabsTrigger>
                <TabsTrigger value="lost" className="text-white">Lost Items</TabsTrigger>
                <TabsTrigger value="found" className="text-white">Found Items</TabsTrigger>
                <TabsTrigger value="matches" className="text-white">Potential Matches</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <RecentItemCard
                    type="lost"
                    name="MacBook Pro 13-inch"
                    location="University Library, 2nd Floor"
                    date="Today, 2:30 PM"
                    description="Silver MacBook Pro with stickers on the cover. Last seen in the library study area."
                    category="Electronics"
                  />
                  <RecentItemCard
                    type="found"
                    name="Water Bottle"
                    location="Science Building, Room 302"
                    date="Yesterday, 4:15 PM"
                    description="Blue Hydro Flask water bottle with university logo sticker."
                    category="Personal Items"
                  />
                  <RecentItemCard
                    type="lost"
                    name="Student ID Card"
                    location="Student Union"
                    date="Yesterday, 1:00 PM"
                    description="Student ID card for John Smith, ID #12345678."
                    category="Documents"
                  />
                  <RecentItemCard
                    type="found"
                    name="Wireless Earbuds"
                    location="Gym, Locker Room"
                    date="Apr 3, 2025"
                    description="White wireless earbuds in charging case. Found in the men's locker room."
                    category="Electronics"
                  />
                  <RecentItemCard
                    type="lost"
                    name="Textbook - Organic Chemistry"
                    location="Chemistry Building"
                    date="Apr 2, 2025"
                    description="Organic Chemistry textbook, 5th edition. Has name 'Sarah Johnson' written inside."
                    category="Books"
                  />
                  <RecentItemCard
                    type="found"
                    name="Umbrella"
                    location="Engineering Building, Lobby"
                    date="Apr 1, 2025"
                    description="Black umbrella with wooden handle. Found in the umbrella stand."
                    category="Personal Items"
                  />
                </div>
              </TabsContent>
              <TabsContent value="lost" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <RecentItemCard
                    type="lost"
                    name="MacBook Pro 13-inch"
                    location="University Library, 2nd Floor"
                    date="Today, 2:30 PM"
                    description="Silver MacBook Pro with stickers on the cover. Last seen in the library study area."
                    category="Electronics"
                  />
                  <RecentItemCard
                    type="lost"
                    name="Student ID Card"
                    location="Student Union"
                    date="Yesterday, 1:00 PM"
                    description="Student ID card for John Smith, ID #12345678."
                    category="Documents"
                  />
                  <RecentItemCard
                    type="lost"
                    name="Textbook - Organic Chemistry"
                    location="Chemistry Building"
                    date="Apr 2, 2025"
                    description="Organic Chemistry textbook, 5th edition. Has name 'Sarah Johnson' written inside."
                    category="Books"
                  />
                </div>
              </TabsContent>
              <TabsContent value="found" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <RecentItemCard
                    type="found"
                    name="Water Bottle"
                    location="Science Building, Room 302"
                    date="Yesterday, 4:15 PM"
                    description="Blue Hydro Flask water bottle with university logo sticker."
                    category="Personal Items"
                  />
                  <RecentItemCard
                    type="found"
                    name="Wireless Earbuds"
                    location="Gym, Locker Room"
                    date="Apr 3, 2025"
                    description="White wireless earbuds in charging case. Found in the men's locker room."
                    category="Electronics"
                  />
                  <RecentItemCard
                    type="found"
                    name="Umbrella"
                    location="Engineering Building, Lobby"
                    date="Apr 1, 2025"
                    description="Black umbrella with wooden handle. Found in the umbrella stand."
                    category="Personal Items"
                  />
                </div>
              </TabsContent>
              <TabsContent value="matches" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-medium">Potential Match Found</CardTitle>
                      <CardDescription>These items might be the same</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4 bg-red-50">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-red-100 text-red-800">
                              Lost
                            </span>
                            <span className="text-xs text-muted-foreground">Apr 3, 2025</span>
                          </div>
                          <h3 className="font-medium">Black Backpack</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            North Face backpack with laptop and notebooks inside
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" /> Student Center
                          </div>
                        </div>
                        <div className="border rounded-lg p-4 bg-green-50">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                              Found
                            </span>
                            <span className="text-xs text-muted-foreground">Apr 4, 2025</span>
                          </div>
                          <h3 className="font-medium">Backpack</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Black North Face backpack found with laptop inside
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" /> Cafeteria
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button variant="outline" size="sm" className="mr-2">
                          Not a Match
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Contact Finder
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-medium">Potential Match Found</CardTitle>
                      <CardDescription>These items might be the same</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4 bg-red-50">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-red-100 text-red-800">
                              Lost
                            </span>
                            <span className="text-xs text-muted-foreground">Apr 2, 2025</span>
                          </div>
                          <h3 className="font-medium">Graphing Calculator</h3>
                          <p className="text-sm text-muted-foreground mb-2">TI-84 Plus calculator with name on back</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" /> Math Building
                          </div>
                        </div>
                        <div className="border rounded-lg p-4 bg-green-50">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                              Found
                            </span>
                            <span className="text-xs text-muted-foreground">Apr 3, 2025</span>
                          </div>
                          <h3 className="font-medium">Calculator</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Texas Instruments calculator found in classroom
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" /> Math Building, Room 204
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button variant="outline" size="sm" className="mr-2">
                          Not a Match
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Contact Finder
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
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

