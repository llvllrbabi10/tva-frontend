import { notFound } from "next/navigation";

import ExamComponent from "./_component/exam-component/ExamComponent";

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

    return <ExamComponent id={id} />;
}

export default page;

export function generateStaticParams() {
    return IDS.map((id) => ({ id }));
}
