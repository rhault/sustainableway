export const Navigation = (props) => {
	return (
		<nav id='menu' className='navbar navbar-default navbar-fixed-top'>
			<div className='container'>
				<div className='navbar-header'>
					<button
						type='button'
						className='navbar-toggle collapsed'
						data-toggle='collapse'
						data-target='#bs-example-navbar-collapse-1'
					>
						{' '}
						<span className='sr-only'>Toggle navigation</span>{' '}
						<span className='icon-bar'></span>{' '}
						<span className='icon-bar'></span>{' '}
						<span className='icon-bar'></span>{' '}
					</button>
					<a className='navbar-brand page-scroll' href='#page-top'>
						SUSTAINABLE WAY
					</a>{' '}
				</div>
				<div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
					<ul className='nav navbar-nav navbar-right'>
						<li>
							<a href='#experiences' className='page-scroll'> {props.data ? props.data[0] : 'Loading'} </a>
						</li>
						<li>
							<a href='#events' className='page-scroll'>{props.data ? props.data[1] : 'Loading'}</a>
						</li>
						<li>
							<a href='#city-fram' className='page-scroll'>{props.data ? props.data[2] : 'Loading'}</a>
						</li>
						<li>
							<a href='#guides' className='page-scroll'>{props.data ? props.data[3] : 'Loading'}</a>
						</li>
						<li>
							<a href='#partners' className='page-scroll'>{props.data ? props.data[4] : 'Loading'}</a>
						</li>
				
					</ul>
				</div>
			</div>
		</nav>
	)
}