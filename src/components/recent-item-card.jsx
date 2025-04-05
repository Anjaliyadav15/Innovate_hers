import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Tag, MessageCircle } from "lucide-react"


export function RecentItemCard({
  type,
  name,
  location,
  date,
  description,
  category,
  image = "/placeholder.svg?height=200&width=200",
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <Badge
          className={`absolute top-2 left-2 ${
            type === "lost" ? "bg-red-500 hover:bg-red-600" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {type === "lost" ? "Lost" : "Found"}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {location}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {date}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Tag className="h-4 w-4 mr-2" />
            {category}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" className="text-white">
          View Details
        </Button>
        <Button
          size="sm"
          className={type === "lost" ? "bg-red-500 hover:bg-red-600" : "bg-green-600 hover:bg-green-700"}
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Contact
        </Button>
      </CardFooter>
    </Card>
  )
}

