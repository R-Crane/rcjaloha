# Résumé — rcjaloha.com

A static single-page résumé site (plain HTML/CSS/JS, no build step)
styled as a dark terminal window — dense with real content, but sparse
in layout: one scroll, one column, generous whitespace between sections.

## Before you push: edit your content

Most content lives directly in `index.html` since it's résumé copy,
not data. Search for `TODO` comments — those mark spots I didn't have
a confirmed detail for:

- Exact dates and 1-2 bullets each for the Apple and Everi Holdings roles
- Exact GitHub repo URLs for DeskHub / OpsPulse / CardTracker (currently
  linked to your profile as a placeholder)
- A live URL for OpsPulse

`script.js` has one editable value at the top, marked `EDIT ME`: your
LinkedIn URL (the `--linkedin` flag hides itself automatically if left
blank). The email used throughout is `rcranejio@gmail.com`, pulled from
your public GitHub profile — update it in `index.html` if that's changed.

## 1. Push this to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/R-Crane/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-REPO-NAME` with whatever you name the repo (e.g. `portfolio`
or `rcjaloha`). If you want it at the root of `github.com/R-Crane`, you'd
instead name the repo exactly `R-Crane` — but a separate repo like
`portfolio` is usually cleaner and works just as well with a custom domain.

## 2. Turn on GitHub Pages

1. On GitHub, go to your new repo → **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` / `root`, then **Save**.
4. GitHub will build the site at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   within a minute or two — confirm it loads before moving on.

## 3. Point rcjaloha.com at it

The `CNAME` file in this repo already tells GitHub Pages to expect
`rcjaloha.com` as the custom domain. You still need to add DNS records
with whoever you registered the domain through (Namecheap, GoDaddy,
Cloudflare, etc.):

**If you're using the apex domain (`rcjaloha.com`):**
Add four `A` records at the root (`@`) pointing to GitHub's Pages IPs:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**If you're using `www.rcjaloha.com` instead:**
Add a `CNAME` record for `www` pointing to `YOUR-USERNAME.github.io`.

You can also do both — apex `A` records plus a `www` `CNAME` — and GitHub
will redirect one to the other depending which you set as canonical in
Settings → Pages.

DNS changes can take anywhere from a few minutes to ~24 hours to propagate.
Once it resolves, go back to **Settings → Pages** on GitHub and check
**Enforce HTTPS** so the certificate gets issued for the custom domain.

## Structure

```
index.html    — all résumé content + structure
styles.css    — design tokens + layout (dark terminal theme)
script.js     — hero typing effect + LinkedIn toggle + footer year
CNAME         — tells GitHub Pages the custom domain
```

No build tools, no dependencies — just static files, so this deploys
the same way on GitHub Pages, Vercel, Netlify, or anywhere else if you
ever want to move it.
