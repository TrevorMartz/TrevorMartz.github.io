const widths = {
    mobileWidthNum: 480,
    tabletWidthNum: 768,
    smallScreenWidthNum: 900,
    mediumScreenWidthNum: 1200,
    maxWidthNum: 1920,
};

const breakpoints = {
    mobileWidth: `${widths.mobileWidthNum}px`,
    tabletWidth: `${widths.tabletWidthNum}px`,
    smallScreenWidth: `${widths.smallScreenWidthNum}px`,
    mediumScreenWidth: `${widths.mediumScreenWidthNum}px`,
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

        shadow50: '#FAFAFA80',
        shadow100: '#F5F5F580',
        shadow200: '#EEEEEE80',
        shadow300: '#E0E0E080',
        shadow400: '#BDBDBD80',
        shadow500: '#9E9E9E80',
        shadow600: '#75757580',
        shadow700: '#61616180',
        shadow800: '#42424280',
        shadow900: '#21212180',

        primary50: '#ffebee',
        primary100: '#ffcdd2',
        primary200: '#ef9a9a',
        primary300: '#e57373',
        primary400: '#ef5350',
        primary500: '#f44336',
        primary600: '#e53935',
        primary700: '#d32f2f',
        primary800: '#c62828',
        primary900: '#b71c1c',

        complementary50: '#def2f3',
        complementary100: '#70cccd',
        complementary200: '#70cccd',
        complementary300: '#1cb7b7',
        complementary400: '#00a7a6',
        complementary500: '#009793',
        complementary600: '#008a86',
        complementary700: '#007a74',
        complementary800: '#006a64',
        complementary900: '#004e46',

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
