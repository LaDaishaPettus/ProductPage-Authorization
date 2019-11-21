import React from 'react'
import '../styles.css';

const Home = (props) => {
	return (
		<>
			<div class="container mt-3">
				<div class="myCarousel" class="carousel slide" data-ride="carousel">
					<ul class="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
					</ul>

					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="homeimages/slideshow2.jpg" class="slideshow" alt="Living Room1" width="1100" height="500" />
						</div>
						<div class="carousel-item">
							<img src="homeimages/slideshow1.png" class="slideshow" alt="Living Room2" width="1100" height="500" />
						</div>
						<div class="carousel-item">
							<img src="homeimages/slideshow.jpg" class="slideshow" alt="Living Room3" width="1100" height="500" />
						</div>
					</div>

					<a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
						<span class="carousel-control-prev-icon"></span>
					</a>
					<a class="carousel-control-next" href="#myCarousel" data-slide="next">
						<span class="carousel-control-next-icon"></span>
					</a>
				</div>
			</div>

			<div class="about">
				<h2>About Us</h2>
			</div>

			<p>
				DecorandMore was founded in 2015 by La'Daisha Pettus. She's always had a
				passion for interior design. Through technology and innovation, Decor&More
				makes it possible for shoppers to quickly and easily find exactly what
				they want from a selection of more than 14 million items across home
				furnishings and décor. Committed to delighting its customers every step of
				the way, DecorandMore is reinventing the way people shop for their homes -
				from product discovery to final delivery.
  </p>
		</>
	)
}

export default Home