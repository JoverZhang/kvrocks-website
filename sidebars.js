/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        'getting-started',
        'namespace',
        'cluster',
        'kvrocks-search',
        'replication',
        {
            "type": "category",
            "label": "Operation",
            collapsed: false,
            link: {
                type: 'generated-index',
            },
            items: [
                'backup',
                'how-to-profile-memory',
                'kvrocks-exporter',
                'kvrocks2redis',
            ]
        },
        {
            "type": "category",
            "label": "References",
            collapsed: false,
            link: {
                type: 'generated-index',
            },
            items: [
                'supported-commands',
                'info-sections',
            ]
        },
		'faq'
    ],
};

module.exports = sidebars;
