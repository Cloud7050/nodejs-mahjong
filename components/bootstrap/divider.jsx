/* [Exports] */
export default function Divider({ text }) {
	return <div className="py-3 d-flex align-items-center">
		<hr className="flex-grow-1" />
		<div className="badge bg-secondary">{ text }</div>
		<hr className="flex-grow-1" />
	</div>;
}
