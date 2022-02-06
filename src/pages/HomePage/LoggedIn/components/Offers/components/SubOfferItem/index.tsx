interface SubOfferItemProps {
	label: string
	content: string
}

export const SubOfferItem = (props: SubOfferItemProps): JSX.Element => {
	const { label, content } = props
	return (
		<div className='sub-offer-item'>
			<div className='sub-offer-item-label'>{label}</div>
			<div className='sub-offer-item-content'>{content}</div>
		</div>
	)
}