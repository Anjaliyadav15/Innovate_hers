import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Brain, Calendar, Clock, Compass, Gift, Lightbulb, MapPin, Utensils } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-green-600" />
            <span className="text-lg font-bold">Smart Campus</span>
          </div>
          <nav className="hidden md:flex gap-6">
          <a href="#features" className="text-sm font-medium hover:text-green-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-green-600 transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-sm font-medium hover:text-green-600 transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-green-600 transition-colors">
              Testimonials
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
      <main className="flex-1 px-4">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20 md:py-32">
          <div className="container relative z-10 grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Empowering Students with <span className="text-green-600">Smart Campus</span> Solutions
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Revolutionizing the student experience with AI, automation, and seamless campus integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-white">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <image
                src="/placeholder.svg?height=800&width=1200"
                alt="Students using Smart Campus Solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Key Features</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Discover how our platform transforms campus life with these innovative solutions
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-green-100 transition-all hover:border-green-300 hover:shadow-lg">
                <CardHeader className="space-y-1 pb-2">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                    <Utensils className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">AI-Powered Canteen & Mess Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base min-h-[100px]">
                    AI that predicts food demand, suggests healthy meals, and reduces food waste. Get personalized meal
                    recommendations based on your preferences.
                  </CardDescription>
                  <Button variant="outline" className="w-full text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-100 transition-all hover:border-blue-300 hover:shadow-lg">
                <CardHeader className="space-y-1 pb-2">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                    <Compass className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Digital Lost & Found System</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base min-h-[100px]">
                    A connected platform to track and report lost items quickly and easily. Get notifications when your
                    items are found and connect with the campus community.
                  </CardDescription>
                  <Button variant="outline" className="w-full text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-teal-100 transition-all hover:border-teal-300 hover:shadow-lg">
                <CardHeader className="space-y-1 pb-2">
                  <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                    <Gift className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-2xl">Automated Scholarship Finder</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base min-h-[100px]">
                    Find the best scholarships that match your profile and deadlines with one click. Never miss an
                    opportunity with personalized alerts and application tracking.
                  </CardDescription>
                  <Button variant="outline" className="w-full text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-blue-50">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Get started with Smart Campus Solutions in just a few simple steps
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative flex flex-col items-center text-center p-6">
                <div className="absolute -top-4 -left-4 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <BookOpen className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                <p className="text-muted-foreground">
                  Create a personalized student profile with your preferences, interests, and academic details.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center p-6">
                <div className="absolute -top-4 -left-4 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <Lightbulb className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Engage with Features</h3>
                <p className="text-muted-foreground">
                  Access the canteen, report lost items, and search for scholarships all from one platform.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center p-6">
                <div className="absolute -top-4 -left-4 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <Calendar className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
                <p className="text-muted-foreground">
                  Receive notifications and updates for meal options, lost & found alerts, and scholarship
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-white">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Smart Campus Solutions?
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our platform offers numerous advantages to enhance your campus experience
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-none shadow-none bg-green-50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Clock className="h-10 w-10 text-green-600 mb-2" />
                    <h3 className="text-xl font-bold">Save Time</h3>
                    <p className="text-muted-foreground">
                      Reduce stress and save valuable time on campus with automated solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-none bg-blue-50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Gift className="h-10 w-10 text-blue-600 mb-2" />
                    <h3 className="text-xl font-bold">Never Miss Opportunities</h3>
                    <p className="text-muted-foreground">
                      Stay on top of all scholarship opportunities that match your profile.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-none bg-teal-50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Utensils className="h-10 w-10 text-teal-600 mb-2" />
                    <h3 className="text-xl font-bold">Healthier Choices</h3>
                    <p className="text-muted-foreground">
                      Make healthier meal choices and reduce food waste on campus.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-none bg-green-50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <MapPin className="h-10 w-10 text-green-600 mb-2" />
                    <h3 className="text-xl font-bold">Stay Connected</h3>
                    <p className="text-muted-foreground">Remain connected with your campus community and resources.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-12">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Started Now
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-blue-50">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Students Are Saying</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Hear from students who have transformed their campus experience
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Student Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="italic text-muted-foreground mb-4">
                        "The AI-powered canteen recommendations have helped me discover healthier meal options I never
                        would have tried otherwise. I've saved so much time not waiting in long lines!"
                      </p>
                      <h4 className="font-bold">Sarah Johnson</h4>
                      <p className="text-sm text-muted-foreground">Computer Science, Junior</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Student Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="italic text-muted-foreground mb-4">
                        "I found a scholarship that perfectly matched my profile that I would have never discovered on
                        my own. The application process was streamlined through the platform too!"
                      </p>
                      <h4 className="font-bold">Michael Chen</h4>
                      <p className="text-sm text-muted-foreground">Business Administration, Senior</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Student Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="italic text-muted-foreground mb-4">
                        "I lost my laptop on campus and was panicking. Within hours of reporting it on the Lost & Found
                        system, I was connected with the person who found it. This platform is a lifesaver!"
                      </p>
                      <h4 className="font-bold">Priya Patel</h4>
                      <p className="text-sm text-muted-foreground">Engineering, Sophomore</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Empower Your Campus Experience?
              </h2>
              <p className="text-lg opacity-90">
                Sign up now to get access to all the features and start making your campus life smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-white">
                  Join Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Start Your Journey
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-green-500" />
                <span className="text-lg font-bold text-white">Smart Campus</span>
              </div>
              <p className="text-sm">
                Revolutionizing the student experience with AI, automation, and seamless campus integration.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Quick as</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm hover:text-green-500 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-sm hover:text-green-500 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-sm hover:text-green-500 transition-colors">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-sm hover:text-green-500 transition-colors">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-green-500 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-green-500 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-green-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-green-500 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-aedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">aedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>© 2025 Smart Campus Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

