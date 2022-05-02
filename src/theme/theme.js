const widths = {
    mobileWidthNum: 480,
    tabletWidthNum: 768,
    maxWidthNum: 1440,
};

const breakpoints = {
    mobileWidth: `${widths.mobileWidthNum}px`,
    tabletWidth: `${widths.tabletWidthNum}px`,
    maxWidth: `${widths.maxWidthNum}px`,
};

//designed via https://material.io/design/color/the-color-system.html#tools-for-picking-colors

export const theme = {
    breakpoints,
    colors: {
        neutral50: '#FAFAFA',
        neutral100: '#F5F5F5',
        neutral200: '#EEEEEE',
        neutral300: '#E0E0E0',
        neutral400: '#BDBDBD',
        neutral500: '#9E9E9E',
        neutral600: '#757575',
        neutral700: '#616161',
        neutral800: '#424242',
        neutral900: '#212121',

        primary50: '#FFF3E0',
        primary100: '#FFE0B2',
        primary200: '#FFCC80',
        primary300: '#FFB74D',
        primary400: '#FFA726',
        primary500: '#FF9800',
        primary600: '#FB8C00',
        primary700: '#F57C00',
        primary800: '#EF6C00',
        primary900: '#E65100',

        complementary50: '#e2f4ff',
        complementary100: '#bae2ff',
        complementary200: '#88d0ff',
        complementary300: '#46bdff',
        complementary400: '#00adff',
        complementary500: '#009dff',
        complementary600: '#008eff',
        complementary700: '#0079ff',
        complementary800: '#0066ff',
        complementary900: '#2341e0',

        // secondary100: '#B42318',
        // secondary200: '#A21F16',
        // secondary300: '#901C14',
        // secondary400: '#7E1811',
        // secondary500: '#6C150F',
        // secondary600: '#5A110C',
        // secondary700: '#480E0A',
        // secondary800: '#360A07',
        // secondary900: '#240705',
    },
    widths,
};
