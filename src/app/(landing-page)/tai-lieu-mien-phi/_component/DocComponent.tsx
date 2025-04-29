import PdfViewer from "@/components/pdf/PdfViewer";

function DocComponent() {
    return (
        <div>
            <div className="w-[1080px] h-[500px]">
                <PdfViewer fileId={"1MWCNVjgjeUlgHHax5PRBfEKmoqB2fgkI"} />

                <div className="my-4">
                    <a
                        href={
                            "https://drive.google.com/uc?export=download&id=1MWCNVjgjeUlgHHax5PRBfEKmoqB2fgkI"
                        }
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DocComponent;
