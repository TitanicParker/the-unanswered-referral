# Repository Completion Plan — The Unanswered Referral

**Status:** Working completion register  
**Created:** 18 November 2026  
**Intended recipient:** Independent litigator / counsel  
**Working principle:** One self-contained repository, one coherent orientation, a verifiable evidence bundle, and an audit showing how material knowledge passed—or failed to pass—between the participants. This repository is **not** intended to reproduce every research essay or the full history of the investigation.

## 1. Intended destination

**The finished `TitanicParker/the-unanswered-referral` repository will be the single link supplied to the litigator.** Its homepage should permit a new reader to:

1. Read the standalone sixth orientation essay, *The Unanswered Referral*.
2. Move into the six decisive propositions, the 25 essential understandings, and the 56 matters for examination, each in its own readable edition.
3. Examine a **recipient-and-knowledge audit** identifying what each relevant participant demonstrably knew, what they received, what they communicated, what was unavailable to them in the transmitted record, and what remains unproved.
4. Open a substantial, properly indexed **local copy of the documentary sources**, beginning with the existing 40-numbered-document collection, so the core materials are available without visiting or understanding the older Ms-Tansey repository.
5. Trace significant claims in the essay and supporting analysis to a particular locally available source, identifying whether the evidence is contemporaneous documentation, later testimony, professional interpretation, or inference.

The aim is **a finite, independently usable counsel handover**, not a sprawling new research archive. The older Ms-Tansey repository remains the provenance/source of an existing compilation but **must not be required as a second destination** to read and examine the case.

## 2. What is already present

- [x] `index.html` — essay-first GitHub Pages landing page.
- [x] `THE_UNANSWERED_REFERRAL.md` — sixth and final counsel orientation essay.
- [x] `SIX_DECISIVE_PROPOSITIONS_HOSPITAL_ANSWER.md` — six propositions, evidential combinations and hospital questions.
- [x] `THE_25_ESSENTIAL_UNDERSTANDINGS.md` — 25 interconnected findings and evidence map.
- [x] `FIFTY_SIX_MATTERS_FOR_EXAMINATION.md` — extracted 56-matter checklist with original numbering.
- [x] `supporting.html` — separate rendered reader for the 6 / 25 / 56.
- [x] Featured museum link to the project in `TitanicParker/TitanicParker.github.io`.

**Publication verification still required:** Confirm the Pages site is enabled, accessible to an external visitor, and correctly renders all four Markdown documents and all links. GitHub commits alone do not establish that Pages has deployed.

## 3. Outstanding workstream A — recipient-and-knowledge audit

**Priority:** High  
**Deliverable:** `RECIPIENT_AND_KNOWLEDGE_AUDIT.md` (plus a compact evidence matrix within it)  
**Status:** [ ] Not yet completed in this repository.

This audit should follow the **actual flow of information**, not merely repeat the chronology or imply that receipt equals understanding.

### Questions to resolve

- [ ] **Original GP → hospital:** What did the GP's 29 June 2017 referral actually ask? Who received the full letter, and what was copied into the hospital's shorter opening précis? What can and cannot be established about senior reviewers' access to the original referral?
- [ ] **Neurologist's own knowledge:** Separate the original handwritten interview, observed dystonic-looking gait/foot findings, medication and examination decisions, and the reported pre-discharge protest. Establish *when* each item was available to the clinician.
- [ ] **Clinician → completed account:** Compare handwritten history with typed clinical impression, including the patient attribution “in his own mind - markedly divorced,” the possible neuropathy category and the stated uncertainty. Distinguish drafting dates from transcription/final authorisation dates.
- [ ] **Reported bedside encounter:** Assess the patient's testimony, the early June and July 2025 emergence, the 10/11 July date discrepancy, the four potential medical-student witnesses and the clinician's reported response. Treat occurrence/content/response as distinct things requiring corroboration.
- [ ] **Hospital → GP:** Identify the exact electronic discharge message, complete consultant correspondence, send/receipt dates, and what clinical questions, follow-up ownership and patient objections were or were not conveyed. Compare what the GP independently knew before and after admission.
- [ ] **Hospital → movement-disorder nurse and subsequent clinicians:** Establish which final accounts, ward records or subsequent letters were actually available and used; do not assume every clinician read every document. Track opportunities for rediscovery or correction.
- [ ] **GP / podiatry → neurology:** Trace the 2018 medication-withdrawal foot observation, the 2019 GP's Parkinsonism–tone–clawing linkage, subsequent podiatry evidence, and the 2023 urgent referral and triage. Record what reached the specialist service and how it was answered.
- [ ] **Complaint → rebuttal → PAR/SIMT:** Establish what the 19 March 2025 complaint alleged, what the 25 March reply actually answered, and which source documents and disputed points reached the reviewers before the August/September decision. **The full PAR/evidence inventory has not yet been verified in the currently assembled material.**
- [ ] **Hospital and University enquiries:** Distinguish the 7 July 2025 hospital records request, 5 August reply, 24 November University enquiry, later correspondence, DPC route and 2026 supplementary statement. These are different information-provenance enquiries, not one generic complaint. Do not assume the University controlled a specific record or that any student note survives.
- [ ] **Responsibility for an unresolved question:** For each handover, ask who was expected to investigate the interaction between foot posture/tone, toe clawing, loading and pain; what follow-up was specified; and what mechanism would return the result to the GP or neurologist.

### Audit format — one row for each material transmission

| Date / window | Information or clinical question | Original source / author | Recipient or potential recipient | Proof of sending / receipt | What the transmitted version contained | What it omitted or qualified | Later action / effect | Evidence status / next test |
|---|---|---|---|---|---|---|---|---|
| Populate from primary records | | | | | | | | |

Use statuses such as **documented**, **corroborated**, **firsthand testimony**, **inference**, **receipt unknown**, and **source not obtained**. Distinguish *available to an organisation* from *personally known by a decision-maker*. A downstream omission can constrain clinical understanding without proving that anyone relied exclusively on the incomplete document.

### Definition of done for A

- [ ] Every material information transfer identifies the **exact source document and date**, or explicitly records that the receipt or transmission is unproved.
- [ ] The audit explains the three separate layers: **clinical responsibility, documentary responsibility, and transmission responsibility**.
- [ ] A one-page conclusion identifies the most important knowledge-transfer failures or unresolved points and the **five most decisive evidence requests**.
- [ ] It links back to the six propositions, 25 understandings and numbered source documents without duplicating their complete narratives.
- [ ] Any alleged University records, witness accounts or review papers not actually obtained are marked outstanding, never implied to exist.

## 4. Outstanding workstream B — a self-contained source-record bundle

**Priority:** High  
**Deliverable:** `records/` plus a source index and proof of integrity  
**Status:** [ ] Not yet copied into this repository.

### Proposed minimal approach

Start from the existing **40-numbered-document edition** in `TitanicParker/Ms-Tansey`, rather than manually recreating 40 files or writing a new summary of them. The existing publication is `Margaret_Tansey.html`, a large source-indexed HTML collection, with related manuscript images and a supplementary signed statement.

- [ ] Copy the 40-document HTML edition into `records/` using its original content intact (e.g. `records/Margaret_Tansey.html`) and preserve the original document numbers and anchors.
- [ ] Identify and copy **all relative assets actually required** by that HTML, including the three manuscript photographs `document_05_manuscript.jpg`, `document_06_manuscript.jpg`, `document_07_manuscript.jpg`, and any signed statement PDF and other required files. Verify relative paths from their new location. Do not assume the HTML is self-contained merely because it is one large file.
- [ ] Add `records/INDEX.md`: enumerate Documents 1–40, their titles, dates, source forms, local anchor URLs, known transcription/OCR qualifications, and whether original native scans are available.
- [ ] Add a **source-fidelity note** identifying the prior source compilation, retrieval date, and original-to-copy file hashes (SHA-256 where possible), without rewriting clinical language, renumbering records or merging patient testimony with contemporaneous medical notes.
- [ ] Inspect the copied HTML for missing image/PDF targets, external dependencies, malformed links and links back to the older reading room; adjust **navigational links only** in an explicitly identified derived reading copy if required, while preserving an untouched source copy.
- [ ] Provide a clearly visible **“Examine the 40 primary records”** link on the new homepage and a consistent route from the audit to the correct numbered records.

**Source status caveat:** The 40-document edition is a *compiled documentary presentation*, including source transcriptions, editorial markings and later statements; not every element is a native contemporaneous record. Keep those roles distinct. Do not claim that a transcript authenticates itself or that copies of the same underlying record independently corroborate one another.

### Definition of done for B

- [ ] A reader starting only at this repository can open each of Documents 1–40.
- [ ] The three handwritten page images and necessary supplementary materials open from the new repository.
- [ ] The audit and supporting essays cite **local source identifiers** (or a crosswalk that translates existing citations to local documents) so core evidential claims are testable without leaving the repository.
- [ ] The local bundle has a version/provenance statement and a missing-native-documents list.
- [ ] The compiled evidence presentation does not obscure the difference between contemporaneous records, retrospective patient accounts and editorial analysis.

## 5. Final integration and handover checks

**Deliverable:** A completed, readable site and one short `START_HERE.md` or `README.md` if needed.  
**Status:** [ ] Not yet completed.

- [ ] Homepage routes: **Essay → Six propositions → 25 understandings → 56 matters → Knowledge audit → 40-document evidence collection**. Readers can enter at any point and return easily.
- [ ] Add links to the knowledge audit and local source bundle once those documents exist; avoid broken or placeholder controls.
- [ ] Confirm every link and anchor resolves on GitHub Pages, including mobile navigation, source images, footnotes and print.
- [ ] Confirm 25 numbered K-items, six P-items, 56 investigative matters and 40 documentary source entries are present without omissions or duplicated numbering.
- [ ] Reconcile the orientation's source notes with actual local records via a **citation crosswalk**, rather than silently changing historical quotations or editorial conclusions.
- [ ] Check especially that the document distinguishes what happened in 2017, what was first reported in 2025, what was signed in 2026, and what was only established by later testing.
- [ ] Confirm the standalone handover contains **no dependence on Ms-Tansey's separate orientation essay** for interpreting the case.
- [ ] **Publication and privacy review:** Both repositories and GitHub Pages are public. Before sharing the one link, check whether any material intended for the litigator contains personal medical data, names of witnesses, contact details or other identifying material that should instead be shared through a restricted channel. Public hosting does not create lawyer–client confidentiality.
- [ ] Check the site's content with an external-visitor browser session, then record the link, revision/commit and a dated handover note.

## 6. What this repository is *not* meant to become

Do **not** add all exploratory essays, all repository histories, every possible allegation or repeated copies of the same account. Do not import the older Ms-Tansey orientation as a competing counsel narrative. Add new material only if it accomplishes one of the defined needs: **establish the information chain, document the evidence, or make the existing argument independently verifiable**.

## 7. Completion status

| Component | Status | Acceptance test |
|---|---|---|
| Orientation essay | **Present** | Complete and readable on the landing page |
| Six decisive propositions | **Present** | Six propositions accessible individually as a readable working document |
| 25 understandings | **Present** | All K01–K25 included with evidence relationships |
| 56 matters | **Present** | Numbering intact; 51 issues and five controlling questions |
| Recipient-and-knowledge audit | **To do** | Recipient/source matrix, accountability and evidence-status analysis |
| 40-document local bundle | **To do** | Complete, link-checked, source-faithful local edition |
| Citation crosswalk + provenance | **To do** | Important claims lead to local document numbers and files |
| Site integration + external/ privacy check | **To do** | One public-facing entry point functions and is appropriate to share |

### Completion rule

**The repository is ready for handover when a litigator can begin with the orientation, see the six propositions and their 25-point evidential structure, use the 56 matters as a checklist, examine the exact information-transfer chain, and verify each decisive factual assertion against a local, indexed record—without having to locate another repository.**

*Keep this document updated as tasks are completed; mark work complete only after verifying the corresponding source or published route.*
