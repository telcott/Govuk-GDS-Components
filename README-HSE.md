# HSE Design System Conversion Project

**Converting GOV.UK Design System LWC Components to HSE Design System**

[![Sprint 0](https://img.shields.io/badge/Sprint%200-Complete-success)](SPRINT-0-SUMMARY.md)
[![Components](https://img.shields.io/badge/Components-38+-blue)](#component-inventory)
[![HSE Mapping](https://img.shields.io/badge/HSE%20Mapping-34%2F38-green)](#conversion-status)

## 🎯 Project Overview

This project converts a library of 38+ Lightning Web Components from GOV.UK Design System styling to HSE (Health Service Executive) Design System equivalents.

**Source:** GOV.UK Design System (UK Government)
**Target:** HSE Design System (Health Service Executive, Ireland)
**Platform:** Salesforce Lightning Web Components (LWC)
**Original Repo:** [GOV-UK-GDS-Components](https://github.com/SalesforceLabs/GOV-UK-GDS-Components)

## 📊 Current Status

- ✅ **Sprint 0 Complete** - Discovery, documentation, and mapping
- 🚀 **Sprint 1 Ready** - Core form components conversion
- 📋 **7 Sprints Planned** - Full conversion roadmap defined

## 🗂️ Key Documents

| Document | Purpose |
|----------|----------|
| [BACKLOG.md](BACKLOG.md) | Sprint-by-sprint conversion plan (7 sprints) |
| [HSE-DESIGN-SYSTEM.md](HSE-DESIGN-SYSTEM.md) | Complete HSE Design System reference |
| [SPRINT-0-SUMMARY.md](SPRINT-0-SUMMARY.md) | Sprint 0 accomplishments and metrics |
| [README.md](README.md) | Original GOV.UK component documentation |

## 🔄 Conversion Status

### ✅ Direct HSE Equivalents (34 components)

**Form Elements (12):**
Text input, Textarea, Dropdown select, Radios, Checkboxes, Date input, File upload, Buttons, Error handling, Fieldset, Hint text

**Navigation (13):**
Header (Transactional), Footer, Breadcrumbs, Back link, Skip link, Start button, Action link, Contents list, Pagination, plus HSE-specific navigation components

**Content Presentation (9):**
Table, Details, Inset text, Images, Care cards, Do and Don't lists, Review date

### 🔄 Name Changes Required (2 components)

- **Accordion** → **Expander**
- **Warning text** → **Warning callout**

### ⚠️ Missing HSE Equivalents (6 components)

Require custom implementation: Phase Banner, Panel, Tabs, Tag, Cookie Banner, Notification Banner

## 🎨 Design Changes

### Class Naming Pattern
```html
<!-- GOV.UK -->
<div class="govuk-form-group">
  <label class="govuk-label">Name</label>
  <input class="govuk-input" type="text">
</div>

<!-- HSE -->
<div class="hse-form-group">
  <label class="hse-label">Name</label>
  <input class="hse-input" type="text">
</div>
```

### Color Palette Changes

| Element | GOV.UK | HSE |
|---------|--------|-----|
| Primary Action | Green `#00703c` | **Purple `#5F3DC4`** |
| Focus State | Yellow `#ffdd00` | **Green `#73E6C2`** |
| Text | Black `#0b0c0c` | Dark Grey `#212b32` |
| Error | Red `#d4351c` | Red `#B30638` |

## 📋 Sprint Plan

### Sprint 0: Discovery ✅ COMPLETE
- HSE Design System documentation analyzed
- Component mappings created
- Class naming strategy confirmed
- Color palette extracted

### Sprint 1: Core Form Components 🚀 READY
**Duration:** 2 weeks | **Components:** 9 form inputs

### Sprint 2-7: Remaining Components
See [BACKLOG.md](BACKLOG.md) for detailed sprint breakdown

**Total Estimated Duration:** 10-12 weeks

## 🛠️ Technical Architecture

### Current (GOV.UK)
```
govCSSProvider → govukcss.css → All govXXX components
```

### Target (HSE)
```
hseCSSProvider → hsecss.css → All hseXXX components
```

## 📦 Installation

### Prerequisites
- Salesforce DX CLI
- Salesforce org with Lightning Experience
- Node.js and npm

### Deploy Components
```bash
# Deploy GOV.UK components (current)
sfdx force:source:deploy -p force-app/main/default/lwc

# Deploy HSE components (after conversion)
sfdx force:source:deploy -p force-app/main/default/lwc/hse*
```

## 🎨 Component Showcase

View all components in the **hseComponentShowcase** Lightning Web Component:
- Deploy the showcase component
- Add to a Lightning page in App Builder
- View categorized component examples with HSE mapping notes

## 📚 Resources

### HSE Design System
- **Components:** https://service-manual.hse.ie/design-system/components
- **Styles:** https://service-manual.hse.ie/design-system/styles/colour

### GOV.UK Design System
- **Main Site:** https://design-system.service.gov.uk/
- **Original Repo:** https://github.com/SalesforceLabs/GOV-UK-GDS-Components

## 🗺️ Roadmap

- [x] Sprint 0: Discovery and Planning (Complete)
- [ ] Sprint 1: Core Form Components (Ready)
- [ ] Sprint 2: Validation Patterns
- [ ] Sprint 3: Navigation Components
- [ ] Sprint 4: Content Components
- [ ] Sprint 5: Custom Components
- [ ] Sprint 6: Infrastructure
- [ ] Sprint 7: QA and Documentation

**Estimated Completion:** 12 weeks from Sprint 1 start

---

**Last Updated:** 2026-02-10 | **Version:** 1.0.0 (Sprint 0 Complete) | **Status:** 🟢 Ready for Sprint 1
