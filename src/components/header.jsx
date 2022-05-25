import Creek from "./../videos/Creek-334.mp4";

export const Header = (props) => {
  	return (
    	<header id='header'>
      		<div className='intro'>			  
        		<video 
          			autoPlay
          			loop
          			muted
          			src={Creek} 
          			style={{
            			objectFit: "cover",
						height:"100%",
						width: "100%"
          			}}
          			type="video/mp4"
        		/>
				<div className='overlay'>
					<div className='container position'>
						<div className='row'>
							<div className='col-md-8 col-md-offset-2 intro-text'>
								<h1>
									{props.data ? props.data.title : 'Loading'}
									<span></span>
								</h1>
								<p>{props.data ? props.data.paragraph : 'Loading'}</p>
								<a href='#features' className='btn btn-custom btn-lg page-scroll'>
									Learn More
								</a>{' '}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
  	)
}
