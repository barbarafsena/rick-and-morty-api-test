interface BackgroundWrapperProps {
    bgImagePath: string;
    children: React.ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ bgImagePath, children }) => {
    return (
        <div
            className="flex flex-col h-full"
            style={{
                backgroundImage: `url(${bgImagePath}`,
                minHeight: '100vh',
            }}
        >
            {children}
        </div>
    )
}

export default BackgroundWrapper;