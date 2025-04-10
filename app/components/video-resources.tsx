import { YouTubeVideoGrid } from "./youtube-video-grid"
import videos from '../data/videos.json';

export function VideoResources() {
  return (
    <div className="space-y-8 pb-12">
      {Object.entries(videos).map(([sectionTitle, videoList]) => (
        <section key={sectionTitle}>
          <h2 className="text-2xl font-bold mb-4 pl-5">{sectionTitle}</h2>
          <YouTubeVideoGrid videos={videoList} />
        </section>
      ))}
    </div>
  )
}

