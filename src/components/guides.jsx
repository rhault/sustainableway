export const Guides = (props) => {
	return (
		<div id='guides'>
			<div className='container'>
				<div className='section-title text-center'>
					<h2>{props.data ? props.data.title : 'Loading'}</h2>
				</div>
				<div className='row'>
					{props.data
						? props.data.guides.map((d, i) => (
							<div key={`${d.name}-${i}`} className='col-md-4'>
							<div className='guides'>
								{/* <div className='guides-image'>
								{' '}
								<img src={d.img} alt='' />{' '}
								</div> */}
								<div className='guides-content'>
								<p>"{d.text}"</p>
								<div className='guides-meta'> - {d.name} </div>
								</div>
							</div>
							</div>
						))
					: 'loading'}
				</div>
			</div>
		</div>
	)
}