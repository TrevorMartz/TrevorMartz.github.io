import GoogleFontLoader from 'react-google-font-loader';

export const Fonts = () => {
    return (
        <GoogleFontLoader
            fonts={[
                {
                    font: 'Roboto',
                    weights: [400, '400i'],
                },
                {
                    font: 'Roboto Mono',
                    weights: [400, 700],
                },
            ]}
        />
    );
};
