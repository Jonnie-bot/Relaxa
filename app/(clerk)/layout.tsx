type ClerkLayoutProps = {
	children: React.ReactNode;
};

const ClerkLayout = ({ children }: ClerkLayoutProps) => {
	return (
		<div className="h-screen flex items-center justify-center">{children}</div>
	);
};
export default ClerkLayout;
