# Portfolio V2.2 accessibility

## Implemented guarantees

- Semantic landmarks, one visible page heading, skip link, and ordinary-link navigation.
- Keyboard-accessible native mobile disclosure, tabs, filters, and Agent Trace controls.
- Current page and current trace step exposed with ARIA state.
- SVG Observatory map is an interactive group, not a nested control inside an image role.
- Compact instrumentation text meets WCAG AA contrast on paper and dark surfaces.
- Complete server-rendered copy and proof without JavaScript.
- Reduced-motion mode removes meaningful animation duration.
- Focus remains visible; controls preserve usable touch dimensions.
- Public résumé is a one-page, text-extractable PDF with embedded Arial fonts.

## Automated proof

- Axe WCAG A/AA audit: 18/18 routes passed in Chromium.
- Horizontal overflow: all 12 primary routes passed at 320, 360, 390, 430, 768, 1024, 1280, 1440, 1920, and 2560 px.
- Keyboard/reduced-motion/no-JavaScript flows are covered in Playwright.

## Human review checklist

- Inspect zoom at 200% and text-only zoom.
- Verify focus order in Safari/WebKit and Firefox.
- Confirm constellation labels and dense instrumentation at 320 px.
- Review PDF reading order in a screen reader.
- Check that every external repository/source link has meaningful adjacent context.

Automated tooling is evidence, not a claim of universal conformance.
