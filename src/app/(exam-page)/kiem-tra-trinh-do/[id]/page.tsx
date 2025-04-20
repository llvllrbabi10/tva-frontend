import { notFound } from "next/navigation";

import ExamComponent from "./_component/ExamComponent";

type PageProps = {
    params: Promise<{ id: string }>;
};

const IDS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

async function page({ params }: PageProps) {
    const _params = await params;
    const { id } = _params;

    if (!IDS.includes(id)) {
        notFound();
    }

    const data = await getExamData(id);

    return (
        <div>
            <ExamComponent examInformation={data} />
        </div>
    );
}

export default page;

async function getExamData(id: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/exams/entrance-test-${id}.json`
    );
    return res.json();
}

export function generateStaticParams() {
    return IDS.map((id) => ({ id }));
}
