import Trees from "./../videos/Trees-24540.mp4";

export const MiddleSection = (props) => {
  	return (
    	<div id='city-fram'>
      		<div className='intro'>
              	<video 
          			autoPlay
          			loop
          			muted
          			src={Trees} 
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
							<div className='col-md-6 col-md-offset-3 intro-text'>
								<h1>
									{props.data ? props.data.titleSection : 'loading...'}
									<span></span>
								</h1>
								<h2>{props.data ? props.data.subTitleSection : 'loading...'}</h2>
								<p>{props.data ? props.data.paragraph : 'loading...'}</p>
							</div>
						</div>
					</div>
				</div>
      		</div>
    	</div>
  	)
}
