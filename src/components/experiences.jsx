import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Experiences = props => {
  	const [currentImage, setCurrentImage] = useState(0);
  	const [isViewerOpen, setIsViewerOpen] = useState(false);

  	const data = [
    	{ thumb: "img/experiences/Tiriolo-tessitura-al-telaio.jpg", title: "Tiriolo Tessitura" },
    	{ thumb: "img/experiences/dirupo.jpg", title: "Dirupo" },
		{ thumb: "img/experiences/Tropea-chiesa-di.jpg", title: "Tropea Chiesa" },
		{ thumb: "img/experiences/landscape-4766291_1280.jpg", title: "Lorem Ipsum" },
		{ thumb: "img/experiences/bride-and-groom-768594_1280.jpg", title: "Bride and Groom" }
  	];

  	const images = data.map(obj => obj.thumb.replace("-small", "-large"));

  	const openImageViewer = useCallback(index => {
    	setCurrentImage(index);
    	setIsViewerOpen(true);
  	}, []);

  	const closeImageViewer = () => {
    	setCurrentImage(0);
    	setIsViewerOpen(false);
  	};

  	return (
    	<div id="experiences" className="text-center">
      		<div className="container">
        		<div className="section-title">
          			<h2>{props.data ? props.data.titleSection : 'Loading'}</h2>
          			<p>{props.data ? props.data.titleParagraph : 'Loading'}</p>
        		</div>
        		<div className="row">
          			<div className="experiences-items">
            			{data.map(({ title, thumb }, index) => (
              				<div key={index} onClick={() => openImageViewer(index)} className="col-sm-6 col-md-4 col-lg-4">
                				<div className="experiences-item cursor">
                  					<div className="hover-bg">
                    					<div className="hover-text">
                      						<h4>{title}</h4>
                    					</div>
                    					<img src={thumb} className="img-responsive" alt="Project Title" />{" "}
                  					</div>
                				</div>
              				</div>
            			))}
          			</div>
          			{isViewerOpen && (
            			<ImageViewer
							backgroundStyle={{ zIndex: 99999 }}
							currentIndex={currentImage}
							onClose={closeImageViewer}
							src={images}
            			/>
          			)}
        		</div>
				<div className="experiences-footer">
          			<h4>{props.data ? props.data.footerSection : 'Loading'}</h4>
					<p>{props.data ? props.data.footerParagraph : 'Loading'}</p>
        		</div>
      		</div>
    	</div>
  	);
};
