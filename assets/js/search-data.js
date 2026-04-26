// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-music",
          title: "music",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/music/";
          },
        },{id: "post-welcome-to-jekyll",
        
          title: "Welcome to Jekyll!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/test/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "music-bright-ledger",
          title: 'Bright Ledger',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2024-01-10-bright-ledger/";
            },},{id: "music-late-fees",
          title: 'Late Fees',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2024-01-24-late-fees/";
            },},{id: "music-porch-radio",
          title: 'Porch Radio',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2024-02-07-porch-radio/";
            },},{id: "music-glass-elevator",
          title: 'Glass Elevator',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2024-02-21-glass-elevator/";
            },},{id: "music-harbor-receipts",
          title: 'Harbor Receipts',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2024-03-06-harbor-receipts/";
            },},{id: "music-stairwell-dubs",
          title: 'Stairwell Dubs',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2024-03-20-stairwell-dubs/";
            },},{id: "music-signal-flowers",
          title: 'Signal Flowers',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2024-04-03-signal-flowers/";
            },},{id: "music-minute-hand",
          title: 'Minute Hand',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2024-04-17-minute-hand/";
            },},{id: "music-basement-typewriter",
          title: 'Basement Typewriter',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2024-05-01-basement-typewriter/";
            },},{id: "music-clean-break",
          title: 'Clean Break',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2024-05-15-clean-break/";
            },},{id: "music-orange-index",
          title: 'Orange Index',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2025-01-08-orange-index/";
            },},{id: "music-empty-platform",
          title: 'Empty Platform',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2025-01-22-empty-platform/";
            },},{id: "music-still-camera",
          title: 'Still Camera',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2025-02-05-still-camera/";
            },},{id: "music-maple-static",
          title: 'Maple Static',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2025-02-19-maple-static/";
            },},{id: "music-civic-dreams",
          title: 'Civic Dreams',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2025-03-05-civic-dreams/";
            },},{id: "music-cassette-weather",
          title: 'Cassette Weather',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2025-03-19-cassette-weather/";
            },},{id: "music-pale-geometry",
          title: 'Pale Geometry',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2025-04-02-pale-geometry/";
            },},{id: "music-doorbell-memory",
          title: 'Doorbell Memory',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2025-04-16-doorbell-memory/";
            },},{id: "music-night-market-notes",
          title: 'Night Market Notes',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2025-05-07-night-market-notes/";
            },},{id: "music-remote-blue",
          title: 'Remote Blue',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2025-05-21-remote-blue/";
            },},{id: "music-low-frequency-maps",
          title: 'Low Frequency Maps',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-01-05-low-frequency-maps/";
            },},{id: "music-paper-circuit",
          title: 'Paper Circuit',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-01-12-paper-circuit/";
            },},{id: "music-cold-window",
          title: 'Cold Window',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-01-19-cold-window-single/";
            },},{id: "music-rain-checks",
          title: 'Rain Checks',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-01-26-rain-checks/";
            },},{id: "music-slate-mornings",
          title: 'Slate Mornings',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-02-02-slate-mornings/";
            },},{id: "music-pocket-moon",
          title: 'Pocket Moon',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-02-09-pocket-moon/";
            },},{id: "music-number-stations",
          title: 'Number Stations',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-02-16-number-stations/";
            },},{id: "music-bus-stop-chorus",
          title: 'Bus Stop Chorus',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-02-23-bus-stop-chorus/";
            },},{id: "music-shadow-register",
          title: 'Shadow Register',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-03-02-shadow-register/";
            },},{id: "music-lantern-edit",
          title: 'Lantern Edit',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-03-09-lantern-edit/";
            },},{id: "music-blue-train",
          title: 'Blue Train',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-04-19-blue-train/";
            },},{id: "music-blue-train-2",
          title: 'Blue Train 2',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-04-26-blue-train%202/";
            },},{id: "music-neon-room",
          title: 'Neon Room',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-04-20-neon-room/";
            },},{id: "music-half-light-sketches",
          title: 'Half-Light Sketches',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-04-21-half-light-sketches/";
            },},{id: "music-borrowed-static",
          title: 'Borrowed Static',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-04-22-borrowed-static/";
            },},{id: "music-archive-sun",
          title: 'Archive Sun',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-04-23-archive-sun/";
            },},{id: "music-small-wires",
          title: 'Small Wires',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-04-24-small-wires/";
            },},{id: "music-warehouse-moon",
          title: 'Warehouse Moon',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-04-25-warehouse-moon/";
            },},{id: "music-fault-line-pop",
          title: 'Fault Line Pop',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-04-26-fault-line-pop/";
            },},{id: "music-winter-index",
          title: 'Winter Index',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-04-27-winter-index/";
            },},{id: "music-soft-machines-live",
          title: 'Soft Machines Live',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-04-28-soft-machines-live/";
            },},{id: "music-radio-minutes",
          title: 'Radio Minutes',
          description: "",
          section: "Music",handler: () => {
              window.location.href = "/music/2026-04-29-radio-minutes/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
