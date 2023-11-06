// Exemplo simples de rota protegida.
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ChildrenProps } from '../../@types';

export function RequireAuth({ children }: ChildrenProps) {
	const data = JSON.parse(localStorage.getItem('data') || '{}');
	const isLogged = !!data;
	const location = useLocation();

	const result = !isLogged ? (
		<Navigate to="/login" state={{ from: location }} replace />
	) : (
		children
	);

	return result;
}
