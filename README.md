# Handcode — handcode.love

A complete static, responsive satirical software consultancy website. No npm, framework, build step, paid services, or API keys required.

## Preview
Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Publish on GitHub Pages
1. Create a GitHub repository, e.g. `handcode` (public works with GitHub Free).
2. Upload the CONTENTS of this folder to the repository root. `index.html` must be at the root, alongside `style.css`, `script.js`, `CNAME`, and `assets/`. Do not upload just the ZIP or an enclosing folder.
3. In repository **Settings → Pages**, select **Deploy from a branch**, then **main** and **/(root)**. Save.
4. Set **Custom domain** to `handcode.love` and save BEFORE changing DNS. The included `CNAME` file already contains that domain.
5. Configure Porkbun below. After DNS checks pass and the certificate is available, enable **Enforce HTTPS** in GitHub Pages. DNS/certificate provisioning can take up to 24 hours.

## Porkbun DNS
GitHub Pages hosts the files; Porkbun remains your registrar and DNS provider. No Porkbun web-hosting plan is needed.

In Porkbun Domain Management, choose handcode.love → DNS. Use **Quick DNS Config → Github**, then set `www` to `YOUR-GITHUB-USERNAME.github.io` (or your GitHub organization). Check existing records before applying a preset.

Alternatively configure these records manually. A blank Porkbun Host means the root domain (often shown as @ elsewhere):

| Type | Host | Answer |
|---|---|---|
| A | blank | 185.199.108.153 |
| A | blank | 185.199.109.153 |
| A | blank | 185.199.110.153 |
| A | blank | 185.199.111.153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Replace YOUR-GITHUB-USERNAME with the account or organization that owns the repository. No https://, repository suffix, or slash in that DNS value. Replace conflicting root parking/forwarding A/AAAA/ALIAS records and conflicting www records; preserve email MX/TXT and unrelated records. Do not add a wildcard record. GitHub can redirect www to your configured root domain.

Current official guides checked November 2, 2026:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://kb.porkbun.com/article/64-how-to-connect-your-domain-to-github-pages

## Files and edits
- `index.html`: all page content, SEO metadata and accessible dialogs.
- `style.css`: colors, typography, layouts, responsive breakpoints and reduced-motion support.
- `script.js`: mobile menu, dialogs, local brief generation and clipboard action.
- `assets/studio.png`, `assets/storefront.png`: original generated photographs, stored locally with no external image service.
- `assets/favicon.svg`: H monogram.
- `404.html`: custom not-found page.
- `CNAME`: custom domain for branch publishing.
- `.nojekyll`: keeps GitHub Pages from processing the site with Jekyll.
- `robots.txt`, `sitemap.xml`: crawler configuration.

Typography uses locally available Georgia and Arial; no external font requests. The only third-party request is the Cloudflare Web Analytics beacon in index.html and 404.html; it collects no form data.

## Enquiries
The buttons open a working commission-brief dialog. Visitors can fill out, generate, edit and copy their brief. Nothing is submitted, stored or emailed; this is explicitly stated. No mailbox, booking service or backend has been assumed. To collect real enquiries later, connect a form endpoint or configure a real email address and update the form copy. A discreet footer colophon explains that this is satire and the imagery is imagined.

## Verification
JavaScript syntax, local asset/anchor references, desktop render and commission brief flow checked. Mobile layout and navigation checked at 390 px in a browser iframe. Live GitHub deployment, DNS, HTTPS and email are not configured by this package.
