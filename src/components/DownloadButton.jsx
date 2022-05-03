import { useCallback, useState } from 'react';
import { Button } from './Button';
import { CaptionText } from './Text';

export const DownloadButton = ({ label, filename, onError, loadBlob }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleClick = useCallback(() => {
        if (window) {
            setLoading(true);
            loadBlob()
                .then((blobData) => {
                    // Create blob link to download
                    const blob = new Blob([blobData.body]);
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', filename);

                    // Append to html page
                    if (document && document.body) {
                        document.body.appendChild(link);
                    }

                    // Force download
                    link.click();

                    setLoading(false);

                    // Clean up
                    if (link && link.parentNode) {
                        link.parentNode.removeChild(link);
                    }
                    window.URL.revokeObjectURL(blob);
                })
                .catch((error) => {
                    setLoading(false);
                    setError('Error downloading file');
                    if (onError) {
                        onError(error);
                    }
                });
        }
    }, [filename, onError, loadBlob]);

    return (
        <div>
            <Button label={label} loading={loading} onClick={handleClick} />
            {error && <CaptionText>{error}</CaptionText>}
        </div>
    );
};
