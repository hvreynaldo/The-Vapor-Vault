# Implementation Plan: The Vapor Vault (Beaumont, TX)

> Living plan adapted from `../Eureka-Smoke-Shop/IMPLEMENTATION-PLAN-Eureka-Smoke-Shop.md` for a newer smoke shop with a smaller product range and an existing V0 hero-video test.
>
> Shared production references: `../../MASTER-PLAN.md` (Drone Style) and `../CHARACTER-IMPLEMENTATION-PLAN.md` (brand mascot).
>
> Current project references: `CHARACTER-BRIEF-The-Vapor-Vault.md`, `CROSS-PLATFORM-WORKFLOW.md`, `references/V0.mp4`, and `prompts/hero-video/01-vault-world-to-real-world-v01.md`.

---

## TL;DR

1. **The site should be smaller than Eureka, but not feel cheaper.** The product catalog is intentionally compact. The value comes from Volt, the vault-world portal, the real storefront, and a clear path to visit the store.
2. **V0 proves the concept, not the implementation.** `references/V0.mp4` is a 10.1-second, 1280x720, 24 fps H.264 video with an AAC track. It shows the logo becoming a physical vault, reveals Volt, opens a portal, and lands at the real storefront. There is no site source, component, route, or package configuration in this repository yet.
3. **Recommended build:** one static, premium, cinematic landing page. Use HTML/CSS/JavaScript with Scroll Craft only for the authored scroll moments. Do not introduce a SPA or CMS for v1.
4. **Recommended catalog scope:** 3 to 4 owner-confirmed categories, not a six-category grid and not live inventory. No prices, stock promises, or flavor-led promotion in v1.
5. **Because the store is new, do not invent maturity.** Replace Eureka's review-heavy section with a short “New in Beaumont” block, real store photography, owner-approved opening copy, hours, address, and directions.
6. **The memorable moment:** scrolling turns the vault mechanism, Volt walks through the portal, and the fantasy world resolves into the real Beaumont store.
7. **Launch blockers:** official hours, opening message, product categories, media rights, desktop/mobile hero approval, primary CTA, and owner/legal review of regulated-product content.

---

## 0. Documentation discovery and implementation rules

### Sources used

| Source | What it establishes |
|---|---|
| `../Eureka-Smoke-Shop/IMPLEMENTATION-PLAN-Eureka-Smoke-Shop.md:100-117` | Proven one-page order: age gate, cinematic hero, entrance, interior, products, character, proof, visit, footer |
| `../Eureka-Smoke-Shop/IMPLEMENTATION-PLAN-Eureka-Smoke-Shop.md:121-162` | Media production, real-store capture, product-photo, static-site, and QA patterns |
| `../Eureka-Smoke-Shop/IMPLEMENTATION-PLAN-Eureka-Smoke-Shop.md:166-183` | Phase structure, compliance checks, rights checks, and the rule that the real store must remain recognizable |
| `../../MASTER-PLAN.md` sections 3-4 | Static HTML/CSS/JS default, Standard vs Premium delivery, ffmpeg output, responsive QA, and Vercel deployment |
| `CHARACTER-BRIEF-The-Vapor-Vault.md:7-20` | Verified business identity and the Volt concept |
| `CHARACTER-BRIEF-The-Vapor-Vault.md:24-39` | Volt's appearance, adult tone, and no-product/no-smoking rules |
| `CROSS-PLATFORM-WORKFLOW.md:9-30` | Approved master references and character-consistency workflow |
| `prompts/hero-video/01-vault-world-to-real-world-v01.md:5-21` | Hero purpose, 16:9 setup, duration, and reference order |
| `prompts/hero-video/01-vault-world-to-real-world-v01.md:28-40` | Exact V0 story beats and final storefront continuity target |
| `prompts/hero-video/01-vault-world-to-real-world-v01.md:53-61` | Hero visual QA checklist |

### Allowed implementation surface

- Static semantic HTML, token-driven CSS, and page-local JavaScript.
- Scroll Craft's documented `data-sc-*` attributes for `scrub`, `pin`, `pan`, `reveal`, `parallax`, and `flow` behaviors.
- Keep the Scroll Craft engine unmodified. Project-specific behavior belongs in page-local CSS/JS.
- `ffmpeg` for silent web encodes, posters, and optional scrub-ready media.
- `playwright-cli` plus the Scroll Craft harness for visual and interaction QA.
- Vercel or equivalent static hosting.
- Magnific/Higgsfield only for media work after the exact workflow and account access are re-verified.

### Anti-pattern guards

- No Next.js, React router, database, product API, or CMS unless the owner adds a real dynamic requirement.
- No invented platform methods or outdated model/workflow names. Re-check the provider before media generation.
- No third-party paid generation or KIE.ai upload without explicit authorization.
- No AI-generated product photography. Products shown must be real inventory.
- No publishing Google Maps or Instagram media without ownership or permission.
- No LCP that waits for a video, no audio in the autoplay hero, and no desktop-only center crop presented as a mobile design.
- No fake reviews, fake years in business, fake product counts, or unverified hours.

---

## 1. Business facts and positioning

| Field | Current value |
|---|---|
| Business | **The Vapor Vault** |
| Category | Smoke shop |
| Address | **6080 Muela Creek Dr Unit 1, Beaumont, TX 77706** |
| Phone | **(409) 225-5827** |
| Current state | New store with a smaller product selection |
| Existing visual identity | Light-gray storefront, black signage, circular vault-and-cloud logo, cyan/blue with a restrained pink accent |
| Interior | Gray/black retail space, illuminated cases, white hexagonal ceiling lights |
| Social reference | Instagram handle observed in captured source: `@thevaporvault409` (owner must confirm as official) |
| Hours | `[CONFIRM WITH OWNER]` |
| Opening date/message | `[CONFIRM WITH OWNER]` |
| Website/domain | `[CONFIRM WITH OWNER]` |

### Positioning for a new store

The site should install one belief:

> The Vapor Vault is a real, premium, adult-focused Beaumont shop worth visiting now.

The primary conversion is a store visit, not an online product sale. Recommended CTA priority:

1. **Get Directions** as the primary CTA.
2. **Call the Store** as the secondary CTA.
3. Instagram as supporting proof and a channel for new arrivals.

If the owner prefers calls or Instagram DMs over directions, choose one primary intent and use the same label everywhere.

---

## 2. Current asset inventory

| Use | Asset | Current status |
|---|---|---|
| Hero concept | `references/V0.mp4` | Strong concept test. 10.1s, 1280x720, 24 fps, H.264, AAC. Desktop only and not final web delivery |
| Exact brand | `references/google-maps/logo-crop-reference.png` | Good visual reference. Obtain vector/original before launch |
| Real exterior | `references/google-maps/storefront-reference.png` | Useful prototype reference. Obtain owner original or reshoot |
| Real interior | `references/google-maps/interior-reference-01.png` | Prototype reference, 1280x577 |
| Real interior | `references/google-maps/interior-reference-02.png` | Prototype reference, 1280x577 |
| Fantasy world | `references/creative/floating-steampunk-city-reference.png` | Style/scale reference only, low resolution |
| Volt master | `generated/Volt-character-sheet-v1.png` | Approved four-view identity source, 2048x1152 |
| Volt key art | `generated/Volt-hero-3quarter-studio-v1.png` | High-resolution still, 1728x2304 |
| Volt web cutout | `generated/Volt-hero-3quarter-transparent-v1.png` | High-resolution RGBA cutout, 1728x2304 |
| Product references | `references/Products/` | Raw Instagram-derived set. Includes product posts and non-product/profile imagery. Rights and relevance are not yet cleared |
| Hero specification | `prompts/hero-video/01-vault-world-to-real-world-v01.md` | Full story, constraints, continuity target, and QA |
| Character workflow | `CROSS-PLATFORM-WORKFLOW.md` | Master-reference and consistency rules |

### Missing production assets

- Vector or transparent master logo.
- Current storefront photos: centered, both 45-degree corners, day and dusk, lights on.
- Door-entry clip and a stable left-to-right interior pan.
- Clean wide interior photos without identifiable customers.
- One clean photo for each of the 3 to 4 featured categories.
- Confirmed hours, opening copy, category names, social links, domain, and CTA.
- Owner-supplied or owner-authorized source media.
- Purpose-composed 9:16 mobile hero.

---

## 3. Creative direction

### Visual world

The brand has two connected states:

1. **The Vault World:** graphite, gunmetal, deep navy, electric cyan, controlled mechanics, mist, circular geometry.
2. **The Real Store:** light-gray facade, black signage, gray/black interior, bright white hexagonal ceiling lights, illuminated cases.

The portal is the bridge. The site should begin mysterious and impossible, then become recognizable and useful.

Suggested design tokens, pending logo master:

```css
--canvas:       #080B10;
--surface:      #111722;
--surface-2:    #1B2330;
--ink:          #F4F8FB;
--ink-soft:     #A8B5C2;
--vault-cyan:   #00C8FF;
--vault-blue:   #1677FF;
--vault-pink:   #FF3EA5;
--store-gray:   #D8DBDF;
```

Use cyan as the main interactive accent. Pink is a rare brand highlight, not a second equal accent. Avoid generic violet-to-blue AI gradients and broad outer glows.

### Typography

- Display: a geometric or extended sans with mechanical confidence, owner-approved and properly licensed.
- Body: Geist, Outfit, or another clear sans, not a third decorative family.
- Keep the first-viewport headline to two lines and the supporting line under 20 words.
- All brand and product text must be real HTML. Do not bake copy into generated imagery.

### Volt

Volt is an adult black-panther guardian of the store, not a vape mascot. Follow `CHARACTER-BRIEF-The-Vapor-Vault.md:24-39` exactly:

- charcoal-black fur, cyan markings, electric-blue eyes;
- graphite techwear, silver vault pendant, one restrained pink detail;
- calm, sophisticated, adult presence;
- never holds, uses, or recommends a product;
- no smoke from mouth or nose;
- energy trails are light, not consumption smoke;
- never frame Volt beside candy/fruit flavor promotion.

---

## 4. Experience grammar, journey, and scroll score

### Recommended grammar

Use **Filmic one-shot** because the brand's central argument is one linear transformation: emblem, vault world, Volt, portal, real storefront, inside the store, visit. The existing V0 was deliberately authored as one continuous shot. The other page grammars lose for specific reasons:

- Continuous world would require a seamless worldflight across the entire page, including interior and products. That media does not exist and would add unnecessary production risk.
- Gallery/catalog overweights a small inventory and weakens the brand story.
- Rhythmic cutlist is too youth-coded and conflicts with the controlled adult tone.
- Chaptered editorial, live surface, split stage, and typographic poster do not match a place-based retail journey.

Use only one scrub act. The rest of the page should alternate reveal, parallax, pan/native swipe, and natural flow so the site does not become one long video.

### Visitor journey and feeling curve

| Beat | Visitor learns | Intended feeling | Screen cause | Device |
|---|---|---|---|---|
| 1. Recognition | This is The Vapor Vault | Curiosity | Exact logo inside a physical vault mechanism | Scrub + semantic hero copy |
| 2. Guardian | Volt gives the brand a distinct identity | Awe | World opens and Volt crosses toward the portal | Same scrub act, restrained depth overlays |
| 3. Threshold | The fantasy connects to a real Beaumont store | Recognition and surprise | Portal resolves into the real storefront | Hero peak, iris reveal inside the authored video |
| 4. Inside | The store is real, clean, and intentionally designed | Confidence | Real interior images and a hex-light line treatment | Parallax/reveal, then flow |
| 5. Selection | The shop has a focused range | Clarity | 3 to 4 real category objects with factual labels | Pan on desktop, native swipe or grid on mobile |
| 6. New in Beaumont | The store is new and ready to visit | Warmth | Owner-approved opening message plus real place details | Natural flow |
| 7. Arrival | The next action is obvious | Intent | Address, hours, directions, call, and final Volt/vault lockup | Resolved close that holds |

### Peak

The portal revealing the recognizable storefront is the single peak. It receives the best media, the longest hero hold, and the quietest moment directly before it.

Tell-someone sentence:

> It is the site where scrolling turns the vault mechanism, Volt walks through a portal, and it lands at the real store.

### Signature move: the Vault Dial

A thin circular dial is integrated into the hero and then becomes a compact progress/navigation control. It rotates as the visitor advances and locks at three meaningful states: **World**, **Store**, **Visit**. At the final lock, the dial becomes the frame around the **Get Directions** action.

Requirements:

- Page-local SVG/CSS/JS only. Do not edit the shared engine.
- Must remain keyboard operable if clickable.
- Reduced-motion mode shows the three states without rotation.
- It is navigation and progress, not decorative chrome.

### Hero layer contract

| Plane | Asset | Motion | Rule |
|---|---|---|---|
| Far | V0/final hero video | Scroll-scrub target | Complete poster remains visible until a decoded frame paints |
| Mid | Portal/vault geometry tied to the scene | Minimal scale/translation | Do not obscure the logo, Volt, or storefront |
| Subject | Volt, currently baked into V0 | Authored video motion | Character identity must not drift |
| Near | Sparse mechanical rim fragments | Slightly stronger restrained movement | Frame the scene; never cover primary CTA |
| Atmosphere | Fine mist/grain/light specks | Slow independent opacity/translation | No smoke-from-product reading and no washed-out contrast |
| Copy/control | Real HTML headline, CTA, age notice, Vault Dial | Stable or staged | Readable on the first frame and throughout the bright storefront ending |

---

## 5. Page architecture

One static page, no SPA, in this order:

| # | Section | Behavior | Content/assets |
|---|---|---|---|
| 0 | **21+ entry notice** | Accessible dialog or gate before regulated content. Remember the choice locally; do not trap keyboard focus after acceptance | Logo, concise 21+ copy |
| 1 | **Hero: Enter the Vault** | V0/final clip scrubbed once through scroll, with a poster-first load and semantic headline/CTA | `references/V0.mp4` for prototype; final desktop/mobile encodes for launch |
| 2 | **Inside the Vault** | Hero settles on storefront, then a clean circular reveal moves to the real interior. Hex-ceiling linework draws once | Real storefront and the two interior references, later replaced by owner media |
| 3 | **Focused Selection** | 3 to 4 factual category objects. Desktop lateral pan only if measured overflow is meaningful; mobile uses native swipe or a 2-column grid | Owner-confirmed categories and real product/category photos |
| 4 | **Meet Volt** | Quiet brand interlude using the transparent Volt pose and a short sentence about the guardian concept | `generated/Volt-hero-3quarter-transparent-v1.png` |
| 5 | **New in Beaumont** | Natural-flow block. Opening statement, what the shop prioritizes, and optional owner message | Owner-approved copy. No invented legacy, counts, or reviews |
| 6 | **Visit the Vault** | Final resolved stage with address, confirmed hours, directions, call, and Instagram. Vault Dial locks around primary CTA | Verified business data and map/directions link |
| 7 | Footer | 21+ notice, applicable CBD/kratom disclaimers, social, privacy/cookie note if analytics are added | Owner/legal-approved text |

### What is intentionally removed from Eureka

- No six-category product grid.
- No review carousel unless real, permission-cleared reviews exist by launch.
- No claim of massive inventory.
- No “serving Beaumont for years” language.
- No 7-OH, CBD, kratom, or other category in navigation until the owner confirms it and legal review approves how it is described.
- No e-commerce, live stock, prices, flavors, or checkout in v1.

---

## 6. Responsive and performance strategy

### Desktop

- 16:9 final hero master, ideally 1920x1080 source.
- Hero scrub span target: approximately 2.4 to 3 viewport heights, tuned after real scroll testing.
- Keep the headline visible on the landing frame. Do not fade it in from zero.
- Text contrast must be checked against both the dark vault and bright storefront portions.

### Mobile

- Produce a separate 9:16 composition. A center crop is acceptable only if Volt, the logo, portal, and storefront sign all survive the crop.
- Shorten the hero scroll distance and reduce overlay layers.
- Recompose headline, Volt, portal, and dial independently for 390x844 and 360x640 viewports.
- Product range becomes native swipe or a compact grid, never an unreachable transformed rail.

### Reduced motion and failure states

- Use a complete poster composition with headline, CTA, and store identity.
- Remove extra pinned scroll space when motion is reduced.
- Show all category items in normal document flow.
- If video fails or is blocked, the poster and real copy still provide a complete first viewport.
- The age notice, navigation, call link, directions link, and address must work without scroll animation.

### Media outputs

Final deliverables should include:

- `hero-desktop.mp4` and `hero-desktop.webm`, silent;
- `hero-mobile.mp4` and `hero-mobile.webm`, silent;
- `hero-poster-desktop.webp` and `hero-poster-mobile.webp`;
- original approved source clip retained outside the web bundle;
- optional frame sequence only if video seeking does not meet device QA.

Target budgets:

- Desktop hero package: preferably under 8 to 12 MB.
- Mobile hero package: materially smaller than desktop.
- Poster is the LCP candidate; video is progressive enhancement.

---

## 7. Implementation phases

### Phase 0: brief, business facts, and creative authority

**What to implement**

- Create `BRIEF.md` before generating or coding.
- Record owner answers for vibe, references, journey, energy curve, remembered moment, signature idea, aesthetic range, one-world vs distinct-scenes preference, and owned assets.
- Confirm the single primary CTA and 3 to 4 featured categories.
- Record which media is owner-owned, owner-approved, prototype-only, or prohibited.

**Documentation references**

- Copy the business facts from `CHARACTER-BRIEF-The-Vapor-Vault.md:7-12`.
- Copy Volt's hard constraints from `CHARACTER-BRIEF-The-Vapor-Vault.md:32-39`.
- Use the intake pattern from `../../CLIENT-INTAKE-QUESTIONNAIRE.md` if present.

**Verification checklist**

- [ ] Every unknown in section 12 is answered or explicitly deferred.
- [ ] One primary CTA is chosen.
- [ ] Exactly 3 to 4 launch categories are named.
- [ ] Rights status is recorded for every launch asset.
- [ ] The owner approves the feeling curve, peak, and desktop/mobile direction.

**Anti-pattern guards**

- Do not turn assumptions into owner quotes.
- Do not start generation or final code before ownership and creative authority are clear.
- Do not invent product categories from filenames or scraped posts.

### Phase 1: V0 prototype audit and hero decision

**What to implement**

- Treat `references/V0.mp4` as the current concept test.
- Review the sequence at 00:00 logo, 00:01 vault mechanism, 00:03 Volt reveal, 00:05 walk/portal setup, 00:06 portal crossing, and 00:08 storefront landing.
- Decide whether V0 becomes a temporary loop, a scrubbed prototype, or is replaced by a production render.
- Create a revision list for logo fidelity, Volt identity, grounded walk, portal geometry, real-store accuracy, stable final frames, and mobile composition.

**Documentation references**

- Evaluate against `prompts/hero-video/01-vault-world-to-real-world-v01.md:53-61`.
- Preserve the continuity target in `prompts/hero-video/01-vault-world-to-real-world-v01.md:49-51`.

**Verification checklist**

- [ ] First frame is recognizably The Vapor Vault.
- [ ] Volt matches the approved sheet.
- [ ] Portal reads as a circular mechanical vault plus clean energy.
- [ ] Storefront is recognizable and not invented.
- [ ] Final 12 to 15 frames can transition into the next section.
- [ ] Audio strategy is explicit; web autoplay output will be silent.
- [ ] A 9:16 production approach is approved.

**Anti-pattern guards**

- Do not call V0 a coded hero section.
- Do not ship the current AAC stream in the autoplay asset.
- Do not create the mobile version only by blind center crop.

### Phase 2: owner intake and real asset capture

**What to implement**

- Capture the real storefront, entrance, interior, counter, hex ceiling, brand details, and 3 to 4 category photos.
- Film the Drone Style five-shot sequence, especially the door entry and slow left-to-right interior pan.
- Obtain the logo master and confirm opening copy, hours, categories, social links, and domain.

**Documentation references**

- Follow the real-store capture principle from `../Eureka-Smoke-Shop/IMPLEMENTATION-PLAN-Eureka-Smoke-Shop.md:125-147`.
- Follow `../../FILMING-SOP-CHECKLIST.md` for the shot sequence if present.

**Verification checklist**

- [ ] Store sign and entrance are readable in both landscape and portrait framing.
- [ ] No identifiable customer is included without permission.
- [ ] Each featured category has at least one accurate, clean image.
- [ ] Product names/packaging are legible only where owner/legal review permits.
- [ ] Originals are backed up and separated from web derivatives.

**Anti-pattern guards**

- Do not generate replacement products.
- Do not treat Google Maps or Instagram downloads as publication-cleared.
- Do not film product flavors as candy-like hero imagery.

### Phase 3: production media package

**What to implement**

- Produce the approved 16:9 and 9:16 hero masters.
- Reuse the same Volt master sheet, nearest pose, prompt master, and rules for every generation.
- Grade real exterior/interior assets into one coherent cool graphite/cyan world without falsifying the store.
- Export silent MP4/WebM variants and poster frames.

**Documentation references**

- Copy the reference order from `prompts/hero-video/01-vault-world-to-real-world-v01.md:15-21`.
- Copy character-consistency inputs from `CROSS-PLATFORM-WORKFLOW.md:23-30`.
- Follow the output recipes in `../../MASTER-PLAN.md` section 4.2, rechecking installed codec/tool support first.

**Verification checklist**

- [ ] Desktop and mobile are purpose-composed.
- [ ] Volt's face, outfit, markings, glasses, pendant, and proportions remain stable.
- [ ] No product use, consumption smoke, youth-coded pose, or flavor-led framing.
- [ ] Store architecture and signage match the real location.
- [ ] Web exports have no audio track.
- [ ] Poster and first video frame align without a flash or jump.
- [ ] File sizes meet section 6 budgets.

**Anti-pattern guards**

- Do not upload brand assets to a new paid provider without authorization.
- Do not invent a provider API or assume an old model name still exists.
- Do not overuse glow, fire, lightning, or dirty smoke.

### Phase 4: static site foundation and content model

**What to implement**

- Create `site/` with semantic `index.html`, token-driven CSS, page-local JS, optimized assets, and test output folders.
- Copy the Scroll Craft engine without modifying it if Premium scrub is approved.
- Implement a small hand-edited content object or HTML source for categories, hours, phone, address, and links. Do not create a database.
- Build the page in the exact order defined in section 5.

Suggested structure:

```text
site/
  index.html
  css/site.css
  js/site.js
  js/scrollcraft.js
  css/scrollcraft.css
  assets/hero/
  assets/interior/
  assets/products/
  assets/character/
  assets/posters/
  lab/shots/
  lab/mobile/
  lab/reduced/
```

**Documentation references**

- Use the static no-SPA precedent from `../Eureka-Smoke-Shop/IMPLEMENTATION-PLAN-Eureka-Smoke-Shop.md:100-117`.
- Use the documented Scroll Craft `scrub`, `reveal`, `parallax`, `pan`, and `flow` patterns. Do not invent attributes.

**Verification checklist**

- [ ] Semantic heading order and real links.
- [ ] Age notice is accessible and does not block accepted users repeatedly in one session.
- [ ] Poster renders before the video becomes ready.
- [ ] Phone, directions, and Instagram links use verified destinations.
- [ ] No JavaScript still leaves business name, address, phone, categories, and CTA readable.
- [ ] No horizontal overflow at 360px.

**Anti-pattern guards**

- Do not generate the DOM from one giant config object.
- Do not edit the shared Scroll Craft engine.
- Do not add a framework only for presentation.
- Do not create identical icon-card grids or fake stats.

### Phase 5: cinematic interactions and responsive composition

**What to implement**

- Connect the hero to one scrub act with a complete poster fallback.
- Implement the Vault Dial as page-local behavior.
- Implement the interior reveal, restrained hex-light drawing, category range, and final resolved CTA.
- Art-direct desktop, tablet, phone, compact phone, and reduced-motion states separately.

**Documentation references**

- Follow Scroll Craft's documented cue forms, especially a greet cue on the hero and a holding final cue.
- Follow the layer contract in section 4 and the mobile rules in section 6.

**Verification checklist**

- [ ] Hero copy is visible before the first scroll.
- [ ] The clip advances through its full visible life without frozen entry/exit frames.
- [ ] Portal/storefront peak receives the most visual emphasis and scroll room.
- [ ] Category pan has at least half a viewport of measured overflow or falls back to a normal grid.
- [ ] Vault Dial works by keyboard and has a reduced-motion state.
- [ ] Final CTA remains present at the bottom instead of fading away.

**Anti-pattern guards**

- No more than one scrub act in v1.
- No same motion family twice in a row.
- No empty pinned stages, scroll cue, section counters, or decorative custom cursor.
- No continuous animation of layout properties such as `top`, `left`, `width`, or `height`.

### Phase 6: compliance, content, and launch readiness

**What to implement**

- Owner/legal review of all categories, claims, mascot placement, age language, disclaimers, and outbound links.
- Remove any unapproved product/category, review, person, brand image, or claim.
- Finalize privacy/analytics language only if analytics are enabled.

**Documentation references**

- FDA states that tobacco products, including e-cigarettes, cannot be sold to anyone under 21 and monitors retail websites: <https://www.fda.gov/tobacco-products/compliance-enforcement-training/retail-sales-tobacco-products>.
- Texas Health and Safety Code section 161.0876 addresses e-cigarette product containers using youth-oriented cartoon, food, and similar imagery: <https://statutes.capitol.texas.gov/Docs/HS/pdf/HS.161.pdf>.
- Keep Volt within `CHARACTER-BRIEF-The-Vapor-Vault.md:32-39`.

**Verification checklist**

- [ ] Owner/legal reviewer signs off on launch categories and copy.
- [ ] Volt never appears to endorse, hold, or use a regulated product.
- [ ] No health or therapeutic claims for CBD, kratom, or any other product.
- [ ] No online checkout in v1.
- [ ] All published photos have documented rights.
- [ ] Age notice is present, while recognizing that a simple gate is not a substitute for sales-law compliance.

**Anti-pattern guards**

- Do not present this plan as legal advice.
- Do not imply a mascot is compliant merely because it is adult-looking.
- Do not mention 7-OH or another regulated category without current owner/legal approval.

### Phase 7: verification, deployment, and handoff

**What to implement**

- Run Scroll Craft doctor/preflight before using the engine.
- Run the scroll harness at desktop, 390x844 phone, 360x640 compact phone, and reduced motion.
- Run `playwright-cli` for age notice, navigation, phone, directions, category interaction, keyboard traversal, no-JS content, and overflow.
- Test the actual deployment root, not only a local server.
- Perform a real-device check on at least one iPhone and one Android phone if available.

**Documentation references**

- Follow `~/.moltbot/workspace/notes/scroll-craft-review.md` for the experimental-engine risks and retest criteria.
- Follow the QA precedent at `../Eureka-Smoke-Shop/IMPLEMENTATION-PLAN-Eureka-Smoke-Shop.md:157-162`.

**Verification checklist**

- [ ] No console errors, failed requests, broken media, or missing fonts.
- [ ] LCP uses the poster and does not wait for the video.
- [ ] Text contrast passes over both dark vault and bright storefront frames.
- [ ] No dead scroll, unreachable categories, or cue that never becomes fully readable.
- [ ] Keyboard focus order matches reading order.
- [ ] Reduced-motion page is complete, shorter, and usable.
- [ ] Real iPhone decoding, autoplay policy, Low Power Mode, and touch behavior are recorded as passed or explicitly unverified.
- [ ] Final package excludes keys, scraped source dumps, private submissions, and unused generation assets.

**Anti-pattern guards**

- Do not claim mobile video is verified from headless Chrome alone.
- Do not ship an earlier generator output instead of the final reviewed source.
- Do not deploy the domain under the developer's ownership; keep it in the owner's account.

---

## 8. Phase summary and deliverables

| Phase | Depends on | Deliverable | Approximate effort after inputs |
|---|---|---|---|
| F0: Brief and facts | Owner access | Approved `BRIEF.md`, intake, rights matrix, categories, CTA | 0.5 day |
| F1: V0 audit | Current assets | Hero approval and revision list | 0.5 day |
| F2: Capture | Owner/store access | Production-ready exterior, interior, and category pack | 0.5 to 1 day including visit |
| F3: Media | F0-F2 | Desktop/mobile hero, posters, optimized interiors/products | 2 to 4 days depending on generations |
| F4: Site foundation | F0, usable posters | Complete static page with real content | 2 to 3 days |
| F5: Motion/responsive | F3-F4 | Cinematic desktop/mobile/reduced-motion preview | 1 to 2 days |
| F6: Compliance/content | Owner/legal review | Signed-off launch copy and asset set | Owner-dependent |
| F7: QA/launch | F3-F6 | Production deployment and handoff package | 1 to 2 days |

Recommended calendar: **7 to 12 working days after owner inputs and production assets are available**, excluding provider queue time and owner/legal review.

---

## 9. Acceptance criteria

The project is complete when:

- the first viewport identifies The Vapor Vault immediately;
- the portal resolves to the real storefront, not a generic building;
- desktop and mobile have separate approved compositions;
- all launch images are owned or permission-cleared;
- only 3 to 4 real, owner-confirmed categories are shown;
- no fake reviews, history, inventory counts, prices, or availability claims appear;
- Volt remains an adult store-level character with no product use or youth-directed product framing;
- the primary CTA is consistent and works;
- the page remains complete with reduced motion, failed video, and JavaScript disabled;
- desktop, compact phone, keyboard, and real-device QA are documented;
- owner/legal review is complete before public launch.

---

## 10. Recommended commercial scope

The smaller catalog reduces content production, but the cinematic hero remains the expensive part.

| Package | Suggested range | Includes |
|---|---|---|
| **Lean launch: Standard + Volt** | **$1,800 to $2,800** | Static one-page site, V0/final hero as muted loop, interior, 3 to 4 categories, Volt still, visit section, one revision round |
| **Recommended: Premium + Volt** | **$2,800 to $4,800** | Scroll-controlled hero, separate mobile composition, Vault Dial signature move, interior transition, category interaction, performance and motion QA, two revision rounds |
| **Reusable Volt/content retainer** | **+$150 to $300/month** | Hours/category updates and 1 to 2 approved Volt/new-arrival content pieces per month |

Do not discount the Premium package as if “fewer products” means less hero work. The correct saving is a smaller product section and less content maintenance.

---

## 11. Owner questions

- [ ] What is the official opening date, and should the site say “Now Open” or “New in Beaumont”?
- [ ] What are the exact current hours?
- [ ] Which 3 to 4 categories should launch, in priority order?
- [ ] Are CBD, kratom, hookah, glass, or 7-OH-related items sold, and which may be mentioned publicly?
- [ ] Is the main action **Get Directions**, **Call**, or **Message on Instagram**?
- [ ] Is `@thevaporvault409` the official account?
- [ ] Do you have the logo as SVG, PDF, AI, or high-resolution transparent PNG?
- [ ] Do you own or have permission to publish the storefront, interior, Instagram, and product photos?
- [ ] Do you approve Volt as a store mascot under the no-product/no-smoking rules?
- [ ] Should V0 play once, loop, or respond to scroll?
- [ ] Do you want any audio by user choice? The default recommendation is no hero audio.
- [ ] Is the 9:16 mobile version approved as a separate composition and potential social reel?
- [ ] Do you have any reviews with permission to publish, or should reviews wait until a later update?
- [ ] Do you want analytics? If yes, who owns the account and privacy notice?
- [ ] What domain should be used, and who will own the registrar account?
- [ ] Who gives final legal/compliance approval for public product and mascot marketing?

---

## 12. Assumptions and open decisions

- The public site will be in English; this implementation plan is in English to match the requested deliverable.
- “Less products” means a focused category showcase, not e-commerce or a live inventory system.
- “New store” means there may be insufficient review/history material for launch.
- V0 is a creative proof-of-concept, not approved final media and not a coded v0.dev/React component.
- The recommended product count is 3 to 4 categories, pending owner confirmation.
- The site uses a static stack unless the owner later requests real dynamic features.
- The Premium implementation uses Scroll Craft only after preflight and remains standalone/static because the installed engine has unresolved SPA lifecycle risk.
- Google Maps and Instagram materials are prototype references until rights are documented.
- Existing Volt master assets are the source of truth for all future Volt media.
- Final compliance language and category visibility require owner/legal approval.
