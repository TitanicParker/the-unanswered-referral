# Independent editorial and accessibility mandate

**Repository:** https://github.com/TitanicParker/the-unanswered-referral  
**Role:** Independent critical reader, information architect, accessibility reviewer and frontend editor.  
**Objective:** Turn the existing source-preserving case library into a professionally navigable, readable, accessible research publication suitable for independent legal, clinical and data-protection examination.

## Two separate authorisations

**A. Independent evaluation:** Read and test the constructed case as a coherent *working argument*, not as an adjudicated finding. Be free to challenge unsupported assertions, identify missing or contrary evidence, and suggest qualifications in a **separate review report**. Do not treat the task as compulsory endorsement or a mandate to rewrite the owner's beliefs.

**B. Presentation and information architecture:** Accept the case's existing documentary and argumentative structure as the **source corpus to preserve**. Redesign the reader, navigation, discovery, layouts and metadata around that corpus. Editing prose for substance requires a proposed change with reason and original passage preserved; it is **not authorised** as part of a presentation-only change.

The principle is **zero substantive text loss**. Reformat, index, label, cross-link and create summaries clearly identified as editorial navigation; never silently truncate, compress, replace, delete or paraphrase source text. Preserve uncertainty, counterevidence, attribution and source provenance.

## Start with the correct central question

The organising analytical threshold is the stipulated **10 July 2017 bedside protest**, evaluated against the clinical state of affairs already known and unresolved at that time. The case connects referral, specialist knowledge, record construction, protest, discharge, later pharmacological and podiatric evidence, and institutional review. The proposed **lost-baseline opportunity** is a testable question, not an established standard-of-care finding. Separate the patient's retrospective testimony about the encounter from contemporaneous hospital records. Do not assume clinical wrongdoing, intentional misrepresentation, a mandatory levodopa test, a specific genetic diagnosis established in 2017, or objective instantaneous corn regrowth.

## Reading corpus (do not lose any writing)

### Primary analytical architecture
- `FIFTY_FOUNDATIONAL_STATEMENTS_OF_THE_CASE.md` — 50 cumulative propositions and governing baseline interaction
- `THE_UNANSWERED_REFERRAL_CANONICAL_WORKING_CASE.md` — quotation-led canonical essay, **currently missing from the supporting reader**
- `THE_UNANSWERED_REFERRAL.md` — case overview
- `THE_SIX_SEQUENCES_AND_FIVE_MECHANISMS.md` — master cross-sequence synthesis
- `SIX_DECISIVE_PROPOSITIONS_HOSPITAL_ANSWER.md` — six hospital propositions and responsive evidential tests
- `WORKING_CASE_THEORY_AND_EVIDENCE_REGISTER.md` — detailed working evidence register

### Deeper analysis and examination
- `THE_25_ESSENTIAL_UNDERSTANDINGS.md`
- `FIFTY_SIX_MATTERS_FOR_EXAMINATION.md`
- `RECIPIENT_AND_KNOWLEDGE_AUDIT.md`
- `EVIDENCE_CROSS_REFERENCE.md`
- `JULY_2017_CLINICAL_RECORD_SOURCE_RECONSTRUCTION.md`
- `THE_POSITIVE_FINDING_AND_THE_PERIPHERAL_HYPOTHESIS.md`
- `CASE_FOR_DELIBERATE_MISREPRESENTATION.md` (explicitly frame as a contested argument, never a finding)
- `THE_CASE_THREE_STATEMENTS_AND_MECHANISM.md`
- `WHEN_INSTITUTIONS_BECOME_THE_AUTHORITY_ON_THEIR_OWN_ERRORS.md`
- `DOCUMENTARY_SOURCE_INDEX.md`
- `REPOSITORY_COMPLETION_PLAN.md`

### Source and interfaces
- `Margaret_Tansey.html` — compiled 40-document collection, not authenticated originals
- `Article_16_Supplementary_Statement_July_2017.pdf` — later signed patient account, not contemporaneous ward note
- `document_05_manuscript.jpg`, `document_06_manuscript.jpg`, `document_07_manuscript.jpg`
- `index.html`, `supporting.html`, `documentary-comparison.html`, `records-mobile.html`, `origami.css`, `origami.js`, `README.md`

Linked outside-repository evidence must remain attributed to the relevant GitHub source repositories. Do not migrate private correspondence or sensitive identifying information into a public repository without a specific privacy review and authorisation.

## Editorial architecture to implement

Build one consistent entrypoint and navigational taxonomy:

1. **Read the case** — concise orientation, exactly what is alleged, what remains uncertain, key chronology, and the foundational fifty.
2. **Test the argument** — six propositions, six sequences/five mechanisms, alternative explanations, what could defeat each proposition, and the canonical quotation-led essay.
3. **Inspect the evidence** — original referral and 2017 layers, manuscript comparison, 2018 dechallenge, GP/podiatry, correspondence, source and recipient audit.
4. **Investigate outstanding questions** — 25 understandings, 56 matters, gaps and prioritised document requests.
5. **Explore deeper essays** — ethical/philosophical studies clearly distinguished from documentary proof.
6. **Browse all documents** — a complete searchable/filterable index of every authored document, with filename and a reliable raw-source link.

Offer routes for a time-limited independent reviewer (e.g., **5-minute orientation**, **30-minute evidential route**, **full record**). These are additive navigational summaries, not substitutes for the complete corpus.

Each document should show a consistent breadcrumb, topic/category, status (primary transcription / testimony / analysis / hypothesis), original filename, source link, local table of contents, previous/next meaningful reading, and an accessible way to expand or collapse sections.

## Accessibility and technical criteria

- WCAG 2.2 AA-oriented implementation: semantic headings, landmarks, keyboard-accessible navigation, persistent visible focus, descriptive links, adequate contrast, proper skip links, responsive widths and touch targets.
- Respect prefers-reduced-motion. Avoid scroll traps and hidden content inaccessible without JavaScript.
- On desktop, stable contents navigation; on phones, compact accessible navigation rather than a giant wall of links.
- Preserve hash anchors and deep links. Make native browser search usable on long or folded documents (provide an all-expanded mode, or a direct source view).
- Loading failures should not strand readers. All documents need reliable direct Markdown links.
- Readable typography and restrained scholarly styling; clean print mode and no intrusive animated elements.
- Citation and record links must work; ensure local assets and case-sensitive filenames resolve correctly from GitHub Pages under the repository path.
- Treat copied clinical transcriptions as **transcriptions**, never certify originals merely because GitHub blob hashes matched.
- Do not accidentally place personal contact details, patient identifiers or full unredacted health data in new pages, metadata, analytics or search indexes; audit existing public content and note risks without destructively changing it.
- Keep dependencies lean; test at minimum desktop/mobile and no-JS fallback.

## Non-destruction QA: hard release gate

Before changing the interface:
1. Inventory every source Markdown/documentary file with path, byte count, Git blob SHA and headings.
2. Save a baseline manifest in the review branch; do not alter source texts as part of a UI-only PR.
3. The PR must show that all original source files and substantive paragraphs remain byte-identical unless individual changes were expressly approved.
4. Compare the new document index against repository tree: **zero missing textual documents**.
5. Check every internal link, navigation target, current-file URL, image and section anchor.
6. Verify all 50 numbered foundational statements, all 56 examination matters and all 40 source-document entries remain discoverable.
7. Document mobile, keyboard, print, and basic accessibility tests, with exceptions and screenshots if possible.
8. Make any substantive correction proposals in `INDEPENDENT_REVIEW_FINDINGS.md` with precise source citations, not by silently editing the original case.

## Deliverables

1. `INDEPENDENT_REVIEW_FINDINGS.md`: strongest propositions, genuine alternative explanations, claim/evidence mismatches, issues requiring expert determination; clearly distinguishes source, testimony and inference.
2. An improved GitHub Pages reader and complete document directory, with all source writing intact and linked.
3. `CONTENT_PRESERVATION_AUDIT.md`: before/after manifest, coverage checklist, link and accessibility tests.
4. A concise reader guide in `README.md` and visible on the website.
5. A pull request against `main`—**not direct wholesale replacements of the corpus**—with explicit explanation and a reviewable diff.

## Definition of success

A sceptical neurologist, independent solicitor, DPC officer or general reader can understand the central thesis, distinguish the evidence from conclusions, find any original wording quickly, inspect competing explanations and locate missing records **without losing a word of the underlying authored corpus**.

This file is a handoff contract for a future independent reviewing/editorial agent. Its creation does not mean that such a review has occurred.
