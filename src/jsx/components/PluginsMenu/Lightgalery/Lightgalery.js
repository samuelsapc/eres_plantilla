import React,{Fragment} from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper} from 'simple-react-lightbox';
import PageTitle from "../../../layouts/PageTitle";
//image
import pic1 from '../../../../images/gallery/pic1.jpg';
import pic2 from '../../../../images/gallery/pic2.jpg';
import pic3 from '../../../../images/gallery/pic3.jpg';
import pic4 from '../../../../images/gallery/pic4.jpg';

class Lightgalery extends React.Component{
	render(){
		return(
			 <Fragment>
				 <PageTitle activeMenu="Light Gallery" motherMenu="Plugins" />
				<SimpleReactLightbox>
					<SRLWrapper>
						<div className="row">
							<div className="col-lg-12">
								<div className="card">
										<div className="card-header">
											<h4 className="card-title">Light Gallery</h4>
										</div>
										<div className="card-body">
											<div id="lightgallery" className="row">
												<a href={pic1} data-exthumbimage={pic1} data-src={pic1} className="col-lg-3 col-md-6 mb-4">
													<img src={pic1} className="w-100"/>
												</a>
												<a href={pic2} data-exthumbimage={pic2} data-src={pic2} className="col-lg-3 col-md-6 mb-4">
													<img src={pic2} className="w-100" />
												</a>
												<a href={pic3} data-exthumbimage={pic3} data-src={pic3} className="col-lg-3 col-md-6 mb-4">
													<img src={pic3} className="w-100" />
												</a>
												<a href={pic4} data-exthumbimage={pic4} data-src={pic4} className="col-lg-3 col-md-6 mb-4">
													<img src={pic4} className="w-100" />
												</a>
											</div>
										</div>
								</div>
								{ /* <!-- /# card --> */}
							</div>
						</div>
					</SRLWrapper>
				</SimpleReactLightbox>
			</Fragment>
		)
	}
}
export default Lightgalery;