import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const layoutPath = path.join(root, 'src', 'components', 'Layout.astro');
const stylesDirectory = path.join(root, 'src', 'styles', 'v23');
const failures = [];

const read = (filename) => fs.readFileSync(filename, 'utf8');
const layout = read(layoutPath);
const styles = fs.readdirSync(stylesDirectory)
  .filter((name) => name.endsWith('.css'))
  .map((name) => read(path.join(stylesDirectory, name)))
  .join('\n');

const requirePattern = (value, pattern, message) => {
  if (!pattern.test(value)) failures.push(message);
};

requirePattern(layout, /<html\b[^>]*data-visual-tier=["']reduced["'][^>]*data-motion-paused=["']false["']/i, 'Layout must fail closed to the reduced tier without JavaScript.');
requirePattern(layout, /root\.dataset\.visualTier\s*=\s*['"]reduced['"]/i, 'Classifier must select reduced mode for explicit constraints.');
requirePattern(layout, /enhancedReady\s*\?\s*['"]enhanced['"]\s*:\s*['"]standard['"]/i, 'Classifier must expose enhanced and standard outcomes.');
requirePattern(layout, /prefers-reduced-motion:\s*reduce/i, 'Classifier must respect prefers-reduced-motion.');
requirePattern(layout, /prefers-reduced-transparency:\s*reduce/i, 'Classifier must respect prefers-reduced-transparency.');
requirePattern(layout, /saveData/i, 'Classifier must respect the browser data-saver preference.');
requirePattern(layout, /hardwareConcurrency/i, 'Classifier must gate enhanced mode on CPU capability.');
requirePattern(layout, /deviceMemory/i, 'Classifier must gate enhanced mode on memory capability.');
requirePattern(layout, /getContext\(['"]webgl2['"]/i, 'Classifier must fall back when WebGL2 is unavailable.');
requirePattern(layout, /data-motion-toggle/i, 'Layout must render a persistent motion control.');
requirePattern(layout, /aria-pressed=["']false["']/i, 'Motion control must expose its toggle state to assistive technology.');
requirePattern(layout, /localStorage\.setItem\(['"]portfolio:motion-paused['"]/i, 'Motion preference must persist across pages.');

for (const tier of ['enhanced', 'standard', 'reduced']) {
  requirePattern(styles, new RegExp(`html\\[data-visual-tier=['"]${tier}['"]\\]`, 'i'), `V2.3 styles must include an explicit ${tier} tier.`);
}
requirePattern(styles, /html\[data-visual-tier=['"]reduced['"]\][\s\S]{0,1600}?animation:\s*none\s*!important/i, 'Reduced tier must disable CSS animation.');
requirePattern(styles, /html\[data-visual-tier=['"]reduced['"]\][\s\S]{0,2200}?backdrop-filter:\s*none/i, 'Reduced tier must remove costly backdrop filters.');
requirePattern(styles, /html\[data-visual-tier=['"]reduced['"]\]\s+\.v23-career-field\s+svg\s*\{\s*display:\s*none/i, 'Reduced tier must replace the career SVG with its semantic fallback.');
requirePattern(styles, /html\[data-visual-tier=['"]reduced['"]\]\s+\.career-field-fallback\s*\{\s*display:\s*grid/i, 'Reduced tier must expose the career list fallback.');
requirePattern(styles, /html\[data-motion-paused=['"]true['"]\][\s\S]{0,260}?animation-play-state:\s*paused\s*!important/i, 'Motion control must pause continuous CSS animation.');
requirePattern(styles, /@media\s*\(prefers-reduced-motion:\s*reduce\)/i, 'V2.3 styles must include a reduced-motion media fallback.');
requirePattern(styles, /@media\s*\(forced-colors:\s*active\)/i, 'V2.3 styles must include a forced-colors fallback.');
requirePattern(styles, /@media\s*\(prefers-reduced-transparency:\s*reduce\)/i, 'V2.3 styles must include a reduced-transparency fallback.');
requirePattern(styles, /\.visual-motion-control:focus-visible/i, 'Motion control must provide a visible keyboard focus treatment.');
requirePattern(styles, /\.mobile-nav\[open\]\s*>\s*div\s*\{[^}]*position:\s*fixed[^}]*height:\s*calc\(100svh\s*-\s*66px\)[^}]*overflow-y:\s*auto/is, 'The no-JS mobile details menu must occupy a scrollable viewport instead of inheriting the clipped legacy panel.');
requirePattern(styles, /\[data-project-select\]\[hidden\]\s*\{\s*display:\s*none\s*!important/i, 'Project filtering must honor the semantic hidden attribute despite author button display rules.');

if (failures.length) {
  console.error(`Visual-tier validation failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Visual-tier validation passed: reduced no-JS default, conservative enhanced gate, standard fallback, persistent motion pause, and accessibility preferences are present.');
