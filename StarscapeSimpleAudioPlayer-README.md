# Starscape Simple Audio Player Component

A fully-featured, self-contained audio player component extracted from the starlove-world project. This component provides a complete audio playback experience with progress tracking, volume control, and playlist management, with proper state isolation and navigation handling.

## Features

- **Playlist Support**: Play multiple tracks in sequence
- **Progress Control**: Clickable progress bar with draggable handle
- **Volume Control**: Hover tooltip with volume slider
- **Responsive Design**: Adapts to mobile and desktop layouts
- **CSS Variables**: Uses CSS custom properties for easy theming
- **Howler.js Integration**: Powered by Howler.js for robust audio handling

## Dependencies

This component requires **Howler.js** to function. Include it in your project:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js"></script>
```

## Installation

1. Copy `StarscapeSimpleAudioPlayer.astro` to your components directory
2. Include Howler.js in your project
3. Import and use the component

## Basic Usage

### Astro Component

```astro
---
import StarscapeSimpleAudioPlayer from './components/StarscapeSimpleAudioPlayer.astro';
---

<!-- Basic usage with default playlist -->
<StarscapeSimpleAudioPlayer />

<!-- Custom playlist -->
<StarscapeSimpleAudioPlayer 
  playlist={[
    { title: "Track 1", src: "/audio/track1.mp3" },
    { title: "Track 2", src: "/audio/track2.mp3" }
  ]}
/>

<!-- With autoplay and custom volume -->
<StarscapeSimpleAudioPlayer 
  autoplay={true}
  volume={0.8}
  className="my-custom-player"
  id="my-unique-player"
/>
```

### React/Vue/Other Frameworks

For non-Astro projects, you can extract the HTML, CSS, and JavaScript:

```html
<!-- Include Howler.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js"></script>

<!-- Audio Player HTML -->
<div class="starscape-audio-player" data-player-id="unique-player-id">
  <!-- Copy the HTML structure from StarscapeSimpleAudioPlayer.astro -->
</div>

<!-- Include the CSS and JS -->
<style>
  /* Copy CSS from StarscapeSimpleAudioPlayer.astro */
</style>

<script>
  // The component automatically initializes with proper state management
  // Each instance is isolated and handles navigation properly
</script>
```

## Props/Configuration

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `playlist` | `Array<{title: string, src: string}>` | Default tracks | Array of audio tracks |
| `autoplay` | `boolean` | `false` | Start playing automatically |
| `volume` | `number` | `1.0` | Initial volume (0.0 - 1.0) |
| `className` | `string` | `""` | Additional CSS classes |
| `id` | `string` | `"starscape-audio-player"` | Unique identifier for the player |

## Playlist Format

```typescript
interface Track {
  title: string;  // Display name for the track
  src: string;    // URL/path to audio file
}

const playlist: Track[] = [
  {
    title: "My Favorite Song",
    src: "/audio/favorite.mp3"
  },
  {
    title: "Another Great Track", 
    src: "https://example.com/audio/track.mp3"
  }
];
```

## Theming

The component uses CSS custom properties for easy theming:

```css
.starscape-audio-player {
  --secondary-bg: #1e293b;      /* Player background */
  --border-color: #334155;      /* Border color */
  --accent-bg: #3b82f6;         /* Accent/primary color */
  --glow-color: #60a5fa;        /* Hover accent color */
  --text-primary: #f1f5f9;      /* Primary text */
  --text-secondary: #e1e1e1;    /* Secondary text */
}

/* Dark theme example */
.dark-theme .starscape-audio-player {
  --secondary-bg: #111827;
  --border-color: #374151;
  --accent-bg: #3b82f6;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
}

/* Custom color scheme */
.custom-player {
  --accent-bg: #10b981;         /* Green accent */
  --glow-color: #34d399;        /* Light green hover */
}
```

## API Methods

Each player instance is self-contained and provides these methods:

```javascript
// Access a specific player instance (stored on the DOM element)
const playerElement = document.querySelector('[data-player-id="your-player-id"]');
const player = playerElement._starscapePlayer;

// Playback controls (if player exists)
if (player) {
  player.play();
  player.pause();
  player.togglePlayPause();
  player.next();
  player.prev();

  // Volume control
  player.setVolume(0.5); // Set to 50%

  // Track loading
  player.loadTrack(2); // Load track at index 2

  // Cleanup when done
  player.destroy();
}
```

## Events

The player automatically handles:
- Play/pause state changes
- Track progression
- Volume adjustments
- Progress tracking
- Error handling for missing files

## Browser Support

- **Modern browsers**: Full support
- **Mobile Safari**: Requires user interaction before audio can play
- **File formats**: Supports all formats that Howler.js supports (MP3, OGG, WAV, AAC, etc.)

## Responsive Behavior

- **Desktop**: Full controls with volume tooltip
- **Tablet**: Optimized spacing and sizing
- **Mobile**: Compact layout with adjusted font sizes

## Integration Examples

### Astro with TypeScript

```astro
---
import StarscapeSimpleAudioPlayer from '../components/StarscapeSimpleAudioPlayer.astro';

interface Track {
  title: string;
  src: string;
}

const myPlaylist: Track[] = [
  { title: "Ambient Loop", src: "/audio/ambient.wav" },
  { title: "Electronic Beat", src: "/audio/electronic.mp3" }
];
---

<main>
  <h1>My Music Player</h1>
  <StarscapeSimpleAudioPlayer 
    playlist={myPlaylist}
    volume={0.7}
    id="main-player"
  />
</main>
```

### React Integration

```jsx
import { useEffect } from 'react';

function MyAudioPlayer({ tracks, playerId }) {
  useEffect(() => {
    // The component handles its own initialization and cleanup
    // Just ensure Howler.js is loaded
    return () => {
      // Cleanup is handled automatically by the component
    };
  }, [tracks]);

  return (
    <div className="starscape-audio-player" data-player-id={playerId}>
      {/* HTML structure - component handles state management */}
    </div>
  );
}
```

## Troubleshooting

### Common Issues

1. **"Howler.js not found"**: Ensure Howler.js is loaded before the audio player
2. **Audio won't play**: Modern browsers require user interaction before audio playback
3. **Styles not applying**: Check that CSS custom properties are defined
4. **Files not loading**: Verify audio file paths and CORS settings
5. **State persisting across pages**: Each player instance is now properly isolated
6. **Track index issues**: Fixed with proper state management and cleanup

### Debug Mode

Enable console logging by modifying the component:

```javascript
// Access player instance for debugging
const playerElement = document.querySelector('[data-player-id="your-id"]');
const player = playerElement?._starscapePlayer;

if (player) {
  console.log('Current track:', player.currentTrackIndex);
  console.log('Is playing:', player.isPlaying);
  console.log('Playlist:', player.playlist);
}
```

## License

This component is extracted from the starlove-world project and maintains the same license terms.

## Key Improvements in v2.0

- **Proper State Isolation**: Each player instance maintains its own state
- **Navigation Handling**: Automatic cleanup and reinitialization on page changes
- **Unique IDs**: Each player gets a unique identifier to prevent conflicts
- **Better Element Selection**: Uses data attributes instead of global IDs
- **Memory Management**: Proper cleanup of audio resources and event listeners
- **Astro Integration**: Built-in support for Astro's client-side routing