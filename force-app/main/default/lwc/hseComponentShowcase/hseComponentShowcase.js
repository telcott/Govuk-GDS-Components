import { LightningElement } from 'lwc';

export default class HseComponentShowcase extends LightningElement {
    // Component categories for organization
    categories = [
        {
            id: 'forms',
            title: 'Form Components',
            description: 'Input fields, checkboxes, radios, and other form controls',
            components: []
        },
        {
            id: 'navigation',
            title: 'Navigation Components',
            description: 'Headers, footers, breadcrumbs, and navigation elements',
            components: []
        },
        {
            id: 'content',
            title: 'Content Components',
            description: 'Accordions, tabs, tables, panels, and content display',
            components: []
        },
        {
            id: 'notifications',
            title: 'Notifications & Feedback',
            description: 'Banners, warnings, error messages, and alerts',
            components: []
        },
        {
            id: 'advanced',
            title: 'Advanced Components',
            description: 'File uploads, data tables, and complex interactions',
            components: []
        }
    ];

    activeCategory = 'forms';

    // Example data for components
    textInputExample = {
        label: 'Full name',
        hint: 'Enter your first and last name',
        value: ''
    };

    checkboxesExample = {
        legend: 'What are your interests?',
        hint: 'Select all that apply',
        options: [
            { label: 'Healthcare', value: 'healthcare', checked: false },
            { label: 'Technology', value: 'technology', checked: false },
            { label: 'Education', value: 'education', checked: false }
        ]
    };

    radiosExample = {
        legend: 'How would you like to be contacted?',
        options: [
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'phone' },
            { label: 'Text message', value: 'text' }
        ]
    };

    selectExample = {
        label: 'Select your region',
        options: [
            { label: 'Please select', value: '' },
            { label: 'Dublin', value: 'dublin' },
            { label: 'Cork', value: 'cork' },
            { label: 'Galway', value: 'galway' }
        ]
    };

    dateExample = {
        legend: 'Date of birth',
        hint: 'For example, 15 3 1984'
    };

    textAreaExample = {
        label: 'Additional information',
        hint: 'Please provide any additional details',
        rows: 5
    };

    accordionExample = {
        items: [
            {
                id: 'item1',
                heading: 'What is the HSE?',
                content: 'The Health Service Executive (HSE) is responsible for providing health and personal social services for everyone living in Ireland.'
            },
            {
                id: 'item2',
                heading: 'How do I register?',
                content: 'You can register online or visit your local HSE office.'
            },
            {
                id: 'item3',
                heading: 'What services are available?',
                content: 'We provide a wide range of healthcare services including primary care, hospital care, and specialist services.'
            }
        ]
    };

    tableExample = {
        caption: 'Service wait times',
        headers: ['Service', 'Location', 'Wait Time', 'Status'],
        rows: [
            ['GP Consultation', 'Dublin', '1-2 days', 'Available'],
            ['Specialist Referral', 'Cork', '2-3 weeks', 'Limited'],
            ['Emergency', 'Galway', 'Immediate', 'Available']
        ]
    };

    summaryLabels = ['Full name', 'Date of birth', 'Contact preference'];
    summaryValues = ['Maeve O\'Connor', '15 March 1984', 'Email'];
    summaryDestinations = ['#', '#', '#'];

    dataTableInputValue = [
        { service: 'GP Consultation', location: 'Dublin', wait: '1-2 days', status: 'Available' },
        { service: 'Specialist Referral', location: 'Cork', wait: '2-3 weeks', status: 'Limited' },
        { service: 'Emergency', location: 'Galway', wait: 'Immediate', status: 'Available' }
    ];

    markupEditorInputVariables = [
        {
            name: 'markupText',
            value: '<p class="govuk-body">This is editable markup text for preview.</p>'
        }
    ];

    exampleRecordId = '001000000000000AAA';

    handleCategoryChange(event) {
        this.activeCategory = event.target.dataset.category;
    }

    get isFormsActive() {
        return this.activeCategory === 'forms';
    }

    get isNavigationActive() {
        return this.activeCategory === 'navigation';
    }

    get isContentActive() {
        return this.activeCategory === 'content';
    }

    get isNotificationsActive() {
        return this.activeCategory === 'notifications';
    }

    get isAdvancedActive() {
        return this.activeCategory === 'advanced';
    }
}
