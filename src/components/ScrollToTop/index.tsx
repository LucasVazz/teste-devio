import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { ChildrenProps } from '../../@types';

export default function ScrollToTop({ children }: ChildrenProps) {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
}
