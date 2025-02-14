import { YouTubeVideoGrid } from "./youtube-video-grid"

export function VideoResources() {
  return (
    <div className="space-y-8">
      <section>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Porn's Impact</h2>
          <YouTubeVideoGrid
            videos={[
              { id: "xFntLrlmSHM", title: "Understanding the problem" },
              { id: "DBTb71UzPmY", title: "Let's talk about porn" },
              { id: "bEIt4wEh7zM", title: "Link between porn and human trafficking" },
              { id: "vIgWMzdgweI", title: "Pornography isn't your problem" },
              { id: "aJLRTL7w5qA", title: "Things you didn't know about porn" },
              { id: "wSF82AwSDiU", title: "The great porn experiment" },
              { id: "QGh3wcUneT8", title: "Watchmen on the wall interview" },
              { id: "MmKN4nkSGmk", title: "Clive speaks to Addict to Disciple" },
              { id: "6REtkBnAhwc", title: "Porndemic book launch" },
            ]}
          />
        </div>
      </section>

      <section>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Not Just a Man's Problem</h2>
          <YouTubeVideoGrid
            videos={[
              { id: "yG7cuhkw4Qk", title: "Rachel: My 13 year Experience" },
              { id: "tCrKrIEhVmM", title: "Jessica: I was a porn addict" },
              { id: "86I_DCKRbCI", title: "Ash: Online porn nearly led to a risky in-person encounter" },
              { id: "CWGwaB39Tvg", title: "Tatiana: Porn was my main education for sex and love" },
              { id: "zQuCVeSYBIo", title: "Emma: Overcoming pornography, shame, and self-worth" },  
          ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Testimonies of Recovery</h2>
        <YouTubeVideoGrid
          videos={[
            { id: "4ZtcbYGUwf8", title: "Dan: I Feel Human Again" },
            { id: "xmqDsVAHpUc", title: "Robert: Finding the Light" },
            { id: "NY-zWVrqf38", title: "Paul: My Journey to Recovery" },
            { id: "fJjsbgk6e0A", title: "Terry Crews: Diary of a CEO" },
            { id: "-lDQ8bXRJJ0", title: "Smith: Porn tanked my mental health" },
          ]}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Supporter Resources</h2>
        <YouTubeVideoGrid
          videos={[
            { id: "NZKaTL_yDHc", title: "My Partner's Compassion Helped Me Quit Porn for Good" },
            { id: "gri7TMNtig", title: "Alex and Candice - Our Experience with Betrayal Trauma" },
            { id: "Hovh1AdzP5o", title: "How Opening Up Can Help You Quit Porn" },
            { id: "7JQD7BFvsRc", title: "Breaking The Shame Cycle" },
            { id: "H6ElrtEykK4", title: "How porn almost ruined our marriage" },
            { id: "pPW6W22MeRw", title: "Helping your partner overcome porn addiction" },
          ]}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Stories from the industry</h2>
        <YouTubeVideoGrid
          videos={[
            { id: "t0rdSxVXxrc", title: "Ex performers share what really happens" },
            { id: "Bk23mL15qpA", title: "Jessica: My life as a porn star" },
            { id: "Hx-p9Wr6xg0", title: "Greg: Successful male porn star speaks out" },
            { id: "5fPNNsjOMno", title: "Joshua: Why I left the porn industry" },
            { id: "RwTAgom_VX8", title: "Mia Khalifa: Why I'm speaking out about the porn industry" },
            { id: "5DPNo97OkDY", title: "Victoria: Sex trafficking survivor" },
          ]}
        />
      </section>
    </div>

    
  )
}

