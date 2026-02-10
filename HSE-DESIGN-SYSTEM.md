# HSE Design System Documentation Summary

**Source**: https://service-manual.hse.ie/design-system
**Date Captured**: 2026-02-10

## Critical Finding: HTML Class Names

From the Text Input component page, I captured the actual HSE HTML structure:

```html
<div class="hse-form-group">
  <label class="hse-label" for="example">
    What is your name?
  </label>
  <input class="hse-input" id="example" name="example" type="text">
</div>
```

### Class Name Pattern: `hse-` prefix (NOT `govuk-`)

**GOV.UK → HSE Class Mappings:**
- `govuk-form-group` → `hse-form-group`
- `govuk-label` → `hse-label`
- `govuk-input` → `hse-input`
- `govuk-hint` → `hse-hint` (confirmed from docs)
- `govuk-error-message` → `hse-error-message` (confirmed)

## Component Inventory

### Form Elements (12 components)
1. **Buttons** ✓
2. **Checkboxes** ✓
3. **Date input** ✓
4. **Dropdown select** ✓
5. **Error message** ✓
6. **Error summary** ✓
7. **Fieldset** ✓
8. **File upload** ✓
9. **Hint text** ✓
10. **Radios** ✓
11. **Textarea** ✓
12. **Text input** ✓

### Content Presentation (9 components)
1. **Care cards** (HSE-specific, no GOV.UK equivalent)
2. **Details** ✓
3. **Do and Don't lists** (HSE-specific)
4. **Expander** (= GOV.UK Accordion)
5. **Images** ✓
6. **Inset text** ✓
7. **Review date** (HSE-specific)
8. **Table** ✓
9. **Warning callout** (= GOV.UK Warning text)

### Navigation (13 components)
1. **Action link** (HSE-specific)
2. **Back link** ✓
3. **Breadcrumbs** ✓
4. **Contents list** (HSE-specific)
5. **Curated hub navigation** (HSE-specific)
6. **Footer** ✓
7. **Links list** (HSE-specific)
8. **List panel** (HSE-specific)
9. **Next/previous pagination** ✓
10. **Page link** (HSE-specific)
11. **Page contents** (HSE-specific)
12. **Skip link** ✓
13. **Transactional header** ✓

## Component Mappings

### Direct 1:1 Mappings
| GOV.UK Component | HSE Component | Notes |
|------------------|---------------|-------|
| govTextInput | Text input | Class: `hse-input` |
| govTextArea | Textarea | Class: `hse-textarea` |
| govSelect | Dropdown select | Class: `hse-select` |
| govRadios | Radios | Class: `hse-radios` |
| govCheckboxes | Checkboxes | Class: `hse-checkboxes` |
| govDate | Date input | Class: `hse-date-input` |
| govFileUpload | File upload | Class: `hse-file-upload` |
| govErrorMessages | Error summary | Class: `hse-error-summary` |
| govButton/govStartButton | Buttons | Class: `hse-button` |
| govBackLink | Back link | Class: `hse-back-link` |
| govBreadcrumbs | Breadcrumbs | Class: `hse-breadcrumbs` |
| govSkipLink | Skip link | Class: `hse-skip-link` |
| govHeader | Transactional header | Class: `hse-header` |
| govFooter | Footer | Class: `hse-footer` |
| govDetails | Details | Class: `hse-details` |
| govInsetText | Inset text | Class: `hse-inset-text` |
| govTable/govDataTable | Table | Class: `hse-table` |

### Name Change Mappings
| GOV.UK Component | HSE Component | Notes |
|------------------|---------------|-------|
| govAccordion | **Expander** | Different name! |
| govWarningText | **Warning callout** | Different name! |

### MISSING in HSE (Need Custom Implementation)
| GOV.UK Component | HSE Equivalent | Action Required |
|------------------|----------------|------------------|
| govPhaseBanner | ❌ None | Custom implementation |
| govPanel | ❌ None | Custom implementation |
| govTabs | ❌ None | Custom implementation |
| govTag | ❌ None | Custom implementation |
| govCookieBanner | ❌ None | Custom implementation |
| govNotificationBanner | ❌ None | Custom implementation |

### HSE-Only Components (Not in GOV.UK)
1. Care cards
2. Do and Don't lists
3. Review date
4. Action link
5. Contents list
6. Curated hub navigation
7. Links list
8. List panel
9. Page link
10. Page contents

## Design Tokens (Sass Variables)

### Colors

**Text Colors:**
- `$hse-text-color` = `$color_hse-grey-900` = `#212b32`
- `$hse-secondary-text-color` = `$color_hse-grey-700` = `#455C68`

**Link Colors:**
- `$hse-link-color` = `$color_hse-blue` = `#0B55B7`
- `$hse-link-hover-color` = `$color_hse-purple-500` = `#782CC3`
- `$hse-link-visited-color` = `$color_hse-purple-700` = `#5F3DC4`

**Focus State:**
- `$hse-focus-color` = `$color_hse-green-300` = `#73E6C2`
- `$hse-focus-text-color` = `$color_hse-grey-900` = `#212B32`

**Borders:**
- `$hse-border-color` = `$color_hse-grey-300` = `#AEB7BD`

**Forms:**
- `$hse-error-color` = `$color_hse-red-500` = `#B30638`
- `$hse-form-border-color` = `$color_hse-grey-700` = `#455C68`
- `$hse-form-element-background-color` = `$color_hse-white-0` = `#FFF`

**Buttons (Primary):**
- `$hse-button-color` = `$color_hse-purple-700` = `#5F3DC4`
- `$hse-button-hover-color` = `$color_hse-purple-500` = `#782CC3`
- `$hse-button-text-color` = `$color_hse-white-0` = `#FFF`
- `$hse-button-disabled-color` = `$color_hse-grey-100` = `#D8DDE0`

**Buttons (Secondary):**
- `$hse-secondary-button-border-color` = `$color_hse-purple-700` = `#5F3DC4`
- `$hse-secondary-button-hover-color` = `$color_hse-purple-500` = `#782CC3`

### Color Palette

**HSE Green:**
- 900: `#00473E`
- 700: `#02594C`
- 500: `#02A78B`
- 300: `#73E6C2` (focus state)
- 100: `#80FFD8`
- 50: `#ECFBF6`

**Greyscale:**
- 900: `#212B32` (text)
- 700: `#455C68` (secondary text, form borders)
- 500: `#768692`
- 300: `#AEB7BD` (borders)
- 100: `#D8DDE0` (disabled)
- 50: `#F3F3F3` (page background)
- 0: `#FFF` (white)

**Purple (Primary UI color):**
- 700: `#5F3DC4` (buttons)
- 500: `#782CC3` (hover)
- 300: `#AA37E0`

**Blue (Links):**
- 900: `#042249`
- 800: `#07336E`
- 600: `#094492`
- 500: `#0B55B7` (link color)
- 300: `#6D99D4`
- 100: `#CEDDF1`
- 50: `#DBE7FF`

**Red (Error):**
- 500: `#B30638` (error color)

**Yellow (Warning):**
- 500: `#FFDE0E`

## Key Differences from GOV.UK

### Color Scheme
- **GOV.UK**: Uses green (#00703c) for primary actions, black (#0b0c0c) for text
- **HSE**: Uses purple (#5F3DC4) for primary actions, dark grey (#212b32) for text
- **HSE**: Green is used for focus states, not primary actions

### Typography
- Need to check typography page for font families (likely different from GOV.UK Transport)
- Page background: HSE uses `#F3F3F3` (light grey) vs GOV.UK's white

### Component Naming
- HSE uses "Expander" instead of "Accordion"
- HSE uses "Warning callout" instead of "Warning text"
- HSE uses "Dropdown select" instead of just "Select"

## Conversion Strategy Recommendations

### Phase 1: CSS Infrastructure
1. Create HSE static resource with CSS bundle
2. Update `govCSSProvider` to load HSE CSS
3. Create Sass variable mapping (GOV.UK tokens → HSE tokens)

### Phase 2: Simple Class Replacements
Components that only need class name updates:
- All form inputs (textInput, textArea, select, radios, checkboxes, date, fileUpload)
- Error messages/summary
- Navigation (backLink, breadcrumbs, skipLink)
- Content (details, insetText, table)

### Phase 3: Renamed Components
- Accordion → Expander (check if markup differs)
- Warning text → Warning callout (check if markup differs)

### Phase 4: Complex Components
- Header → Transactional header (mobile behavior)
- Footer (column layouts)
- Buttons (variant differences)

### Phase 5: Custom Components
Components missing in HSE (need custom implementation or alternative):
1. Phase Banner
2. Panel
3. Tabs
4. Tag
5. Cookie Banner
6. Notification Banner

## Next Steps

1. ✅ Access HSE Design System documentation
2. ✅ Identify component mappings
3. ✅ Extract color palette and design tokens
4. ⏳ Check typography styles (fonts, sizes)
5. ⏳ Find HSE CSS/asset CDN or download link
6. ⏳ Create detailed HTML markup comparison for each component
7. ⏳ Test proof-of-concept conversion (govSelect → HSE Dropdown select)

## Resources

- **Main Site**: https://service-manual.hse.ie/design-system
- **Components**: https://service-manual.hse.ie/design-system/components
- **Colors**: https://service-manual.hse.ie/design-system/styles/colour
- **Typography**: https://service-manual.hse.ie/design-system/styles/typography
- **Spacing**: https://service-manual.hse.ie/design-system/styles/spacing
- **Focus States**: https://service-manual.hse.ie/design-system/styles/focus-state
