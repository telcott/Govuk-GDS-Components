# HSE Design System Conversion Backlog

## Sprint 0 - Discovery and Setup
- [ ] Confirm HSE component coverage vs current LWC set (mapping validation)
- [ ] Define HSE token layer (typography, spacing, color, sizing)
- [ ] Decide on class naming strategy (HSE classes vs adapter layer)
- [ ] Document non-HSE components (custom vs deprecated)
- [ ] Establish accessibility baseline and QA checklist

## Sprint 1 - Core Form Components
- [ ] govTextInput: update markup to HSE Text input
- [ ] govTextInput: replace GOV.UK classes with HSE classes
- [ ] govTextInput: align hint + error message pattern to HSE guidance
- [ ] govTextInput: verify character count styles (if used)

- [ ] govTextArea: update markup to HSE Textarea
- [ ] govTextArea: replace GOV.UK classes with HSE classes
- [ ] govTextArea: align hint + error message pattern to HSE guidance

- [ ] govSelect: update markup to HSE Dropdown select
- [ ] govSelect: replace GOV.UK classes with HSE classes
- [ ] govSelect: align hint + error message pattern to HSE guidance

- [ ] govRadios: update markup to HSE Radios
- [ ] govRadios: replace GOV.UK classes with HSE classes
- [ ] govRadios: align hint + error message pattern to HSE guidance
- [ ] govRadios: confirm inline/small variants exist in HSE (or document custom)

- [ ] govCheckboxes: update markup to HSE Checkboxes
- [ ] govCheckboxes: replace GOV.UK classes with HSE classes
- [ ] govCheckboxes: align hint + error message pattern to HSE guidance
- [ ] govCheckboxes: confirm small checkbox variant exists in HSE (or document custom)

- [ ] govDate: update markup to HSE Date input
- [ ] govDate: replace GOV.UK classes with HSE classes
- [ ] govDate: align error handling to HSE guidance

- [ ] govFileUpload: update markup to HSE File upload
- [ ] govFileUpload: replace GOV.UK classes with HSE classes
- [ ] govFileUpload: align error handling to HSE guidance

- [ ] govFileUploadEnhanced: align UI to HSE File upload
- [ ] govFileUploadEnhanced: confirm advanced behavior is acceptable in HSE
- [ ] govFileUploadEnhanced: replace GOV.UK classes with HSE classes

- [ ] govFileUploadAdvanced: align UI to HSE File upload
- [ ] govFileUploadAdvanced: confirm advanced behavior is acceptable in HSE
- [ ] govFileUploadAdvanced: replace GOV.UK classes with HSE classes

## Sprint 2 - Validation and Error Patterns
- [ ] govErrorMessages: align with HSE Error summary pattern
- [ ] govErrorMessages: update summary heading and link styles
- [ ] govErrorMessages: verify focus behavior meets HSE guidance
- [ ] All form components: normalize error message markup

## Sprint 3 - Navigation and Structure
- [ ] govHeader: update to HSE Transactional header markup
- [ ] govHeader: replace GOV.UK classes with HSE classes
- [ ] govHeader: verify nav behavior on mobile matches HSE pattern

- [ ] govFooter: update to HSE Footer markup
- [ ] govFooter: replace GOV.UK classes with HSE classes

- [ ] govBackLink: update to HSE Back link markup
- [ ] govBackLink: replace GOV.UK classes with HSE classes

- [ ] govBreadcrumbs: update to HSE Breadcrumbs markup
- [ ] govBreadcrumbs: replace GOV.UK classes with HSE classes

- [ ] govSkipLink: update to HSE Skip link markup
- [ ] govSkipLink: replace GOV.UK classes with HSE classes

- [ ] govStartButton: update to HSE Buttons markup
- [ ] govStartButton: replace GOV.UK classes with HSE classes

- [ ] govNavigationButtons: update button styles to HSE Buttons
- [ ] govNavigationButtons: confirm variants align with HSE guidance

## Sprint 4 - Content Components
- [ ] govInsetText: update to HSE Inset text markup
- [ ] govInsetText: replace GOV.UK classes with HSE classes

- [ ] govDetails: update to HSE Details markup
- [ ] govDetails: replace GOV.UK classes with HSE classes

- [ ] govTable: update to HSE Table markup
- [ ] govTable: replace GOV.UK classes with HSE classes

- [ ] govDataTable: update to HSE Table markup for dynamic data
- [ ] govDataTable: replace GOV.UK classes with HSE classes

- [ ] govAccordion: replace with HSE Expander markup
- [ ] govAccordion: update open/close behavior to match HSE pattern

- [ ] govSummary: determine HSE equivalent or custom styling
- [ ] govSummary: if custom, align typography + spacing to HSE tokens

- [ ] govMarkupText: ensure output matches HSE content styles
- [ ] govMarkupTextEditor: ensure preview output matches HSE content styles

## Sprint 5 - Non-Standard or Custom Components
- [ ] govNotificationBanner: decide HSE equivalent or custom component
- [ ] govNotificationBanner: if custom, align styles to HSE tokens

- [ ] govPanel: decide HSE equivalent or custom component
- [ ] govPanel: if custom, align styles to HSE tokens

- [ ] govTag: decide HSE equivalent or custom component
- [ ] govTag: if custom, align styles to HSE tokens

- [ ] govPhaseBanner: decide HSE equivalent or custom component
- [ ] govPhaseBanner: if custom, align styles to HSE tokens

- [ ] govTabs: decide HSE equivalent or custom component
- [ ] govTabs: if custom, align styles to HSE tokens

- [ ] govCookieBanner: decide HSE equivalent or custom component
- [ ] govCookieBanner: if custom, align styles to HSE tokens

- [ ] govSeparator: replace with HSE spacing/token utilities (or custom)

## Sprint 6 - Supporting Components and Utilities
- [ ] govCSSProvider: update to load HSE CSS/token layer
- [ ] govHistoryManager: confirm no styling dependencies
- [ ] reactiveComponentListener: confirm no styling dependencies

## Sprint 7 - Preview, QA, and Docs
- [ ] hseComponentShowcase: update to reflect HSE styles and markup
- [ ] Add visual QA checklist per component
- [ ] Accessibility audit on all converted components
- [ ] Update component usage docs with HSE examples

## Component Coverage Checklist (All LWCs)
- [ ] govAccordion
- [ ] govBackLink
- [ ] govBreadcrumbs
- [ ] govCSSProvider
- [ ] govCheckboxes
- [ ] govCookieBanner
- [ ] govDataTable
- [ ] govDate
- [ ] govDetails
- [ ] govErrorMessages
- [ ] govFileUpload
- [ ] govFileUploadAdvanced
- [ ] govFileUploadEnhanced
- [ ] govFooter
- [ ] govHeader
- [ ] govHistoryManager
- [ ] govInsetText
- [ ] govMarkupText
- [ ] govMarkupTextEditor
- [ ] govNavigationButtons
- [ ] govNotificationBanner
- [ ] govPanel
- [ ] govPhaseBanner
- [ ] govRadios
- [ ] govSelect
- [ ] govSeparator
- [ ] govSkipLink
- [ ] govStartButton
- [ ] govSummary
- [ ] govTable
- [ ] govTabs
- [ ] govTag
- [ ] govTextArea
- [ ] govTextInput
- [ ] govWarningText
- [ ] hseComponentShowcase
- [ ] reactiveComponentListener
