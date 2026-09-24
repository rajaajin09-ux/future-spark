# Future Spark website — delivery notes

**Update, 24 September 2026 (later).** The site was rebuilt at the team's request as a four-page site modeled on the layout of mindrobotics.com (small mark top-left with two pill buttons, staggered wordmark hero with an illustration bleeding off the right, pill-highlighted statement headlines, full-width photos between sections, cream blob shapes, pill-shaped calls to action, one-line footer), using the team's own photos and no placeholders. Every fact on the site is one the team confirmed; the two unconfirmed activity names were left out rather than guessed. The research, grant-reviewer checklist, citations, fiscal-sponsorship notes and "what to send next" below still apply; the section-by-section audit and placeholder inventory describe the earlier single-page build and are kept for reference.


Built 24 September 2026. Files: `future-spark.html`, `future-spark-one-pager.pdf`, logo SVGs, `screenshots/`. Everything below is in the order the brief asked for.

**One caveat up front.** The sandbox this was built in blocks outbound web access to everything except Google Fonts, web search, and the npm registry. Every reference site, funder page, and study cited below was read through search-result extracts, not opened in a browser. Facts are quoted from those extracts and tied to their URL, and anything I could not see in an extract is marked **not verified**. Before the site goes live, someone with a normal browser should click each citation in the "Why" section once. That is a ten-minute job. If you want the reference-site audit re-run properly (fonts inspected, screenshots taken), open the environment's network access and rerun it; the audit script is ready.

---

## 1. Draft-site diff

| Keeps (already right in the draft) | Fixed in this build |
|---|---|
| Clear three-step model (build, partner, deliver) | Added "how we measure" with a concrete method-to-be and a single survey question |
| The four real numbers, no invented ones | Every number now carries a unit and "as of Sep 2026" |
| 1,000-kit goal with a progress bar | Goal is now a 1,000-cell wall, one cell per kit, with the 301st cell marked as "the next kit" |
| Three segmented asks (schools, sponsors, volunteers) | Each ask now has its own form or payment block, not one mailto |
| Named partners (Andrew's House, Family Promise, Makerspace Central) | Partner rows now carry a letter-of-support slot each |
| Satvik's first-person origin story | Story kept; team list, adult-supervisor slot, and school added |
| — | Cost per kit ($25) everywhere it matters, plus what $250 / $500 / $2,500 / $10,000 buys |
| — | For Funders section: one-screen case, logic model, budget transparency, funding to date, legal status, downloadable one-pager |
| — | Press kit: boilerplate, key facts, logo downloads, photo slots with credits, press-mentions slot left honestly empty |
| — | Legal-status note in footer and funder page; no charitable-status claims anywhere |
| — | Real photos from the team used (kit assembly, build night) with a consent flag |
| — | Forms post to a backend (Formspree slot) with inline confirmation; email kept as fallback |
| — | Evidence section with four cited figures, each tagged primary source |
| — | Print stylesheet that turns For Funders into a one-page PDF |
| — | Sponsor language throughout; the word "donate" does not appear |

---

## 2. Research

### 2a. Reference sites

All rows: fonts and hex values are **not verified** unless stated; observations come from search extracts and prior knowledge of the sites, not from a live fetch in this session.

| Site | Why it made the list | Typography (heading / body) | Color system | Hero pattern | Section order | Signature layout idea | Borrow | Do not borrow |
|---|---|---|---|---|---|---|---|---|
| charity: water (charitywater.org) | The benchmark for turning money into a unit outcome ("$1 = 1,100 liters") | not verified | Yellow primary + blue, positive imagery (brand-guide summaries) | Full-bleed photo/video, one sentence, one button | Who we are → impact numbers → 100% model → stories → give | The 100% model stated on the first screen; donate button never leaves the nav | Number-with-unit impact row; one always-visible primary action; unit economics in plain words | Video hero; campaign mechanics; scale of production |
| GiveDirectly (givedirectly.org) | Evidence-first nonprofit; research page is a core section | not verified | Muted grays with pastel teal and burnt orange (Monterail case-study extract) | Text-led, restrained | What we do → evidence → where money goes → give | "Where your money goes" as a page, not a footnote | Evidence with citations; budget transparency as a first-class section | Multiple donation modals |
| Mid-Ohio Food Collective (mofc.org) | Local Columbus org that converts on a unit equation | not verified | not verified | Photo + "$1 = 2.5 meals" | Get food → give → volunteer → impact | The one-line equation | The equation ("$25 = one kit") | Five competing nav CTAs |
| STEMChests (stemchests.com) | Closest analogue: high-school-founded, hand-assembled 3-in-1 kits for elementary students, itemized counts per site | not verified | not verified | Product-style | Mission → kits → donate → impact counts | Counts listed by recipient ("250 to Title I schools, 150 to Children's National") | Per-site counts once Future Spark can name schools; buy-one-give-one clarity | Shop layout; the org sells kits, Future Spark gives them |
| Girls Who Code (girlswhocode.com) | Youth STEM org with a deliberate design system that modulates voice by audience | Roboto Flex (2023 rebrand, Mojo Supermarket, per It's Nice That / Brand Identity extracts) | Saturated, youthful, pixel-based graphic language | Bold type + color blocks | Programs → impact → partners → give | Audience-modulated voice (partners vs. parents vs. girls) | The idea of writing differently for funders and for kids | Maximal color; it would read as a template on a small org |
| FIRST (firstinspires.org) | Large youth-robotics org; separate Support/Donate pages with impact statements and sponsor tiers | not verified | not verified | Photo + program menu | Programs → ways to give → alumni → volunteer | Sponsor tiers with what each level buys | A distinct funder page with tiers | Mega-nav; enterprise scale |
| Code.org | Single big numbers, plain claims | not verified | not verified | Stat-led | Learn → stats → advocacy → give | Number + unit clarity | Number + unit | Heavy program menus |
| Maker Ed (makered.org) | Maker-education org; "what we run" program clarity | not verified | not verified | Text-led | What we do → programs → resources → give | Program descriptions that say what a partner has to do | Program rows with "what you do" | Stock imagery |
| Obama Foundation (Webby 2025 winner, charitable/non-profit, per winners.webbyawards.com extract) | Editorial long-scroll with restraint | not verified | not verified | Editorial | Chaptered scroll | Chapter markers | Chaptered long scroll with sticky labels | Scale |
| Child Mind Institute (Webby "Best Non-Profit Website" honor, year not confirmed) | Resource-heavy nonprofit that stays findable | not verified | not verified | Search-led | Resources → about → give | Findability | Findable, plain section names | Content volume |

Nonprofit-specific observations (from the extracts): the primary money action stays in the nav on every site listed; impact numbers are presented as a short row of large figures with a unit and, on the better sites, a date or "to date"; legitimacy appears as a named leadership page, an annual report link, and (for US 501(c)(3)s) an EIN in the footer; non-money asks (request a program, volunteer) get their own page or a clearly separate form rather than a shared contact form; proof is program photos of the work itself, partner logos only when real, and press mentions only when real.

Bucket C (transferable non-nonprofit references) could not be selected from the galleries because siteinspire, godly, land-book and awwwards were all blocked. The layout ideas used instead come from print: an instruction sheet's numbered steps (the site spine), a parts list (the kit section), engineering graph paper (the hero and kit backgrounds), and a tally (the goal wall).

### 2b. Grant-reviewer checklist and where each item lives

| # | Reviewers expect | Source | Section on the site |
|---|---|---|---|
| 1 | Proof of charitable status, or a fiscal sponsor's letter and EIN | Candid, "Is your nonprofit grant-ready"; Nationwide Foundation apply page | 06 Funded → Status and accountability (EIN, fiscal sponsor slots); footer legal line |
| 2 | Named fiscal sponsor and how money flows | Columbus Foundation garden-grant eligibility; NNFS "10 questions" | 06 Funded → Status and accountability |
| 3 | Mission alignment with the funder's priorities | Spark the Fire, "What grant reviewers actually look for" | Hero; 06 Funded → Problem / Solution |
| 4 | Problem statement and who is served, with numbers and geography | Battelle Central Ohio STEM RFP 2026 | 04 Opened (evidence); 03 Delivered (programs, who it serves); proof row |
| 5 | Logic model / theory of change | W.K. Kellogg Logic Model Guide | 06 Funded → Program logic model |
| 6 | Measurable goals and an evaluation plan | Battelle RFP; Grantsmanship Center | 05 Counted → How we measure; logic model outcomes column |
| 7 | Budget that matches the narrative | Grant Writing Academy 19-point checklist; Battelle; Nationwide | 06 Funded → Budget transparency; 02 Packed ($25) |
| 8 | Financial transparency (annual income/expense summary) | National Council of Nonprofits | 06 Funded → Funding to date; annual summary slot |
| 9 | Governance: names and affiliations, adult oversight for student groups | Professional Grant Writer readiness audit; Nationwide | 01 Built → The team, Adult oversight |
| 10 | Track record with dates | Candid | Proof row; 05 Counted |
| 11 | Organizational capacity: who does what | Grant Writing Academy | 01 Built; 03 Delivered (what we run) |
| 12 | Partners and letters of support | Battelle RFP (signed letter per collaborator) | 03 Delivered → Partners (letter slot each) |
| 13 | Youth-safety compliance for school work (background checks, insurance) | Columbus City Schools partner MOU | Not on site by design; listed under "send next" |
| 14 | For corporate sponsors: reach and tiered benefits | Donorbox / Funraise sponsorship-packet guides | 06 Funded → What a gift buys; 08 → Sponsor presets |
| 15 | A named person to contact | Professional Grant Writer | 06 Funded → direct contact; 08 → Contact |

Funders worth knowing (from the extracts; award sizes not verified unless quoted): **Battelle Central Ohio STEM Grant** (best mission fit, up to $75,000, 501(c)(3) applicant required, spring deadline, needs signed letters of support from each partner); **Columbus Foundation Neighborhood Partnership Grants** (up to $10,000, resident groups, fiscal agent required); **OSLN STEM Classroom Grants** ($2,500 or $5,000, applied for by a partner teacher, fiscal agent accepted); AEP Foundation, Huntington, PPG are invitation-only relationship plays; Honda requires two years of audited financials; Nationwide excludes K-12 schools and re-granting.

### 2c. Problem citations (as used in section 04)

| Claim on the site | Figure | Source | Type | Verified on a fetched page? |
|---|---|---|---|---|
| Scientists' interest in science took root before middle school | 65% | Maltese & Tai (2010), "Eyeballs in the Fridge," *Int. J. Science Education* 32(5) | Primary | **No.** From prior knowledge of the paper; not seen in an extract this session. Check the abstract before launch. |
| K–3 classrooms average 18 min/day of science vs 89 reading, 57 math; 17% of K–3 teachers teach science most days | 18 / 89 / 57 / 17% | Horizon Research, *Highlights from the 2018 NSSME+* (NSF-funded) | Primary | Seen in three independent extracts; strongest item |
| Middle-school girls who think coding jobs are "not for them," rising by college | 31% → 58% | Microsoft with Kesar (2018), *Closing the STEM Gap* | Primary | Seen in extract (SUU / Campus Technology coverage) |
| Ohio fifth graders proficient in science, 2024–25 | 63.4% | Ohio Dept. of Education & Workforce, state report card 2024–25; WOSU coverage Sep 2026 | Primary | Seen in extract; the same figure for economically disadvantaged students is a placeholder |

Not used but ready if wanted: Tai et al. 2006 (*Science*), 8th-grade science-career expectations predict science degrees (multiplier not verified); Franklin County child poverty 20.1%, ACS 2020–24 via USAFacts (secondary); Afterschool Alliance 2021/2025 on unmet afterschool STEM demand in low-income families (primary); Engineering is Elementary randomized trial, Lachapelle & Cunningham 2020 (primary, no effect size seen).

### 2d. Research synthesis

The best nonprofit sites share five habits: one sentence on the first screen that says what the org does and for whom; a short row of large numbers with units and a date; a single money action that never leaves the nav; a money-to-outcome equation in plain words; and proof that is photographs of the actual work. The ones that also win grants add a leadership page with real names, a "where the money goes" section, and evidence with citations rather than adjectives.

Dated nonprofit sites share the opposite set: a hero slider, four or five competing calls to action, stock photos of hands and seedlings, "Empowering communities" copy that could be on any site, a card grid for everything, and a "Trusted by" logo strip that is half aspiration.

Three sites most directly informed the direction. STEMChests is the closest analogue (teen-founded, hand-assembled kits, counts by recipient) and shows that itemized counts read as honesty. charity: water shows how far a single unit equation ("$25 makes one kit") and a dated number row can carry a small org. GiveDirectly shows that evidence and budget transparency can be first-class sections rather than PDFs in a footer.

The reviewer checklist above (15 items) is the build target: every item maps to a section, and the one that cannot live on a website (youth-safety compliance) is listed under what to send next.

---

## 3. Design direction memo

**The angle: follow one kit.** The whole site is the life of a single kit in the order it happens: 01 Built by hand (who we are), 02 Packed (what's inside, $25), 03 Delivered (how it works, programs, partners), 04 Opened (why, evidence, one story), 05 Counted (impact, measurement, the wall), 06 Funded (the funder page), 07 Shared (press kit), 08 The next kit (request, sponsor, volunteer, contact). The numbers are a true sequence, which is the only reason they are there. A reviewer gets legitimacy in the first three screens (real photo, dated numbers, named founder and team slots); a principal gets "free, no paperwork, one form" by step 03; a parent gets the wall.

**Rejected: The Ledger.** A dated running record of deliveries per site is the most honest interface imaginable, but Future Spark cannot yet supply delivery dates and counts per school. With placeholders it would be a table of blanks, which reads as hollow, not honest. It can be added later as a row under 05 Counted.

**Rejected: Field Notes.** Warm paper, ruled lines, hand texture. It matches "built by hand" but it is now the default look of AI-generated nonprofit pages (cream ground, high-contrast serif, terracotta), and the earlier build in the zip landed exactly there. A funder who has seen twenty of them would not remember it.

**Type.** Bricolage Grotesque (display) with Atkinson Hyperlegible Next (body). Bricolage's slightly irregular, hand-cut letterforms read as made-by-people without being cute; Atkinson Hyperlegible was designed by the Braille Institute for low-vision readers, which suits a site read quickly by teachers and reviewers, and its numerals cannot be confused with each other. Two families, nothing else.

**Palette and token roles.** Paper `#FBFBF9` (ground), paper-2 `#F1F3F6` (tinted sections), ink `#15213B` (headings, navy band), ink-2 `#3B4560` (body), muted `#5E6779` (captions), line `#D8DCE3`, seal red `#C9301C` (the one accent: primary button, the "next kit" cell, the rule under section titles), seal-text `#A32615` (accent as text: eyebrows, step labels), focus `#1A56DB`. The red is the zip seal on the kit bags in the team's own photos. Contrast ratios are in the CSS header.

**Three motion patterns, one easing family.** (1) Reveal on entry, 420 ms fade-up. (2) State changes on buttons, links and the nav border, 160 ms. (3) The signature: the 1,000-cell wall fills its 300 cells row by row over 1,100 ms when it scrolls into view. Reduced-motion turns all three off.

**Mobile.** The sticky step rail becomes an inline label above each section title. The wall drops from 50 to 40 columns (25 rows at 375 px, cells about 7 px). The three ask columns stack; the hero photo moves under the buttons; the logic-model table becomes four labelled stacks. No horizontal scroll at 375.

---

## 4. Logo

Three concepts were rendered and screenshotted (`screenshots/logo-concepts.png`). **A, "bag + spark"** ships: a kit bag with its red zip seal and a spark leaving the corner. Scores out of 5: reads as hands-on STEM 4, works at 32 px 5, works in one color 5, not a template 4. B ("circuit spark") reads as fintech; C (lettermark, spark in the wordmark) says nothing about kits and collapses small. Files: `future-spark-mark.svg`, `future-spark-logo.svg`, `-mono.svg`, `-reversed.svg`, `favicon.svg`; ten-line rationale in `logo-note.md`. **This is a proposal the team should approve.** The gold spark-and-swoosh in the earlier draft site may be an existing logo; if so, use it and delete these.

---

## 5. Audit

### Visual and code tells

| Check | Result |
|---|---|
| Gradients, gradient text, glowing blobs, glassmorphism | None. The only `linear-gradient` draws the 1 px graph-paper grid; the only `backdrop-filter` is the 8 px blur on the sticky nav; the only `box-shadow` is the inset outline on the "next kit" cell. |
| Hero + three icon cards + testimonials + CTA banner rhythm | Absent. Hero → number row → eight numbered steps with asymmetric grids (5/6, 6/5, 5/7, 4-up, table, 3-up). |
| Emoji as icons | None (checked programmatically). |
| Same centered container, identical padding everywhere | Every step uses a rail + content grid; tinted, paper and navy bands alternate by content, not by rota. |
| Inter/Roboto/system headings | Bricolage Grotesque + Atkinson Hyperlegible Next. |
| Rounded-everything with shadows | Radius scale 2 / 6 / 14 px; no card shadows. |
| Stock or AI imagery | Two real team photos; every other image is a labelled placehold.co slot with a shot list in an HTML comment. |
| Generic copy, "Trusted by" strips, sections named Features / Why Choose Us / Our Values | None. Press mentions is an empty slot, not a logo strip. |
| Magic numbers, no tokens | Color, type scale, spacing, radius, easing and durations are custom properties; every component references them. |
| Utility-class soup, dead wrappers, divs as buttons | BEM-ish component classes; zero `div[role=button]`; one `<h1>`; heading order verified with no skips. |
| `href="#"`, missing alt, unlabeled inputs | 0 / 0 / 0 (checked in a headless browser). |
| Random easing and durations | Two curves, three durations; nothing over 600 ms except the wall. |
| No prefers-reduced-motion | Present; verified that reveals render at full opacity and the `js` class is not added under reduced motion. |

### Requirement checklist

- [x] Every visual tell and code tell absent (table above)
- [x] Tokens exist; every color, size and easing references them
- [x] The angle is visible on the first screen (step-numbered spine begins directly under the number row; graph-paper ground) and adapts at 375 px as described
- [x] Sponsor a kit and Request kits reachable from every section (sticky nav on desktop; Menu → both buttons on mobile; repeated in steps 02, 05, 08 and footer)
- [x] Every grant-reviewer checklist item maps to a section (table in 2b)
- [x] No "501(c)(3)", "tax-deductible" or "Donate" language anywhere in the rendered page (grep-verified; the legal-status placeholder says "not currently eligible for a charitable tax deduction", which is a disclaimer, not a claim)
- [x] No invented facts; 80 `[[PLACEHOLDER]]` slots plus one `[[N]]`
- [x] 300 kits, 3 schools, 3 community orgs, $0, three partners, $25/kit, 1,000 goal (flagged for confirmation against the 1,500 note), futuresparks0@gmail.com, Zelle 614-849-6939: all present and correct
- [x] Contrast ratios computed and noted in the CSS header; keyboard: skip link is first tab stop, focus ring 3 px, mobile menu opens with Enter and closes with Escape returning focus to the toggle
- [x] One `<h1>`; heading order has no skips; JSON-LD parses as `Organization`
- [x] For Funders prints to one clean letter page (`future-spark-one-pager.pdf`, verified 1 page)
- [x] Lighthouse (local server, Chromium): desktop performance 100, accessibility 100 after the same fix (97 before), best practices 96, SEO 100; mobile performance 95, accessibility 100, best practices 96, SEO 100 (after fixing one footer-caption contrast finding). LCP 0.6 s desktop / 2.4 s mobile, CLS 0, TBT 0. Best-practices deductions come from placehold.co images being blocked in the sandbox; they will load on a normal connection.

### Body text and measure

Body is 18 px on desktop and 16.1 px at 375 px; the smallest rendered text is 13 px (captions and source tags). Story prose measures 57 characters per line at 1440 px.

---

## 6. Placeholder inventory

Priority: **G** = must-have before applying for grants · **L** = before launch · **N** = nice-to-have.

| Section | Placeholder | What to supply | Priority |
|---|---|---|---|
| Footer, 06 Funded | Legal status line | One sentence: fiscal sponsor's name, or "unincorporated student initiative" | G |
| 06 Funded | EIN / fiscal sponsor / annual summary | The sponsor's EIN and name; a one-page yearly summary of kits, sites, spending | G |
| 01 Built, 06 Funded | Adult supervisor name and role | Teacher, parent or mentor who signs for the group and what they oversee | G |
| 05 Counted | Measurement method | The method you will actually use (see §8); the site's stand-in text stays until then | G |
| 05 Counted, 06 Funded | Students reached | Count, or state that one kit = one student | G |
| 06 Funded, 08 Contact | Named funder contact | Name and role of the person who answers funder email | G |
| 03 Delivered | Partner letter or quote (×3) | One sentence or a PDF letter from each partner | G |
| 03 Delivered | Elementary school names | Once each school agrees to be listed | G |
| 06 Funded | Budget percentages, bulk-cost estimate, total raised | Split of a kit dollar; expected per-kit cost at 1,000; total raised and dates | G |
| 05 Counted | First delivery month/year | Date | G |
| 05 Counted | Goal confirmation (1,000 vs 1,500) | Confirm | G |
| 01 Built | Team member names, roles, schools, bios, photos (×2+) | Only people who agree to be listed | G |
| 01 Built | Satvik's school and grade | Text | L |
| 02 Packed | Activity 1 and 2 names; pencil/eraser; grade band; build time; batch date | Confirm current kit contents (one bag is labelled "Engineering Sail Car Kit") | L |
| 04 Opened | One story + photo + attribution | 80–120 words on one real delivery | L |
| 04 Opened | Ohio science proficiency for economically disadvantaged students | Figure from the report-card download | L |
| 05 Counted | Four delivery photos + captions | Shot list in the HTML comments | L |
| 07 Shared | Photo credits; kit flat-lay; delivery photo | Photographer names; two more photos | L |
| 08 Sponsor | Zelle QR; who receives and reconciles | QR image from the Zelle app; a sentence | L |
| 08 Sponsor | $1,000 = about X classes | Once kits-per-class is known | L |
| 08 Forms, footer | Formspree ID; backend name | Create the form, paste the ID twice | L |
| Everywhere | Current Instagram handle | Text and link | L |
| 03 Delivered | Reply time; third program line (workshops) | Text, or delete the row | L |
| 05 Counted | Kits per school; reporting cadence | Text | L |
| 06 Funded | Outcomes once measured (% yes, repeat-request rate) | Numbers after the first measured round | N |
| 07 Shared | Press mentions | Only real ones | N |
| Head | Founding year; OG image | Year; a 1200×630 photo | N |

**Consent note.** Photos of elementary students require a guardian's signed release. Until releases exist, shoot hands, kits, and the backs of heads. The two photos already in use show high-school team members; confirm they have agreed to appear.

---

## 7. Fiscal sponsorship, in five lines (the biggest unlock for the grant goal)

1. Fiscal sponsorship is when an existing registered charity agrees to take legal and financial responsibility for a project that doesn't have its own charitable status (Candid).
2. Funders and donors give to the sponsor, earmarked for Future Spark; grant checks are made out to the sponsor, which releases the money to the team (Columbus Foundation's own eligibility language).
3. The sponsor keeps a fee, typically 5 to 10 percent (Candid), and in return handles the bank account, receipts, and compliance, so a student team never has to incorporate or file for its own status.
4. Most STEM grants in Ohio (Battelle, Honda, Nationwide, Huntington) require a registered charity as the applicant, and the ones that don't (Columbus Foundation neighborhood grants, OSLN classroom grants) require a fiscal agent anyway, so without one the team can only take personal gifts by Zelle.
5. Realistic options: **HCB by Hack Club** (hackclub.com/fiscal-sponsorship; built for 13-to-18-year-old-led groups, flat 7% on incoming funds, no monthly fee, includes a bank account, cards, a donation page and an EIN letter; best fit); **Community Shares of Mid Ohio** (communityshares.net; Columbus-based, fee unpublished, strongest local name, worth one call); **Social Good Fund** (socialgoodfund.org; $29/month plus 6.5–8%, national). Open Collective Foundation dissolved at the end of 2024 and should not be listed anywhere.

---

## 8. Top five things to send next, ranked by impact on winning grants

1. **Pick a fiscal sponsor and fill in the legal-status line.** Nothing else on the funder page matters until a reviewer can see who receives the check. HCB can be set up in days.
2. **Choose a measurement method and start using it on the next delivery.** Cheapest credible option: the one-question card already written into the site ("Would you want to try engineering again?", before and after), plus the free S-STEM Upper Elementary survey (Friday Institute, NC State, grades 4–5) for a fuller pre/post if a teacher will administer it. For K–3, the Draw-A-Scientist task with the Farland-Smith rubric works without reading.
3. **Real delivery photos with consent, and one true story.** Four shots per the list in the HTML comments; one paragraph about one classroom; releases for any child's face.
4. **Team names, schools, and the adult supervisor.** Reviewers check whether you are real before whether you are good; empty team slots are the most visible gap on the page.
5. **One partner letter of support** (Family Promise or Andrew's House). Battelle requires a signed letter from every collaborator; even one turns the partner list from claims into evidence. Also start the Columbus City Schools Engage partner registration, since school work will eventually require background checks and a certificate of insurance.

---

## 9. Go-live note

1. **Domain:** the site is written for `futurespark.org` (canonical, OG, JSON-LD). Availability could not be checked from this sandbox (registrar lookups were blocked); check it and `futurespark.com` at a registrar, and fall back to `futuresparkohio.org` if taken. Update the four URL references in the `<head>` if the domain changes.
2. **Host:** Netlify or Cloudflare Pages, free tier, no build command, publish directory `/`; `index.html` forwards to `future-spark.html` (or rename the main file to `index.html` and delete the redirect).
3. **Forms:** Formspree free tier (50 submissions/month); create one form, paste its ID into both `action` attributes, then replace the "form backend name" placeholder in the privacy line.
4. **Payments:** Zelle now. Once there is a fiscal sponsor and a bank account, switch to Zeffy (0% platform fee) or Givebutter so sponsors get receipts and can pay by card; both need the sponsor's charitable status to enroll.
5. **After launch:** add the domain to Google Search Console, put the site link in the Instagram bio, and post the boilerplate paragraph from the press kit as the Instagram bio text.

---

## 10. Repo housekeeping

`future-spark-website.zip` is the earlier build this one replaces; it is left in the repo untouched and can be deleted. The two photos and the "Engineering Sail Car Kit" label came from it.
