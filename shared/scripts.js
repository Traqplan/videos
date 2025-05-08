// Add any shared JS here in the future

document.addEventListener('DOMContentLoaded', () => {
  const playerElement = document.getElementById('player');

  if (playerElement) {
    const player = new Plyr(playerElement, {
      clickToPlay: true, // Explicitly enable click to play on the container
      // Standard Plyr controls (you can customize this array if needed)
      controls: [
        'play-large',
        'restart',
        'rewind',
        'play',
        'fast-forward',
        'progress',
        'current-time',
        'duration',
        'mute',
        'volume',
        'captions',
        'settings',
        'pip',
        'airplay',
        'fullscreen'
      ],
      youtube: {
        rel: 0,                 // Keep related videos suppressed
        showinfo: 1,            // Show video title and uploader (helps access to YouTube page)
        modestbranding: 0,      // Show normal YouTube branding
        iv_load_policy: 3,      // Hide annotations
        // Plyr handles hiding YouTube's own controls by default to use its skin
        // We could also try adding origin: window.location.origin here if click issues persist
      }
    });

    // Fetch and inject header
    fetch('/videos/shared/header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} for header.html`);
        }
        return response.text();
      })
      .then(html => {
        const headerDiv = document.getElementById('header');
        if (headerDiv) {
          headerDiv.innerHTML = html;
        } else {
          console.warn('Header div not found');
        }
      })
      .catch(error => console.error('Error fetching or injecting header:', error));

    // Fetch and inject footer
    fetch('/videos/shared/footer.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} for footer.html`);
        }
        return response.text();
      })
      .then(html => {
        const footerDiv = document.getElementById('footer');
        if (footerDiv) {
          footerDiv.innerHTML = html;
        } else {
          console.warn('Footer div not found');
        }
      })
      .catch(error => console.error('Error fetching or injecting footer:', error));
  } else {
    console.warn('Plyr player element not found');
  }
});
