import { YouTubeVideoGrid } from "./youtube-video-grid"
import videos from './videos.json'; // Import the videos JSON

export function VideoResources() {
  return (
    <div className="space-y-8">
      {Object.entries(videos).map(([sectionTitle, videoList]) => (
        <section key={sectionTitle}>
          <h2 className="text-2xl font-bold mb-4">{sectionTitle}</h2>
          <YouTubeVideoGrid videos={videoList} />
        </section>
      ))}
    </div>
  )
}

