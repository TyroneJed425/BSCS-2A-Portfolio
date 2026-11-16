# Portfolio Website — Revised Source

## Project files
- `index.html` — page content and structure
- `style.css` — layout, responsive styling, and homepage background
- `script.js` — navigation, carousel, email-message behavior, and footer year
- `assets/` — logo, homepage background, portrait, and carousel artwork

## Run locally
1. Extract this ZIP.
2. Open the `portfolio_website` folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Resize the browser to check desktop and mobile layouts.

## Changes in this revision
- Fixed the homepage background path to use the actual included file: `assets/home-background.png`.
- Removed the extra CSS grid overlay because the supplied background already contains its neon grid.
- Enlarged the header logo and adjusted the hero panel to better match the supplied homepage reference.
- Reorganized Contact: the logo and inquiry text sit above the message field on the left; the four social buttons form a vertical column on the right.
- Added responsive behavior so the contact section stacks on narrow screens.

## Before publishing
- Replace the Facebook, GitHub, and Instagram `href="#"` values in `index.html` with your real profile URLs.
- Replace `your-email@example.com` in both `index.html` and `script.js` with your receiving email address.
- Review your biography and project descriptions.
- Keep `index.html`, `style.css`, `script.js`, and `assets/` together.

## Contact form note
The form uses `mailto:`. Submitting opens the visitor's configured email application with the message prepared. It does not send messages through a server. A hosted form service or backend is needed for direct website submissions.
