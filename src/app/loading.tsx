function loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <div className="loader mb-4" />
            <h1 className="text-xl font-semibold text-gray-700">
                Đang tải dữ liệu...
            </h1>
        </div>
    );
}

export default loading;
