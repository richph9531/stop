"use client"

import { useState } from "react"
import { YouTubeEmbed } from "@next/third-parties/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Video {
  id: string
  title: string
}

interface YouTubeVideoGridProps {
  videos: Video[]
}

export function YouTubeVideoGrid({ videos }: YouTubeVideoGridProps) {
  const [showAll, setShowAll] = useState(false)
  const displayedVideos = showAll ? videos : videos.slice(0, 3)

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border rounded-lg p-4 bg-gray-500/70">
        {displayedVideos.map((video) => (
          <Card key={video.id} className="bg-gray-300 shadow-sm hover:bg-gray-200 transition-colors">
            <CardContent className="p-0 overflow-hidden">
              <CardHeader className="h-[5rem] pb-2 px-3">
                <CardTitle className="text-base md:text-lg font-medium line-clamp-2 px-3">{video.title}</CardTitle>
              </CardHeader>
              <div className="px-3 pb-3">
                <div className="relative w-full aspect-video overflow-hidden rounded-md">
                  <div className="w-full h-full">
                    <YouTubeEmbed videoid={video.id} height={200} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {videos.length > 3 && (
        <div className="text-center">
          {showAll ? (
            <Button onClick={() => setShowAll(false)}>Show Less</Button>
          ) : (
            <Button onClick={() => setShowAll(true)}>Show More</Button>
          )}
        </div>
      )}
    </div>
  )
}

