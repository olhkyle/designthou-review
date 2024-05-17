import { ReactNode, useSyncExternalStore } from 'react';

interface ClientGateProps {
	clientState?: unknown;
	initialChildren?: ReactNode;
	children: ReactNode;
}

const emptySubscribe = () => () => {};

const ClientGate = ({ children }: ClientGateProps) => {
	const isServer = useSyncExternalStore(
		emptySubscribe,
		() => false,
		() => true,
	);

	return isServer ? null : children;
};

export default ClientGate;
