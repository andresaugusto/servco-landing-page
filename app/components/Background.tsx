import React from 'react'

const Background: React.FC = () => {

  const background = {
    title: "aA (portfolio)",
    poster: "https://andresaugusto-aa-media.s3.amazonaws.com/images/aa-demo-wide-1080p-filtered-poster.png",
    // mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/aa-demo-wide-x4-1080p-filtered.mp4",
    mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/aa-demo-wide-x4-1080p.mp4",
    webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/aa-demo-wide-x4-1080p-filtered.webm",
  }

  return (
    <div
      id="backgroundContainer"
      className="
        -z-50
        fixed
        box-border
        w-full
        h-full
        flex
        overflow-hidden
        items-center
        justify-center
        color-primary
        bg-base
      "
    >
      {
        background && Object.keys(background).length>0
        ? 
          <div>
            <video
              playsInline
              autoPlay
              loop
              muted
              key={background.title + "MainWide"}
              preload="true"
              poster={background.poster}
              className="
                object-cover
                blur-sm
                brightness-100
                opacity-25
              "
              style={{
                minHeight: "115vh",
              }}
            >
              <source
                src={
                  background.mp4
                }
                type="video/mp4"
              />
              <source
                src={
                  background.webm
                }
                type="video/webm"
              />
            </video>
            <div
              className="
                box-border
                absolute
              "
              style={{
                width: '100svw' || '100vw',
                height: '100svh' || '100vh',
              }}
            />
          </div>
        : 
          <>no background</>
      }
    </div>
  );
}

export default Background