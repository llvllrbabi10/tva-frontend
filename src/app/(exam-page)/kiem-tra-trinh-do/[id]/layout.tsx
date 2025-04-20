export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="md:mt-[50px] mt-[70px]">{children}</div>
        </div>
    );
}
