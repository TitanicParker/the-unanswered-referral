# Presentation-only editorial mandate — preserve every word

**Repository:** https://github.com/TitanicParker/the-unanswered-referral  
**Purpose:** Improve **style, visual design, accessibility, navigability, readability and discoverability** of the existing GitHub website. The case's wording, documentary arguments, sources and conclusions are outside the scope of this mandate.

## Controlling instruction — no editorial intrusion

**Preserve every word of every existing substantive document.** Do not shorten, condense, rewrite, fact-check, reassess, qualify, criticise, reorder passages within source documents, or replace any author's prose. Do not initiate an independent substantive case review. Do not introduce new conclusions, disclaimers or caveats. Do not silently drop text, footnotes, citations, headings, tables, figures, quotations, numbered items or appendices.

The job is to organise and **present** the existing writing with unusual skill, not to edit or interrogate it. The established structure of the case should be accepted as the content basis for this **presentation-only** job. Any broader clinical, legal or factual review would require a separate explicit instruction.

**Changes to original Markdown, original documentary compilation, images and PDF source files are prohibited.** Existing source material remains the single source of truth. Provide additive navigation and styling around it; do not create alternate abridged versions that readers could mistake for complete text.

## Existing assets to incorporate

- `FIFTY_FOUNDATIONAL_STATEMENTS_OF_THE_CASE.md`
- `THE_UNANSWERED_REFERRAL_CANONICAL_WORKING_CASE.md` (currently not offered through `supporting.html`)
- `THE_UNANSWERED_REFERRAL.md`
- `THE_SIX_SEQUENCES_AND_FIVE_MECHANISMS.md`
- `SIX_DECISIVE_PROPOSITIONS_HOSPITAL_ANSWER.md`
- `WORKING_CASE_THEORY_AND_EVIDENCE_REGISTER.md`
- `THE_25_ESSENTIAL_UNDERSTANDINGS.md`
- `FIFTY_SIX_MATTERS_FOR_EXAMINATION.md`
- `RECIPIENT_AND_KNOWLEDGE_AUDIT.md`
- `EVIDENCE_CROSS_REFERENCE.md`
- `JULY_2017_CLINICAL_RECORD_SOURCE_RECONSTRUCTION.md`
- `THE_POSITIVE_FINDING_AND_THE_PERIPHERAL_HYPOTHESIS.md`
- `CASE_FOR_DELIBERATE_MISREPRESENTATION.md`
- `THE_CASE_THREE_STATEMENTS_AND_MECHANISM.md`
- `WHEN_INSTITUTIONS_BECOME_THE_AUTHORITY_ON_THEIR_OWN_ERRORS.md`
- `DOCUMENTARY_SOURCE_INDEX.md`
- `REPOSITORY_COMPLETION_PLAN.md`
- `Margaret_Tansey.html` — full existing 40-document compilation
- `Article_16_Supplementary_Statement_July_2017.pdf`
- `document_05_manuscript.jpg`, `document_06_manuscript.jpg`, `document_07_manuscript.jpg`
- `index.html`, `supporting.html`, `documentary-comparison.html`, `records-mobile.html`, `origami.css`, `origami.js`, `README.md`

Keep working links to source documents in companion repositories, without copying or transforming their content.

## Desired visitor experience

The site should feel like a serious, beautifully typeset documentary case library.

1. A calm, exceptionally clear landing page; no overwhelming wall of navigation.
2. Elegant routes to the fifty foundations, canonical essay, six sequences, six propositions, evidence comparison and other full-length documents.
3. A complete library/index where **every** document is discoverable, sortable or filtered by role, and accessible in its unabridged form.
4. A consistent reader: short breadcrumbs, title, document location, table of contents, source-file link and previous/next reading choices.
5. Thoughtful desktop and mobile layouts with generous whitespace, restrained typography, excellent reading width and minimal UI noise.
6. Highly usable expandable sections for large documents, while retaining a convenient **Expand all** control, working in-page anchors and discoverable full-text access.
7. A readable print layout and accessible keyboard and screen-reader operation.

The website may add short **navigation labels** or brief clearly identified **orientation descriptions** to help readers choose where to go. These must never replace original prose or masquerade as part of the authored documents.

## Technical requirements

- Semantic landmarks, correctly nested headings, skip links, keyboard operability, visible focus, adequate contrast and descriptive links.
- WCAG 2.2 AA-oriented design, including mobile touch targets, reflow, reduced motion support and clear state for expanded sections.
- Deep links and GitHub Pages-relative paths must work; avoid broken anchors, missing files and collapsed targets that cannot be opened.
- A robust fallback to the complete source Markdown if scripts or external renderers do not load.
- Do not add private identifiers or new personal data to public-facing pages, indexes, generated metadata or third-party services.
- Retain the current source files, their quotations, images, links and exact original contents.

## Hard acceptance conditions

- No modifications to the substantive source corpus.
- All original source files remain byte-identical.
- Every one of the fifty foundations, fifty-six examination matters and forty compiled records remains readable and navigable.
- The canonical working essay is included in the presentation alongside the other documents.
- Every document can be reached from a comprehensive index.
- Verify internal links, section anchors, mobile layout, desktop layout, keyboard use and print behavior.
- Show a before/after source-file manifest to demonstrate no text loss.
- Deliver changes on a separate reviewable branch / pull request where possible; do not replace source writing.

## What is expressly not requested

No adversarial reading, independent validation, clinical or legal merits review, factual reconstruction, changes to the argument, new evidentiary qualifications, reductions in length, stylistic rewriting of the prose or deletion of any material. Do not turn a presentation task into a substantive editorial task.

**Success means:** the very same complete case, every word retained, becomes exceptionally easy to find, navigate, read, cite and understand through its *presentation*.

This instruction file defines the limited scope of the presentation task. It does not itself constitute a redesign.
