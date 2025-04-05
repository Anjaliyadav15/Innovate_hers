"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"

export function ImageUploader() {
  const [images, setImages] = useState([])

  // This would be replaced with actual file upload logic in a real implementation
  const handleUpload = () => {
    // Simulate adding a new image
    setImages([...images, `/placeholder.svg?height=200&width=200&text=Image ${images.length + 1}`])
  }

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-24 w-24 rounded-md overflow-hidden border">
            <image
              src={image || "/placeholder.svg"}
              alt={`Uploaded image ${index + 1}`}
              fill
              className="object-cover"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 bg-black/50 rounded-full p-1 text-white hover:bg-black/70"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
        {images.length < 3 && (
          <Button
            type="button"
            variant="outline"
            onClick={handleUpload}
            className="h-24 w-24 border-dashed flex flex-col items-center justify-center gap-1"
          >
            <Upload className="h-4 w-4 text-white" />
            <span className="text-xs text-white">Upload</span>
          </Button>
        )}
      </div>
      <p className="text-xs text-muted-foreground">Upload up to 3 images. Clear photos help with identification.</p>
    </div>
  )
}

