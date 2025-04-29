export default function PdfViewer({ fileId }: { fileId: string }) {
    return (
        <iframe
            src={`https://drive.google.com/file/d/${fileId}/preview`}
            width="100%"
            height="100%"
            allow="autoplay"
        ></iframe>
    );
}
