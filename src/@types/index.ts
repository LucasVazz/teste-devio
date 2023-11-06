export interface ChildrenProps {
	children: JSX.Element[] | JSX.Element;
}

export interface ModalProps {
	showModal?: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProductProps {
	id: string;
	name: string;
	description: string;
	price: string;
	category?: string;
	image: string;
	status?: string;
	client?: string;
	isActive?: boolean;
	amount?: number;
	comment?: string;
	change?: number;
}

export interface OrderProps {
	id: string;
	client: string;
	comment?: string;
	payment: string;
	change?: number;
	total: number;
	status: string;
	name?: string;
	description?: string;
	image?: string;
}

export interface ProductsSliceProps {
	myOrder: (ProductProps | OrderProps)[];
	allOrders: (ProductProps | OrderProps)[][];
}

export interface PersistedReducerProps {
	persistedReducer: ProductsSliceProps;
}

export interface ButtonProps {
	color: string;
}
